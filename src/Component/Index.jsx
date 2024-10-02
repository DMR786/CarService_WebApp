import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Features from "./Features";
const Index = () => {
  return (
    <>
      <section className="banner_main">
        <div id="banner1" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container-fluid">
                <div className="carousel-caption">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="text-bg">
                        <br></br>
                        <br></br>
                        <br></br>
                        <h1>WELCOME </h1>                      
                        <span>To Your trusted Car Service center</span>
                        <p>
                        Experience top-notch car repair services with Auto Care. Our expert technicians are dedicated to ensuring your vehicle's optimal performance and safety. With a commitment to excellence and customer satisfaction, we deliver reliable and efficient solutions for all your automotive needs.
                        </p>
                        <Link to="/about">More Info </Link>
                        <Link to="/contact">Contact Us</Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="text_img">
                        <figure>
                          <img
                            src={require("../assets/images/car.png")}
                            alt="#"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="three_box">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="box_text">
                <h3>CAR REPAIR SERVICES</h3>
                <i>
                  <img src={require("../assets/images/thr.png")} alt="#" />
                </i>
                <p>
                  Our comprehensive car repair services cover everything from minor fixes to major overhauls.

                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box_text">
                <h3>FUEL EFFICIENCY OPTIMIZATION</h3>
                <i>
                  <img src={require("../assets/images/thr1.png")} alt="#" />
                </i>
                <p>
                  Enhance your car's fuel efficiency with our specialized services. 
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box_text">
                <h3>PROFESSIONAL MAINTAINENCE</h3>
                <i>
                  <img src={require("../assets/images/thr2.png")} alt="#" />
                </i>
                <p>
                Regular maintenance is key to prolonging your car's lifespan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Features />
    </>
  );
};
export default Index;
