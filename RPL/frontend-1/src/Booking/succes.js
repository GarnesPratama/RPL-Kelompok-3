import React from "react";
import line from "../images/line.png";
import succes from "../images/succes.png";
import a from "../images/a.png";
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
            <img src={succes} alt="" srcset="" className=" object-cover" />
          </div>
          <div className="line mt-8 ">
            <img src={line} alt="" srcset="" />
          </div>
          <div className="rounded-full bg-grayForm w-12 h-12 mt-2  ">
            <img src={succes} alt="" srcset="" className=" object-cover" />
          </div>
        </div>
        <div className="title text-blackText font-medium text-2xl mt-16 text-center ">
          <h1>Terimakasih Telah menyelesaikan Proses Pembayaran</h1>
        </div>
        <div className="images mt-8 grid justify-center">
          <img src={a} alt="" srcset="" />
        </div>
        <div className="title text-blackText font-light text-2xl mt-8 text-center ">
          <h1>
            Kami akan segera mengirimkan bukti pembayaran dan invoice melalui{" "}
            <br />
            email setelah transaksi telah terkonfirmasi
          </h1>
        </div>
        <center>
          <div className="cta bg-green text-white rounded-md w-28 h-12 text-center mt-14 mb-14  ">
            <Link to="/">
              <button>
                <h1 className=" font-semibold text-lg mt-2">Home</h1>
              </button>
            </Link>
          </div>
        </center>
      </div>
    </div>
  );
}
