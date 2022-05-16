import React from "react";
import logo from "../images/logo.png";
import login from "../images/Account.png";

export default function header() {
  return (
    <div>
      <div className="navbar border  border-gray">
        <nav className="mx-auto container my-5 ">
          <div className="logo">
            <img src={logo} alt="" srcset="" />
          </div>
          <div className="list-items  font-sans text-base  text-green font-medium">
            <ul className="flex gap-5 justify-end -mt-7 lg:visible invisible">
              <li className=" hover:text-black">Home</li>
              <li className=" hover:text-black">Detail</li>
              <li className="hover:text-black">Review</li>
              <li className=" hover:text-black">My Ticket</li>
              <li>
                <img src={login} className="w-7 h-7" alt="" srcset="" />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
