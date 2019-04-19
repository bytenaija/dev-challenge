/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
import fs from 'graceful-fs';
import util from 'util';

import getUser from './getUser';

const readDir = util.promisify(fs.readdir);

export default async (filters = null) => {
  const files = await readDir('./data/users');
  console.time('loading files');
  let users = files
    .filter(filename => filename.includes('.json'))
    .map(async filename => getUser(filename.replace('.json', '')));
  console.timeEnd('loading files');

  //   console.time('loading files');
  //   let users = [];

  //   for (const file of files) {
  //     console.log(file);
  //     if (file.includes('.json')) {
  //       users.push(getUser(file.replace('.json', '')));
  //     }
  //   }

  //   console.timeEnd('loading files');
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
