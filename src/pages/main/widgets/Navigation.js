import { projects } from 'data/projects';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style-type: none;
`;

const ListItem = styled.li``;

const Link = styled(NavLink)`
  font-size: 1.3rem;
  text-decoration: none;
  background: linea r-gradient(145deg, #6dbcff, #5c9ee6);
  box-shadow: 5px 5px 0px #65aefc, -5px -5px 0px #67b2ff;
  border-radius: 0.5rem;
  display: block;
  color: inherit;
  padding: 0.5rem;
  min-width: 18rem;
  transition: all 150ms;
  &[class*='active'] {
    font-weight: 600;
    background: linear-gradient(145deg, #f5f5f5, #cecece);
  }
  :not([class*='active']):hover {
    background: linear-gradient(145deg, #f5f5f5, #cecece);
  }
`;

export const Navigation = () => {
  return (
    <nav>
      <List>
        {projects.map((project) => (
          <ListItem key={project.id}>
            <Link to={project.route}>{project.name}</Link>
          </ListItem>
        ))}
      </List>
    </nav>
  );
};
