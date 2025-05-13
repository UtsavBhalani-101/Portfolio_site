import React, { useState, useEffect, useRef } from 'react';
import './ScrollWheel.css';

const ScrollWheel = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const scrollThumbRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Get reference to the content element
    contentRef.current = document.querySelector('.content');
    
    const handleScroll = () => {
      if (contentRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
        const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
        setScrollPosition(scrollPercentage);
        setContentHeight(scrollHeight);
        setViewportHeight(clientHeight);
      }
    };

    // Initial calculation
    handleScroll();

    // Add scroll event listener
    if (contentRef.current) {
      contentRef.current.addEventListener('scroll', handleScroll);
    }

    // Cleanup
    return () => {
      if (contentRef.current) {
        contentRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartY(e.clientY);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !contentRef.current) return;
    
    const { scrollHeight, clientHeight } = contentRef.current;
    const scrollTrackHeight = document.querySelector('.scroll-track').clientHeight;
    const delta = e.clientY - startY;
    const deltaPercentage = delta / scrollTrackHeight;
    const newScrollTop = contentRef.current.scrollTop + deltaPercentage * scrollHeight;
    
    contentRef.current.scrollTop = newScrollTop;
    setStartY(e.clientY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleTrackClick = (e) => {
    if (!contentRef.current || e.target !== e.currentTarget) return;
    
    const { top, height } = e.currentTarget.getBoundingClientRect();
    const clickPosition = (e.clientY - top) / height;
    const { scrollHeight, clientHeight } = contentRef.current;
    
    contentRef.current.scrollTop = clickPosition * (scrollHeight - clientHeight);
  };

  // Calculate thumb height and position
  const thumbHeight = viewportHeight / contentHeight * 100;
  const thumbPosition = scrollPosition * (100 - thumbHeight);

  return (
    <div className="scroll-container">
      <div className="scroll-track" onClick={handleTrackClick}>
        <div 
          ref={scrollThumbRef}
          className="scroll-thumb"
          style={{ 
            height: `${Math.max(thumbHeight, 10)}%`,
            top: `${thumbPosition}%`
          }}
          onMouseDown={handleMouseDown}
        ></div>
      </div>
    </div>
  );
};

export default ScrollWheel;
