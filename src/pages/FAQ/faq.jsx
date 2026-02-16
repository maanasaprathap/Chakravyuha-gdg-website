import React, { useState } from "react";
import "./faq.css";

const faqData = [
  {
    question: "What is Chakravyuha?",
    answer: "Chakravyuha is a grand inter-college TechFest where technology meets strategy. With 75+ events and 25+ hands-on workshops, it’s designed for builders, coders, creators, and problem-solvers."
  },
  {
    question: "When and where is the fest hosted?",
    answer: "Chakravyuha takes place on February 28 & March 1, 2026. The fest is hosted at the iconic MIT Campus (Madras Institute of Technology), Chromepet, Chennai."
  },
  {
    question: "Who can participate?",
    answer: "Students from any college, any department, and any year are welcome to participate. Whether you are a beginner or an expert, there is something for everyone."
  },
  {
    question: "What kind of events can I expect?",
    answer: "Expect everything from coding battles, robotics, AI/ML, and IoT to core engineering, design, business, and gaming challenges. Our 25+ workshops are conducted by industry experts and mentors."
  },
  {
    question: "What are the pass categories and pricing?",
    answer: "• Ultimate Pass (₹999): 12 events + 1 workshop. Best for the full experience.\n• Pro Pass (₹750): 9 events. Ideal for multi-domain enthusiasts.\n• Explorer Pass (₹499): 6 events. Perfect for first-time explorers."
  },
  {
    question: "How do I register?",
    answer: "All registrations are done online through this official website. Links are provided on individual event pages. Note that passes are non-transferable and non-refundable."
  },
  {
    question: "Are there prizes and certificates?",
    answer: "Yes! You can win cash prizes, goodies, and internships. Additionally, all participants receive official certificates to recognize their participation and achievements."
  },
  {
    question: "Is prior experience required?",
    answer: "Not at all. Many events are designed to test logic, creativity, and teamwork. Workshops are also structured to be beginner-friendly."
  },
  {
    question: "Can I participate in multiple events?",
    answer: "Absolutely. You can participate in as many events as you like, provided that the timings of the specific events do not clash."
  },
  {
    question: "Is accommodation provided for outstation participants?",
    answer: "Limited accommodation support is available on prior request. Please check the 'Accommodation' section under the Services tab for more details."
  },
  {
    question: "Whom should I contact for support?",
    answer: "Event-specific contacts are listed on each event page. For general queries, you can reach out through the 'Contact Us' section or our official social media handles."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">FAQs - Everything You Need to Know</h2>
        <p className="faq-subtitle">Find answers to common questions about the event, registration, and participation.</p>
        
        <div className="faq-list">
          {faqData.map((item, idx) => (
            <div
              className={`faq-item ${openIndex === idx ? "active" : ""}`}
              key={idx}
            >
              <button
                className="faq-question"
                onClick={() => handleToggle(idx)}
                aria-expanded={openIndex === idx}
              >
                <span>{item.question}</span>
                <span className="faq-icon">{openIndex === idx ? "−" : "+"}</span>
              </button>
              
              <div className="faq-answer-wrapper">
                <div className="faq-answer-content">
                  {item.answer.split("\n").map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;