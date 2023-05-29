import { FC, useCallback } from 'react'

import Particles from 'react-particles'
import { loadFull } from 'tsparticles'
import { ISourceOptions } from 'tsparticles-engine'
import type { Engine } from 'tsparticles-engine'

import { faGithub, faTelegram, faMastodon } from '@fortawesome/free-brands-svg-icons'

import links from './links.json'
import particlesOptions from './particles.json'

import Link from './components/Link/Link'

const App: FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
      await loadFull(engine)
  }, [])

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
        <p>
          <Link name="GitHub" icon={ faGithub } link={ links.github_profile } />
          <Link name="Mastodon" icon={ faMastodon } link={ links.mastodon_profile } />
          <Link name="Telegram" icon={ faTelegram } link={ links.telegram_channel } />
        </p>
      </header>
    </div>
    )
}

export default App
