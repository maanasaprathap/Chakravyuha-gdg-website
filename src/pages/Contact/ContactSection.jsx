import React, { useEffect, useRef, useState } from "react";
import ContactDetails from "./contactDetails.json";
import StudentDetails from "./studentDetails";
import "./contact.css";

export default function ContactSection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className={inView ? "contact-section-in-view" : ""} style={{ overflow: "hidden" }}>
      <div className="con-title-main con-title-main-uppercase" style={{ fontSize: "1.8em", fontWeight: "bolder" }}>
        CONTACT US
      </div>
      <br />
      <div className="student-holder">
        <div className="con-title" style={{ fontSize: "1.3em", fontWeight: "bolder" }}>
          STAFF COORDINATORS
        </div>
        <div className="student-details">
          {ContactDetails["staff"].map((person, index) => (
            <StudentDetails
              key={index}
              name={person.name}
              phoneNo={person.contactNumber}
              index={index}
            />
          ))}
        </div>
      </div>
      <div className="student-holder">
        <div className="con-title" style={{ fontSize: "1.3em" }}>
          STUDENT COORDINATORS
        </div>
        <div className="student-details">
          {ContactDetails["students"].map((person, index) => (
            <StudentDetails
              key={index}
              name={person.name}
              phoneNo={person.contactNumber}
              index={index}
            />
          ))}
        </div>
      </div>
      <div className="student-holder">
        <div className="con-title" style={{ fontSize: "1.4em" }}>
          WEBSITE DEVELOPERS
        </div>
        <div className="student-details">
          {ContactDetails["WebsiteDevelopers"].map((person, index) => (
            <StudentDetails
              key={index}
              name={person.name}
              phoneNo={person.contactNumber}
              index={index}
            />
          ))}
        </div>
      </div>
      <div className="event-coordinator-holder">
        <div className="con-title" style={{ fontSize: "1.3em" }}>
          EVENT COORDINATORS
        </div>
        <div className="student-details">
          {ContactDetails["eventCoordinators"].map((person, index) => (
            <StudentDetails
              key={index}
              name={person.name}
              event={person.event}
              phoneNo={person.contactNumber}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
