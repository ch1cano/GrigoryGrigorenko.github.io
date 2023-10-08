import React from "react";
import s from "./Projects.module.css"
import sneakersShop from "../img/projects/sneakers-shop.png"
import productsApp from "../img/projects/productu.png"
import theBotsApp from "../img/projects/TheBots.png"
import WeatherApp from "../img/projects/React-Weather-App.png"
import ToDo from "../img/projects/ToDo-react.png"
import reactExtension from "../img/projects/extension.png"
import sonetify from "../img/projects/sonetify.png"
import psychocon from "../img/projects/psychocon.png"

const Projects = () => {
    return (
        <div className={s.wrapperProj}>
            <div className={s.containerPet}>
                <h1>Pet Projects</h1>
                <div>
                    <h2>Site psychologists</h2>
                    <img src={psychocon} alt="" width={"1300px"} height={"1200px"} />
                </div>
                <div>
                    <h2>Site consultations</h2>
                    <img src={sonetify} alt="" width={"1300px"} height={"1200px"} />
                </div>
                <div>
                    <h2>React extension for facebook/instagram</h2>
                    <img src={reactExtension} alt="" width={"1300px"} height={"1200px"} />
                </div>
                <div>
                    <h2>Sneakers Shop</h2>
                    <img src={sneakersShop} alt="" width={"1300px"} height={"1200px"} />
                </div>
                <div>
                    <h2>Products Shop</h2>
                    <img src={productsApp} alt="" width={"1300px"} height={"1200px"} />
                </div>
                <div>
                    <h2>TheBots</h2>
                    <img src={theBotsApp} alt="" width={"1300px"} height={"1200px"} />
                </div>
                <div>
                    <h2>React Weather App</h2>
                    <img src={WeatherApp} alt="" width={"1300px"} height={"1200px"} />
                </div>
                <div>
                    <h2>My To-do list</h2>
                    <img src={ToDo} alt="" width={"1300px"} height={"1200px"} />
                </div>
            </div>
        </div>
    )
};

export default Projects;
