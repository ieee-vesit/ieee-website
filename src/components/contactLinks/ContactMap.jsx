import React from 'react';
import "./ContactMap.css";

const ContactMap = () => {
  return (
    <div className="comp">

      <div className="map-container mt-8">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60342.73921384935!2d72.88889!3d19.04521!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8add9569a29%3A0xb7ad04bf9a389df7!2sVivekanand%20Education%20Society's%20Institute%20Of%20Technology%20(VESIT)!5e0!3m2!1sen!2sin!4v1737372837624!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="VESIT Location"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMap;
