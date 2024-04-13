import { useState } from 'react'
import { BackendService } from "@genezio-sdk/smart-test-generation";
import './App.css'

function App() {
  const [repositoryURL, setRepositoryURL] = useState('');
  const [response, setResponse] = useState("");

  async function findRepository() {
    setResponse(await BackendService.findRepository(repositoryURL));
    console.log('Received:', response);
  }

  const handleChange = (event) => {
    setRepositoryURL(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the input value, e.g., send it to a server
    console.log('Sent:', repositoryURL);
    findRepository();
    
    // Clear the input field after submission
    setRepositoryURL('');
  };

  return (
    <>
      <div>
        <h1>Smart Test Generation</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={repositoryURL}
            onChange={handleChange}
            placeholder="Repository URL"
          />
          <button type="submit">Go</button>
        </form>
      </div>
    </>
  );
}

export default App
