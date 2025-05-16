import React, { useState } from "react";

const Accordion = ({ title, content, open = false }) => {
  const [isActive, setIsActive] = useState(open);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className="font-[600] opacity-75">{title}</div>
        <div className="font-[600] opacity-75">{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div className="accordion-content font-[500] opacity-50">{content}</div>
      )}
    </div>
  );
};

export default Accordion;
