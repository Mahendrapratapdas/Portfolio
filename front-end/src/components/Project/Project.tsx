import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/Mahendrapratapdas/Expense-Tracker-App" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                {/* <a href="https://medibook.vinayaksingh.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> */}
              </div>
            </header>
            <div className="body">
              <h3>Expense Tracker App</h3>
              <p>Track your spending effortlessly with this interactive expense tracker built in React.js. Record your expenditures with ease, specifying amounts and purposes, and watch as they populate your transaction log. Gain insights into your financial health with real-time updates on savings and spending totals.

                Key Features: ✅ Add, edit, and delete expenses seamlessly ✅ Monitor savings and spending in one centralized dashboard ✅ Take control of your budget with customizable expense categories</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Redux</li>
                <li>CSS</li>
                <li>React-Redux</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/Mahendrapratapdas/E-Commerce-API" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                {/* <a href="https://youtu.be/NOm-3MynPLE" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> */}
              </div>
            </header>
            <div className="body">
              <h3>E-Commerce APIs</h3>
              <p>🔒 User Sector:
                Effortlessly log in with JWT authentication, your gateway to a personalized experience.
                🛍️ Product Sector:Sellers, rejoice! Add your products effortlessly, showcasing them with rich descriptions and captivating images.
                Navigate through a sea of choices effortlessly with intuitive filtering by price range and categories.Elevate your shopping experience by sharing your feedback through product ratings, shaping a vibrant community of enthusiasts.
                🛒 Cart Sector:
                Seamlessly manage your shopping cart, visualizing your selections with clarity and ease.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Node JS</li>
                <li>Express JS</li>
                <li>MongoDB</li>
                <li>Mongooes</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/Mahendrapratapdas/Portfolio" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Portfolio</h3>
              <p>
              On my portfolio, you’ll find a showcase of my projects, demonstrating my ability to deliver high-quality, dynamic, and responsive web applications that meet client needs and exceed expectations. I am passionate about problem-solving, efficient coding practices, and continuously learning new technologies to enhance my skill set.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>Node JS</li>
                <li>Express JS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}