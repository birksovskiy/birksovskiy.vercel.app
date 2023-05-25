import { FC, useCallback } from 'react';

import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { ISourceOptions } from 'tsparticles-engine';
import type { Engine } from 'tsparticles-engine';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';

import links from './links.json';
import particlesOptions from './particles.json';

const App: FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
      await loadFull(engine);
  }, []);

  return (
    <div className='app'>
      <Particles 
        options={particlesOptions as ISourceOptions}
        init={particlesInit}
      />
      <header className="header">
        <a href='https://mynickname.com/birksovskiy'>
          <img
            src={ links.typing_svg_link }
            alt="Typing SVG"
          />
        </a>
        I'm real, but not everyone is
        <p className="link-block">
          <a title="GitHub" href={ links.github_profile }>
            <FontAwesomeIcon
              icon={ faGithub }
              size="2xl"
            />
          </a>
          <a title="Telegram" href={ links.telegram_channel }>
            <FontAwesomeIcon
              icon={ faTelegram }
              size="2xl"
            />
          </a>
        </p>
      </header>
    </div>
    );
};

export default App;
