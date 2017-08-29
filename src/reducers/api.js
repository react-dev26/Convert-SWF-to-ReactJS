import Data from 'data'

export function loadData() {
  return fetch(`../Data`)
    .then(res => res.json());
}
export default {
  loadData,
};
