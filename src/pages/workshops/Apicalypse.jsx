import React from 'react';
import EventDescription from '../../components/Event_description/EventDescription';
import apicalypseImage from '../../assets/Apicalypse.png';

const APIcalypse = () => {
  return (
    <div className='mt-16'>
      <EventDescription 
        title="APIcalypse"
        subtitle="Mastering API Development & Security"
        date="January 8-9, 2025"
        image={apicalypseImage}
        description="The IEEE-VESIT API Workshop provided an in-depth exploration of API development, security, and best practices. Participants gained hands-on experience with RESTful APIs, authentication methods (OAuth, JWT), and security techniques.

        The interactive sessions included building and testing APIs using Postman, Flask/FastAPI, and Node.js. Industry experts shared insights on API performance optimization and real-world applications.

        With a well-paced and engaging format, the workshop equipped students with practical skills to build, secure, and optimize APIs for scalable applications, ensuring they are industry-ready."
      />
    </div>
  );
};

export default APIcalypse;
