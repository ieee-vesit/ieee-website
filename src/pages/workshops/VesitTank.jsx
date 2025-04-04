import React from 'react';
import EventDescription from '../../components/Event_description/EventDescription';
import eventImage from '../../assets/event.png';

const VesitTank = () => {
  return (
    <div className='mt-16'>
      <EventDescription 
        title="VESIT Tank"
        subtitle="Women in Engineering Post-Praxis event"
        date="8th March 2023"
        image={eventImage}
        description="VESIT-Tank was designed to ignite entrepreneurial passion among students by providing hands-on experience in pitching and refining business ideas. The event encouraged collaboration, mentorship, and personal growth while helping participants tackle real-world business challenges.

Students presented their ideas to a panel of industry experts, receiving valuable feedback to enhance their concepts. This interactive session provided practical insights into market understanding and business viability.

The event helped participants develop key entrepreneurial skills such as idea presentation, communication, and critical thinking, making it a transformative experience."
      />
    </div>
  );
};

export default VesitTank;
