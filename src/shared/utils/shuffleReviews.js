export const shuffleReviews = (reviews) => {
  for (let i = reviews.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [reviews[i], reviews[j]] = [reviews[j], reviews[i]];
  }
};
