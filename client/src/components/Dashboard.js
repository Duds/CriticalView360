import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Button, Container, Grid, CircularProgress } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import { auth } from '../firebase';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;

        if (user) {
          const userId = user.uid;
          const apiEndpoint = `http://localhost:3000/api/user/${userId}`;
          const response = await axios.get(apiEndpoint);
          setUserData(response.data.user);
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <Header />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h1" component="h1" align="center" gutterBottom>
              Welcome, {userData && userData.username ? userData.username : 'User'}!
            </Typography>
            <Button variant="contained" color="primary">
              Create New Bow Tie Card
            </Button>
          </Grid>
          <Grid item xs={12}>
            {loading ? (
              <CircularProgress /> // Display a loading indicator while fetching data
            ) : (
              <>
                <Typography variant="h2" component="h2" gutterBottom>
                  Your Bow Tie Cards
                </Typography>
                <Typography variant="body1" component="p">
                  No bow tie cards found.
                </Typography>
              </>
            )}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default Dashboard;
