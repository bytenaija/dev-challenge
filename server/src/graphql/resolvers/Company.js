import { fetchUsers, isBase64 } from '../../helpers';

const base64 = require('btoa');

export default {
  id: async (root, args, { ctx }, info) => (!isBase64(root.id) ? base64(root.id) : root.id),
  employees: async (root, args, { ctx }, info) => {
    if (root.employees) {
      const users = root.employees.filter(user => user.company === root.id);
      return users;
    }

    const users = await fetchUsers({ company: root.id });

    return users;
  },
};
