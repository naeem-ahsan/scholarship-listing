import React from "react";
import {FaFacebook, FaInstagram, FaTwitter, FaGithub, FaDribbble} from 'react-icons/fa';

const Footer = () => {

  return (
    <footer className=" mt-24">
      <div className="top">
        <ul className=" text-yellow-400 flex justify-center">
          <li className=" px-5"><a href="/">Discover Guilds</a></li>
          <li className=" px-5"><a href="/">Compare</a></li>
          <li className=" px-5"><a href="/">Team</a></li>
          <li className=" px-5"><a href="/">Press</a></li>
          <li className=" px-5"><a href="/">Whitepaper</a></li>
          <li className=" px-5"><a href="/">Partners</a></li>
        </ul>
      </div>
      <div className="mid my-8">
      <ul className=" text-yellow-400 flex justify-center">
          <li className=" px-5"><a href="/"><FaFacebook className=" w-[20px] h-[20px] hover:text-blue-300"/></a></li>
          <li className=" px-5"><a href="/"><FaInstagram className=" w-[20px] h-[20px] hover:text-blue-300"/></a></li>
          <li className=" px-5"><a href="/"><FaTwitter className=" w-[20px] h-[20px] hover:text-blue-300"/></a></li>
          <li className=" px-5"><a href="/"><FaGithub className=" w-[20px] h-[20px] hover:text-blue-300"/></a></li>
          <li className=" px-5"><a href="/"><FaDribbble className=" w-[20px] h-[20px] hover:text-blue-300"/></a></li>
        </ul>
      </div>
      <h1 className="flex justify-center text-yellow-400 mb-12">© 2020 Workflow, Inc. All rights reserved.</h1>
    </footer>
  );
}

export default Footer;