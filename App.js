import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './components/Navbar.css';
import './components/About.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
    return (
        <div id="home">
            <Navbar />
            <About />
            <Skills />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;
