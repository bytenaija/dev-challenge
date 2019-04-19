import fs from 'graceful-fs';
import util from 'util';
import isBase64 from './isBase64';

const readFile = util.promisify(fs.readFile);

const base64 = require('atob');

export default async function getCompany(id, users = null) {
  const convertedId = isBase64(id) ? base64(id) : id;
  const data = await readFile(`./data/companies/${convertedId}.json`, 'utf8');
  const company = JSON.parse(data);
  company.employees = users;
  return company;
}
