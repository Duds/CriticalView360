import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const NewCard = () => {
  const [hazard, setHazard] = useState('');
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // TODO: Send the hazard to the GPT API and save the response in the database
    // After the data is saved, navigate to the review page
    history.push('/review');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Hazard/Risk:
        <input
          type="text"
          value={hazard}
          onChange={(e) => setHazard(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewCard;
