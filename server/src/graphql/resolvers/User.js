import { getUser, isBase64, getCompany } from '../../helpers';

const base64 = require('btoa');


export default {
  id: async (root, args, { ctx }, info) => (!isBase64(root.id) ? base64(root.id) : root.id),
  friends: async (root, args, { ctx }, info) => {
    let friends = [];
    // root.friends will be an array of just user ids.

    if (root.friends) {
      // lets turn that into actual user data.
      friends = root.friends.map(id => getUser(id));
    }

    return friends;
  },

  company: async (root, args, { ctx }, info) => {
    let company;
    if (root.company) {
      company = getCompany(root.company);
    }
    return company;
  },
};
