import React from "react";
import "./style.css"

import gitHub from "../../img/icons/gitHub.svg"
import telegram from "../../img/icons/telegram.png"
import pochta from "../../img/icons/pochta.png"


const Footer = () => {
    return <div>
        <footer class="footer">
            <div class="container">
                <div class="footer__wrapper">
                    <ul class="social">

                        <li class="social__item"><a href="https://github.com/ch1cano" target="_blank"><img src={gitHub} alt="Link" /></a></li>
                        <li class="social__item"><a href="https://t.me/by_ch1cano" target="_blank"><img src={telegram} alt="Link" /></a></li>
                        <li class="social__item"><a href="ch1canoo358@gmail.com" target="_blank"><img src={pochta} alt="Link" /></a></li>

                    </ul>
                    <div class="copyright">
                        <p>© 2023 ch1cano</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>;
};

export default Footer;
