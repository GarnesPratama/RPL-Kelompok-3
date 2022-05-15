import React from "react";
import logo from "../images/logo.png";

export default function footer() {
  return (
    <div>
      <div className="footer border-2 border-gray">
        <div className="container mx-auto">
          <div className="grid grid-flow-col justify-between">
            <div className="logo mt-16">
              <img src={logo} alt="" srcset="" />
            </div>
            <div className="service mt-12">
              <div className="judul font-sans font-normal text-xl text-blackText">
                <h1>Layanan Pelanggan</h1>
              </div>
              <div className="isi font-sans font-light text-base mt-6 text-grayText">
                <p>support@haryanti.id</p>
                <p className=" mt-2">021 - 2208 - 1996</p>
                <p className=" mt-2 mb-12">Haryanti, Karawang, Indonesia</p>
              </div>
            </div>
            <div className="contact mt-12">
              <div className="judul font-sans font-normal text-xl text-blackText">
                <h1>Explore Us</h1>
              </div>
              <div className="isi font-sans font-light text-base mt-6 text-grayText">
                <p>Our Careers</p>
                <p className=" mt-2">Privacy</p>
                <p className=" mt-2 mb-12">Terms & Conditions</p>
              </div>
            </div>
          </div>
          <div className="contactus text-center font-sans text-grayText font-light text-base mb-7">
            <h1>Copyright 2022 • All rights reserved • Haryanti</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
