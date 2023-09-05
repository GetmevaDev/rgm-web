export const getUniqueReviews = (reviews, step) => [
  reviews[step * 2],
  reviews[step * 2 + 1],
];
