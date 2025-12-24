/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function(n, paths) {
  // adjacency list, 1-indexed
  const g = Array.from({ length: n + 1 }, () => []);

  for (const [a, b] of paths) {
    g[a].push(b);
    g[b].push(a);
  }

  const ans = Array(n + 1).fill(0); // ans[i] = flower for garden i

  for (let i = 1; i <= n; i++) {
    const used = Array(5).fill(false); // used[color] by neighbors (1..4)

    for (const nb of g[i]) {
      const c = ans[nb];
      if (c !== 0) used[c] = true;
    }

    // pick first available color
    for (let color = 1; color <= 4; color++) {
      if (!used[color]) {
        ans[i] = color;
        break;
      }
    }
  }

  return ans.slice(1);
};
