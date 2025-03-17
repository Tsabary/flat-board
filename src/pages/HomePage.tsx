import { useState } from "react";
import { EntityProvider, FeedProvider, useFeed } from "@replyke/react-js";
import { PostRow } from "../components/home-page/PostRow";
import ActionsBar from "../components/home-page/ActionsBar";
import NewPostModal from "../components/home-page/NewPostModal";
import { LoaderCircleIcon } from "lucide-react";

function InnerHomePage() {
  const { entities, resetting } = useFeed();

  const [isNewPostModalOpen, setIsNewPostModalOpen] = useState(false);

  return (
    <div className="relative">
      <NewPostModal
        isOpen={isNewPostModalOpen}
        closeModal={() => setIsNewPostModalOpen(false)}
      />

      {/* Actions Bar */}
      <ActionsBar openNewPostModal={() => setIsNewPostModalOpen(true)} />

      {/* Posts List */}
      {resetting ? (
        <LoaderCircleIcon className="size-6 animate-spin mx-auto my-4" />
      ) : (
        <div className="flex flex-col border border-gray-200 rounded-lg shadow-md divide-y divide-gray-200">
          {entities?.map((entity) => (
            <EntityProvider entity={entity} key={entity.id}>
              <PostRow />
            </EntityProvider>
          ))}
        </div>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <FeedProvider>
      <InnerHomePage />
    </FeedProvider>
  );
}
