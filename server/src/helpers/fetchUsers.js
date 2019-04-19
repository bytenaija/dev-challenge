import fs from 'fs';
import util from 'util';

import getUser from './getUser';

const readDir = util.promisify(fs.readdir);

export default async (filters = null) => {
  const files = await readDir('./data/users');

  let users = files
    .filter(filename => filename.includes('.json'))
    .map(async filename => getUser(filename.replace('.json', '')));
  users = await Promise.all(users);

  if (filters) {
    if (filters.name) {
      users = users.filter(user => user.name.includes(filters.name));
    }
    if (filters.company) {
      users = users.filter(user => user.company === filters.company);
    }
  }

  return users;
};
