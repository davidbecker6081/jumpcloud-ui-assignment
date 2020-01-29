import CONSTANTS from './utils/constants';

const getAllUsers = async () => {
  try {
    const response = await fetch(CONSTANTS.ROUTES.ALLUSERS);
    const users = await response.json();
    return users.results;
  }
  catch (error) {
    return error
  }
}

const createNewUser = async (userInfo) => {
  try {
    const response = await fetch(CONSTANTS.ROUTES.CREATENEWUSER, {
      method: 'post',
      body: JSON.stringify(userInfo),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    });
    const user = await response.json()
    return user
  }
  catch (error) {
    return error;
  }
}

const UserService = {
  getAllUsers,
  createNewUser
}

export default UserService;