import React from 'react';
import '../../assets/styles/Home.css';
import '../../assets/styles/Styles.css';

const Tips = () => {
  return (
    <section className="tips">
    <h2 className="h2Title">Top Contractor Tips</h2>
    <div className="squaresTips">

      <div className="squareTips">
        <div className="sdi">
            <div className="squareDivImg"></div>
        </div>
        <p className="squareTextTips">Common Roofing Problems</p>
        <p className="SquareDescTips">As a homeowner, you know how important a roof is to the integrity of your home. Unfortunately, roofs don't last forever and can be susceptible to a variety of problems over time. In this article, we'll</p>
      </div>

      <div className="squareTips">
        <div className="sdi">
            <div className="squareDivImg squareDivImg2"></div>
        </div>
        <p className="squareTextTips">DIY vs. Hiring a Professional Roofer</p>
        <p className="SquareDescTips">Homeowners often face the dilemma of whether to undertake a roofing project themselves or hire a professional contractor. While DIY can save you money, it is not always the best option, especially</p>
      </div>

      <div className="squareTips">
        <div className="sdi">
            <div className="squareDivImg squareDivImg3"></div>
        </div>
        <p className="squareTextTips">The Importance of Regular Roof Maintenance</p>
        <p className="SquareDescTips">When it comes to maintaining your home, regular roof maintenance is often overlooked. However, neglecting your roof can lead to costly repairs and even jeopardize the safety of your family. Hiring a</p>
      </div>

    </div>
  </section>
  );
}

export default Tips;
