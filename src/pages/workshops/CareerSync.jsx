import React from 'react';
import { useNavigate } from 'react-router-dom';
import EventDescription from '../../components/Event_description/EventDescription';
import careerSyncImage from '../../assets/careersync.webp';

const CareerSync = () => {
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
        title="CareerSync"
        subtitle="Bridging Academic Excellence with Industry Mastery"
        date="Wednesday, 23rd September 2026 | 1:30 PM | Open for all"
        image={careerSyncImage}
        hideRegister
        description={
          <>
            <p className="mb-5">CareerSync is IEEE VESIT’s flagship career development initiative engineered to align student talent with real-world industry standards. Tailored for aspiring engineers, research innovators, and design visionaries, CareerSync acts as a bridge between academic learning and professional execution.</p>
            <p className="mb-5">Through curated masterclasses, technical portfolio workshops, mock evaluations, and guest speaker sessions featuring leading domain specialists, CareerSync offers actionable guidance to help you navigate tech career pathways. Learn how to present complex technical projects, master modern development toolchains, build standout professional profiles, and transition seamlessly from campus to codebases.</p>
            <p className="mb-3"><strong>Key Focus:</strong> Career Mentorship, Portfolio &amp; Resume Building, Mock Interviews &amp; Industry Networking</p>
            <p className="mb-3"><strong>Who It’s For:</strong> Students looking to refine their professional identity, land top-tier opportunities, and stay ahead of evolving industry trends.</p>
          </>
        }
      />
    </div>
  );
};

export default CareerSync;
