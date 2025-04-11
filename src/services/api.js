const fetchResponse = async (question) => {
    const apiKey = 'YOUR_API_KEY';
    const url = 'https://api.openai.com/v1/completions';
  
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: question,
        max_tokens: 100,
        model: 'text-davinci-003',
      }),
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const data = await response.json();
    return data.choices[0].text.trim();
  };