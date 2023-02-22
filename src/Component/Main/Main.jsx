import React from 'react';
import { FaCrown } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTelegram,
} from 'react-icons/bs';
import './Main.css';

const Main = () => {
  return (
    <section className="hero-section" id="section_1">
      <div className="section-overlay"></div>

      <div className="container d-flex justify-content-left align-items-left">
        <div className="row">
          <div className="col-12 mt-auto mb-5 text-center"></div>
        </div>
      </div>

      {/* <div classNameName="container"> */}
      <div className="typo_">
        <h1>
          Rich <br />
          community{' '}
        </h1>
        <div className="flex social-btns">
          <a className="app-btn blu flex vert" href="http:apple.com">
            <i className="fab fa-apple"></i>
            <p>
              Available on the <br /> <span className="big-txt">App Store</span>
            </p>
          </a>

          <a className="app-btn blu flex vert" href="http:google.com">
            <i className="fab fa-google-play"></i>
            <p>
              Get it on <br /> <span className="big-txt">Google Play</span>
            </p>
          </a>
        </div>
        <div className="flex col-lg-12 col-12 mt-auto d-flex flex-column flex-lg-row flex-sm-column text-center">
          <div class="footer-social-icon">
            <div>
              <span>
                <i>
                  <FaCrown />
                </i>
                MacaNacki
              </span>
            </div>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="#">
              <i class="fab fa-telegram"></i>
            </a>
          </div>
          <div class="copyright-text">
            <p>&copy; 2023 MacaNacki All Right Reserved </p>
            <p>Privacy Policy</p>
            <p> Terms and Conditions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
