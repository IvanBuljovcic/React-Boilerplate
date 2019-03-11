import history from '../history';

const auth = {
  /**
   * @returns {boolean} If authToken exists in LocalStorage, returns true; else false
   */
  authenticate() {
    const token = localStorage.getItem('authToken');

    if (token) {
      return true;
    }

    return false;
  },

  signOut() {
    localStorage.removeItem('authToken');
    history.push('/');
  },
};

export default auth;
