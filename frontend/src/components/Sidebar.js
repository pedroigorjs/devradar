import React, { useState, useEffect } from 'react';
import {
  Container,
  Aside,
  Input,
  Coordinates,
  Button,
  Label,
} from './sidebar/styles';

export default function Sidebar({ handleSubmit }) {
  const [githubUsername, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [coordinates, setCoordinates] = useState({ longitude: 0, latitude: 0 });

  const dev = { username: githubUsername, techs, coordinates };

  function getPosition() {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setCoordinates({ longitude, latitude });
      },
      err => {
        console.error(new Error(err.message));
      },
      {
        timeout: 30000,
      }
    );
  }

  useEffect(() => {
    getPosition();
  }, []);

  return (
    <Container>
      <Aside>
        <form onSubmit={event => handleSubmit(event, dev)}>
          <h1>Cadastrar</h1>
          <Label>Github Username:</Label>
          <Input
            type="text"
            placeholder="github-username"
            value={githubUsername}
            onChange={event => setGithubUsername(event.target.value)}
          />
          <Label>Tecnologias:</Label>
          <Input
            type="text"
            placeholder="ReactJS, Node.js, React Native"
            value={techs}
            onChange={event => setTechs(event.target.value)}
          />
          <Coordinates>
            <div>
              <Label htmlFor="latitude">Latitude:</Label>
              <Input
                id="latitude"
                type="number"
                readOnly
                value={coordinates.latitude}
              />
            </div>
            <div>
              <Label htmlFor="longitude">Longitude:</Label>
              <Input
                id="longitude"
                type="number"
                readOnly
                value={coordinates.longitude}
              />
            </div>
          </Coordinates>
          <Button type="submit">Salvar</Button>
        </form>
      </Aside>
    </Container>
  );
}
