import React from "react";
import line from "../images/line.png";
import gopay from "../images/gopay.png";
import ovo from "../images/ovo.png";
import toko from "../images/indomart.png";
import bank from "../images/transfer bank.png";
import succes from "../images/succes.png";
import { Link } from "react-router-dom";

export default function number() {
  return (
    <div>
      <div className="grid justify-center mt-12">
        <div className="level flex justify-center">
          <div className="rounded-full bg-grayForm w-12 h-12 mt-2 ml-2 ">
            <img src={succes} alt="" srcset="" className=" object-cover" />
          </div>
          <div className="line mt-8 ">
            <img src={line} alt="" srcset="" />
          </div>
          <div className="rounded-full bg-grayForm w-12 h-12 mt-2 overflow-hidden   ">
            <div className="font-extralight font-sans text-blackText text-2xl grid justify-center mt-2 ">
              <h1>2</h1>
            </div>
          </div>
          <div className="line mt-8 ">
            <img src={line} alt="" srcset="" />
          </div>
          <div className="rounded-full bg-grayForm w-12 h-12 mt-2  ">
            <div className="font-extralight font-sans text-blackText text-2xl grid justify-center mt-2 ">
              <h1>3</h1>
            </div>
          </div>
        </div>
        <div className="payment  font-sans text-center mt-8">
          <h1 className="text-green font-semibold text-4xl">Pembayaran</h1>
          <p className="text-blackText font-light text-lg mt-2">
            Silakan pilih metode pembayaran anda
          </p>
        </div>
        <div className="grid justify-center gap-8 mt-24 mb-16">
          <div className="list">
            <label class=" flex items-center ">
              <input
                type="radio"
                class="form-radio -mt-3"
                name="accountType"
                value="personal"
              />
              <span class="ml-2">
                <img src={ovo} alt="" srcset="" className="mb-5" />
              </span>
            </label>
            <label class=" flex items-center ">
              <input
                type="radio"
                class="form-radio -mt-3"
                name="accountType"
                value="personal"
              />
              <span class="ml-2">
                <img src={gopay} alt="" srcset="" className="mb-5" />
              </span>
            </label>
            <label class=" flex items-center ">
              <input
                type="radio"
                class="form-radio -mt-3"
                name="accountType"
                value="personal"
              />
              <span class="ml-2">
                <img src={toko} alt="" srcset="" className="mb-5" />
              </span>
            </label>
            <label class=" flex items-center ">
              <input
                type="radio"
                class="form-radio -mt-3"
                name="accountType"
                value="personal"
              />
              <span class="ml-2">
                <img src={bank} alt="" srcset="" className="mb-5" />
              </span>
            </label>
          </div>
        </div>
        <div className="cta grid justify-center ">
          <div className="submit bg-green rounded-md w-60 h-9 text-white font-sans font-semibold text-lg text-center mb-5  ">
            <Link to="/booking/validation">
              <button type="submit">
                {" "}
                <h1 className="mt-1">Lanjutkan Pembayaran</h1>{" "}
              </button>
            </Link>
          </div>
          <center>
            <div className="submit bg-grayForm rounded-md w-28 h-9 text-black font-sans font-semibold text-lg text-center mb-20  ">
              <button type="submit">
                {" "}
                <h1 className="mt-1">Cancel</h1>{" "}
              </button>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
}
