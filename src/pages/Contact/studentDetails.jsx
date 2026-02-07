import React from "react";
import "./studentDetails.css";
function StudentDetails({ name, event, phoneNo, index }) {
  return (
    <>
      <div
        id="studentDetails"
      >
        <div id="student-body">
          <p className="content-display">{name}</p>
          {event && <p className="content-display">Event: {event}</p>}
          <p className="content-display">
            Phone no:{" "}
            <a href={"tel:" + phoneNo} className="number">
              {phoneNo}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default StudentDetails;
