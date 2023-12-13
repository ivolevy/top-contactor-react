import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Styles.css';
import '../assets/styles/ServiceFC.css';

const ServiceForm = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate(); // Obtén la función de navegación

  const nextStep = () => {
    if (step === 3) {
      // Si es la última parte del formulario, redirige a '/Thank-you'
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
              <input className='input' type="text" name="name" placeholder='Select/Enter your zip code'/>
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
          <div>
            <h2>Segunda Parte del Formulario</h2>
            {/* Campos de la segunda parte */}
            <button onClick={nextStep}>Avanzar</button>
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Tercera Parte del Formulario</h2>
            {/* Campos de la tercera parte */}
            <button onClick={nextStep}>Avanzar</button>
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
