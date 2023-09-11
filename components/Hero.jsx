import styles from "../style";
import {picture} from "../assets";

function Hero() {
    return (
        <section id="about" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

                <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
                    Web Developer
                </h1>

                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                        <span className="text-gradient">Emilijus Šileikis</span>{" "}
                    </h1>
                </div>

                <p className={`${styles.paragraph} max-w-[470px] mt-5 text-justify`}>
                    I am a web developer with a passion for creating beautiful and functional websites.
                    I am currently looking for a job as a junior web developer. <br/><br/>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt
                    ultrices, nunc libero dictum elit, vitae lacinia libero quam id nisl. Sed euismod, diam id
                    tincidunt ultrices, nunc libero dictum elit, vitae lacinia libero quam id nisl. <br/><br/>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt
                    ultrices, nunc libero dictum elit, vitae lacinia libero quam id nisl. Sed euismod, diam id
                    tincidunt ultrices, nunc libero dictum elit, vitae lacinia libero quam id nisl. <br/><br/>
                </p>
                <div className="flex justify-center items-center">
                   <a href="#skills"><button className="bg-blue-gradient text-outline text-white font-bold py-2 px-4 rounded-md mr-4 mb-4 sm:mb-0 w-32">Skills</button></a>
                    <a href="#portfolio"><button className="bg-blue-gradient text-white font-bold py-2 px-4 rounded-md mr-4 mb-4 sm:mb-0 w-32">Portfolio</button></a>
                </div>
            </div>

            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                <img src={picture} alt="photo" className="w-[85%] h-[90%] relative z-[5] rounded" />

                {/* gradient start */}
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                <div className="absolute z-[2] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                {/* gradient end */}
            </div>

        </section>
    );
}

export default Hero;