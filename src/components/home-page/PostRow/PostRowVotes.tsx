import { ChevronDown, ChevronUp } from "lucide-react";
import { useEntity } from "@replyke/react-js";
import { useState } from "react";

function PostRowVotes() {
  const {
    entity,
    upvoteEntity,
    downvoteEntity,
    removeEntityUpvote,
    removeEntityDownvote,
    userDownvotedEntity,
    userUpvotedEntity,
  } = useEntity();

  const [isHoveringUpvote, setIsHoveringUpvote] = useState(false);
  const [isHoveringDownvote, setIsHoveringDownvote] = useState(false);

  if (!entity) return null;

  const bgColor = isHoveringUpvote
    ? "bg-blue-50"
    : isHoveringDownvote
    ? "bg-red-50"
    : userUpvotedEntity
    ? "bg-blue-100"
    : userDownvotedEntity
    ? "bg-red-100"
    : "bg-transparent";

  return (
    <div
      className={`p-4 flex flex-col items-center justify-center border-r transition-colors duration-300 ${bgColor}`}
    >
      <button
        onMouseEnter={() => setIsHoveringUpvote(true)}
        onMouseLeave={() => setIsHoveringUpvote(false)}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          (userUpvotedEntity ? removeEntityUpvote : upvoteEntity)?.();
        }}
        className={`cursor-pointer p-1 rounded-full hover:bg-blue-200 dark:hover:bg-gray-700 transition-colors duration-300 ${
          userUpvotedEntity ? "text-blue-500" : ""
        }`}
      >
        <ChevronUp className="h-5 w-5" />
      </button>
      <span className="font-medium text-sm py-1">
        {entity.upvotes.length - entity.downvotes.length}
      </span>
      <button
        onMouseEnter={() => setIsHoveringDownvote(true)}
        onMouseLeave={() => setIsHoveringDownvote(false)}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          (userDownvotedEntity ? removeEntityDownvote : downvoteEntity)?.();
        }}
        className={`cursor-pointer p-1 rounded-full hover:bg-red-200 dark:hover:bg-gray-700 transition-colors duration-300 ${
          userDownvotedEntity ? "text-orange-500" : ""
        }`}
      >
        <ChevronDown className="h-5 w-5" />
      </button>
    </div>
  );
}

export default PostRowVotes;
