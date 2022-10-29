import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import terra from "../assets/img/terra1.png";
import gif from "../assets/img/gif.png";
import dast from "../assets/img/dast.png";
import memories from "../assets/img/memories.png";
import mazoo from "../assets/img/mazoo.png";
import sabrisocial from "../assets/img/SabriSocial.png";



import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Terra",
      description: "Digital Agri Space",
      imgUrl: terra,
      github:"https://github.com/sabri-manai/Terra"
    },
    {
      title: "Dast",
      description: "Delivery Platform",
      imgUrl: dast,
      github:"https://github.com/sabri-manai/transwire"

    },
    {
      title: "Meta Gif",
      description: "Web 3.0 Gif Portal on Metaverse",
      imgUrl: gif,
      github:"https://github.com/sabri-manai/solana-dapp"
    },
    {
      title: "Memory Hub",
      description: "The place to share their memories",
      imgUrl: memories,
      github:"https://github.com/sabri-manai/final-project-gmc-memories-mern"
    },
    {
      title: "Mazoo",
      description: "Here you can find all trending films, see hot trailers, and get a variety of reveiws ",
      imgUrl: mazoo,
      github:"https://github.com/sabri-manai/movie"
    },
    {
      title: "Social Media",
      description: "Social Media Platform Built With MERN Stack",
      imgUrl: sabrisocial,
      github:"https://github.com/sabri-manai/social-media"
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Some of the projects I was working on. Most of these apps were developped using Javascript, Node js, React/React Native, AWS Amplify, Mongo DB, and some more interesting tools and technologies.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
