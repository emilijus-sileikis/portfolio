import "./About.css";

function About() {

    return (
        <div className="about-container" id="about">
            <div className="box-shadow-full">
                <div className="row">
                    <div className="col-md-3 col-sm-12">
                        <div className="row general-info">
                            <div className="col-sm-12 col-md-12">
                                <div className="about-img">
                                    <img src="https://picsum.photos/300/300" className="img-fluid rounded b-shadow-a"
                                         alt="Emilijus"/>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12">
                                <div className="about-info mt-3">
                                    <p><span className="title-s">Name: </span> <span>Emilijus Šileikis</span></p>
                                    <p><span className="title-s">Profile: </span> <span>Full-stack developer</span></p>
                                    <p><span className="title-s">Email: </span> <span>sileikise@gmail.com</span></p>
                                    <p><span className="title-s">Phone: </span> <span>+37065630663</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <div className="about-me pt-4 pt-md-0">
                            <div className="title-box-2">
                                <h5 className="title-left">
                                    About me
                                </h5>
                            </div>
                            <p className="lead">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in augue lobortis,
                                feugiat sem sit amet, venenatis urna. Quisque placerat metus vitae consequat cursus.
                                Donec et lorem purus. Proin volutpat neque vitae dolor aliquam dictum. Sed tempus
                                convallis mattis. Cras id bibendum dui, a rutrum risus.
                            </p>
                            <p className="lead">
                                Suspendisse at mauris sed purus vestibulum sodales ac quis dolor. Curabitur pretium
                                tincidunt tincidunt. Praesent sed consequat sem, posuere tincidunt metus. Donec eget
                                convallis enim. Pellentesque tincidunt pellentesque mi nec laoreet. Fusce rhoncus
                                vehicula dui, nec molestie augue sodales non.
                            </p>
                            <p className="lead">
                                Nullam id sem volutpat, hendrerit nibh ac, commodo nunc. Mauris pharetra lorem eu
                                pretium placerat. Suspendisse sodales mollis dolor, a molestie quam maximus sit amet.
                                Suspendisse eu sem quis eros pellentesque elementum nec a est. Sed ut justo sed velit
                                ornare gravida. Suspendisse et molestie neque, nec semper leo. Duis condimentum, orci
                                quis molestie aliquam, dui lorem dictum dui, in ultrices ligula urna sed elit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;