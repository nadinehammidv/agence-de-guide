import React from "react";

function Offers() {
  return (
    <div className="offers">
      <div className="title">
        <h1> Best Offers</h1>
        <h2> Check out our top-rated tours</h2>
      </div>

      <div className="images">
        <div className="card">
          <img
            src="https://www.nachoua.com/Avril-2008/Avril2008_206.JPG"
            className="img1"
            width="400px"
          />
          <h3>DOGA</h3>
        </div>
        <div className="card">
          <img
            src="https://www.tripsavvy.com/thmb/sRxRJ--R5cG8vZWLb99WE06sav4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-575664325-59704d2922fa3a001031bc5d.jpg"
            className="img2"
            width="400px"
          />
          <h3>SIDI BOU SAID</h3>
        </div>
        <div className="card">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max500/426184678.jpg?k=adfa0c2b826c062d95cee8af0ee96467e92ed87124f30297c1c943d7b48d8d35&o="
            className="img3"
            width="400px"
          />
          <h3>TOUZER</h3>
        </div>
      </div>
    </div>
  );
}

export default Offers;
