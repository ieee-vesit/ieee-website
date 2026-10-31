import React from 'react';
import { useNavigate } from 'react-router-dom';
import EventDescription from '../../components/Event_description/EventDescription';
import apicalypseImage from '../../assets/apicalypse_26.webp';

const APIcalypse26 = () => {
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
        title="APIcalypse"
        subtitle="Mastering the Engine of Modern Web Architecture"
        date="21st - 22nd October 2026 | 2:30 PM onwards | Google Meet"
        image={apicalypseImage}
        hideRegister
        description={
          <>
            <p className="mb-5">Welcome to APIcalypse—the ultimate deep dive into building, scaling, and securing high-performance backend systems. Designed for tech enthusiasts and system architects alike, APIcalypse demystifies the core backbone of modern web platforms: robust Request Routing, Error Handling, and Distributed Microservices.</p>
            <p className="mb-5">In this intensive hands-on experience, participants explore low-level backend engineering, real-time diagnostic telemetry, and modern AI endpoint integrations. Whether you are debugging edge-case network bottlenecks, enforcing strict schema validation, or designing multi-tier resilient architectures, APIcalypse equips you with the first-principles knowledge needed to build systems that never crash under pressure.</p>
            <p className="mb-3"><strong>Key Focus:</strong> Backend Architecture, API Security, Request Lifecycles &amp; Real-Time Monitoring</p>
            <p className="mb-3"><strong>Who It’s For:</strong> Developers, System Design Enthusiasts, and Engineers ready to elevate their backend toolkit.</p>
          </>
        }
      />
    </div>
  );
};

export default APIcalypse26;
