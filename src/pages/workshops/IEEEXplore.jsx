import React from 'react';
import { useNavigate } from 'react-router-dom';
import EventDescription from '../../components/Event_description/EventDescription';
import xploreImage from '../../assets/ieee_xplore.webp';

const IEEEXplore = () => {
  const navigate = useNavigate();

  return (
    <div className='mt-16'>
      <button
        onClick={() => navigate(-1)}
        className="ml-4 mb-4 mt-5 px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300 transition duration-200"
      >
        ←
      </button>
      <EventDescription
        title="Workshop on IEEE Xplore Digital Library"
        subtitle="Unlocking global research, academic publishing, and technical innovation"
        date="Wednesday, 14th October 2026 | 11:30 AM onwards | Auditorium"
        image={xploreImage}
        hideRegister
        imageFit="contain"
        description={
          <>
            <p className="mb-5">IEEE Xplore serves as IEEE VESIT’s gateway to the world’s leading digital repository of engineering and computer science research. Designed to foster a culture of research and academic inquiry, this workshop and orientation series equips students with the skills needed to navigate, analyze, and publish high-impact scholarly work.</p>
            <p className="mb-5">Participants learn effective literature-review strategies, keyword-based research queries, paper citation standards, and the step-by-step process of preparing manuscripts for peer-reviewed IEEE international conferences and journals. Beyond research discovery, the session provides practical insights into transforming project ideas into publishable papers, navigating open-access standards, and leveraging academic citations to build a strong engineering profile.</p>
            <p className="mb-3"><strong>Key Focus:</strong> Scholarly Research, Literature Review Strategies, Technical Paper Writing &amp; Publishing Standards</p>
            <p className="mb-3"><strong>Who It’s For:</strong> Undergraduate researchers, final-year project teams, and students seeking to publish their technical work globally.</p>
            <p className="mb-3"><strong>Speaker:</strong> Janak Gudla, Customer Training Specialist, EBSCO Information Services</p>
            <p className="mb-3"><strong>Organised by:</strong> Institution’s Innovation Council (IIC), under the guidance of the Internal Quality Assurance Cell (IQAC), in association with IEEE-VESIT and the Library.</p>
          </>
        }
      />
    </div>
  );
};

export default IEEEXplore;
