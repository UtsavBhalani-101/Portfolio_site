import React from 'react';
import './Testimonials.css';

// Using better placeholder images
const person1 = 'https://via.placeholder.com/80x80/f5f5f5/333333?text=SJ';
const person2 = 'https://via.placeholder.com/80x80/f0f0f0/333333?text=MB';
const person3 = 'https://via.placeholder.com/80x80/f8f8f8/333333?text=EW';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at DesignHub",
      image: person1,
      text: "Working with Alex was a game-changer for our company. He completely transformed our website, making it not only visually stunning but also incredibly user-friendly. Our conversion rates have increased by 40% since the redesign. Alex has an exceptional ability to understand client needs and translate them into effective designs.",
      date: "June 12, 2023"
    },
    {
      name: "Michael Brown",
      role: "Product Manager at TechCorp",
      image: person2,
      text: "Alex is one of the most talented designers I've worked with in my 15-year career. He has a unique ability to create interfaces that are both beautiful and functional. His attention to detail and user-centered approach resulted in a product that our users absolutely love. The positive feedback we've received has been overwhelming.",
      date: "April 28, 2023"
    },
    {
      name: "Emma Wilson",
      role: "Marketing Director at CreativeAgency",
      image: person3,
      text: "I've collaborated with Alex on multiple projects over the past three years, and each experience has been exceptional. His design work consistently exceeds expectations, and his content creation skills add tremendous value to every project. Alex has a rare combination of creative vision and technical expertise that makes him an invaluable partner.",
      date: "May 15, 2023"
    }
  ];

  return (
    <section className="testimonials-section">
      <h2 className="section-title">TESTIMONIALS</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-header">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <div className="testimonial-author">
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            </div>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <div className="testimonial-date">{testimonial.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
