'use client'
import { Button, Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CountDown from "../components/functions/CountDown";
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";
import bgImage from "../../public/images/a.jpg";
import Link from "next/link";

function Loading() {
  // Function to toggle like button
  function like(e) {
    return e.target.classList.value === "fa-regular fa-heart like"
      ? (e.target.classList.value = "fa-solid fa-heart like text-danger")
      : (e.target.classList.value = "fa-regular fa-heart like");
  }

  return (
    <div
      className="loading position-relative w-full"
      style={{
        height: "70vh",
        paddingTop: "10vh",
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container className="d-flex justify-content-between align-items-center gap-md-5 flex-column flex-md-row mt-3 mt-xl-4 overflow-hidden">
        <motion.div
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimationTitles title="Empowering the Music Industry" />
          <p className="gray-90 mt-3 fs-5">
            Tribu is a productivity tool for professionals in the music industry,
            facilitating connections and collaborations.
          </p>
          <Link href="/login">
            <button className="m-0 my-3 px-5 py-2 fs-5 fw-bold">Explore</button>
          </Link>
          <div
            style={{ color: "white" }}
            className="d-none d-md-flex justify-content-between align-items-center my-4"
          >
            <div>
              <h5 className="fw-bold fs-1">12K+</h5>
              <span className="gray-100">members</span>
            </div>
            <div>
              <h5 className="fw-bold fs-1">10K+</h5>
              <span className="gray-100">connections</span>
            </div>
            <div>
              <h5 className="fw-bold fs-1">12K+</h5>
              <span className="gray-100">collaborations</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 400 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-100 my-5"
        >
          <div className="cards">
            <Card className="bg-black-100 rounded">
              <Card.Body className="p-2">
                <div className="rounded overflow-hidden position-relative">
                  <Card.Img
                    variant="top"
                    alt="img"
                    src="https://via.placeholder.com/150"
                  />
                  <i className="fa-regular fa-heart like" onClick={like}></i>
                </div>
                <h5 className="mt-2 text-white fw-normal">Artist Showcase</h5>
                <p className="gray-90">@Tribu Music Network</p>
                <div className="d-flex">
                  <div className="me-3">
                    <CountDown h={18} m={21} s={8} />
                    <span className="gray-90">Remaining Time</span>
                  </div>
                  <div>
                    <h6 className="text-white">Portfolio Spotlight</h6>
                    <span className="gray-90">Discover Talents</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card className="bg-black-100">
              <Card.Body className="p-2">
                <div className="rounded overflow-hidden position-relative">
                  <Card.Img
                    variant="top"
                    alt="img"
                    src="https://via.placeholder.com/150"
                  />
                  <i className="fa-regular fa-heart like" onClick={like}></i>
                </div>
                <h5 className="mt-2 text-white fw-normal">Collaboration Hub</h5>
                <p className="gray-90">@Tribu Collaborations</p>
                <div className="d-flex">
                  <div className="me-3">
                    <CountDown h={23} m={16} s={11} />
                    <span className="gray-90">Remaining Time</span>
                  </div>
                  <div>
                    <h6 className="text-white">Connect with Artists</h6>
                    <span className="gray-90">Start Collaborations</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ color: "white" }}
          className="d-md-none d-flex justify-content-between align-items-center my-4 features"
        >
          <div>
            <h5 className="fw-bold fs-1">12K+</h5>
            <span className="gray-100">members</span>
          </div>
          <div>
            <h5 className="fw-bold fs-1">10K+</h5>
            <span className="gray-100">connections</span>
          </div>
          <div>
            <h5 className="fw-bold fs-1">12K+</h5>
            <span className="gray-100">collaborations</span>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default Loading;
