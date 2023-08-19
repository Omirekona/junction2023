import React, { useState } from 'react';
import { GoogleMap, LoadScript, Polyline, Circle, InfoWindow, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '600px',
  zIndex: 1,
};

const center = {
  lat: 36.5,
  lng: 128
};

const path = [
  { lat: 37.5665, lng: 126.9780 },  // Seoul
  { lat: 36.3504, lng: 127.3845 },  // Daejeon
  { lat: 34.7604, lng: 127.6622 },  // Yeosu
  { lat: 35.1796, lng: 129.0756 }   // Busan
];

function MapsPage() {
  const [showSeoulInfo, setShowSeoulInfo] = useState(false);
  const [showBusanInfo, setShowBusanInfo] = useState(false);

  return (
    <LoadScript googleMapsApiKey="AIzaSyBFSNEVdf3LsfHZq-erCG1bZWUpBNj-xFQ">
      <GoogleMap
        style={{ width: '80%', height: '500px', borderRadius: '0 0 10px 10px'}}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={7}
        mapId="2b6d581e2141c1ff"
      >
        {/* {path.map((point, index) => (
              <Marker 
                key={index}
                position={point}
                icon={{
                  url: "https://maps.gs tatic.com/mapfiles/markers2/marker.png",
                  scaledSize: new window.google.maps.Size(40, 40)  // Adjust size as needed
                }}
              />
            ))} */}
            <Circle 
              center={path[0]}
              radius={50}
              options={{
                fillColor: "#FFFFFF",
                fillOpacity: 0.6,
                strokeWeight: 1,
                clickable: true
              }}
              onClick={() => setShowSeoulInfo(true)}
            />
             <Circle 
              center={path[1]}
              radius={5}
              options={{
                fillColor: "#FFFFFF",
                fillOpacity: 0.6,
                strokeWeight: 1,
                clickable: true
              }}
              onClick={() => setShowBusanInfo(true)} 
            />
            <Polyline
              path={path}
              options={{
                strokeColor: 'blue',
                strokeOpacity: 1,
                strokeWeight: 5,
                zIndex: 2,
                geodesic: false,
              }}
            />

        {showSeoulInfo && (
              <InfoWindow
                position={path[0]}
                onCloseClick={() => setShowSeoulInfo(false)}
              >
                <div>
                  <p>Sentence 1 here for Seoul.</p>
                  <p>Sentence 2 here for Seoul.</p>
                </div>
              </InfoWindow>
            )}
            {showBusanInfo && (
              <InfoWindow
                position={path[1]}
                onCloseClick={() => setShowBusanInfo(false)}
              >
                <div>
                  <p>Sentence 1 here for Busan.</p>
                  <p>Sentence 2 here for Busan.</p>
                </div>
              </InfoWindow>
            )}
      </GoogleMap>
    </LoadScript>
  );
}

export default MapsPage;
