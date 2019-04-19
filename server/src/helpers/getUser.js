import fs from 'graceful-fs';
import util from 'util';
import isBase64 from './isBase64';

const base64 = require('atob');

const readFile = util.promisify(fs.readFile);

export default async function getUser(id) {
  const convertedId = isBase64(id) ? base64(id) : id;
  const data = await readFile(`./data/users/${convertedId}.json`, 'utf8');
  return JSON.parse(data);
}
