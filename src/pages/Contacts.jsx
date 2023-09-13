import React from "react";

const Contacts = () => {
    return <div>
        <main class="section">
            <div class="container">
                <h1 class="title-1">Contacts:</h1>

                <ul class="content-list">
                    <li class="content-list__item">
                        <h2 class="title-2">Location</h2>
                        <p>Krasnodar, Russia</p>
                    </li>
                    <li class="content-list__item">
                        <h2 class="title-2">Telegram</h2>
                        <p><a href="https://t.me/by_ch1cano" target="_blank">@by_ch1cano</a></p>
                    </li>
                    <li class="content-list__item">
                        <h2 class="title-2">GitHub </h2>
                        <p><a href="https://github.com/ch1cano" target="_blank">https://github.com/ch1cano</a></p>
                    </li>
                    <li class="content-list__item">
                        <h2 class="title-2">Gmail</h2>
                        <p><a href="ch1canoo358@gmail.com" target="_blank">ch1canoo358@gmail.com</a></p>
                    </li>
                </ul>

            </div>
        </main>
    </div>;
};

export default Contacts;
