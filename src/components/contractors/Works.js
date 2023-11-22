import React from 'react';
import '../../assets/styles/Contractors.css';
import { LuListVideo } from "react-icons/lu";
import { LiaHandshake } from "react-icons/lia";
import { IoIosCalculator } from "react-icons/io";

function Works() {
  return (
    <section className="worksContractors">
      <h2 className="h2TitleContractors">How Top Contractor List Works</h2>
      <div className="squaresWorks">
        <div className="squareWorkContractors">
          <LuListVideo className="iconWork"/>
          <p className="squareTitle">STEP 1</p>
          <p className="squareText">Homeowners Request a Project Estimate From The "Top" Local Contractor</p>
          <p className="SquareDesc">Homeowners are pre-vetted with survey questions to ensure they are serious.</p>
        </div>

        <div className="squareWorkContractors">
          <LiaHandshake className="iconWork"/>
          <p className="squareTitle">STEP 2</p>
          <p className="squareText">Homeowners are connected with local contractors</p>
          <p className="SquareDesc">We will match each homeowner with a top local contractor. Leads & booked appointments are sent to the top local contractor.</p>
        </div>

        <div className="squareWorkContractors">
          <IoIosCalculator className="iconWork"/>
          <p className="squareTitle">STEP 3</p>
          <p className="squareText">Contractors get new customers & Increase revenue</p>
          <p className="SquareDesc">Contractors provide estimates for the homeowners to generate more new customers and revenue.</p>
        </div>
      </div>
    </section>
  );
}

export default Works;
