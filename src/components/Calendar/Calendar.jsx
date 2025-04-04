import React from "react";
import "./Calendar.css";

const Calendar = () => {
  const events = [
    { day: "13", title: "Crypto Chrome", time: "3:00 PM - 4:30 PM", link: "/vesit_tank" },
    { day: "21", title: "UI/UX Workshop Day 1", time: "3:00 PM - 4:30 PM", link: "/vesit_tank" },
    { day: "22", title: "UI/UX Workshop Day 2", time: "3:00 PM - 4:30 PM", link: "/vesit_tank" },
    { day: "12", title: "Campus Quest Day 1", time: "2:30 PM", link: "/vesit_tank" },
    { day: "13", title: "Campus Quest Day 2", time: "2:30 PM", link: "/vesit_tank" },
    { day: "5", title: "Technical Paper Presentation", time: "4:30 PM", link: "/vesit_tank" },
    { day: "16", title: "Flutter Workshop Day 1", time: "2:30 PM - 3:30 PM", link: "/vesit_tank" },
    { day: "17", title: "Flutter Workshop Day 2", time: "2:30 PM - 3:30 PM", link: "/vesit_tank" },
    { day: "08", title: "APIcalypse Day 1", time: "2:30 PM - 4:30 PM", link: "/vesit_tank" },
    { day: "09", title: "APIcalypse Day 2", time: "2:30 PM - 4:30 PM", link: "/vesit_tank" },
    { day: "28", title: "Machine Minds Day 1", time: "2:30 PM - 4:30 PM", link: "/vesit_tank" },
    { day: "29", title: "Machine Minds Day 2", time: "2:30 PM - 4:30 PM", link: "/vesit_tank" },
    { day: "22 February", title: "Financial Literacy Day 1", time: "1:00 PM", link: "/vesit_tank" }
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const startingDay = 6; // Starting from Saturday

  return (
    <div className="calendar-container">
      <h2 className="calendar-header">Our Events</h2>
      <div className="calendar-grid">
        {["30", "31", "13", "21", "22", "12", "13", "5", "16", "17", "08", "09", "28", "29", "22 February"].map((day, index) => {
          const event = events.find((e) => e.day === day);
          const dayOfWeek = daysOfWeek[(startingDay + index) % 7];
          
          return (
            <div 
              key={index} 
              className={`calendar-day ${event ? "has-event" : ""}`}
              onClick={() => event && (window.location.href = event.link)}
            >
              <div className="day-header">
                <span className="day-of-week">{dayOfWeek}</span>
                <span className="day-date">{day}</span>
              </div>
              {event && (
                <div className="event-details">
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-time">{event.time}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;