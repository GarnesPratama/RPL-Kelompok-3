import React from "react";
import featured from "../images/featured-3.png";
import featured1 from "../images/pandawa.png";
import featured2 from "../images/pandawa-1.png";

export default function placeholder() {
  return (
    <div>
      <div className="placeholder">
        <div className="container mx-auto">
          <div className="list flex mt-6">
            <ol className="flex gap-2">
              <li className="text-blackText font-semibold text-base">Home</li>
              <li>
                <span>/</span>
              </li>
              <li className="text-green font-semibold text-base">
                Pemesanan Tiket
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="items container mx-auto mt-2 mb-16">
        <div className="judul text-center font-sans">
          <div className="title text-green font-semibold text-3xl">
            <h1>Pandhawa 87</h1>
          </div>
          <div className="isi text-blackText font-regular text-xl">
            <p>Semarang - Jakarta</p>
          </div>
        </div>
        <div className="grid grid-cols-12 grid-rows-2 gap-4 mt-12">
          <div className="col-span-7 row-span-2">
            <div className="images w-full h-full rounded-2xl overflow-hidden">
              <img
                src={featured}
                alt=""
                srcset=""
                className="w-full h-full object-cover overflow-hidden"
              />
            </div>
          </div>
          <div className="col-span-5 row-span-1">
            <div className="images w-full h-full">
              <img
                src={featured1}
                alt=""
                srcset=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-5 row-span-1">
            <div className="images w-full h-full">
              <img
                src={featured2}
                alt=""
                srcset=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
