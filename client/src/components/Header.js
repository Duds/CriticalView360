import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { AppBar, Toolbar, Button } from '@mui/material';

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
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
    <AppBar position="static">
      <Toolbar>
        <ul className="nav-list">
          <li>
            <Button component={Link} to="/register" color="inherit">
              Register
            </Button>
          </li>
          <li>
            {user ? (
              <Button onClick={logout} color="inherit">
                Logout
              </Button>
            ) : (
              <Button component={Link} to="/login" color="inherit">
                Login
              </Button>
            )}
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
