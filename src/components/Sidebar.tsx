import React from 'react'
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Image from 'next/image';

const Sidebar = () => {
    return (
        <aside className='sticky top-0 left-0 w-96 h-auto sidebar-box flex flex-col'>
            {/* Profile image goes here */}
            <div className="sidebar-image-container flex items-center justify-center">
                <Image
                    src={'/main.webp'}
                    alt="Me at Shenandoah National Park"
                    width={300}
                    height={300}

                />
            </div>
            {/* Social links go here */}
            <div className="sidebar-social-container flex flex-col items-center justify-center gap-3">
                <h2>Socials</h2>
                <a
                    href='https://github.com/nehjoshi/'
                    target='_blank'
                    rel='noreferrer'
                    className="space-x-2 p-2 rounded-md sidebar-social-link relative"
                    aria-label="Visit Neh Joshi's GitHub profile (opens in a new tab)">
                    <FaGithub className="social-icon" aria-hidden="true" />
                    <span className="social-link-text">GitHub</span>
                </a>

                <a
                    href='https://x.com/nehjoshi5/'
                    target='_blank'
                    rel='noreferrer'
                    className="flex items-center justify-center space-x-2 p-2 rounded-md sidebar-social-link relative"
                    aria-label="Visit Neh Joshi's X profile (opens in a new tab)">
                    <BsTwitterX className="social-icon" aria-hidden="true" />
                    <span className="social-link-text">X</span>
                </a>

                <a
                    href='https://www.linkedin.com/in/nehjoshi/'
                    target='_blank'
                    rel='noreferrer'
                    className="flex items-center justify-center space-x-2 p-2 rounded-md sidebar-social-link relative"
                    aria-label="Visit Neh Joshi's LinkedIn profile (opens in a new tab)"
                >
                    <FaLinkedin className="social-icon" aria-hidden="true" />
                    <span className="social-link-text">LinkedIn</span>
                </a>

                <a
                    href='https://medium.com/@nehjoshi5'
                    target='_blank'
                    rel='noreferrer'
                    className="flex items-center justify-center space-x-2 p-2 rounded-md sidebar-social-link relative"
                    aria-label="Visit Neh Joshi's Medium page (opens in a new tab)"
                >
                    <FaMedium className="social-icon" aria-hidden="true" />
                    <span className="social-link-text">Medium</span>
                </a>

            </div>
        </aside>
    )
}

export default Sidebar