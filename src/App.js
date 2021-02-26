import React from "react";
import { Header } from "./Components";
import { Footer } from "./Components";
import { Home } from "./Pages";
import "./style.css";

export default function App() {
  return (
    <div className="app" key="app">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
