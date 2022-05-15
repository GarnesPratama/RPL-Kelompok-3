import React from "react";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="logo mt-44 text-green font-semibold font-sans text-6xl grid justify-center">
          <h1>Haryanti</h1>
        </div>
        <div className="title font-semibold font-sans text-2xl mt-2 text-blackText grid justify-center">
          Selamat Datang !
        </div>
        <div className="form mt-12 grid justify-center ">
          <label class="block">
            <span class=" font-sans font-semibold text-blackText text-base text-left">
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
                placeholder="sukirman@gmail.com"
              />
            </div>
          </label>
          <label class="block mt-4">
            <span class=" font-sans font-semibold text-blackText text-base">
              Password
            </span>
            <div className="class">
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
                placeholder="***********"
              />
            </div>
          </label>
        </div>
        <div className="signup">
          <div className="text-center font-normal text-blackText text-base mt-11">
            <h1>
              Belum Punya Akun?{" "}
              <Link className="text-green hover:underline" to="/sign-UP">
                {" "}
                Daftar Disini
              </Link>
            </h1>
          </div>
        </div>
        <div className="btn-cta mt-6 grid justify-center">
          <button className="bg-green w-28 h-12 rounded-md">
            <h1 className="text-center text-white font-semibold text-lg">
              Login
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
