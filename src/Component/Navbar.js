import React, { useEffect, useState } from "react";
import logo from "../images/logo.svg";
import downArrow from "../images/icon-arrow-down.svg";
import upArrow from "../images/icon-arrow-up.svg";
import closeMenu from "../images/icon-close-menu.svg";
import todolist from "../images/icon-todo.svg";
import calendar from "../images/icon-calendar.svg";
import reminders from "../images/icon-reminders.svg";
import planning from "../images/icon-planning.svg";
import { Nav } from "./Navbar.style";
import { Button } from "./Main.style";

export default function Navbar({ openState }) {
  const [open, setopen] = useState(false);
  const [isFeatOpen, setIsFeatOpen] = useState(false); //For features dropdown
  const [isCompanyOpen, setIsCompanyOpen] = useState(false); //For Company dropdown
  const [FeatArrow, setFeatArrow] = useState(downArrow);
  const [FeatArrowTitle, setFeatArrowTitle] = useState("down Arrow");
  const [CompArrow, setCompArrow] = useState(downArrow);
  const [CompArrowTitle, setCompArrowTitle] = useState("down Arrow");

  // useEffect(() => {
  //   openState(open);
  // }, [open]);

  const expandFeatures = (e) => {
    e.preventDefault();
    if (!isFeatOpen) {
      setFeatArrow(upArrow);
      setFeatArrowTitle("Up Arrow");
      setIsFeatOpen(true);
    } else {
      setFeatArrow(downArrow);
      setFeatArrowTitle("down Arrow");
      setIsFeatOpen(false);
    }
  };

  const expandCompany = (e) => {
    e.preventDefault();
    if (!isCompanyOpen) {
      setCompArrow(upArrow);
      setCompArrowTitle("Up Arrow");
      setIsCompanyOpen(true);
    } else {
      setCompArrow(downArrow);
      setCompArrowTitle("down Arrow");
      setIsCompanyOpen(false);
    }
  };

  return (
    <Nav open={open} isFeatOpen={isFeatOpen} isCompanyOpen={isCompanyOpen}>
      <img className="logo" src={logo} alt="Logo" />
      <div
        className={`${open ? "collapsed" : "hamburger-menu"}`}
        onClick={() => setopen(!open)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className="grey-background"></div>
      {/* <div className={`${open ? "main-nav-container" : "main-nav-container collapsed"}`}> */}
      <div className="main-nav-container">
          <div className="close-menu">
            <img
              src={closeMenu}
              alt="close menu"
              onClick={() => setopen(!open)}
            />
          </div>
          <div className="nav-menu">
            <a href="#" className="nav-link feat">
              <span onClick={expandFeatures}>
                Features <img src={FeatArrow} alt={FeatArrowTitle} />
              </span>
              {/* <ul className={`${isFeatOpen ? "sub-features" : "collapsed"}`}> */}
              <ul className="sub-features">
                <img className="feat-img" src={todolist} alt="todo list" />
                <li>Todo List</li>
                <img className="feat-img" src={calendar} alt="Calendar" />
                <li>Calendar</li>
                <img className="feat-img" src={reminders} alt="Reminders" />
                <li>Reminders</li>
                <img className="feat-img" src={planning} alt="Planning" />
                <li>Planning</li>
              </ul>
            </a>
            <a href="#" className="nav-link company">
              <span onClick={expandCompany}>
                Company <img src={CompArrow} alt={CompArrowTitle} />
              </span>
              {/* <ul className={`${isCompanyOpen ? "company-menu" : "collapsed"}`}> */}
              <ul className="company-menu">  
                <li>History</li>
                <li>Our Team</li>
                <li>Blog</li>
              </ul>
            </a>
            <a href="#" className="nav-link">
              <span>Careers</span>
            </a>
            <a href="#" className="nav-link">
              <span>About</span>
            </a>
          </div>
          <div className="login-reg">
            <Button backgroundColor="hsl(0, 0%, 98%)" color="hsl(0, 0%, 41%)">
              Login
            </Button>
            <Button
              backgroundColor="hsl(0, 0%, 98%)"
              color="hsl(0, 0%, 41%)"
              className="Register-btn"
            >
              Register
            </Button>
          </div>
      </div>
    </Nav>
  );
}
