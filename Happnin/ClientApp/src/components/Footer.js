import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Footer.css";

export class Footer extends Component {
  render() {
    return (
      <div className="footer-basic rounded container-fluid">
        <footer className="container-fluid">
          <div className="social">
            <a href="#">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="#">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="#">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </div>
          <ul className="list-inline">
            <li className="list-inline-item">
              <Link to="/">Home</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/About">About</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/Terms">Terms</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/Privacy">Privacy Policy</Link>
            </li>
          </ul>
          <p className="copyright">Happnin © 2020</p>
        </footer>
      </div>
    );
  }
}
