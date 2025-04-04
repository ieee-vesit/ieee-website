import React from 'react';
import EventDescription from '../../components/Event_description/EventDescription';
import nexIoTImage from '../../assets/NextIot.png';

const NexIoT = () => {
  return (
    <div className='mt-16'>
      <EventDescription 
        title="NEX-IOT"
        subtitle="Hands-on Microcontroller & IoT Workshop"
        date="March 19-20, 2025"
        image={nexIoTImage}
        description="IEEE-VESIT WIE, in collaboration with Tinkerer's Lab ECS, hosted NEX-IOT, a two-day workshop focused on microcontrollers and IoT applications. Students worked with the ESP8266 microcontroller, learning its architecture, interfacing, and programming.

        The hands-on projects included integrating the DHT11 sensor to transmit real-time temperature and humidity data to Blynk and implementing a radar system using ultrasonic sensors for real-time distance monitoring. 

        The workshop provided valuable practical experience, bridging the gap between theoretical IoT knowledge and real-world applications, preparing students for industry challenges in embedded systems and IoT."
      />
    </div>
  );
};

export default NexIoT;
