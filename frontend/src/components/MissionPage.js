import React from "react";
import "../App.css";

function MissionPage() {

  const places = [
    {
      name: "Haeundae Beach",
      description: "Haeundae Beach is Busan's most popular beach. It's famous for its wide sandy shore and beautiful views.",
      icon: "🏖" // Emoji as an example icon
    },
    {
      name: "Gwangalli Beach",
      description: "Gwangalli Beach offers a beautiful view of the city's Diamond Bridge. It's a perfect spot for evening relaxation.",
      icon: "🌉"
    },
    {
      name: "Gamcheon Culture Village",
      description: "Known as Busan's Santorini, this village is vibrant and colorful. It offers a maze of alleys, stairways, and houses built into the cliff-side.",
      icon: "🏘"
    },
    {
      name: "Taejongdae",
      description: "Taejongdae is a natural park with cliffs facing the ocean. It's a serene spot offering panoramic ocean views.",
      icon: "🌳"
    }
  ];

  return (
    <div className="mission-page">
      <h2 style={{marginBottom: '10px'}}>Travel Busan</h2>
      <div className="places-container">
        {places.map((place, index) => (
          <div key={index} className="place-box">
            <span className="place-icon">{place.icon}</span>
            <h3>{place.name}</h3>
            <p>{place.description}</p>
            {index < places.length - 1 && <div className="path"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MissionPage;
