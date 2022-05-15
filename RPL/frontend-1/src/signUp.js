import React from "react";
import pic from "./images/busIjo.png";
import title from "./images/Haryanti.png";

export default function signUp() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-flow-col gap-8 ">
          <div className="lg grid justify-center mt-28">
            <div className="title grid justify-center">
              <img
                src={title}
                alt=""
                srcset=""
                className="invisible lg:visible"
              />
            </div>
            <div className="bus mt-11  ">
              <img
                src={pic}
                alt=""
                srcset=""
                className="invisible lg:visible"
              />
            </div>
          </div>
          <div className="form mt-20 justify-center  ">
            <h1 className="font-semibold font-sans text-3xl text-center">
              Pendaftaran Akun
            </h1>
            <label class="block mt-14 grid justify-center ">
              <span class=" font-sans font-semibold text-blackText text-base">
                Nama Lengkap
              </span>
              <div className="class">
                <input
                  type="text"
                  class="
                    mt-1
                    block
                    rounded-md
                    bg-grayForm
                    w-96
                    h-8
                    border-grayForm
                  "
                  placeholder=""
                />
              </div>
            </label>
            <label class="block mt-4 grid justify-center">
              <span class=" font-sans font-semibold text-blackText text-base">
                Jenis Kelamin
              </span>
              <div className="class ">
                <input
                  type="text"
                  class="
                    mt-1
                    block
                    rounded-md
                    bg-grayForm
                     w-96
                     h-8
                             border-grayForm
                  "
                  placeholder=""
                />
              </div>
            </label>
            <label class="block mt-4 grid justify-center">
              <span class=" font-sans font-semibold text-blackText text-base">
                Alamat
              </span>
              <div className="class ">
                <input
                  type="text"
                  class="
                    mt-1
                    block
                    rounded-md
                    bg-grayForm
                     w-96
                     h-8
                             border-grayForm
                  "
                  placeholder=""
                />
              </div>
            </label>
            <label class="block mt-4 grid justify-center">
              <span class=" font-sans font-semibold text-blackText text-base">
                No. Kartu Identitas
              </span>
              <div className="class ">
                <input
                  type="number"
                  class="
                    mt-1
                    block
                    rounded-md
                    bg-grayForm
                     w-96
                     h-8
                             border-grayForm
                  "
                  placeholder=""
                />
              </div>
            </label>
            <label class="block mt-4 grid justify-center">
              <span class=" font-sans font-semibold text-blackText text-base">
                Nomor Telepon
              </span>
              <div className="class ">
                <input
                  type="number"
                  class="
                    mt-1
                    block
                    rounded-md
                    bg-grayForm
                     w-96
                     h-8
                             border-grayForm
                  "
                  placeholder=""
                />
              </div>
            </label>
            <label class="block mt-4 grid justify-center">
              <span class=" font-sans font-semibold text-blackText text-base">
                Email
              </span>
              <div className="class ">
                <input
                  type="email"
                  class="
                    mt-1
                    block
                    rounded-md
                    bg-grayForm
                     w-96
                     h-8
                             border-grayForm
                  "
                  placeholder=""
                />
              </div>
            </label>
            <label class="block mt-4 grid justify-center">
              <span class=" font-sans font-semibold text-blackText text-base">
                Password
              </span>
              <div className="class ">
                <input
                  type="password"
                  class="
                    mt-1
                    block
                    rounded-md
                    bg-grayForm
                     w-96
                     h-8
                             border-grayForm
                  "
                  placeholder=""
                />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
