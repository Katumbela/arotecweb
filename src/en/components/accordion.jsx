import React, { useState } from 'react';

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleAccordion() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="accordion">
      <b onClick={toggleAccordion}>
        {title}
        <span className={`arrow ${isOpen ? 'arrow-down' : ''}`}>▼</span>
      </b> 
      {isOpen && <div className='mt-2'>{children}</div>}
    </div>
  );
}

export default Accordion;
