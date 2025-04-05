import React from 'react';
import EventDescription from '../../components/Event_description/EventDescription';
import uiuxImage from '../../assets/UIUX.png';

const UIUXCompetition = () => {
  return (
    <div className='mt-16'>
      <EventDescription 
        title="UI/UX Competition"
        subtitle="Turning Design Skills into Reality"
        date="Organized by WIE-IEEE VESIT"
        image={uiuxImage}
        description="As a direct successor to our UI/UX Workshop, the UI/UX Competition challenged students to apply their newly learned skills into building creative and user-friendly app prototypes using Figma.

        Organized by the Women in Engineering (WIE) department of IEEE VESIT, the competition featured a thoughtful problem statement — 'Women's Engineering Network.' Participants showcased their unique ideas and aesthetic design skills while addressing real-world needs.

        The judging panel, consisting of experienced women from the engineering field, evaluated the designs based on creativity, practicality, and implementation potential. Sponsored by FOF, the event not only offered exciting prizes to winners but also provided a great platform for participants to expand their design portfolios and gain valuable feedback from industry-oriented judges."
      />
    </div>
  );
};

export default UIUXCompetition;
