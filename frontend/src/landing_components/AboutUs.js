'use client'
import { Button, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";

function AboutUs() {
  return (
    <div className="about">
      <Container className="d-flex justify-content-between flex-wrap flex-md-nowrap">
        <motion.div
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimationTitles title="Inspiration Behind the Project" className="title" />
          <p className="gray-50 mb-5">
          It all started one summer evening, in a dimly lit,cozy café in downtown Seattle.
          I was there for an open mic night, a local event that brought together a diverse
          mix of musicians and music lovers. As I sipped my coffee, I watched performers
          pour their hearts out on stage each one uniquely talented, each one yearning for
          an opportunity to connect with others who shared their passion for music.
          Among the performers was a young guitarist named Sam. His fingers danced
          effortlessly over the strings, creating melodies that captivated the entire room.
          After his performance, I struck up a conversation with him. Sam shared his dream
          of creating a fusion band but lamented how difficult it was to find the right
          musicians who understood and resonated with his vision. Despite the abundance of
          talent in the room, there was no easy way for artists like Sam to connect with
          potential collaborators beyond that one evening.
          </p>
          <Button variant="primary ms-0">Read More</Button>
        </motion.div>
        <motion.div
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
          className="d-flex flex-column"
        >
          <div className="d-flex">
            <div>
              <img
                //src={require("..//images/bohdan-d-fh6o-XkVQG8-unsplash.webp")}
                src="https://via.placeholder.com/150"
                className="p-0 me-2 img"
                alt="img"
              />
            </div>
            <div>
              <img
                //src={require("..//images/john-o-nolan-6f_ANCcbj3o-unsplash.webp")}
                src="https://via.placeholder.com/150"
                className="p-0 img"
                alt="img"
              />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img
                //src={require("..//images/julia-solonina-ci19YINguoc-unsplash.webp")}
                src="https://via.placeholder.com/150"
                className="p-0 me-2 img"
                alt="img"
              />
            </div>
            <div>
              <img
                //src={require("..//images/theater-amazonas-manaus.webp")}
                src="https://via.placeholder.com/150"
                className="p-0 img"
                alt="img"
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default AboutUs;