import axios from 'axios';
import store from './store';
import {
  postProjectFailure, 
  postProjectRequest, 
  postProjectSuccess, 
  getFileFailure, 
  getFileRequest, 
  getFileSuccess,
  getUnitFailure,
  getUnitRequest,
  getUnitSuccess
} from './actions';

class APIService {
  constructor() {
    if(APIService.instance) {
      return APIService.instance;
    }
    
    APIService.instance = this;
  }
  
  static getInstance(store){
    if (!this.instance) {
      this.instance = new APIService(store);
    }
    
    return this.instance;
  }
  
  async postNewProject(url) {
    const postData = {
      name: url,
      repository_url: url,
      created: '2024-04-14T00:40:17.149Z'
    };
          
    const config = {
      headers: {
        'Accept': 'application/ld+json',
        'Content-Type': 'application/ld+json'
      }
    };
    
    store.dispatch(postProjectRequest()); 
          
    axios.post('http://aitesting.marmixsoft.com/api/projects', postData, config)
      .then(response => {
        console.log("Status:" + response.status);
        store.dispatch(postProjectSuccess(response.status));
      })
      .catch(error => {
        console.error('Error making API call:', error);
        store.dispatch(postProjectFailure(error.message));
      });
  }
  
  async fetchFile(fileID) {
      // const postData = {
      //     name: url,
      //     repository_url: url,
      //     created: '2024-04-14T00:40:17.149Z'
      //   };
        
      //   const config = {
      //     headers: {
      //       'Accept': 'application/ld+json',
      //       'Content-Type': 'application/ld+json'
      //     }
      //   };

  store.dispatch(getFileRequest()); 
        
  axios.post('http://aitesting.marmixsoft.com/api/projects', postData, config)
    .then(response => {
      console.log("Status:" + response.data);
      store.dispatch(getFileSuccess(response.data));
    })
    .catch(error => {
      console.error('Error making API call:', error);
      store.dispatch(getFileFailure(error.message));
    });
  }

  async fetchUnit(unitID) {
    // const postData = {
    //     name: url,
    //     repository_url: url,
    //     created: '2024-04-14T00:40:17.149Z'
    //   };
      
    //   const config = {
    //     headers: {
    //       'Accept': 'application/ld+json',
    //       'Content-Type': 'application/ld+json'
    //     }
    //   };

store.dispatch(getUnitRequest()); 
      
axios.post('http://aitesting.marmixsoft.com/api/projects', postData, config)
  .then(response => {
    console.log("Status:" + response.data);
    store.dispatch(getUnitSuccess(response.data));
  })
  .catch(error => {
    console.error('Error making API call:', error);
    store.dispatch(getUnitFailure(error.message));
  });
}

}

export default APIService;