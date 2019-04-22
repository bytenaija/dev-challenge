import { setUser, getUser, isBase64 } from '../../../helpers';

const base16 = require('atob');

export default async function User(root, { user }, { ctx }, info) {
  console.log(user);
  try {
    const id = isBase64(user.id) ? base16(user.id) : user.id;
    console.log(id);
    const isUserExists = await getUser(id);
    console.log(isUserExists);
    if (isUserExists) {
      user = { ...user, id };
      const updatedUserInformation = { ...isUserExists, ...user };
      console.log(updatedUserInformation);
      await setUser(updatedUserInformation);
      return true;
    }
  } catch (err) {
    return Promise.reject(new Error('The user does not exist. Try again.'));
  }
}
