import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import passGen from "../../Assets/Projects/codeEditor.png";
import TipJar from "../../Assets/Projects/chatify.png";
import Lottery from "../../Assets/Projects/blog.png";
import ThemeToggler from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TipJar}
              isBlog={false}
              title="TipJar3.0"
              description="TipJar3.0 is a decentralized tipping platform where users can send Sepolia ETH directly on-chain. Built with Solidity, Hardhat, Ether.js, and React, the DApp ensures secure and transparent Ethereum transactions. The smart contract is deployed on Sepolia and the frontend is hosted live on Netlify."
              ghLink="https://github.com/sharad7s7/TipJar.git"
              demoLink="https://tip3-3jar.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ThemeToggler}
              isBlog={false}
              title="Theme Toggler"
              description="A fast and responsive light/dark theme toggler built with Vite and React. Uses Context API for global state management and Tailwind CSS for styling. Demonstrates modern UI patterns with a smooth user experience and instant theme switching."
              ghLink="https://github.com/sharad7s7/themeToggler-contextAPI"
              demoLink="https://theme-toggler-context-api-psi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Lottery}
              isBlog={false}
              title="Lottery Smart Contract"
              description="A decentralized lottery system built using Solidity and deployed on the Ethereum blockchain. Participants can enter the lottery by sending ETH, and a random winner is selected using Chainlink VRF. Ensures fairness, transparency, and secure smart contract interactions."
              ghLink="https://github.com/sharad7s7/Lottery-Smart-contract.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={passGen}
              isBlog={false}
              title="Password Generator"
              description="A simple yet powerful password generator built with React.js. Users can generate secure and customizable passwords by selecting length, character types (uppercase, lowercase, numbers, symbols), and easily copy them to the clipboard. Lightweight and fast with a clean UI."
              ghLink="https://github.com/sharad7s7/pass-gen.git"
              demoLink="https://pass-gen-blush.vercel.app/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
