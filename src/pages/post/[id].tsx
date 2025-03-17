import { useParams } from "react-router-dom";
import { useEntity, EntityProvider, getUserName } from "@replyke/react-js";
import { UserAvatar } from "@replyke/ui-core-react-js";

import { LoaderCircleIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PostRowVotes from "@/components/home-page/PostRow/PostRowVotes";
import { getTimeAgo } from "../../lib/timeAgo";
import CommentSection from "../../components/post-page/CommentSection";

function PostPage() {
  const { entity } = useEntity();

  if (typeof entity === "undefined")
    return <LoaderCircleIcon className="size-6 animate-spin mx-auto my-4" />;

  if (entity === null)
    return <div className="text-center py-8">Post not found</div>;

  return (
    <Card className="py-0 overflow-hidden">
      <div className="flex border-b">
        <PostRowVotes />
        <div className="flex-1 py-4">
          <CardHeader>
            <div className="flex items-center gap-2 mb-4 w-full">
              <UserAvatar user={entity.user!} size={32} />
              <div className="flex-1">
                <span className="font-medium hover:underline cursor-pointer">
                  u/{getUserName(entity.user!, "username")}
                </span>
                <div className="text-sm text-gray-500">
                  {getTimeAgo(new Date(entity.createdAt))}
                </div>
              </div>
              <div className="flex gap-2 mt-2">
                {entity.keywords.map((k) => (
                  <Badge variant="secondary" key={k}>
                    {k}
                  </Badge>
                ))}
              </div>
            </div>
            <CardTitle className="text-2xl">{entity.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
              {entity.content}
            </p>
          </CardContent>
        </div>
      </div>
      <CommentSection />
    </Card>
  );
}

const WrappedPostPage = () => {
  const { id: shortId } = useParams();

  return (
    <EntityProvider shortId={shortId}>
      <PostPage />
    </EntityProvider>
  );
};

export default WrappedPostPage;
