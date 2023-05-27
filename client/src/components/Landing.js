// Landing.js
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Header from './Header'; // Import your Header component

function Landing() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });

    return () => unsubscribe();
  }, []);

  const logout = () => {
    signOut(auth).then(() => {
      window.location.href = '/login';
    });
  };

  return (
    <>
      <Header /> {/* Add your Header component here */}
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              {user ? (
                <button onClick={logout}>Logout</button>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Landing;
