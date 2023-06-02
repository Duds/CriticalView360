import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';
import { auth } from '../firebase';
import Header from './Header';
import Footer from './Footer';

const Landing = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });

    return () => unsubscribe();
  }, []);

  const caseStudies = [
    {
      id: 1,
      title: 'Case Study 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus metus ac mauris fermentum vehicula. Duis ultricies lacinia sem a ultricies. In in nulla sit amet erat mollis gravida vitae a erat.',
    },
    {
      id: 2,
      title: 'Case Study 2',
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    },
    {
      id: 3,
      title: 'Case Study 3',
      content: 'Cras ac ligula quis mauris facilisis pharetra. Maecenas at malesuada tortor. Sed hendrerit, quam id consequat luctus, ante velit sollicitudin mi, at faucibus metus justo non urna.',
    },
  ];

  const posts = [
    {
      id: 1,
      title: 'Post 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin metus in neque viverra tempus. Nullam interdum efficitur neque eu gravida. Sed dignissim, est at ullamcorper commodo, est purus aliquet lorem.',
    },
    {
      id: 2,
      title: 'Post 2',
      content: 'Sed at lectus sit amet est iaculis dignissim. Nulla facilisi. Nullam maximus, tellus eget posuere auctor, orci purus ultricies erat, vitae eleifend ligula orci non metus.',
    },
    {
      id: 3,
      title: 'Post 3',
      content: 'Vestibulum faucibus dolor sit amet magna pulvinar, in cursus mi tempus. Nam consectetur, erat ut elementum ultrices, justo turpis fermentum nulla, sed rhoncus enim tortor sit amet justo.',
    },
  ];

  return (
    <div className="landing-container">
      <Header />

      <main>
        <section id="hero-section">
          <Container maxWidth="sm">
            <Typography variant="h1" component="h1">Welcome to CriticalView360</Typography>
            <Typography variant="body1" component="p">Discover the power of critical reviews and visualizations.</Typography>
            {user ? (
              <Button component={Link} to="/dashboard" variant="contained">Go to Dashboard</Button>
            ) : (
              <Button component={Link} to="/register" variant="contained">Register Now</Button>
            )}
          </Container>
        </section>

        <section id="case-studies">
          <Container maxWidth="md">
            <Typography variant="h2" component="h2">Related Case Studies</Typography>
            <div className="case-study-list">
              {caseStudies.map(caseStudy => (
                <div className="case-study" key={caseStudy.id}>
                  <Typography variant="h3" component="h3">{caseStudy.title}</Typography>
                  <Typography variant="body2" component="p">{caseStudy.content}</Typography>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="latest-posts">
          <Container maxWidth="md">
            <Typography variant="h2" component="h2">Latest Posts</Typography>
            <div className="post-list">
              {posts.map(post => (
                <div className="post" key={post.id}>
                  <Typography variant="h3" component="h3">{post.title}</Typography>
                  <Typography variant="body2" component="p">{post.content}</Typography>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Landing;
