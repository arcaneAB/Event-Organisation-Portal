import React, { useEffect } from "react";
import { FaCode } from "react-icons/fa";
import { API_URL, API_KEY } from "../../Config";
import venues from "../../../fetch/venues.json";

function LandingPage() {

  return (
    <>
      <div className="app">
        <br />

        <span style={{ fontSize: "2rem" }}>
          Welcome to The Event Organization Portal!
        </span>
        <tr>
          {/* <th style={{ textAlign: "left" }}>Teams</th> */}
          {/* <th style={{ textAlign: "left" }}>Venues</th> */}
        </tr>

        {/* <tr> */}
          
          {/* <td>
            {venues.map((venue) => {
              return (
                <ul>
                  <li>Name: {venue.name}</li>
                  <li>Availability: {venue.status}</li>
                  <li>Location: {venue.location}</li>
                  <li>Usage: {venue.usage}</li>
                </ul>
              );
            })}
          </td> */}
        {/* </tr> */}
      </div>
    </>
  );
}

export default LandingPage;
