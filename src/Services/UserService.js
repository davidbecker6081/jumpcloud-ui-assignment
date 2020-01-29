import CONSTANTS from './utils/constants';

const getAllUsers = () => {
    return fetch(CONSTANTS.ROUTES.ALLUSERS)
      .then(response => response.json())
      .then(users => users.results)
      .catch(error => error)
}

const UserService = {
  getAllUsers
}

export default UserService;