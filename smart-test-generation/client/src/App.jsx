import { useState } from 'react'
import { BackendService } from "@genezio-sdk/smart-test-generation";
import './App.css'
import Title from './view/Title';
import GitRepositoryForm from './view/GitRepositoryForm';
import FileBrowser from './FileBrowser';

const data = {
  name: 'project-title',
  children: [
    {
      name: 'smth.py',
      // content: 'pyhton code 1'
    },
    {
      name: 'smth2.py',
      content: 'pyhton code 2'
    },
    {
      name: 'subfolder1',
      children: [
        {
          name: 'smth3.py',
          content: 'pyhton code 3'
        },
        {
          name: 'smth4.py',
          content: 'pyhton code 4'
        },
      ]
    },

    {
      name: 'subfolder2',
      children: [
        {
          name: 'smth5.py',
          content: 'pyhton code 3'
        },
        {
          name: 'smth6.py',
          content: 'pyhton code 4'
        },
      ]
    },

  ]
};

function App() {
  const [repositoryURL, setRepositoryURL] = useState('');
  const [response, setResponse] = useState("");
  const [isValidURL, setIsValidURL] = useState(true);
  const [processingRequest, setProcessingRequest] = useState(false);

  async function findRepository() {
    setProcessingRequest(true); // disable the ability to make new requests
    setResponse(await BackendService.findRepository(repositoryURL));
   
    console.log('Received:', response);
    setProcessingRequest(false); // disable the ability to make new requests
  }

  const handleChange = (event) => {
    setRepositoryURL(event.target.value);
    setIsValidURL(validateGitRepoURL(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Sent:', repositoryURL);
    findRepository();

    console.log(jsonString);
    
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
        disabled={!isValidURL || repositoryURL === '' || processingRequest} 
        show={!isValidURL}
      />

      <FileBrowser data={data} />
    </>
  );
}

export default App
