/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
  const alts = [0];
  let start = 0;

  for (let i = 0; i < gain.length; i++) {
      const newAlt = start += gain[i];
      alts.push(newAlt);
      start = newAlt;
  }

  return Math.max(...alts);
};