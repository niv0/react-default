'use client'

import { useState } from 'react';

export default function AssetImport() {

  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');


  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
    validateInput(event.target.value);
  }
  const validateInput = (value: string) => {
    // Add your validation logic here
    // For example, check if the input is not empty
    if (value.trim() === '') {
      setError('Input cannot be empty');
    } else {
      setError('');
    }
  }


  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Perform actions with inputValue here
    console.log(inputValue);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="my-input-class"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
        {error && <p>{error}</p>}
      </form>
    </div>)
}
