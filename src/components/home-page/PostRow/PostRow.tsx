import { useNavigate } from "react-router-dom";
import { useEntity } from "@replyke/react-js";
import PostRowContent from "./PostRowContent";
import PostRowVotes from "./PostRowVotes";

function PostRow() {
  const { entity } = useEntity();
  const navigate = useNavigate();

  if (!entity) return null;

  const handleClick = () => {
    navigate(`/post/${entity.shortId}`);
  };

  return (
    <div 
      className="flex gap-4 cursor-pointer hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 transition-colors"
      onClick={handleClick}
    >
      {/* Vote buttons */}
      <PostRowVotes />

      {/* Post content */}
      <PostRowContent />
    </div>
  );
}

export default PostRow;
