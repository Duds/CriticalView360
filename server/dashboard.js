import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // TODO: Fetch the user's name and list of cards from the backend/database
  const userName = 'User';  // Replace with actual user name
  const cards = ['Card 1', 'Card 2', 'Card 3'];  // Replace with actual list of cards

  return (
    <div>
      <h1>Welcome, {userName}!</h1>
      <Link to="/new-card">
        <button>Create New Bow Tie Card</button>
      </Link>
      <h2>Your Cards:</h2>
      <ul>
        {cards.map((card, index) => (
          <li key={index}>{card}</li>  // Replace with a link to the card or a card component
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
