
export const Review = ({ review }) => {
  return (
    <li>
      {review.user} : {review.rating}
      <br />
      <blockquote><q>{review.text}</q></blockquote>
    </li>
  );
};