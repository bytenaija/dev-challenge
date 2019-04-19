/* eslint-disable no-return-await */
import fs from 'fs';
import util from 'util';

import { fetchUsers } from '../../../helpers';

export default async function users(root, { filters }, { ctx }, info) {
  const filteredUsers = fetchUsers(filters);
  return filteredUsers;
}
