import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
function PublicNavbar() {
  return (
    <div className="public-nav-container">
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
          GUIDE APP
        </NavLink>
      </h1>
      <ul>
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
            to="/register"
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
      </ul>
    </div>
  );
}

export default PublicNavbar;
