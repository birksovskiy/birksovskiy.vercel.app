import React, { useCallback } from 'react';

import type { Engine } from 'tsparticles-engine';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { ISourceOptions } from 'tsparticles-engine';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';

import links from './links.json';
import particlesOptions from './particles.json';

const App = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return (
        <div className='app'>
            <Particles options={particlesOptions as ISourceOptions} init={particlesInit}/>
            <header className="header">
                <img src={ links.typing_svg_link } alt="Typing SVG" />
                I'm real, but not everyone is
                <p>
                    <a title="GitHub" href={ links.github_profile }>
                        <FontAwesomeIcon icon={ faGithub } size="xl" style={{marginRight: "10px"} as React.CSSProperties} />
                    </a>
                    <a title="Telegram" href={ links.telegram_channel }>
                        <FontAwesomeIcon icon={ faTelegram } size="xl" style={{marginLeft: "10px"} as React.CSSProperties} />
                    </a>
                </p>
            </header>
        </div>
    );
}

export default App;
