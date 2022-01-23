import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css';

function Navbar() {
    return (
      <header>
        <nav className="container">
          <div className="nav-content">
            <h1>App Demo</h1>
            <a href="https://github.com/Kalelfleith" target="_blank" rel="noreferrer">
              <div className="contact-container">
                <GithubIcon />
                <p className="contact-link">/Kalelfleith</p>
              </div>
            </a>
          </div>
        </nav>
      </header>
    );
  }

  export default Navbar;
