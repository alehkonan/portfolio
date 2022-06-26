import { GithubIcon } from 'components/icons';
import { projects } from 'data/projects';
import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { routeParams } from 'routes';
import styled from 'styled-components';

const Container = styled.div`
  border-radius: 1rem;
  padding: 0 1rem;
  background: linear-gradient(145deg, #6dbcff, #5c9ee6);
  box-shadow: 5px 5px 21px #518bc9, -5px -5px 21px #7bd5ff;
`;

const ProjectTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const ProjectSubtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 1.3rem;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  object-position: center;
  object-fit: contain;
  margin-bottom: 1rem;
`;

export const ProjectDetails = () => {
  const params = useParams();
  const selectedProject = params[routeParams.project];

  const projectDetails = useMemo(
    () => projects.find((project) => project.route === selectedProject),
    [selectedProject]
  );

  return (
    <Container>
      <ProjectTitle>{projectDetails.name}</ProjectTitle>
      <ProjectSubtitle>{projectDetails.description}</ProjectSubtitle>
      <a href={projectDetails.link} rel="noreferrer" target="_blank">
        <ProjectImage src={projectDetails.picture} />
      </a>
      <a href={projectDetails.githubLink} rel="noreferrer" target="_blank">
        <GithubIcon />
      </a>
    </Container>
  );
};
