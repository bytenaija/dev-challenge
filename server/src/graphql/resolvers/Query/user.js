import { getUser } from '../../../helpers';

export default async function user(root, { id }, { ctx }, info) {
  console.log(id);
  return getUser(id);
}
