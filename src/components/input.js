import React, { useState } from 'react';

const QuestionForm = () => {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform LLM search and update the state with the search results
    setQuestion('Searching for answers...');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="question">Question:</label>
      <input
        type="text"
        id="question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default QuestionForm;
