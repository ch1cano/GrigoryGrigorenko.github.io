import React from "react";
import "./style.css"

import inst from "../../img/icons/instagram.svg"
import gitHub from "../../img/icons/gitHub.svg"
import telegram from "../../img/icons/telegram.png"


const Footer = () => {
    return <div>
        <footer class="footer">
            <div class="container">
                <div class="footer__wrapper">
                    <ul class="social">

                        <li class="social__item"><a href="#!"><img src={gitHub} alt="Link" /></a></li>
                        <li class="social__item"><a href="#!"><img src={telegram} alt="Link" /></a></li>
                        <li class="social__item"><a href="#!"><img src={inst} alt="Link" /></a></li>

                    </ul>
                    <div class="copyright">
                        <p>© 2022 ch1cano</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>;
};

export default Footer;
