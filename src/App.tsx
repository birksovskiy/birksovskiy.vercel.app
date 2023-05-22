import React, { useCallback } from "react";

import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";
import { ISourceOptions } from "tsparticles-engine";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";

import particlesOptions from "./particles.json";

function App() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return (
        <div className='app'>
            <Particles options={particlesOptions as ISourceOptions} init={particlesInit}/>
            <header className="header">
                <img src="https://readme-typing-svg.demolab.com?font=JetBrainsMonoNL+NF&weight=700&size=34&duration=4000&pause=1000&color=9400d3&center=true&width=400&height=55&lines=Pavel+Biryukov;birksovskiy" alt="Typing SVG" />
                I'm real, but not everyone is
                <p>
                    <a href='https://github.com/birksovskiy'><FontAwesomeIcon icon={ faGithub } size="xl" style={{marginRight: "10px"} as React.CSSProperties} /></a>
                    <a href='https://t.me/birkbirksovskiysovskiy'><FontAwesomeIcon icon={ faTelegram } size="xl" style={{marginLeft: "10px"} as React.CSSProperties} /></a>
                </p>
            </header>
        </div>
    );
}

export default App;
