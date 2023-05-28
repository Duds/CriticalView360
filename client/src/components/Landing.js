// Landing.js
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Header from './Header'; // Import your Header component
import Footer from './Footer' // Import your Footer component

const Landing = () => {
  return (
    <div className='App'>
      <Header />

      <main>
        <section>
          <h1>Hero Section</h1>
          <p>Some text about CriticalView360.</p>
          <Link to="/login">Go to Dashboard</Link>
        </section>

        <section>
          <h2>Latest Posts</h2>
          {/* Map over your posts data and render elements here */}
        </section>

        <section>
          <h2>Related Case Studies</h2>
          {/* Map over your case studies data and render elements here */}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Landing;
