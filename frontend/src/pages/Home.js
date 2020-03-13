import React, { useState, useEffect } from 'react';

import Sidebar from '../components/Sidebar';
import Devs from '../components/Devs';
import { Container } from './home/styles';

import api from '../services/api';

export default function Home() {
  const [devs, setDevs] = useState([]);

  async function loadDevs() {
    const response = await api.get('/devs');

    setDevs(response.data);
  }

  useEffect(() => {
    loadDevs();
  }, []);

  async function handleAddDev(event, { username, techs, coordinates }) {
    event.preventDefault();

    const response = await api.post('/devs', {
      github_username: username,
      techs,
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
    });

    setDevs(current => [response.data, ...current]);
  }

  return (
    <Container>
      <Sidebar handleSubmit={handleAddDev} />
      <Devs devs={devs} />
    </Container>
  );
}
