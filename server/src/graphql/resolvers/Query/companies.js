import fs from 'graceful-fs';
import util from 'util';

import { getCompany, fetchUsers } from '../../../helpers';

const readDir = util.promisify(fs.readdir);

export default async function companies(root, args, { ctx }, info) {
  const users = await fetchUsers();

  const files = await readDir('./data/companies');

  const companies = files
    .filter(filename => filename.includes('.json'))
    .map(filename => getCompany(filename.replace('.json', ''), users));

  return companies;
}
