const kidsWithCandies = (candies, extraCandies) => {
  const max = Math.max(...candies);
  return candies.map((kid) => kid + extraCandies >= max);
};

// scored 50th % on both speed and memory
