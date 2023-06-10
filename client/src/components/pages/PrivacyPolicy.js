import React from 'react';
import { Typography, Container } from '@mui/material';
import Header from '../common/Header';
import Footer from '../common/Footer';

const PrivacyPolicy = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="md">
        <Typography variant="h2" component="h2" align="center" gutterBottom>
          Privacy Policy
        </Typography>

        <Typography variant="h3" component="h3" gutterBottom>
          Information We Collect
        </Typography>
        <ul>
          <li>We collect personal information when you register an account, including [list the types of information].</li>
          <li>We also collect information you provide when creating a Bow Tie Card, including [list the types of information].</li>
          <li>We may collect additional information through your use of the app, such as [list any additional information collected].</li>
          <li>[Specify if any information is collected automatically, such as device information or usage data].</li>
        </ul>

        <Typography variant="h3" component="h3" gutterBottom>
          Use of Information
        </Typography>
        <Typography variant="body1" component="p">
          We use the collected information to provide and improve the app's features and functionality.
          Your information may be used to personalize your experience and provide tailored suggestions.
          We may also use the information for analytics, research, and marketing purposes.
        </Typography>

        <Typography variant="h3" component="h3" gutterBottom>
          Sharing of Information
        </Typography>
        <Typography variant="body1" component="p">
          We may share your information with third-party service providers who assist us in operating the app and delivering its services.
          Your information may be shared with affiliated companies or business partners for purposes such as marketing or co-branded services.
          We may disclose your information in response to a legal request or to protect our rights, property, or safety.
        </Typography>

        <Typography variant="h3" component="h3" gutterBottom>
          Data Security
        </Typography>
        <Typography variant="body1" component="p">
          We implement reasonable security measures to protect your information from unauthorized access, disclosure, or alteration.
          However, please note that no method of transmission or storage is completely secure, and we cannot guarantee absolute security.
        </Typography>

        <Typography variant="h3" component="h3" gutterBottom>
          Retention of Information
        </Typography>
        <Typography variant="body1" component="p">
          We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy unless a longer retention period is required or permitted by law.
        </Typography>

        <Typography variant="h3" component="h3" gutterBottom>
          Children's Privacy
        </Typography>
        <Typography variant="body1" component="p">
          The app is not intended for use by individuals under the age of [insert minimum age]. We do not knowingly collect personal information from children without parental consent.
        </Typography>

        <Typography variant="h3" component="h3" gutterBottom>
          Your Choices
        </Typography>
        <Typography variant="body1" component="p">
          You may update or delete your account information by [explain how users can manage their account settings].
          You may opt out of receiving promotional communications from us by [describe opt-out mechanisms].
        </Typography>

        <Typography variant="h3" component="h3" gutterBottom>
          Changes to the Privacy Policy
        </Typography>
        <Typography variant="body1" component="p">
          We may update this privacy policy from time to time. We will notify you of any material changes by [describe how you will notify users].
          Continued use of the app after the changes will indicate your acceptance of the updated policy.
        </Typography>
      </Container>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
