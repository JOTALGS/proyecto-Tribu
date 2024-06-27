import React from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--dark);
  color: var(--white);
  overflow: hidden;
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: var(--fontBig);
  font-family: var(--fontL);
  z-index: 1;
  background-image: linear-gradient(90deg, var(--gradient));
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
`;

const Features = styled.div`
  font-size: var(--fontxs);
  color: var(--white);
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 0 auto;
  padding: 0 5%;
  @media screen and (max-width: 64em) {
    width: 100%;
  }
  @media screen and (max-width: 48em) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    margin-top: 3rem;
  }
`;

const Feature = styled.div`
  width: calc(32% - 1rem);
  text-align: center; /* Centra el contenido */
  @media screen and (max-width: 48em) {
    width: 100%;
  }
`;

const FeatureTitle = styled.h2`
  font-size: calc(var(--fontmd) + 2px); /* Aumenta ligeramente el tamaño */
  margin-bottom: 2rem;
`;

const FeatureDescription = styled.p`
  font-size: var(--fontsm);
  line-height: 2;
  text-align: justify;
`;

const ProcessSection = () => {
  return (
    <Section>
      <Title>Developers Team</Title>
      <Features>
        <Feature>
          <FeatureTitle>Profile Showcase</FeatureTitle>
          <FeatureDescription>
            Your profile in the app serves as your digital identity as a music artist. Here, you can showcase your biography, musical genres, instruments you play, vocal range, and any other relevant information that helps collaborators understand your style and strengths. It's where you introduce yourself to the community and establish your presence in the collaborative music scene.
          </FeatureDescription>
        </Feature>
        <Feature>
          <FeatureTitle>Collaboration Search</FeatureTitle>
          <FeatureDescription>
            This feature enables you to search and connect with potential collaborators. You can browse through profiles of other artists, listen to their work samples, and send collaboration requests or messages to initiate projects together. It's designed to facilitate networking and finding the right partners for your musical projects.
          </FeatureDescription>
        </Feature>
        <Feature>
          <FeatureTitle>Project Showcase</FeatureTitle>
          <FeatureDescription>
            Once you've worked on projects with other artists through the app, this feature allows you to showcase these collaborations prominently on your profile. You can list the projects you've been involved in, link to the songs or albums you've contributed to, and credit your collaborators. This section serves as a portfolio of your work, demonstrating your versatility, skills, and the diversity of your musical collaborations.
          </FeatureDescription>
        </Feature>
      </Features>
    </Section>
  );
};

export default ProcessSection;
