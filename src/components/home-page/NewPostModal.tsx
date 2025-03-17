"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useFeed } from "@replyke/react-js";

function NewPostModal({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) {
  const { createEntity } = useFeed();
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostTag, setNewPostTag] = useState("");

  const handleCreatePost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form
    if (!newPostTitle.trim() || !newPostContent.trim() || !newPostTag) {
      return;
    }

    await createEntity?.({
      title: newPostTitle,
      content: newPostContent,
      keywords: [newPostTag],
    });

    // Reset form and close modal
    closeModal();
    setNewPostTitle("");
    setNewPostContent("");
    setNewPostTag("");
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(state) => {
        if (!state) closeModal();
      }}
    >
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Create a new post</DialogTitle>
          <DialogDescription>
            Share your thoughts, questions, or ideas with the community.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleCreatePost}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={newPostTitle}
                onChange={(e) => setNewPostTitle(e.target.value)}
                placeholder="Enter a descriptive title"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                placeholder="Write your post content here..."
                className="min-h-[120px]"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="tag">Tag</Label>
              <Select value={newPostTag} onValueChange={setNewPostTag} required>
                <SelectTrigger id="tag">
                  <SelectValue placeholder="Select a tag" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="React">React</SelectItem>
                  <SelectItem value="Next.js">Next.js</SelectItem>
                  <SelectItem value="CSS">CSS</SelectItem>
                  <SelectItem value="Security">Security</SelectItem>
                  <SelectItem value="TypeScript">TypeScript</SelectItem>
                  <SelectItem value="JavaScript">JavaScript</SelectItem>
                  <SelectItem value="UI/UX">UI/UX</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={closeModal}>
              Cancel
            </Button>
            <Button type="submit">Post</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default NewPostModal;
