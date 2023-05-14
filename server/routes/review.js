import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// Placeholder data
const suggestions = {
  causes: ['Cause 1', 'Cause 2'],
  preventingControls: ['Control 1', 'Control 2'],
  mitigatingControls: ['Control 3', 'Control 4'],
  consequences: ['Consequence 1', 'Consequence 2'],
};

const Review = () => {
  const [selectedSuggestions, setSelectedSuggestions] = useState({
    causes: [],
    preventingControls: [],
    mitigatingControls: [],
    consequences: [],
  });
  const history = useHistory();

  useEffect(() => {
    // TODO: Replace the placeholder data with the actual suggestions from the GPT API
    setSelectedSuggestions(suggestions);
  }, []);

  const handleChange = (event, category) => {
    setSelectedSuggestions({
      ...selectedSuggestions,
      [category]: selectedSuggestions[category].includes(event.target.value)
        ? selectedSuggestions[category].filter((suggestion) => suggestion !== event.target.value)
        : [...selectedSuggestions[category], event.target.value],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // TODO: Save the selected suggestions in the database and update the Bow Tie Card
    // After the data is saved, navigate to the visualization page
    history.push('/visualize');
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.entries(selectedSuggestions).map(([category, categorySuggestions]) => (
        <fieldset key={category}>
          <legend>{category}</legend>
          {categorySuggestions.map((suggestion) => (
            <label key={suggestion}>
              <input
                type="checkbox"
                value={suggestion}
                checked={selectedSuggestions[category].includes(suggestion)}
                onChange={(event) => handleChange(event, category)}
              />
              {suggestion}
            </label>
          ))}
        </fieldset>
      ))}
      <button type="submit">Save</button>
    </form>
  );
};

export default Review;
