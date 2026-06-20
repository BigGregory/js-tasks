/**
 * You are given a list of calendar events for a single day.
 * Each event has a start time and end time, represented as integers
 * in 24-hour format (e.q., 930 for 9:30 AM, 1430 for 2:30 PM).
 *
 * Your task is to merge overlapping or adjacent events and return
 * a list of consolidated busy time intervals, sorted by start time.
 *
 * Examples
 * Input: [[100, 300], [200, 400]]
 * Output: [[100, 400]]
 *
 * Input: [[900, 1000], [1000, 1100], [1200, 1300], [1250, 1400]]
 * Output: [[900, 1100], [1200, 1400]]
 *
 * Input: [[800, 900], [1000, 1100]]
 * Output: [[800, 900], [1000, 1100]]
 *
 * Input: []
 * Output: []
 */

function mergeCalendarEvents(events) {
  if (events.length === 0) return [];

  // 1. Sort by start time
  const sorted = [...events].sort((a, b) => a[0] - b[0]);

  const result = [];

  let [currentStart, currentEnd] = sorted[0];

  for (let i = 1; i < sorted.length; i++) {
    const [start, end] = sorted[i];

    // 2. Overlap OR adjacency
    if (start <= currentEnd) {
      currentEnd = Math.max(currentEnd, end);
    } else {
      result.push([currentStart, currentEnd]);
      [currentStart, currentEnd] = [start, end];
    }
  }

  // 3. Push last interval
  result.push([currentStart, currentEnd]);

  return result;
}

console.log(
  mergeCalendarEvents([
    [900, 1000],
    [1000, 1100],
    [1200, 1300],
    [1250, 1400],
  ]),
);
