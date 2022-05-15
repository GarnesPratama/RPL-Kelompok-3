import React from "react";
import line from "../images/line.png";
import bank from "../images/BNI.png";
import { Link } from "react-router-dom";
import succes from "../images/succes.png";

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
            <img src={succes} alt="" srcset="" className=" object-cover" />
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
            Silakan periksa kembali sebelum menyelesaikan pembayaran
          </p>
        </div>
        <div className="grid grid-cols-2 mt-20 mb-16 justify-center gap-7">
          <div className="detail">
            <div className="title text-blackText font-semibold text-lg ">
              Pembayaran Melalui :
            </div>
            <div className="images">
              <img src={bank} alt="" srcset="" />
            </div>
            <div className="nameBank mt-4">
              <div className="text-blackText font-sans text-base font-extrabold">
                <h1>
                  Bank Negara Indonesia <br /> 2120315135XX <br /> Sukirman
                </h1>
              </div>
            </div>
            <div className="text-blackText font-sans text-base font-medium mt-7">
              <h1>
                Deskripsi Tiket <br /> Nomor Bus : A52 <br /> Nomor Kursi : 34{" "}
                <br /> Kelas Bus : Executive Class <br /> Tujuan : Jakarta{" "}
                <br /> Waktu : 15:30 WIB <br /> Tgl : 22 Januari 2022
              </h1>
            </div>
          </div>

          <div className="form mt-20 ">
            <label class="block">
              <span class=" font-sans font-semibold text-blackText text-base">
                Upload Bukti Pembayaran
              </span>
              <div className="class flex">
                <input
                  type="file"
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
                Nomor Rekening
              </span>
              <div className="class flex">
                <input
                  type="number"
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
                Nama Pengirim
              </span>
              <div className="class flex">
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
          </div>
        </div>
        <div className="cta grid justify-center ">
          <div className="submit bg-green rounded-md w-60 h-9 text-white font-sans font-semibold text-lg text-center mb-5  ">
            <Link to="/booking/validation/succes">
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
