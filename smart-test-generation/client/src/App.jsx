import { useState } from 'react'
import { BackendService } from "@genezio-sdk/smart-test-generation";
import './App.css'
import Title from './view/Title';
import GitRepositoryForm from './view/GitRepositoryForm';

function App() {
  const [repositoryURL, setRepositoryURL] = useState('');
  const [response, setResponse] = useState("");
  const [isValidURL, setIsValidURL] = useState(true);

  async function findRepository() {
    setResponse(await BackendService.findRepository(repositoryURL));
    console.log('Received:', response);
  }

  const handleChange = (event) => {
    setRepositoryURL(event.target.value);
    setIsValidURL(validateGitRepoURL(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Sent:', repositoryURL);
    findRepository();
    
    setRepositoryURL('');
  };

  const validateGitRepoURL = (url) => {
    console.log('Checking:', url);
    const regex = /^https:\/\/\w+(\.\w+)*\/[^\/]+\/[^\/]+\.git$/;

    return regex.test(url);
  };

  return (
    <>
      <Title />

      <GitRepositoryForm 
        onSubmit={handleSubmit} 
        value={repositoryURL} 
        handleChange={handleChange} 
        disabled={!isValidURL || repositoryURL=== ''} 
        show={!isValidURL}
      />
    </>
  );
}

export default App
