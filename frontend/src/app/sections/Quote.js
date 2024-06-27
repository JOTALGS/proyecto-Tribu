'use client'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: #000;
`;

const VideoContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  height: 98vh;
  z-index: -1;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 65%;
  left: 5%;
  width: 65%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: 'Roboto', sans-serif;
  font-size: var(--fontlg);
`;

const moveUp = keyframes`
  100% {
    transform: translateY(0);
  }
`;

const Text = styled.p`
  width: 100%;
  height: var(--fontxl);
  overflow: hidden;
  position: relative;
  text-transform: uppercase;

  span {
    position: absolute;
    transform: translateY(3rem);
    animation-name: ${moveUp};
    animation-duration: 2.5s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    animation-delay: ${(props) => props.delay};
    background-image: linear-gradient(-55deg, var(--gradient));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2em;
  }

  @media screen and (max-width: 48em) {
    font-size: var(--fontmd);
    height: var(--fontsm);
  }
  @media screen and (max-width: 30em) {
    font-size: var(--fontxs);
  }
`;

const LogoContainer = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  top: 15%; /* Sube la posición del logo para dar espacio al texto */
  left: 5%;
`;

const Quote = () => {
  const sectionRef = useRef(null);

  React.useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const Elem = sectionRef.current;

    const trigger = ScrollTrigger.create({
      trigger: Elem,
      start: 'top top',
      pin: true,
      pinSpacing: false,
    });

    return () => {
      if (trigger) trigger.kill();
    };
  }, []);

  return (
    <Section ref={sectionRef}>
      <VideoContainer>
        <Video src="/videos/tribu.mp4" type="video/mp4" autoPlay muted loop />
      </VideoContainer>
      <LogoContainer>
        <Image src="/images/logo.png" alt="Logo" layout="fill" objectFit="contain" />
      </LogoContainer>
      <TextContainer>
        <Text delay="0s">
          <span>FIND YOUR NEXT COLLABORATION</span>
        </Text>
      </TextContainer>
    </Section>
  );
};

export default Quote;
