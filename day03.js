const { data } = require('./data/day03');

const PRIORITIES = '0abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const findDuplicate = (rucksack) => {
  const half1 = rucksack.split('').slice(0, rucksack.length / 2);
  const half2 = rucksack.split('').slice(rucksack.length / 2);

  for (idx in half1) {
    if (half2.indexOf(half1[idx]) !== -1) {
      return half1[idx];
    }
  }
};

const groupData = (arr) => arr.reduce((agg, curr, idx) => {
  let ret = [...agg];
  if (idx % 3 === 0) {
    ret.push([]);
  }
  ret[ret.length - 1].push(curr);

  return ret;
}, []);

const findBadge = (a, b, c) => {
  for (idx in a) {
    if (b.indexOf(a[idx]) !== -1 && c.indexOf(a[idx]) !== -1) {
      return a[idx];
    }
  }
}

console.log(data.reduce((agg, curr) => agg + PRIORITIES.indexOf(findDuplicate(curr)), 0))
console.log(groupData(data).reduce((agg, curr) => agg + PRIORITIES.indexOf(findBadge(...curr)), 0))

