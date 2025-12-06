import React from "react";
import Logo from "../logo/Logo";
import { MdOutlineWatchLater } from "react-icons/md";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal py-15 bg-primary-content text-white/80 p-10">
        <aside>
            <Logo />
            <ul className="py-3 space-y-2">
                <li className="flex items-center gap-2"><CiPhone color="#F94C10 " size={20} /> +880 1706727408</li>
                <li className="flex items-center gap-2"><CiLocationOn color="#F94C10 " size={20} /> A24BT5 Building dhaka</li>
                <li className="flex items-center gap-2"><CiMail color="#F94C10 " size={20} />shohan@cv.com</li>
                <li className="flex items-center gap-2"><MdOutlineWatchLater color="#F94C10 " size={20}/>Daily: 10:00 Am - 5:00 Pm </li>
            </ul>
        </aside>
        <nav className="text-base  space-y-2">
          <h6 className="footer-title">Menu</h6>     
        <a className="link link-hover">Classes</a>
        <a className="link link-hover">Programs</a>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Team</a>
          <a className="link link-hover">Contact</a>
        
        </nav>
        <nav className="text-base  space-y-2">
          <h6 className="footer-title">Courses</h6>
          <a className="link link-hover">Painting</a>
          <a className="link link-hover">Sketch</a>
          <a className="link link-hover">Drawing</a>
          <a className="link link-hover">Sculpture</a>
          <a className="link link-hover">Digital</a>
        </nav>
       <nav className="text-base  space-y-2">
          <h6 className="footer-title">Info For</h6>
          <a className="link link-hover">Prospective Student</a>
          <a className="link link-hover">Parents & Families</a>
          <a className="link link-hover">Transfer Students</a>
          <a className="link link-hover">Industry Leader</a>
          <a className="link link-hover">Military Student</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
<footer className="footer sm:footer-horizontal bg-primary-content text-white/60 p-10">
  <aside>
    <Logo />
    <ul>
        <li></li>
    </ul>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>;
