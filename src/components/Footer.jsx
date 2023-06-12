import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faInstagram, faGooglePlusSquare, faYelp, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import '../footer.css'

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="FooterContainer">
                <div className="FooterColumn">
                    <h3 className="FooterColumnTitle">Contact Information</h3>
                    <ul className="FooterList">
                        <li className="FooterListItem">
                            110 D St SE, Auburn, WA
                        </li>
                        <li className="FooterListItem">
                            Phone: 253-880-1828
                        </li>
                        <li className="FooterListItem">
                            Text: 425-390-4263
                        </li>
                        <li className="FooterListItem">
                            Fax: 253-880-1928
                        </li>
                        <li className="FooterListItem">
                            Email: info@pacificnwdentistry.com
                        </li>
                    </ul>
                </div>

                <div className="FooterColumn" style={{}}>
                    <h3 className="FooterColumnTitle">Office hours</h3>
                    <table className="OfficeHoursTable">
                        <tbody>
                            <tr>
                                <td>Monday</td>
                                <td>8:00 AM - 5:00 PM</td>
                            </tr>
                            <tr>
                                <td>Tuesday</td>
                                <td>8:00 AM - 5:00 PM</td>
                            </tr>
                            <tr>
                                <td>Wednesday</td>
                                <td>8:00 AM - 5:00 PM</td>
                            </tr>
                            <tr>
                                <td>Thursday</td>
                                <td>8:00 AM - 5:00 PM</td>
                            </tr>
                            <tr>
                                <td>Friday</td>
                                <td>Closed</td>
                            </tr>
                            <tr>
                                <td>Saturday</td>
                                <td>8:00 AM - 2:00 PM (by appt only)</td>
                            </tr>
                            <tr>
                                <td>Sunday</td>
                                <td>Closed</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="FooterColumn">
                    <h3 className="FooterColumnTitle">Our Services</h3>
                    <ul className="FooterList">
                        <li className="FooterListItem">Preventive</li>
                        <li className="FooterListItem">Cosmetic</li>
                        <li className="FooterListItem">Orthodontic</li>
                        <li className="FooterListItem">Surgical</li>
                        <li className="FooterListItem">Sleep Apnea</li>
                    </ul>
                </div>
                <div className="FooterColumn">
                    <h3 className="FooterColumnTitle">Connect</h3>
                    <ul className="FooterList">
                        <li className="FooterListItem">
                            <a href='https://www.facebook.com/pacificnwdentistry/' target="_blank"
                                rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookSquare} /> Facebook</a></li>
                        <li className="FooterListItem">
                            <a href='https://twitter.com/pnwdentistry' target="_blank"
                                rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitterSquare} /> Twitter</a></li>
                        <li className="FooterListItem">
                            <a href='https://www.instagram.com/pacificnwdentistry/' target="_blank"
                                rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
                        <li className="FooterListItem">
                            <a href='https://www.google.com/search?q=Pacific+NW+Dentistry,+110+D+St+SE,+Auburn,+WA+98002&ludocid=17158583154351756348#lrd=0x5490587a64a1efdb:0xee1f88780423543c,1' target="_blank"
                                rel="noopener noreferrer"><FontAwesomeIcon icon={faGooglePlusSquare} /> Google+</a></li>
                        <li className="FooterListItem">
                            <a href='https://www.youtube.com/channel/UCnjTikCVI8I9iNNb0xhfbng' target="_blank"
                                rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutubeSquare} /> YouTube</a></li>
                        <li className="FooterListItem">
                            <a href='https://www.yelp.com/biz/pacific-nw-dentistry-auburn-2' target="_blank"
                                rel="noopener noreferrer"><FontAwesomeIcon icon={faYelp} /> Yelp</a></li>
                    </ul>
                </div>
            </div>
            <div className="FooterBottom">
                <div className="FooterText">
                    &copy; {new Date().getFullYear()} KQ Software Dev. All rights reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;
