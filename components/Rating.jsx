import { fullStar, halfStar, emptyStar } from "../assets/ratings/index.js";

const Rating = ({ rating }) => {
    const maxRating = 5;

    return (
        <div className="rating-container">
            {[...Array(maxRating)].map((_, index) => {
                if (index < rating - 0.5) {
                    return <img key={index} src={fullStar} alt="Full Star" />;
                } else if (index + 0.5 === rating) {
                    return <img key={index} src={halfStar} alt="Half Star" />;
                } else {
                    return <img key={index} src={emptyStar} alt="Empty Star" />;
                }
            })}
        </div>
    );
};

export default Rating;
