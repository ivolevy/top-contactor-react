import React from 'react';
import '../App.css';
import { LuListVideo } from "react-icons/lu";
import { LiaHandshake } from "react-icons/lia";
import { IoIosCalculator } from "react-icons/io";
import { MdOutlineRocketLaunch } from "react-icons/md";

function Works() {
  return (
    <section className="works">
      <h2 className="h2Title">How Top Contractor List Works</h2>
      <div className="squaresWorks">
        <div className="squareWork">
          <LuListVideo className="iconWork"/>
          <p className="squareTitle">STEP 1</p>
          <p className="squareText">Tell us about your home improvement project</p>
          <p className="SquareDesc">Answer a few questions about your home improvement project.</p>
        </div>

        <div className="squareWork">
          <LiaHandshake className="iconWork"/>
          <p className="squareTitle">STEP 1</p>
          <p className="squareText">Tell us about your home improvement project</p>
          <p className="SquareDesc">Answer a few questions about your home improvement project.</p>
        </div>

        <div className="squareWork">
          <IoIosCalculator className="iconWork"/>
          <p className="squareTitle">STEP 1</p>
          <p className="squareText">Tell us about your home improvement project</p>
          <p className="SquareDesc">Answer a few questions about your home improvement project.</p>
        </div>

        <div className="squareWork">
          <MdOutlineRocketLaunch className="iconWork"/>
          <p className="squareTitle">STEP 1</p>
          <p className="squareText">Tell us about your home improvement project</p>
          <p className="SquareDesc">Answer a few questions about your home improvement project.</p>
        </div>
      </div>
    </section>
  );
}

export default Works;
