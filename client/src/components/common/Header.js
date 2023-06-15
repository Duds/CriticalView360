import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useTheme } from "@mui/material/styles";
import Logo from "./Logo";

const Header = () => {
  const theme = useTheme();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });

    return () => unsubscribe();
  }, []);

  const logout = () => {
    signOut(auth).then(() => {
      window.location.href = "/";
    });
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Logo isLoggedIn={user !== null} />
          <Typography variant="h6" component="div" sx={{ marginLeft: "10px" }}>
            <Link
              to={user ? "/dashboard" : "/"}
              style={{
                textDecoration: "none",
                color: theme.palette.text.primary,
              }}
              className="MuiLogotype" // Add the MuiLogotype class to apply the custom Logotype style
            >
              CriticalView360
            </Link>
          </Typography>
        </Box>
        <Box sx={{ marginLeft: "auto" }}>
          {user ? (
            <Button onClick={logout}>Logout</Button>
          ) : (
            <>
              <Button
                variant="text"
                component={Link}
                to="/login"
                sx={{ marginLeft: "10px" }}
              >
                Login
              </Button>
              <Button
                variant="contained"
                component={Link}
                to="/register"
                sx={{ marginLeft: "10px" }}
              >
                Register
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
