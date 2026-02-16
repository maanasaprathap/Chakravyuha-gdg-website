import React from "react";

const TimeDisplay = ({ dataNumber, timeFormat }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            {/* VARIABLE / LABEL ON TOP */}
            <div
                style={{
                    fontSize: "1.25rem", // smaller than number
                    fontWeight: 700,
                    marginBottom: "6px",
                    textAlign: "center",
                    color: "white", // keep it visible
                }}
            >
                {timeFormat}
            </div>

            {/* NUMBER BELOW IN OVAL */}
            <div
                style={{
                    borderRadius: "9999px", // pill / oval
                    padding: "12px 20px",
                    fontSize: "3rem", // big number
                    fontWeight: 900,
                    textAlign: "center",
                    color: "white", // keep number color
                    background: "rgba(0,0,0,0.3)", // dark translucent oval
                    minWidth: "80px",
                    boxShadow: "-2px 2px 4px rgba(0,0,0,0.25)",
                }}
            >
                {dataNumber}
            </div>
        </div>
    );
};

export default TimeDisplay;