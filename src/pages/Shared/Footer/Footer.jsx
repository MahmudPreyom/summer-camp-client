import React from "react";
import logo from "../../../assets/logo.png"
import { Link } from "react-router-dom"
import { FaFacebookSquare,FaFacebookMessenger,FaInstagramSquare,FaYoutube,FaSchool } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import { MdLocationOn } from 'react-icons/md'


const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <div>
                    <img src={logo} alt="" />
                    <h3 className="text-2xl font-bold">MI Learning</h3>
                    <p>Summer Vacation Camp<br />Music Instrumental Learning</p>
                </div>
                <div className="mt-6">
                    <span className="footer-title">Address</span>
                    <a className="link link-hover flex gap-2"><div><FaSchool></FaSchool></div><div className="-mt-1">Central High School</div></a>
                    <a className="link link-hover flex gap-2"><div><MdLocationOn></MdLocationOn></div><div className="-mt-1">Dhaka, Danmondi 12/46</div></a>
                    <span className="footer-title">Contact Info</span>
                    <a className="link link-hover flex gap-2"><div><FiPhoneCall></FiPhoneCall></div><div className="-mt-1">01564728906</div></a>
                </div>
                <div className="mt-4">
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4">
                        <Link><FaFacebookSquare style={{fontSize: '1.5rem'}}></FaFacebookSquare></Link>
                        <Link><FaFacebookMessenger style={{fontSize: '1.5rem'}}></FaFacebookMessenger></Link>
                        <Link><FaInstagramSquare style={{fontSize: '1.5rem'}}></FaInstagramSquare></Link>
                        <Link><FaYoutube style={{fontSize: '1.5rem'}}></FaYoutube></Link>
                    </div>
                </div>
            </footer>
            <div className="footer footer-center p-4 bg-neutral text-neutral-content">
                <p>Copyright © 2023 - All right reserved by SUMMER VACATION CAMP</p>
            </div>
        </div>
    );
};

export default Footer;