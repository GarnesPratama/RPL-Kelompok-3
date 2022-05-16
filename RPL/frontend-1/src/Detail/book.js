import React from "react";
import bus from "../images/Vector.png";
import { Link } from "react-router-dom";

export default function book() {
  return (
    <div>
      <form action="">
        <label class="block">
          <span class=" font-sans font-semibold text-blackText text-base">
            Pilih Kelas Bus
          </span>
          <div className="class flex">
            <img src={bus} alt="" className=" mr-2 mt-3 w-14 h-8" />
            <select
              class="
                    block
                    mt-2
                    rounded-md
                    bg-grayForm
                     w-64
                     h-10
                     border-grayForm
                  "
            >
              <option>Executive Class</option>
              <option>Executive Plus</option>
              <option>Super Executive </option>
              <option>Super Top</option>
            </select>
          </div>
        </label>
        <label class="block mt-36">
          <span class=" font-sans font-semibold text-blackText text-base">
            Total Pembayaran Tiket
          </span>

          <input
            class="
                    block
                    rounded-md
                    bg-grayForm
                     w-64
                     h-10
                      ml-16
                      mt-2
                      mb-10
                  "
          ></input>
        </label>
        <Link to="/booking">
          <button className="bg-green font-sans text-white font-semibold text-base w-80 h-10 rounded-md">
            <h1 className="text-center">Lanjutkan Pembayaran</h1>
          </button>
        </Link>
      </form>
    </div>
  );
}
