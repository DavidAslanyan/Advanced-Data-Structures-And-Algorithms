const data = [
  { country: 'USA', value: 100 },
  { country: 'Canada', value: 50 },
  { country: 'USA', value: 200 },
  { country: 'Mexico', value: 75 },
  { country: 'Canada', value: 150 },
  { country: 'Brazil', value: 300 },
];

// const { objOfUniq, objOfAvg } = countriesFilter(data);
// console.log('Unique countries:', objOfUniq); // { Mexico: 75, Brazil: 300 }
// console.log('Average values:', objOfAvg); // { USA: 150, Canada: 100 }


const countriesFilter = (data) => {
  let uniqueMap = new Map();
  const obj = {};

  for (let item of data) {
    if (uniqueMap.get(item.country)) {
      const saved = uniqueMap.get(item.country);
      uniqueMap.set(item.country, item.value + saved)
      obj[item.country] = obj[item.country] + 1;
    } else {
      uniqueMap.set(item.country, item.value);
      obj[item.country] = 1;
    }
  }

  const result = {};
  const result2 = {};

  for (let item of uniqueMap) {
    const [ key, value ] = item;

    if (obj[key] === 1) {
      result[key] = value;
    }

    if (obj[key] > 1) {
      result2[key] = value / obj[key];
    }
  }

  return [result, result2];
}

console.log(countriesFilter(data))