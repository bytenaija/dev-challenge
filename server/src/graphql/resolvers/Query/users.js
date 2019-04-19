/* eslint-disable no-return-await */
import fs from 'fs';
import util from 'util';

import { getUser } from '../../../helpers';

const readDir = util.promisify(fs.readdir);

export default async function users(root, { name }, { ctx }, info) {
  const files = await readDir('./data/users');

  // todo: 3. can we accept a input variable into the graphql query to only show certain users? Maybe allowing
  //  filter by name to begin with.

  // todo: 5. getting this list of all users is slow.  Would be really cool if it could return all the users
  //  in a more performant way.  Keeping in mind that the underlaying JSON files may get updated.

  let users = files
    .filter(filename => filename.includes('.json'))
    .map(async filename => await getUser(filename.replace('.json', '')));
  users = await Promise.all(users);

  if (name) {
    users = users.filter((user) => {
      if (user.name) {
        return user.name.includes(name);
      }

      return false;
    });
  }

  return users;
}
