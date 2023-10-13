import React from "react";
const Footer = () => {
  return (
    <div className="h-auto bg-amber-700 ">
      <div className="flex w-3/4 p-4 justify-center">
        <div className="m-4 text-white font-semibold">
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
          <p>Services</p>
        </div>
        <div className="flex my-4 mx-14 justify-between w-4/12 text-white flex-col">
          <p>FaceBook</p>
          <p>Instagram</p>
          <p>X (Twitter)</p>
          <p>LinkedIn</p>
        </div>
      </div>
      <div className="flex py-4 px-14 justify-center items-center w-full text-white flex-col">
        <p>&copy; ProNix Solutions, 2023</p>
      </div>
    </div>
  );
};

export default Footer;
