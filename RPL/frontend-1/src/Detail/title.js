import React from "react";
import bantal from "../images/bantal.png";
import musik from "../images/musik.png";
import kabel from "../images/kabel.png";
import tv from "../images/tv.png";
import wifi from "../images/wifi.png";
import ac from "../images/ac.png";

export default function title() {
  return (
    <div>
      <div className="title">
        <div className="container mx-auto  mb-12">
          <div className="grid grid-cols-2 justify-center">
            <div className="descripton font-sans">
              <div className="title font-normal text-xl text-green">
                <h1>Tentang Bus Ini</h1>
              </div>
              <div className="title font-light text-base text-blackText mt-2">
                <p>
                  Bus ini merupakan salah satu dari armada bus milik agen bus{" "}
                  <br />
                  Pandhawa yang dikenal menjadi salah satu bus ternyaman di{" "}
                  <br />
                  Indonesia. Mereka memiliki berbagai kelas bus mulai dari kelas{" "}
                  <br />
                  ececutive hingga first class yang masing masing kelas
                  memberikan pelayanan memuaskan
                </p>
              </div>
            </div>
            <div className="facility  ">
              <div className="container mx-auto">
                <div className="title font-medium text-green text-xl text-center">
                  <h1>Fasilitas</h1>
                </div>
                <div className="grid grid-cols-3 place-items-center  ">
                  <div className="items ">
                    <div className="images ">
                      <img
                        src={bantal}
                        alt=""
                        srcset=""
                        className=" items-center"
                      />
                    </div>
                    <div className="titile text-green font-light text-base text-center">
                      <h1>Bantal & Selimut</h1>
                    </div>
                  </div>
                  <div className="items ">
                    <div className="images">
                      <img src={tv} alt="" srcset="" />
                    </div>
                    <div className="titile text-green font-light text-base text-center ">
                      <h1>Televisi</h1>
                    </div>
                  </div>
                  <div className="items ">
                    <div className="images">
                      <img src={wifi} alt="" srcset="" />
                    </div>
                    <div className="titile text-green font-light text-base text-center ">
                      <h1>Free Wifi</h1>
                    </div>
                  </div>
                  <div className="items ">
                    <div className="images">
                      <img src={ac} alt="" srcset="" />
                    </div>
                    <div className="titile text-green font-light text-base text-center ">
                      <h1>Full AC</h1>
                    </div>
                  </div>
                  <div className="items ">
                    <div className="images">
                      <img src={musik} alt="" srcset="" />
                    </div>
                    <div className="titile text-green font-light text-base text-center ">
                      <h1>Karaoke</h1>
                    </div>
                  </div>
                  <div className="items ">
                    <div className="images">
                      <img src={kabel} alt="" srcset="" />
                    </div>
                    <div className="titile text-green font-light text-base text-center ">
                      <h1>USB Charger</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
