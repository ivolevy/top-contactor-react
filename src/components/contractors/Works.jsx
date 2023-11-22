import React from 'react';
import '../../assets/styles/Contractors.css';
import { LuListVideo } from "react-icons/lu";
import { LiaHandshake } from "react-icons/lia";
import { IoIosCalculator } from "react-icons/io";

const steps = [
  {
    icon: <LuListVideo className="iconWork" />,
    title: 'STEP 1',
    text: 'Homeowners Request a Project Estimate From The "Top" Local Contractor',
    desc: 'Homeowners are pre-vetted with survey questions to ensure they are serious.',
  },
  {
    icon: <LiaHandshake className="iconWork" />,
    title: 'STEP 2',
    text: 'Homeowners are connected with local contractors',
    desc: 'We will match each homeowner with a top local contractor. Leads & booked appointments are sent to the top local contractor.',
  },
  {
    icon: <IoIosCalculator className="iconWork" />,
    title: 'STEP 3',
    text: 'Contractors get new customers & Increase revenue',
    desc: 'Contractors provide estimates for the homeowners to generate more new customers and revenue.',
  },
];

const Works = () => {
  return (
    <section className="worksContractors">
      <h2 className="h2TitleContractors">How Top Contractor List Works</h2>
      <div className="squaresWorksContractors">
        {steps.map(({ icon, title, text, desc }, index) => (
          <div className="squareWorkContractors" key={index}>
            {icon}
            <p className="squareTitle">{title}</p>
            <p className="squareText">{text}</p>
            <p className="SquareDesc">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
