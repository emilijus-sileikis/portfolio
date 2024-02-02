import "./Projects.css";
import "./Skills.css";
import {
    bloom1,
    bloom2,
    bloom3,
    bloom4,
    bhut1,
    bhut2,
    bhut3,
    caverns2,
    caverns3,
    caverns1,
    summerbod2,
    summerbod3,
    summerbod1,
    wokevillage1,
    wokevillage2,
    wokevillage3,
    wokevillage4
} from "../assets/index.js";

function Projects() {

    return (
        <section className="projects-container" id="projects">
            <h3 className="skill-title">Projects</h3>
            <div className="line"></div>

            <div className="row">
                <div className="col-sm-12 col-md-6 skill">
                    <div className="card mt-3">
                        <div className="card-body">
                            <div className="image">
                                <img className="img-fluid" src={bloom1} alt="CRUD"/>
                            </div>
                            <h4 className="card-title mt-2">Laravel 10 CRUD generator</h4>
                            <p className="card-text">
                                <small className="date">Jan 24, 2024</small> / <small className="type">Web
                                Full-Stack</small>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 skill">
                    <div className="card mt-3">
                        <div className="card-body">
                            <div className="image">
                                <img className="img-fluid" src={wokevillage2} alt="WokeVillage"/>
                            </div>
                            <h4 className="card-title mt-2">WokeVillage</h4>
                            <p className="card-text">
                                <small className="date">Jan 21, 2022</small> / <small className="type">Game
                                Development</small>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 skill">
                    <div className="card mt-3">
                        <div className="card-body">
                            <div className="image">
                                <img className="img-fluid" src={summerbod1} alt="Summerbod"/>
                            </div>
                            <h4 className="card-title mt-2">Summerbod</h4>
                            <p className="card-text">
                                <small className="date">Jun 15, 2022</small> / <small className="type">Web
                                Full-Stack</small>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 skill">
                    <div className="card mt-3">
                        <div className="card-body">
                            <div className="image">
                                <img className="img-fluid" src={bhut2} alt="Bhut"/>
                            </div>
                            <h4 className="card-title mt-2">Bhut</h4>
                            <p className="card-text">
                                <small className="date">May 1, 2023</small> / <small className="type">Web
                                Full-Stack</small>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 skill">
                    <div className="card mt-3">
                        <div className="card-body">
                            <div className="image">
                                <img className="img-fluid" src={caverns1} alt="Forgotten Caverns"/>
                            </div>
                            <h4 className="card-title mt-2">Forgotten Caverns</h4>
                            <p className="card-text">
                                <small className="date">Sep 8, 2023</small> / <small className="type">Game
                                Development</small>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 skill">
                    <div className="card mt-3">
                        <div className="card-body">
                            <div className="image">
                                <img className="img-fluid" src="https://picsum.photos/400/250" alt="Project 1"/>
                            </div>
                            <h4 className="card-title mt-2">Work Experience</h4>
                            <p className="card-text">
                                <small className="date">Jan 2, 2024</small> / <small className="type">Web
                                Full-Stack</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Projects;