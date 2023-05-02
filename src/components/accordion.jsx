import React, { useState } from 'react';

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleAccordion() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="accordion">
      <h6 onClick={toggleAccordion}>
        {title}
        <span className={`arrow ${isOpen ? 'arrow-down' : ''}`}>▼</span>
      </h6>
      {isOpen && <div>{children}</div>}
    </div>
  );
}

export default Accordion;
