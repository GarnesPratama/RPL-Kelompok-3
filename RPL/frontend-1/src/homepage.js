import React from "react";
import Header from "./partials/header";
import Placeholder from "./Homepage/placeholder";
import Favorit from "./Homepage/favorit";
import Class from "./Homepage/class";
import Footer from "./partials/footer";

export default function homepage() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Placeholder />
        <Favorit />
        <Class />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
