import React from "react";
import s from "./Main.module.css";
import backend from "../../img/icons/backend.PNG"
import frontend from "../../img/icons/frontend.PNG"


const Main = () => {
    return <div>
        <main class={s.section}>
            <div class={s.container}>
                <ul class={s.contentList}>
                    <li class={s.contentListItem}>
                        <h2 class={s.titleTwo}>Frontend</h2><img src={frontend} width="100px" height="100px" />
                        <p>JavaScript, ReactJS, NextJs, Git, NPM, Yarn, HTML, CSS, SASS, BootStrap</p>
                    </li>
                    <li class={s.contentListItem}>
                        <h2 class={s.titleTwo}>Backend</h2><img src={backend} width="100px" height="100px" />
                        <p>Node Js, Telegraf, Telegram Bot API</p>
                    </li>
                </ul>
            </div>
        </main>
    </div >;
};

export default Main;
