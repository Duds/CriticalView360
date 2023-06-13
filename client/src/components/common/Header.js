import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { auth } from '../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const [user, setUser] = useState(null);
  const theme = useTheme();

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
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, ...theme.schemes.light.textPrimary }}>
          <Link to="/" style={{ textDecoration: 'none', color: theme.schemes.light.textPrimary }}>
            CriticalView360
          </Link>
        </Typography>
        {user ? (
          <Button onClick={logout} sx={theme.schemes.light.textPrimary}>
            Logout
          </Button>
        ) : (
          <>
            <Button component={Link} to="/register" sx={theme.schemes.light.textPrimary}>
              Register
            </Button>
            <Button component={Link} to="/login" sx={theme.schemes.light.textPrimary}>
              Login
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
