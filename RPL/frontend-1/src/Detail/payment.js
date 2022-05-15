import React from "react";
import Kursi from "./kursi";
import Date from "./date";
import Book from "./book";

export default function payment() {
  return (
    <div>
      <div className="border border-t-3 border-gray">
        <div className="container mx-auto ">
          <div className="title text-green font-sans font-semibold text-2xl text-center mt-8 mb-8">
            <h1>Pesan Tiket</h1>
          </div>
          <div className="grid lg:grid-flow-col lg:justify-between gap-10 object-cover  place-content-center   ">
            <Kursi />
            <Date />
            <Book />
          </div>
        </div>
      </div>
    </div>
  );
}
