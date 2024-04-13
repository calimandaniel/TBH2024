import { useState } from 'react'
import { BackendService } from "@genezio-sdk/smart-test-generation";
import './App.css'
import Title from './view/Title';
import GitRepositoryForm from './view/GitRepositoryForm';

import FileBrowser from './view/FileBrowser';
import CodeDisplay from './view/files_manipulation/CodeDisplay';
import UnitTestClassDisplayAndEdit from './view/files_manipulation/UnitTestClassDisplayAndEdit';
import Stack from '@mui/material/Stack';

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
        {
          name: 'subfolder3',
          children: [
            {
              name: 'smth7.py',
              content: 'pyhton code 3'
            },
            {
              name: 'smth8.py',
              content: 'pyhton code 4'
            },
            {
              name: 'subfolder9',
              children: [
                {
                  name: 'smth9.py',
                  content: 'pyhton code 3'
                },
                {
                  name: 'smth10.py',
                  content: 'pyhton code 4'
                },
              ]
            },
          ]
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

const code = `
def add(a, b):
  return a + b

def subtract(a, b):
  return a - b

def multiply(a, b):
  return a * b

def divide(a, b):
  if b == 0:
      raise ValueError("Cannot divide by zero zero zero zero zero zero zero")
  return a / b

def is_even(n):
  return n % 2 == 0

def is_prime(n):
  if n <= 1:
      return False
  for i in range(2, int(n**0.5) + 1):
      if n % i == 0:
          return False
  return True
`;

const code_edit = `
def add(a, b):
  return a + b

def subtract(a, b):
  return a - b

def multiply(a, b):
  return a * b

def divide(a, b):
  if b == 0:
      raise ValueError("Cannot divide by zero")
  return a / b

def is_even(n):
  return n % 2 == 0

def is_prime(n):
  if n <= 1:
      return False
  for i in range(2, int(n**0.5) + 1):
      if n % i == 0:
          return False
  return True
`;

const filename1 = 'something very very looooooooooooooooooooooooooooooooooooooong 1.pyy';
const filename2 = 'something very very looooooooooooooooooooooooooooooooooooooong 2.pyy';

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

      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" style={{marginTop: '10vh', marginBottom: '10vh'}}>
        <FileBrowser data={data} />

        <CodeDisplay filename={filename1} data={code}/>

        <UnitTestClassDisplayAndEdit filename={filename2} data={code_edit} />
      </Stack>

      

    </>
  );
}

export default App
