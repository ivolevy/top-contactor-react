import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Styles.css';
import '../assets/styles/ServiceFC.css';
import { IoTriangle } from "react-icons/io5";

const ServiceForm = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate(); 

  const nextStep = () => {
    if (step === 2) {
      navigate('/Thank-you');
    } else {
      setStep(step + 1);
    }
  };

  const renderFormSection = () => {
    switch (step) {
      case 1:
        return (
          <div className='service'>
            <p className='servicesTitle'>What's the Zip Code for your project?</p>
            <form className='form'>
              <input className='inputService' type="text" name="name" placeholder='Select/Enter your zip code'/>
            </form>
            <div className='divButton'>
              <div className='leftButton'></div>
              <button className='rightButton' onClick={nextStep}>
                <p className='buttonText'>SUBMIT</p>
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className='service'>
            <p className='servicesTitle'>Do you need to replace or repair an existing roof?</p>
            <form className='form'>
              <input className='inputService' type="text" name="name" placeholder='Select/Enter your zip code'/>
            </form>
            <button className='divButton divButton2' onClick={nextStep}>
              <div className='leftButton'></div>
              <div className='rightButton rightButton2'>
                <p className='buttonText'>Next <IoTriangle className='triangle' /></p>
              </div>
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className='serviceForm'>
      {renderFormSection()}
    </section>
  );
};

export default ServiceForm;
