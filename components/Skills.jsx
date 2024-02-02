import "./Skills.css";
import {
    FaPhp,
    FaJava,
    FaJs,
    FaDatabase,
    FaLaravel,
    FaHtml5,
    FaCss3,
    FaWordpress,
    FaFire,
    FaGithub,
    FaLinux,
    FaReact
} from "react-icons/fa";

import Rating from "./Rating";

function Skills() {

    return (
        <section className="skills-container" id="skills">
            <h3 className="skill-title">Skills</h3>
            <div className="line"></div>

            <div className="row">
                <div className="col-sm-12 col-md-4 skill" id="skill">
                    <div className="card mt-3">
                        <div className="card-body justify-content-center flex flex-column align-items-center rounded-5">
                            <h2 className="card-title text-center flex p-2"><FaPhp/> PHP</h2>
                            <h3 className="p-2 text-center">
                                4 years
                            </h3>
                            <h3 className="flex p-2 text-center">
                                <Rating rating={4.5}/>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 skill" id="skill">
                    <div className="card mt-3">
                        <div className="card-body justify-content-center flex flex-column align-items-center rounded-5">
                            <h2 className="card-title text-center flex p-2"><FaLaravel/> Laravel</h2>
                            <h3 className="p-2 text-center">
                                4 years
                            </h3>
                            <h3 className="flex p-2 text-center">
                                <Rating rating={4.5}/>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 skill" id="skill">
                    <div className="card mt-3">
                        <div className="card-body justify-content-center flex flex-column align-items-center rounded-5">
                            <h2 className="card-title text-center flex p-2"><FaHtml5/> HTML</h2>
                            <h3 className="p-2 text-center">
                                5 years
                            </h3>
                            <h3 className="flex p-2 text-center">
                                <Rating rating={5}/>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 skill" id="skill">
                    <div className="card mt-3">
                        <div className="card-body justify-content-center flex flex-column align-items-center rounded-5">
                            <h2 className="card-title text-center flex p-2"><FaCss3/> CSS</h2>
                            <h3 className="p-2 text-center">
                                5 years
                            </h3>
                            <h3 className="flex p-2 text-center">
                                <Rating rating={4.5}/>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 skill" id="skill">
                    <div className="card mt-3">
                        <div className="card-body justify-content-center flex flex-column align-items-center rounded-5">
                            <h2 className="card-title text-center flex p-2"><FaJava/> Java</h2>
                            <h3 className="p-2 text-center">
                                1.5 years
                            </h3>
                            <h3 className="flex p-2 text-center">
                                <Rating rating={3}/>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 skill" id="skill">
                    <div className="card mt-3">
                        <div className="card-body justify-content-center flex flex-column align-items-center rounded-5">
                            <h2 className="card-title text-center flex p-2"><FaJs/> JavaScript</h2>
                            <h3 className="p-2 text-center">
                                4.5 years
                            </h3>
                            <h3 className="flex p-2 text-center">
                                <Rating rating={4.5}/>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 skill" id="skill">
                    <div className="card mt-3">
                        <div className="card-body justify-content-center flex flex-column align-items-center rounded-5">
                            <h2 className="card-title text-center flex p-2"><FaDatabase/> MySQL</h2>
                            <h3 className="p-2 text-center">
                                3 years
                            </h3>
                            <h3 className="flex p-2 text-center">
                                <Rating rating={3.5}/>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 skill" id="skill">
                    <div className="card mt-3">
                        <div className="card-body justify-content-center flex flex-column align-items-center rounded-5">
                            <h2 className="card-title text-center flex p-2"><FaWordpress/> Wordpress</h2>
                            <h3 className="p-2 text-center">
                                2 years
                            </h3>
                            <h3 className="flex p-2 text-center">
                                <Rating rating={3}/>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 skill" id="skill">
                    <div className="card mt-3">
                        <div className="card-body justify-content-center flex flex-column align-items-center rounded-5">
                            <h2 className="card-title text-center flex p-2"><FaFire/> CodeIgniter</h2>
                            <h3 className="p-2 text-center">
                                2 years
                            </h3>
                            <h3 className="flex p-2 text-center">
                                <Rating rating={3}/>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 skill" id="skill">
                    <div className="card mt-3">
                        <div className="card-body justify-content-center flex flex-column align-items-center rounded-5">
                            <h2 className="card-title text-center flex p-2"><FaGithub/> GIT</h2>
                            <h3 className="p-2 text-center">
                                6 years
                            </h3>
                            <h3 className="flex p-2 text-center">
                                <Rating rating={5}/>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 skill" id="skill">
                    <div className="card mt-3">
                        <div className="card-body justify-content-center flex flex-column align-items-center rounded-5">
                            <h2 className="card-title text-center flex p-2"><FaLinux/> Ansible</h2>
                            <h3 className="p-2 text-center">
                                1 year
                            </h3>
                            <h3 className="flex p-2 text-center">
                                <Rating rating={1.5}/>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 skill" id="skill">
                    <div className="card mt-3">
                        <div className="card-body justify-content-center flex flex-column align-items-center rounded-5">
                            <h2 className="card-title text-center flex p-2"><FaReact/> React</h2>
                            <h3 className="p-2 text-center">
                                0.5 years
                            </h3>
                            <h3 className="flex p-2 text-center">
                                <Rating rating={1.5}/>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Skills;