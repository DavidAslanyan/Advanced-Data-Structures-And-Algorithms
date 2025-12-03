/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
  const [x1, y1, x2, y2] = rec1;
  const [x3, y3, x4, y4] = rec2;
  
  const overLapX = Math.max(x1, x3) < Math.min(x2, x4);
  const overLapY = Math.max(y1, y3) < Math.min(y2, y4);

  
  return overLapX && overLapY;
};