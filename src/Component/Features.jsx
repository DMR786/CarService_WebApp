import React from "react";
const Features = () => {
  return (
    <>
      <div className="wedo">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>What We Do</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="row">
                <div className="col-md-6 margin_bottom">
                  <div className="work">
                    <figure>
                      <img src={require("../assets/images/img1.png")} alt="#" />
                    </figure>
                  </div>
                  <div className="work_text">
                    <h3>
                      Quick repair
                      <br />
                      <span className="blu">Total Service</span>
                    </h3>
                  </div>
                </div>
                <div className="col-md-6 margin_bottom">
                  <div className="work">
                    <figure>
                      <img src={require("../assets/images/img2.png")} alt="#" />
                    </figure>
                  </div>
                  <div className="work_text">
                    <h3>
                      Auto Diagnose
                      <br />
                      <span className="blu">Full Check</span>
                    </h3>
                  </div>
                </div>
                <div className="col-md-6 margin_bottom">
                  <div className="work">
                    <figure>
                      <img src={require("../assets/images/img3.png")} alt="#" />
                    </figure>
                  </div>
                  <div className="work_text">
                    <h3>
                      Customer Focus
                      <br />
                      <span className="blu">Quality Care</span>
                    </h3>
                  </div>
                </div>
                <div className="col-md-6 margin_bottom">
                  <div className="work">
                    <figure>
                      <img src={require("../assets/images/img4.png")} alt="#" />
                    </figure>
                  </div>
                  <div className="work_text">
                    <h3>
                      Expert Technicians
                      <br />
                      <span className="blu">Skilled Hands</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Features;
