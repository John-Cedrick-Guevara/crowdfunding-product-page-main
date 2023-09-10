import { useState } from "react";

import "./App.css";
import HeroComponent from "../Components/HeroComponent";
import ContentComponent from "../Components/ContentComponent";
import AboutComponent from "../Components/AboutComponent";

function App() {

  const infotatments = [
    {
      index: 4,
      outsideModal: false,
      title: "Pledge with no reward",
      description: `  Choose to support us without a reward if you simply believe in our project. As a backer, 
  you will be signed up to receive product updates via email.`,
    },
    {
      index: 1,
      outsideModal: true,
      title: "Bamboo Stand",
      price: 25,
      description: `  You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
        you’ll be added to a special Backer member list.`,
      stock: 101,
    },
    {
      index: 2,
      title: " Black Edition Stand",
      outsideModal: true,
      price: 75,
      description: `  You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
  member list. Shipping is included.`,
      stock: 64,
    },
    {
      index: 3,
      title: "Mahogany Special Edition",
      outsideModal: true,
      price: 200,
      description: `  You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
  to our Backer member list. Shipping is included..
        101 left`,
      stock: 0,
    },
  ];

  const [modal, setModal] = useState(false)

    function handleModal() {
      setModal(prevState => !prevState);
    }


  return (
    <>
      <HeroComponent/>
      <ContentComponent infotatments={infotatments} handleModal={handleModal} />
      
      {modal && (
        <AboutComponent infotatments={infotatments} handleModal={handleModal} />
      )}
    </>
  );
}

export default App;
