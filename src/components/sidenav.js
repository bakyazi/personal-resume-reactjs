import React, {useContext} from 'react';
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import { FaBlog, FaHome, FaInfo,FaMailBulk,FaPaperclip, FaGithub } from 'react-icons/fa';
import {Link} from 'react-router-dom'
import { PersonContext } from '../App';


function SideNav({ collapsed, toggled, handleToggleSidebar }) {
  const person = useContext(PersonContext);

    return (
        <ProSidebar
            breakPoint="md"
            collapsed={collapsed}
            toggled={toggled}
            onToggle={handleToggleSidebar}
        >
            <SidebarHeader>
                <div
                    style={{
                        padding: '24px',
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        fontSize: 18,
                        letterSpacing: '1px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        display: 'flex',
                        flexDirection: "column",
                        alignItems: 'center',
                    }}
                >
                    <img className="avatarProfilePic" src={person.profilePictureUrl} alt="Avatar" />
                    {person.fullName}
                </div>
            </SidebarHeader>
            <SidebarContent>
                <div style ={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100%',
                    fontSize: 16
                }}>
                    <Menu iconShape="square">
                        <MenuItem icon={<FaHome />}><Link to="/">Home</Link></MenuItem>
                        <MenuItem icon={<FaInfo />}><Link to="/about">About</Link></MenuItem>
                        <MenuItem icon={<FaPaperclip />}><Link to="/resume">Resume</Link></MenuItem>
                        <MenuItem icon={<FaMailBulk />}><Link to="/contact">Contact</Link></MenuItem>
                        <MenuItem icon={<FaBlog />}><Link to="/blog">Blog</Link></MenuItem>
                    </Menu>

                </div>
            </SidebarContent>
            <SidebarFooter style={{ textAlign: 'center' }}>
                <div className="sidebar-btn-wrapper"
                    style={{
                        padding: '20px 24px',
                    }}
                >
                    <a
                        href="https://github.com/bakyazi/personal-resume-reactjs"
                        target="_blank"
                        className="sidebar-btn"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                        <span> View Source</span>
                    </a>
                </div>
            </SidebarFooter>
        </ProSidebar>
    );
}

export default SideNav;
