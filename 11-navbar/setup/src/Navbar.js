import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showLinks, setshowLinks] = useState(false);
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect()
    console.log(linksHeight);
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = '0px'
    }
  }, [showLinks])
  
  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="logo" srcset="" />
            <button
              className="nav-toggle"
              onClick={() => {
                setshowLinks(!showLinks);
              }}
            >
              <FaBars />
            </button>
          </div>
          {showLinks && 
          <div className='links-container' ref={linksContainerRef}>
            <ul className="links"ref={linksRef}>
              {/* {links.map((link)=><li key={link.id}><a href={link.url}>{link.text}</a></li>)} */}
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
            <ul className="social-links">
              {social.map((s) => {
                const { id, url, icon } = s;
                return (
                  <li key={id}>
                    <a href={url}>{icon}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          }
        </div>
      </nav>
    </>
  );
};

export default Navbar;
