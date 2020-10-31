import React from 'react';
import { Nav } from "./components/NAVBAR/Nav";
import { CardSection } from "./components/CARDS/CardSection/CardSection";
import './App.css';
import { Section } from "../src/components/curvediv/Section";
import { Footer } from "../src/components/footer/Footer";

function App() {
  return (
    <React.Fragment>
     <Nav/>
     <CardSection/>
    <Section/>
    <Footer/>
    </React.Fragment>
  );
}

export default App;
