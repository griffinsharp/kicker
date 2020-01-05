import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKickstarterK } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="footer-container">
            
                <div className="footer-cats">
                    <div className="footer-cats-inner">
                        <Link className="footer-link" to="/category/1">Arts</Link>
                        <Link className="footer-link" to="/category/2">Comics & Illustration</Link>
                        <Link className="footer-link" to="/category/3">Design & Tech</Link>
                        <Link className="footer-link" to="/category/4">Film</Link>
                        <Link className="footer-link" to="/category/5">Food & Craft</Link>
                        <Link className="footer-link" to="/category/6">Games</Link>
                        <Link className="footer-link" to="/category/7">Music</Link>
                        <Link className="footer-link" to="/category/8">Publishing</Link>
                    </div>
                    
                </div>

                <div className="footer-below-container">
                    <div className="footer-below">
                        <div className="footer-socials">
                            <div className="social-fav-footer">
                                <a href="https://github.com/griffinsharp" target="_blank"><FontAwesomeIcon className="gHub" icon={faGithub} alt="github-icon" /></a>
                            </div>
                            <div className="social-fav-footer">
                                <a href="https://www.linkedin.com/in/griffinesharp/" target="_blank"><FontAwesomeIcon icon={faLinkedin} alt="linkedin-icon" /></a>
                            </div>
                            <div className="social-fav-footer">
                                <a href="http://www.griffinsharp.com"><FontAwesomeIcon icon={faCode} alt="code-icon" /></a>
                            </div>
                        </div>
                        <div className="footer-credits">
                            <a href="https://kicker-app.herokuapp.com/#/"><FontAwesomeIcon icon={faKickstarterK} alt="kickstarter-icon" /></a>
                        </div>
                    </div>
                </div>
        
        </div>
    )
}


export default Footer;