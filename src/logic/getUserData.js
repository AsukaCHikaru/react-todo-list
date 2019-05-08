// Placeholder for backend GET APIs

import handleTask from './handleTask';

function getUserData() {
  const logined = localStorage.getItem('state')!==null;
  if(logined) {
    // Load existing data into app
    let state = JSON.parse(localStorage.getItem('state'));
    // Not showing Search result when reloading app
    state.list = handleTask.clearSearch(state);
    return state;
  }
  else{
    // Generate a user id for current user
    const userId = 'localTempId';
    return {userId: userId};
  }
}

export default getUserData;