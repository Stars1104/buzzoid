import { useState } from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
    totalStars?: number;
    onRatingSelect?: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ totalStars = 5, onRatingSelect }) => {
    const [hover, setHover] = useState<number>(0);
    const [rating, setRating] = useState<number>(0);

    const handleClick = (star: number) => {
        setRating(star);
        if (onRatingSelect) onRatingSelect(star); // Callback for parent component
    };

    return (
        <div className="flex space-x-2">
            {[...Array(totalStars)].map((_, index) => {
                const starValue = index + 1;
                return (
                    <Star
                        key={starValue}
                        className={`cursor-pointer transition-all duration-300 ${(hover || rating) >= starValue ? "fill-[#eab308] stroke-[#eab308]" : "stroke-[#192d5a]"
                            }`}
                        size={25}
                        onClick={() => handleClick(starValue)}
                        onMouseEnter={() => setHover(starValue)}
                        onMouseLeave={() => setHover(0)}
                    />
                );
            })}
        </div>
    );
};

export default StarRating;