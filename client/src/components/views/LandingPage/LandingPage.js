import React, { useEffect } from "react";
import { FaCode } from "react-icons/fa";
import { API_URL, API_KEY } from "../../Config";
import teams from "../../../fetch/teams.json";
import venues from "../../../fetch/venues.json";

function LandingPage() {
  // useEffect(() => {
  //   fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log(response);
  //     });
  // }, []);
  console.log(teams);
  console.log(venues);

  return (
    <>
      <div className="app">
        {/* <FaCode style={{ fontSize: "4rem" }} /> */}
        <br />

        <span style={{ fontSize: "2rem" }}>
          Welcome to The Event Organization Portal!
        </span>
        <h3>Teams</h3>
        {teams.map((team) => {
          return (
            <>
              <li>
                <p>Name: {team.name}</p>
                <p>Availability: {team.status}</p>
                <p>Location: {team.location}</p>
                <p>Experience: {team.experience}</p>
              </li>
              <hr />
            </>
          );
        })}
        <br />
        <h3>Venues</h3>
        {venues.map((venue) => {
          return (
            <>
              <li>
                <p>Name: {venue.name}</p>
                <p>Availability: {venue.status}</p>
                <p>Location: {venue.location}</p>
                <p>Usage: {venue.usage}</p>
              </li>
              <hr />
            </>
          );
        })}
      </div>
    </>
  );
}

export default LandingPage;
