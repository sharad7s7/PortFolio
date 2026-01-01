import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pro from "../../Assets/Projects/pro.png";

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
              imgPath={pro}
              isBlog={false}
              title="Reel Bite"
              description="A full-stack food reels platform where users can browse and watch food reels. Built with a complete backend using Node.js and Express, featuring secure user authentication with JWT and API-driven content delivery."
              ghLink="https://github.com/sharad7s7/Reel-Bite"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rag}
              isBlog={false}
              title="Chat with Video (RAG)"
              description="A Retrieval-Augmented Generation (RAG) system that answers questions from Data Structures & Algorithms video lectures using semantic search and LLMs, returning precise video numbers and timestamps."
              ghLink="https://github.com/sharad7s7/Chat-with-Video-RAG"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro}
              isBlog={false}
              title="California House Price Predictor"
              description="Predicts California home prices using a machine learning model. Users can input property features through an interactive Streamlit (2,000 rows for performance, while the full dataset contains 16,000 rows) interface to get real-time price predictions, along with visual insights such as maps, feature importance, and price distributions. Performed data preprocessing, handled missing values, applied one-hot encoding, and used cross-validation."
              ghLink="https://github.com/sharad7s7/California-HousePrice-Prediction"
              demoLink="https://sharad7s7-california-houseprice-prediction-app-cervml.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro}
              isBlog={false}
              title="Interview Pal"
              description="Developed an interview preparation platform leveraging Gemini AI to assist users in practicing interviews and enhancing their skills. The platform offers personalized mock interviews, real-time feedback on responses, and skill development modules. Integrated Gemini AI for generating role-specific questions and analyzing user performance, while incorporating learning paths to target skill gaps."
              ghLink="https://github.com/sharad7s7/Interview-Pal"
              demoLink="https://interview-pal.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro}
              isBlog={false}
              title="TipJar3.0"
              description="TipJar3.0 is a decentralized tipping platform where users can send Sepolia ETH directly on-chain. Built with Solidity, Hardhat, Ether.js, and React, the DApp ensures secure and transparent Ethereum transactions. The smart contract is deployed on Sepolia and the frontend is hosted live on Netlify."
              ghLink="https://github.com/sharad7s7/TipJar.git"
              demoLink="https://tip3-3jar.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro}
              isBlog={false}
              title="Lottery Smart Contract"
              description="A decentralized lottery system built using Solidity and deployed on the Ethereum blockchain. Participants can enter the lottery by sending ETH, and a random winner is selected using Chainlink VRF. Ensures fairness, transparency, and secure smart contract interactions."
              ghLink="https://github.com/sharad7s7/Lottery-Smart-contract.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro}
              isBlog={false}
              title="Password Generator"
              description="A simple yet powerful password generator built with React.js. Users can generate secure and customizable passwords by selecting length, character types (uppercase, lowercase, numbers, symbols), and easily copy them to the clipboard. Lightweight and fast with a clean UI."
              ghLink="https://github.com/sharad7s7/pass-gen.git"
              demoLink="https://pass-gen-blush.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro}
              isBlog={false}
              title="Theme Toggler"
              description="A fast and responsive light/dark theme toggler built with Vite and React. Uses Context API for global state management and Tailwind CSS for styling. Demonstrates modern UI patterns with a smooth user experience and instant theme switching."
              ghLink="https://github.com/sharad7s7/themeToggler-contextAPI"
              demoLink="https://theme-toggler-context-api-psi.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
