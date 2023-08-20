import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Polyline,
  Circle,
  InfoWindow,
  Marker,
} from "@react-google-maps/api";
import axios from 'axios';

import { useNavigate } from "react-router-dom";

import { FIREBASE_AUTH } from "../config/firebase";
import Info from "./Info";

const containerStyle = {
  width: "100%",
  height: "600px",
  zIndex: 1,
};

const center = {
  lat: 35.1796, lng: 129.0756
};

const path = [
  { lat: 37.5665, lng: 126.978 }, // Seoul
  { lat: 36.3504, lng: 127.3845 }, // Daejeon
  { lat: 34.7604, lng: 127.6622 }, // Yeosu
  { lat: 35.1796, lng: 129.0756 }, // Busan
];

function MapsPage() {
  const [showSeoulInfo, setShowSeoulInfo] = useState(false);
  const [showBusanInfo, setShowBusanInfo] = useState(false);
  const [mapsLoaded, setMapsLoaded] = useState(false);
  const [activeInfoWindow, setActiveInfoWindow] = useState(null);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [pathData, setPathData] = useState([]);

  useEffect(() => {
    if (!FIREBASE_AUTH.currentUser) {
      navigate("/login");
      return;
    }
    FIREBASE_AUTH.currentUser.getIdToken().then(decodedToken => {
      const bearerToken = "Bearer " + decodedToken
      fetch("/api/route/new", {
        headers: {
          Authorization: bearerToken
        }
      }).then(response => {
        return response.json();
      }).then(response => {
        const routeInfo = JSON.parse(response.info);
        const mappedPath = routeInfo.map(item => ({ lat: item.LAT, lng: item.LNG, title: item.MAIN_TITLE, content: item.ITEMCNTNTS, img: item.MAIN_IMG_THUMB}));
        setPathData(mappedPath);
        setLoading(false);
      }).catch(error => {
        console.log("the error from the server: ", error)
      })
    }).catch(error => {
      console.log("the error: ", error)
    })
  }, []);

  if (loading) {
    return (
      <div>loading</div>
    )
  }

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBFSNEVdf3LsfHZq-erCG1bZWUpBNj-xFQ"
      mapIds={["2b6d581e2141c1ff"]}
      onLoad={() => setMapsLoaded(true)}
    >
       {mapsLoaded && (
      <GoogleMap
        style={{ width: "80%", height: "500px", borderRadius: "0 0 10px 10px" }}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}
        options={{
          mapId: "2b6d581e2141c1ff",
        }}
        mapId="2b6d581e2141c1ff"
      >
        {pathData && pathData.map((point, index) => (
            <>
              <Marker 
                key={`marker-${index}`}
                position={point}
                icon={{
                  url: "https://maps.gstatic.com/mapfiles/markers2/marker.png",
                  scaledSize: new window.google.maps.Size(40, 40)  // Adjust size as needed
                }}
              />
              <Circle
                key={`circle-${index}`}
                center={point}
                radius={2000} // Adjust as needed
                options={{
                  fillColor: "#FFFFFF",
                  fillOpacity: 0.6,
                  strokeWeight: 1,
                  clickable: true,
                }}
                onClick={() => setActiveInfoWindow(index)}
              />
            </>
          ))}
        <Polyline
          path={pathData}
          options={{
            strokeColor: "blue",
            strokeOpacity: 1,
            strokeWeight: 5,
            zIndex: 2,
            geodesic: false,
          }}
        />
        {/* {showBusanInfo && (
          <InfoWindow
            position={path[1]}
            onCloseClick={() => setShowBusanInfo(false)}
          >
            <Info name={"Busan"} info={"Busan is a city in South Korea."} />
          </InfoWindow>

        )} */}
      {pathData && pathData.map((point, index) => (
            activeInfoWindow === index && (
              <InfoWindow
                key={`info-${index}`}
                position={point}
                onCloseClick={() => setActiveInfoWindow(null)}
              >
                <Info name={point.title} info={point.content} img={point.img} />
              </InfoWindow>
            )
          ))}
      </GoogleMap>
        )}
    </LoadScript>
  );
}

export default MapsPage;
