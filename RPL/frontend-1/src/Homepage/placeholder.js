import React from "react";
import image from "../images/banner.png";

export default function placeholder() {
  return (
    <div>
      <section className="placeholder">
        <div className="container mx-auto lg:flex gap-32 lg:justify-center grid place-content-center">
          <div className="images mt-24 lg:mb-16 mb-0 lg:place-self-left place-self-center  ">
            <img
              src={image}
              alt=""
              srcset=""
              className=" lg:w-full lg:h-full lg:justify-start"
            />
          </div>
          <div className="decription mb-52">
            <div className="judul text-2xl text-green font-sans font-semibold lg:mt-52 -mt-20  ">
              <h1 className=" lg:text-left text-center">Tiket Bus Hariyanti</h1>
            </div>
            <div className="isi text-xl text-blackText font-sans font-light mt-2">
              <h1 className=" lg:text-left text-center">
                Mengapa memilih kami? <br />
                Kami menyediakan tiket bus ke seluruh <br />
                Indonesia dengan berbagai tujuan dan telah bekerja sama dengan{" "}
                <br />
                lebih dari 10.000 agen bus ternama di Indonesia
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
