import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

const LikeButton = ({ idImage }: { idImage: string }) => {
  const [liked, setLiked] = useState<boolean>(false);

  const imageStats = JSON.parse(localStorage.getItem("imageStats") || "{}");
  const initialLikes = imageStats[idImage].likes;

  const [likes, setLikes] = useState<number>(initialLikes);

  useEffect(() => {
    const storedLiked = localStorage.getItem(`liked_${idImage}`);
    if (storedLiked !== null) {
      setLiked(JSON.parse(storedLiked));
    }
  }, [idImage]);

  const handleLike = () => {
    const newLikedState = !liked;
    setLiked(newLikedState);

    const newLikesCount = newLikedState ? likes + 1 : likes - 1;
    setLikes(newLikesCount);

    localStorage.setItem(`liked_${idImage}`, JSON.stringify(newLikedState));
    if (imageStats[idImage]) imageStats[idImage].likes = newLikesCount;
    localStorage.setItem("imageStats", JSON.stringify(imageStats));
  };

  return (
    <div className="flex items-center">
      <Heart
        size={24}
        className="cursor-pointer transition-all duration-200"
        fill={liked ? "red" : "none"}
        stroke="red"
        onClick={handleLike}
        onMouseEnter={(e) => !liked && (e.currentTarget.style.fill = "red")}
        onMouseLeave={(e) => !liked && (e.currentTarget.style.fill = "none")}
      />
      <span className="ml-2">{likes}</span>
    </div>
  );
};

export default LikeButton;
