import React from "react";
import featured from "../images/featured.png";
import featured1 from "../images/featured-1.png";
import featured2 from "../images/featured-2.png";
import featured3 from "../images/featured-3.png";
import featured4 from "../images/featured-4.png";
import { Link } from "react-router-dom";

export default function favorit() {
  return (
    <div>
      <div className="container mx-auto mb-20">
        <div className="judul font-sans font-medium text-2xl text-green mb-5">
          <h1>Agen Bus Terfavorit Bulan Ini</h1>
        </div>
        <div className=" grid lg:grid-cols-12 lg:grid-rows-2 gap-4 ">
          <div className="lg:col-span-4 lg:row-span-2 ">
            <div className="images w-full h-full relative rounded-2xl overflow-hidden">
              <img
                src={featured}
                alt=""
                srcset=""
                className="w-full h-full object-cover max-h-80 lg:max-h-full"
              />
              <div className="title absolute text-white bottom-5 right-8">
                <h1 className=" font-sans font-medium text-2xl">Sinar jaya</h1>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 lg:row-span-1 relative rounded-2xl overflow-hidden">
            <div className="images">
              <img
                src={featured1}
                alt=""
                srcset=""
                className="w-full h-full object-cover  max-h-80 lg:max-h-full "
              />
            </div>
            <div className="title absolute text-white bottom-5 right-8">
              <h1 className=" font-sans font-medium text-2xl">Rosalia Indah</h1>
            </div>
          </div>
          <div className="lg:col-span-4 lg:row-span-1 relative rounded-2xl overflow-hidden">
            <div className="images">
              <img
                src={featured2}
                alt=""
                srcset=""
                className="w-full h-full object-cover  max-h-80 lg:max-h-full "
              />
            </div>
            <div className="title absolute text-white bottom-5 right-8">
              <h1 className=" font-sans font-medium text-2xl">Harapan Jaya</h1>
            </div>
          </div>

          <div className="lg:col-span-4 lg:row-span-1 relative rounded-2xl overflow-hidden">
            <Link to="detail">
              <div className="images">
                <img
                  src={featured3}
                  alt=""
                  srcset=""
                  className="w-full h-full object-cover  max-h-80 lg:max-h-full"
                />
              </div>

              <div className="title absolute text-white bottom-5 right-8">
                <h1 className=" font-sans font-medium text-2xl">Pandawa 87</h1>
              </div>
            </Link>
          </div>

          <div className="lg:col-span-4 lg:row-span-1 relative rounded-2xl overflow-hidden">
            <div className="images">
              <img
                src={featured4}
                alt=""
                srcset=""
                className="w-full h-full object-cover  max-h-80 lg:max-h-full"
              />
            </div>
            <div className="title absolute text-white bottom-5 right-8">
              <h1 className=" font-sans font-medium text-2xl">Gunung Harta</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
