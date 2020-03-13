import React from 'react';

import { Container, DevItem, DevInfo, Bio, Techs } from './devs/styles';

export default function Devs({ devs }) {
  return (
    <Container>
      <ul>
        {devs.map(dev => (
          <DevItem key={dev.id}>
            <DevInfo>
              <img src={dev.avatar_url} alt={dev.github_username} />
              <div>
                <h3>{dev.name}</h3>
                <Techs>{dev.techs.join(', ')}</Techs>
              </div>
            </DevInfo>
            <Bio>{dev.bio}</Bio>
            <a
              href={`https://github.com/${dev.github_username}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Acessar perfil
            </a>
          </DevItem>
        ))}
      </ul>
    </Container>
  );
}
