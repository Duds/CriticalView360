import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
      <header>
        <div>Logo</div>
        <div>{userData ? userData.name : 'User'}</div>
      </header>
      
      <main>
        <h1>Welcome, {userData ? userData.name : 'User'}!</h1>
        <button>Create New Bow Tie Card</button>
        <div>
          <h2>Your Bow Tie Cards</h2>
          {cards.map(card => (
            <div key={card.id}>
              <h3>{card.name}</h3>
              <p>Last updated: {card.lastUpdated}</p>
            </div>
          ))}
        </div>
      </main>
      
      <aside>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>My Bow Tie Cards</li>
            <li>Shared with me</li>
            <li>Templates</li>
            <li>Help & Support</li>
          </ul>
        </nav>
      </aside>
      
      <footer>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
      </footer>
    </div>
  );
};

export default Dashboard;
