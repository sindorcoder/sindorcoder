import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Skills from "./components/skills/Skills.jsx";

function App() {
    return (<div className={'max-w-[500px] px-4 mx-auto'}>
        <About/>
        <Contact/>
        <Skills/>
    </div>);
}

export default App;
