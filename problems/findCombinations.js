const coins = [50, 100, 200];
const target = 500;

function findCombinations() {
  const result = [];
   
  for (let count200 = 0; count200 <= Math.floor(target / 200); count200++) {
    for (let count100 = 0; count100 <= Math.floor((target - 200 * count200) / 100); count100++) {
      for (let count50 = 0; count50 <= Math.floor((target - 200 * count200 - 100 * count100) / 50); count50++) {

        const total = count200 * 200 + count100 * 100 + count50 * 50;

        if (total === target) {
          result.push({
            '200 dram': count200,
            '100 dram': count100,
            '50 dram': count50,
            'totalCoins': count200 + count100 + count50
          })
        }
      }
    }
  }

  return result;
}

const combinations = findCombinations();

combinations.forEach((c, idx) => {
    console.log(`Scenario ${idx + 1}:`, c);
});

console.log(`Total scenarios found: ${combinations.length}`);