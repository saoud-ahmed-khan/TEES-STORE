import React from 'react'
import "./footer.css"

export const Footer = () => {
    return (
        <div>
            <footer className="footer-distributed">

                <div className="footer-left">

                    <h3>TEES <span>STORE</span></h3>

                    <p className="footer-links">
                        <a href="https://github.com/saoud-ahmed-khan">Home</a>
·
 <a href="https://github.com/saoud-ahmed-khan">Blog</a>
·
 <a href="https://github.com/saoud-ahmed-khan">Pricing</a>
·
 <a href="https://github.com/saoud-ahmed-khan">About</a>
·
 <a href="https://github.com/saoud-ahmed-khan">Faq</a>
·
 <a href="https://github.com/saoud-ahmed-khan">Contact</a>
                    </p>

                    <p className="footer-company-name">design by &copy; saoud</p>
                </div>

                <div className="footer-center">

                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span>21 Revolution Street</span> Karachi, Pakistan</p>
                    </div>

                    <div>
                        <i className="fa fa-phone"></i>
                        <p>+92 334 0394150</p>
                    </div>

                    <div>
                        <i className="fa fa-envelope"></i>
                        <p>saoudkhan987@gmail.com</p>
                    </div>

                </div>

                <div className="footer-right">

                    <p classNameName="footer-company-about">
                        <span>About the company</span>
                    I am a fullstack web devoloper striving to polish my skills set.
 </p>

                    <div className="footer-icons">

                        <a href="https://www.facebook.com/saoud.khan.18"><i className="fa fa-facebook"></i></a>
                        <a href="https://twitter.com/SaoudAhmedKhan2"><i className="fa fa-twitter"></i></a>
                        <a href="https://www.instagram.com/saoud_ahmed_khan/"><i className="fa fa-instagram"></i></a>
                        <a href="https://github.com/saoud-ahmed-khan"><i className="fa fa-github"></i></a>

                    </div>

                </div>

            </footer>
        </div>
    )
}
