import { getUserName, useEntity } from "@replyke/react-js";
import { Badge } from "@/components/ui/badge";
import { UserAvatar } from "@replyke/ui-core-react-js";
import { getTimeAgo } from "../../../lib/timeAgo";

function PostRowContent() {
  const { entity } = useEntity();

  if (!entity) return null;
  return (
    <div className="flex-1 p-4">
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
          {entity.title}
        </h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">
        {entity.content}
      </p>
      <div className="flex items-center justify-between gap-2 mt-2 text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-2">
          <UserAvatar user={entity.user!} size={22} />
          <span className="font-medium hover:underline cursor-pointer">
            u/{getUserName(entity.user!, "username")}
          </span>
          <span>•</span>
          <span>{getTimeAgo(new Date(entity.createdAt))}</span>
        </div>
        <div>
          {entity.keywords.map((k) => (
            <Badge variant="secondary" key={k}>
              {k}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostRowContent;
