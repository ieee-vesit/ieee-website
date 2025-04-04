import React from 'react';
import EventDescription from '../../components/Event_description/EventDescription';
import uiuxImage from '../../assets/UIUX.png';

const UIUXWorkshop = () => {
  return (
    <div className='mt-16'>
      <EventDescription 
        title="UI/UX Competition Workshop"
        subtitle="Presented by Women in Engineering & Friends of Figma"
        date="October 13-14, 2024"
        image={uiuxImage}
        description="The UI/UX Competition Workshop, organized by the Women in Engineering section and Friends of Figma, provided students with an opportunity to enhance their design skills and creativity. The competition challenged participants to design an app that helps balance work and personal life, with submissions due by October 13, 2024, and a presentation round on October 14, 2024. 

        Participants received hands-on experience using Figma, learning about UI/UX principles, usability, and design best practices. The top designs were selected for the final round, where a panel of industry experts evaluated them based on creativity, usability, and overall design quality. 

        The event was free for IEEE members, while non-IEEE members paid a nominal fee of ₹40. The competition was highly engaging, allowing students to showcase their skills and receive valuable feedback from judges and peers. With its mix of learning and practical experience, the workshop was a great success, inspiring students to refine their design expertise."
      />
    </div>
  );
};

export default UIUXWorkshop;
