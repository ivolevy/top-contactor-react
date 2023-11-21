import React from 'react';
import '../../styles/Contractors.css';
import { LuListVideo } from "react-icons/lu";
import { LiaHandshake } from "react-icons/lia";
import { IoIosCalculator } from "react-icons/io";
import { MdOutlineRocketLaunch } from "react-icons/md";

function Works() {
  return (
    <section className="worksContractors">
      <h2 className="h2TitleContractors">How Top Contractor List Works</h2>
      <div className="squaresWorks">
        <div className="squareWorkContractors">
          <LuListVideo className="iconWork"/>
          <p className="squareTitle">STEP 1</p>
          <p className="squareText">Tell us about your home improvement project</p>
          <p className="SquareDesc">Answer a few questions about your home improvement project.</p>
        </div>

        <div className="squareWorkContractors">
          <LiaHandshake className="iconWork"/>
          <p className="squareTitle">STEP 1</p>
          <p className="squareText">Tell us about your home improvement project</p>
          <p className="SquareDesc">Answer a few questions about your home improvement project.</p>
        </div>

        <div className="squareWorkContractors">
          <IoIosCalculator className="iconWork"/>
          <p className="squareTitle">STEP 1</p>
          <p className="squareText">Tell us about your home improvement project</p>
          <p className="SquareDesc">Answer a few questions about your home improvement project.</p>
        </div>
      </div>
    </section>
  );
}

export default Works;
