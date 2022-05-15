import React from "react";
import jadwal from "../images/date.png";
import lokasi from "../images/Location.png";
import Map from "../images/Map.png";
import kursi from "../images/Seat.png";
import bus from "../images/nomor.png";
import jam from "../images/Clock.png";

export default function date() {
  return (
    <div>
      <form action="">
        <label class="block">
          <span class=" font-sans font-semibold text-blackText text-base">
            Tanggal Keberangkatan
          </span>
          <div className="class flex">
            <img src={jadwal} alt="" className=" mr-2 mt-1" />
            <input
              type="date"
              class="
                    mt-1
                    block
                    rounded-md
                    bg-grayForm
                     w-64
                     h-8
                     border-grayForm
                  "
              placeholder=""
            />
          </div>
        </label>
        <label class="block mt-4">
          <span class=" font-sans font-semibold text-blackText text-base">
            Tempat Keberangkatan
          </span>
          <div className="class flex">
            <img src={lokasi} alt="" className=" mr-2 mt-1" />
            <input
              type="text"
              class="
                    mt-1
                    block
                    rounded-md
                    bg-grayForm
                     w-64
                     h-8
                             border-grayForm
                  "
              placeholder=""
            />
          </div>
        </label>
        <label class="block mt-4">
          <span class=" font-sans font-semibold text-blackText text-base">
            Tujuan
          </span>
          <div className="class flex">
            <img src={Map} alt="" className=" mr-2 mt-1" />
            <input
              type="text"
              class="
                    mt-1
                    block
                    rounded-md
                    bg-grayForm
                     w-64
                     h-8
                             border-grayForm
                  "
              placeholder=""
            />
          </div>
        </label>
        <label class="block mt-4">
          <span class=" font-sans font-semibold text-blackText text-base">
            Nomor Kursi
          </span>
          <div className="class flex">
            <img src={kursi} alt="" className=" mr-1  mt-1" />
            <input
              type="text"
              class="
                    mt-1
                    block
                    rounded-md
                    bg-grayForm
                     w-20
                     h-8
                             border-grayForm
                  "
              placeholder=""
            />
          </div>
        </label>
        <label class="block mt-4">
          <span class=" font-sans font-semibold text-blackText text-base">
            Nomor Bus
          </span>
          <div className="class flex">
            <img src={bus} alt="" className=" mr-4 mt-1" />
            <input
              type="text"
              class="
                    mt-1
                    block
                    rounded-md
                    bg-grayForm
                     w-20
                     h-8
                             border-grayForm
                  "
              placeholder=""
            />
          </div>
        </label>
        <label class="block mt-4">
          <span class=" font-sans font-semibold text-blackText text-base">
            Waktu Keberangkatan
          </span>
          <div className="class flex">
            <img src={jam} alt="" className=" mr-2 mt-1" />
            <input
              type="time"
              class="
                    mt-1
                    block
                    rounded-md
                    bg-grayForm
                     w-64
                     h-8
                             border-grayForm
                  "
              placeholder=""
            />
          </div>
        </label>
      </form>
    </div>
  );
}
