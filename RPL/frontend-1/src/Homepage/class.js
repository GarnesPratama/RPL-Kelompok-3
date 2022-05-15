import React from "react";
import pic from "../images/pic.png";
import pic1 from "../images/pic-1.png";
import pic2 from "../images/pic-2.png";

const Class = () => {
  return (
    <div>
      <section className="class-bus">
        <div className="container mx-auto mb-11">
          <div className="judul font-sans text-green font-medium text-2xl">
            <h1>Kelas Bus Paling Banyak Dipilih</h1>
          </div>
          <div className="grid grid-cols-12 gap-4 mt-5 ">
            <div className="col-span-4">
              <div className="images">
                <img
                  src={pic}
                  alt=""
                  srcset=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="judul font-sans text-black font-medium text-xl mt-2">
                <h1>Executive</h1>
              </div>
            </div>
            <div className="col-span-4">
              <div className="images">
                <img
                  src={pic1}
                  alt=""
                  srcset=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="judul font-sans text-black font-medium text-xl mt-2">
                <h1>First Class</h1>
              </div>
            </div>
            <div className="col-span-4 ">
              <div className="images">
                <img
                  src={pic2}
                  alt=""
                  srcset=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="judul font-sans text-black font-medium text-xl mt-2">
                <h1>Executive Top</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Class;
