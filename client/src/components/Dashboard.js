import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Button, Container, Grid } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Replace this with your actual user ID
    const userId = 'your-user-id';

    // Replace this with your actual API endpoint
    const apiEndpoint = `http://localhost:3000/api/user/${userId}`;

    axios.get(apiEndpoint)
      .then(response => {
        setUserData(response.data.user);
        setCards(response.data.cards);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div>
      <Header />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h1" component="h1" align="center" gutterBottom>
              Welcome, {userData ? userData.name : 'User'}!
            </Typography>
            <Button variant="contained" color="primary">Create New Bow Tie Card</Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2" component="h2" gutterBottom>
              Your Bow Tie Cards
            </Typography>
            {cards.map(card => (
              <div key={card.id}>
                <Typography variant="h3" component="h3" gutterBottom>{card.name}</Typography>
                <Typography variant="body1" component="p">Last updated: {card.lastUpdated}</Typography>
              </div>
            ))}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default Dashboard;
