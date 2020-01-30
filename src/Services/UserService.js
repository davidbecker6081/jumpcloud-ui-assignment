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
    return error
  }
}

const deleteUser = async (userId) => {
  try {
    const response = await fetch(CONSTANTS.ROUTES.DELETEUSER(userId), {
      method: 'delete',
      body: JSON.stringify({ id: userId }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    const parsedResponse = await response.json()
    return parsedResponse
  }
  catch (error) {
    return error
  }
}

const updateUser = async (user) => {
  try {
    const response = await fetch(CONSTANTS.ROUTES.UPDATEUSER(user.id), {
      method: 'put',
      body: JSON.stringify(user),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    const parsedResponse = await response.json()
    return parsedResponse
  }
  catch (error) {
    return error
  }
}

const UserService = {
  getAllUsers,
  createNewUser,
  deleteUser,
  updateUser
}

export default UserService;