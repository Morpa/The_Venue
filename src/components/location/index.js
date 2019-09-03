import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.6707756098494!2d-0.17956004891074562!3d51.50090877953405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876055b21867ad1%3A0x5efe9cee35da2fd9!2sRoyal%20Albert%20Hall!5e0!3m2!1spt-PT!2spt!4v1567522131372!5m2!1spt-PT!2spt"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
