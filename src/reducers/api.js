import Data from '../data'

export function loadData() {
  console.log('../data');
  return fetch(`../Data`)
    .then(res => res.json());
}
export default {
  loadData,
};
