'use client'
import gsap from "gsap";
import React from "react";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 200vh;
  position: relative;

  display: flex;
  justify-content: space-around;
  flex-direction: column;

  background-color: var(--dark);
  color: #ffffff; /* Changed text color to white */

  & > *:nth-child(even) {
    align-self: flex-end;
    margin-right: 4rem;
    text-align: right;

    @media screen and (max-width: 48em) {
      margin-right: 1rem;
    }
  }
  & > *:nth-child(odd) {
    margin-left: 4rem;
    text-align: justify;

    @media screen and (max-width: 48em) {
      margin-left: 1rem;
    }
  }
`;
const MainTitle = styled.h1`
  font-size: var(--fontxxl); /* Increased font size */
  font-family: var(--fontL);

  background-image: linear-gradient(-35deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 70em) {
    font-size: var(--fontxxxl);
  }
  @media screen and (max-width: 64em) {
    font-size: var(--fontxxl);
  }
  @media screen and (max-width: 48em) {
    font-size: var(--fontxl);
  }
  @media screen and (max-width: 40em) {
    font-size: var(--fontlg);
  }
`;

const TextBlockRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 90%;
  margin-bottom: 1rem; /* Reduced margin bottom */

  @media screen and (max-width: 48em) {
    width: 95%;
  }
`;
const TextBlockLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  margin-bottom: 1rem; /* Reduced margin bottom */

  @media screen and (max-width: 48em) {
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: var(--fontlg);
  margin-bottom: 1rem;

  @media screen and (max-width: 64em) {
    font-size: var(--fontmd);
  }
`;

const Text = styled.div`
  font-size: var(--fontlg); /* Adjusted font size */
  color: #ffffff; /* Changed text color to white */
  margin-bottom: 0.5rem;
  width: 55%;
  text-align: justify;

  @media screen and (max-width: 64em) {
    width: 70%;
  }
  @media screen and (max-width: 48em) {
    width: 100%;
    font-size: var(--fontxl);
  }
`;
const TextContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: rotate(-25deg);
  z-index: 1;
  margin-bottom: 4rem;
`;

const MovingText = styled.h1`
  font-size: var(--fontxxxl); /* Increased font size */
  font-family: var(--fontL);

  background-image: linear-gradient(-45deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 70em) {
    font-size: var(--fontxxxl);
  }
  @media screen and (max-width: 64em) {
    font-size: var(--fontxxl);
  }
  @media screen and (max-width: 48em) {
    font-size: var(--fontxl);
  }
  @media screen and (max-width: 40em) {
    font-size: var(--fontlg);
  }
  @media screen and (max-width: 30em) {
    font-size: var(--fontmd);
  }
`;

const DisplaySection = () => {
  const container = useRef(null);
  const textOne = useRef(null);
  const textTwo = useRef(null);

  useLayoutEffect(() => {
    let t1 = gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top-=500 top",
          end: "bottom top",
          scrub: 1,
        },
      })
      .fromTo(textOne.current, { x: 0 }, { x: "-20%" }, "key1")
      .fromTo(textTwo.current, { x: 0 }, { x: "20%" }, "key1");

    return () => {
      if (t1) t1.kill();
    };
  }, []);

  return (
    <Section>
      <MainTitle>
        Aim &<br /> Inspiration
      </MainTitle>
      <TextBlockRight>
        <Text>
          At Tribu, we aim to bridge the gap between music producers and artists. We know that finding the right collaboration can be challenging, and we are here to simplify that process. Our platform is designed to foster connections, encourage growth, and inspire creativity. Join us at Tribu and be a part of a community that is passionate about music, collaboration, and local talent. Together, we can create something extraordinary.
        </Text>
      </TextBlockRight>
      <TextBlockLeft ref={container}>
        <Title>TRIBU</Title>
        <Text>
          Tribu is a tool directed to workers in the music industry with a special emphasis on promoting productivity. We aim to boost your productivity.
        </Text>
      </TextBlockLeft>

      <TextContainer>
        <MovingText ref={textOne}>Find who you are missing</MovingText>
        <MovingText ref={textTwo}>For your next piece!</MovingText>
      </TextContainer>
    </Section>
  );
};

export default DisplaySection;
