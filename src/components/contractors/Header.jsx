import React from 'react';
import '../../assets/styles/Contractors.css';
import '../../assets/styles/Styles.css';
import { IoTriangle } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <section className="headerContractors">
      <div className="headerDivsContractors">
        <div className="headerTitlesContractors">
          <div className="hContractorst">
            <h1 className="titleContractors">
            Your area,<br></br> your lead.
            </h1>
            <p className="htpContractors">
            Get ZIP code exclusivity <strong>NOW!</strong>
            </p>
          </div>
        </div>
        <div className="headerServicesContractors">
          <div className="hsContractors">
            <div className='formDiv'>
              <form className='form'>
                  <input className='input' type="text" name="name" placeholder='Zip code'/>
                  <input className='input inputBottom' type="text" name="name" placeholder='Tell us what services you offer!'/>
              </form>
              <div className='buttonDiv'>
                <Link to="/Thank-you" className='buttonLink'>
                  <button className='buttonHs'>Next <IoTriangle className='triangle'/></button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
