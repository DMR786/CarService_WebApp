import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer id="contact">
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <ul className="location_icon">
                  <li>
                    <a href="#">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </a>
                    Location
                  </li>
                  <li>
                  <a href="#">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                  </a>
                    +71 9087654321
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </a>
                    Autocare@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <p>
                    Copyright 2023 All Right Reserved By
                    <Link to="/"> Car service</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
