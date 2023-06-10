import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { auth } from '../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { ReactComponent as Logo } from '../../assets/logo.svg';

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
      window.location.href = '/';
    });
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Logo style={{ height: '30px', marginRight: '10px' }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            CriticalView360
          </Link>
        </Typography>
        {user ? (
          <Button onClick={logout} color="inherit">
            Logout
          </Button>
        ) : (
          <>
            <Button component={Link} to="/register" color="inherit">
              Register
            </Button>
            <Button component={Link} to="/login" color="inherit">
              Login
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
