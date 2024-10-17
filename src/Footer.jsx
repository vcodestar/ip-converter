import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"; 

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} <a href="https://vcodestar.github.io/" id="vc_website">vcodestar</a></p>
      
      <div className="social-icons">
        <a href="https://github.com/vcodestar" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/evangelos-chasanis-708610280/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
