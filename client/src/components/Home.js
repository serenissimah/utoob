import React from 'react';
import { Header, } from 'semantic-ui-react';
import DisplayVideo from './Videos/DisplayVideo';

const Home = () => (
  <>
    <Header as="h3" textAlign="center">Devise App</Header>
    <DisplayVideo />
    </>
)

export default Home;
