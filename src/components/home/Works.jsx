import React from 'react';
import '../../assets/styles/Home.css';
import '../../assets/styles/Styles.css';
import { LuListVideo } from "react-icons/lu";
import { LiaHandshake } from "react-icons/lia";
import { IoIosCalculator } from "react-icons/io";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { Link } from 'react-router-dom';

const Works = () => {
  return (
    <section className="works">
      <h2 className="h2Title">How Top Contractor List Works</h2>
      <div className="squaresWorks">
        <div className="squareWork">
          <LuListVideo className="iconWork"/>
          <p className="squareTitle">STEP 1</p>
          <p className="squareText">Tell us about your home improvement project</p>
          <p className="squareDesc">Answer a few questions about your home improvement project.</p>
        </div>

        <div className="squareWork">
          <LiaHandshake className="iconWork"/>
          <p className="squareTitle">STEP 2</p>
          <p className="squareText">Connect with the best local contractor</p>
          <p className="squareDesc">We will match you with the top local contractor that's best suited for your project.</p>
        </div>

        <div className="squareWork">
          <IoIosCalculator className="iconWork"/>
          <p className="squareTitle">STEP 3</p>
          <p className="squareText">Book an appointment with the top contractor</p>
          <p className="squareDesc">Schedule a FREE estimate for your project and receive it in less than 24h</p>
        </div>

        <div className="squareWork">
          <MdOutlineRocketLaunch className="iconWork"/>
          <p className="squareTitle">STEP 4</p>
          <p className="squareText">Start your project with confidence</p>
          <p className="squareDesc"> Begin you project with confidence, clarity & peace of mind.</p>
        </div>
      </div>
    </section>
  );
}

export default Works;
