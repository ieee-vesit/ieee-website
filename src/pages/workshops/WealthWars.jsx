import React from 'react';
import EventDescription from '../../components/Event_description/EventDescription';
import wealthWarsImage from '../../assets/WealthWars.png';

const WealthWars = () => {
  return (
    <div className='mt-16'>
      <EventDescription 
        title="Wealth Wars"
        subtitle="An Interactive Financial Literacy Challenge"
        date="March 25, 2025"
        image={wealthWarsImage}
        description="IEEE-VESIT conducted Wealth Wars, an interactive financial literacy event where students tested their investment strategies and financial decision-making skills through competitive simulations.

        Participants faced real-world financial scenarios, analyzing risks and resource allocation to maximize returns. Engaging discussions and dynamic challenges encouraged critical thinking and financial acumen.

        The event successfully promoted financial literacy in an engaging manner, with winning teams earning prizes. Wealth Wars reinforced the importance of strategic financial planning, making learning both informative and fun."
      />
    </div>
  );
};

export default WealthWars;
