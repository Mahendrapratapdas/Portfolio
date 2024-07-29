import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import instagramIcon from '../../assets/instagram.svg'
// import discordIcon from '../../assets/discord.png'

export function Footer() {
  return (
    <Container className="footer">
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          
        </p>
      </div>
      <div>
        <p>
          Coded by Mahendra Pratap Das with <span>❤️</span> in India 
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/mahendra-pratap-das/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/Mahendrapratapdas"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        
        <a
          href="https://www.instagram.com/mahendra_pratap_das?igsh=NXJ0NzJ6b2w2ODlm"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  )
}
