import React from 'react'
import './footer.css'
import FooterNavItem from './FooterNavItem';

function Footer() {
    const usefulLinks = [
        'Home',
        'Movies',
        'My List',
        'Terms of Service',
        'Privacy Policy',
    ];

    const locations = [
        'Dolorum optio',
        'Non rem rerum',
        'Cras fermetum odio',
        'Justo eget',
        'Femetum icalus',

    ]
  return (
    <footer id='footer' className='footer'>
        <div className="footer-top">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-5 col-md-12 footer-info">
                        <a href="" className="logo d-flex align-items-center">
                            <span>FLIXIFY</span>
                        </a>
                        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. 
                            Torquent convallis mi tortor nec nisi dui torquent felis amet. 
                            Ultrices viverra posuere netus justo mattis cubilia. 
                            Netus lobortis vulputate netus aliquet per cras euismod fermentum.
                        </p>
                        <div className="social-links mt-3">
                            <a href="" className="twitter">
                                <ion-icon name="logo-twitter"></ion-icon>
                            </a>
                            <a href="" className="facebook">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                            <a href="" className="instagram">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                            <a href="" className="youtube">
                                <ion-icon name="logo-youtube"></ion-icon>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-2 col-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            {usefulLinks.map(link => (
                                <FooterNavItem key={link} name={link} />
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-2 col-6 footer-links">
                        <h4>Locations</h4>
                        <ul>
                            {locations.map(link => (
                                <FooterNavItem key={link} name={link} />
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                        <h4>Contact Us</h4>
                        <p>
                            Street Name <br/>
                            City Name, State 123456
                            <br/>
                            <strong>Phone:</strong>+1 234 5678 00
                            <br />
                            <strong>Email:</strong>info@example.com
                            <br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="copyright">
                &copy; Copyright{' '}
                <strong>
                    <span>Agile DevGrit, Inc.</span>
                </strong>
                .All Rights Reserved
            </div>
            <div className="credits">
                Design by <a>DStudio Technology</a>
            </div>
        </div>
    </footer>
  );
}

export default Footer