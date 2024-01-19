import React, { useState } from 'react';
import { createNewPlayer } from '../ajaxHelpers'; 

const NewPlayerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    // Add other form fields as needed
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add form validation if needed

    // Call the AJAX helper function to create a new player
    await createNewPlayer(formData);

    // Optionally, you can redirect or perform other actions after form submission
  };

  return (
    <div>
      <h2>Create a New Player</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        {/* Add other form fields as needed */}
        <button type="submit">Create Player</button>
      </form>
    </div>
  );
};

export default NewPlayerForm;
