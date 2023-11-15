import React from 'react';
import '../App.css';
import tips1 from '../images/tips1.jpeg';
import tips2 from '../images/tips2.jpeg';
import tips3 from '../images/tips3.jpeg';

function Tips() {
  return (
    <section className="tips">
    <h2 className="h2Title">Top Contractor Tips</h2>
    <div className="squaresTips">

      <div className="squareTips">
        <div className="sdi">
            <div className="squareDivImg"></div>
        </div>
        <p className="squareTextTips">Jen K, Hampstead</p>
        <p className="SquareDescTips">Every single detail and concern I had was addressed in a timely and professional manner. <span className="strong">I highly recommend them</span>.</p>
      </div>

      <div className="squareTips">
        <div className="sdi">
            <div className="squareDivImg squareDivImg2"></div>
        </div>
        <p className="squareTextTips">Jen K, Hampstead</p>
        <p className="SquareDescTips">Every single detail and concern I had was addressed in a timely and professional manner. <span className="strong">I highly recommend them</span>.</p>
      </div>

      <div className="squareTips">
        <div className="sdi">
            <div className="squareDivImg squareDivImg3"></div>
        </div>
        <p className="squareTextTips">Jen K, Hampstead</p>
        <p className="SquareDescTips">Every single detail and concern I had was addressed in a timely and professional manner. <span className="strong">I highly recommend them</span>..</p>
      </div>

    </div>
  </section>
  );
}

export default Tips;
