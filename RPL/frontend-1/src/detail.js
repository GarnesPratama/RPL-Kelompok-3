import React from "react";
import Header from "./partials/header";
import Placeholder from "./Detail/placeholder";
import Title from "./Detail/title";
import Payment from "./Detail/payment";
import Footer from "./partials/footer";

export default function detail() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Placeholder />
        <Title />
        <Payment />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
