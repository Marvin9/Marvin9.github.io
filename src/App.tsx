import {AiOutlineMail} from 'react-icons/ai';
import {FaGithub, FaTwitter, FaLinkedin, FaMedium} from 'react-icons/fa';

import './App.css';
import MyImage from './assets/mayursinh-sarvaiya.png';

const iconSize = '28px';

function App() {
  return (
    <div className="portfolio">
      <img
        src={MyImage}
        alt="Mayursinh Sarvaiya Profile Picture"
        className="me"
      />

      <h1>Hi, Mayursinh Sarvaiya from Rajkot, India 🇮🇳.</h1>

      <div id="my-experience" className="experience">
        <div>
          <h2>
            ⏩ Founding Software Engineer @{' '}
            <a href="https://akuity.io" target="__blank">
              Akuity
            </a>
          </h2>
          - July 2022 - Present
        </div>
        <div>
          <h2>
            ⏩ Software Engineer @{' '}
            <a href="https://feats.co" target="__blank">
              Feats
            </a>
          </h2>
          - February 2021 - June 2022
        </div>
        <div>
          <h2>
            🏫 BE (Computer Engineering) @{' '}
            <a href="https://www.gtu.ac.in/" target="__blank">
              GTU
            </a>
          </h2>
          - 2017 - 2021.
        </div>
      </div>

      <p id="my-open-source-contributions" className="oss-contributions">
        I have contributed to{' '}
        <a href="https://github.com/elastic/eui" target="__blank">
          elastic/eui
        </a>
        ,{' '}
        <a href="https://github.com/backstage/backstage" target="__blank">
          backstage
        </a>{' '}
        and{' '}
        <a href="https://github.com/prometheus/prometheus" target="__blank">
          prometheus
        </a>{' '}
        open source projects. Currently I am actively involved in{' '}
        <a href="https://github.com/argoproj/argo-cd" target="__blank">
          Argo CD
        </a>{' '}
        project.
      </p>

      <div className="footer">
        <a href="mailto:mayursiinh@gmail.com" target="__blank">
          <AiOutlineMail size={iconSize} />
        </a>
        <a href="https://github.com/Marvin9" target="__blank">
          <FaGithub size={iconSize} />
        </a>
        <a href="https://twitter.com/mayursiinh" target="__blank">
          <FaTwitter size={iconSize} />
        </a>
        <a href="https://www.linkedin.com/in/may-ur/" target="__blank">
          <FaLinkedin size={iconSize} />
        </a>
        <a href="https://mayursinhsarvaiya.medium.com/" target="__blank">
          <FaMedium size={iconSize} />
        </a>
      </div>
    </div>
  );
}

export default App;
