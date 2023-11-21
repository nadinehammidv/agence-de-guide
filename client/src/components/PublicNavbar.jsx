import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function PublicNavBar() {
  return (
    <div className="Public-Nav-container">
      <h1>
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              all: "unset",
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "red" : "black",
              cursor: "pointer",
            };
          }}
        >
          <img
            src="https://ld-wp73.template-help.com/wordpress/prod_18709/v4/wp-content/uploads/2020/06/invert-logo.png"
          />
        </NavLink>
      </h1>
      <ul>
        <li>
          <NavLink
            to="/Home"
            style={({ isActive }) => {
              return {
                all: "unset",
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : "black",
                cursor: "pointer",
              };
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/About"
            style={({ isActive }) => {
              return {
                all: "unset",
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : "black",
                cursor: "pointer",
              };
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Team"
            style={({ isActive }) => {
              return {
                all: "unset",
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : "black",
                cursor: "pointer",
              };
            }}
          >
            Team
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Contact"
            style={({ isActive }) => {
              return {
                all: "unset",
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : "black",
                cursor: "pointer",
              };
            }}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            style={({ isActive }) => {
              return {
                all: "unset",
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : "black",
                cursor: "pointer",
              };
            }}
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Register"
            style={({ isActive }) => {
              return {
                all: "unset",
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : "black",
                cursor: "pointer",
              };
            }}
          >
            Register
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default PublicNavBar;
