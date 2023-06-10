// CaseStudy.js
import React from 'react';
import { Typography } from '@mui/material';

const CaseStudy = ({ caseStudy }) => {
  return (
    <div className="case-study">
      <Typography variant="h3" component="h3">{caseStudy.title}</Typography>
      <Typography variant="body2" component="p">{caseStudy.content}</Typography>
    </div>
  );
};

export default CaseStudy;
