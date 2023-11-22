import React from 'react';
import '../../assets/styles/Contractors.css';

{/** APPLY HEADER */}

function Header() {
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
            <p className="hsTitleContractors">Select a service below to get started</p>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
