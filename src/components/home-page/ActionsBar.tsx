"use client";

import { ChevronDown, Filter, Plus, SortAsc } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useFeed } from "@replyke/react-js";

function ActionsBar({ openNewPostModal }: { openNewPostModal: () => void }) {
  const { sortBy, setSortBy, timeFrame, setTimeFrame } = useFeed();
  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-6 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
      <div className="flex items-center gap-2">
        <SortAsc className="h-4 w-4" />
        <span className="text-sm font-medium">Sort:</span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="capitalize">
              {sortBy} <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem onClick={() => setSortBy?.("hot")}>
              Hot
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSortBy?.("new")}>
              New
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSortBy?.("top")}>
              Top
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSortBy?.("controversial")}>
              Controversial
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex items-center gap-2">
        <Filter className="h-4 w-4" />
        <span className="text-sm font-medium">Time:</span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="capitalize">
              {timeFrame === null ? "All Time" : timeFrame}{" "}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem onClick={() => setTimeFrame?.("hour")}>
              Last Hour
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTimeFrame?.("day")}>
              Today
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTimeFrame?.("week")}>
              This Week
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTimeFrame?.("month")}>
              This Month
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTimeFrame?.("year")}>
              This Year
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTimeFrame?.(null)}>
              All Time
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* <div className="flex items-center gap-2">
        <Filter className="h-4 w-4" />
        <span className="text-sm font-medium">Tag:</span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="capitalize">
              {tagFilter} <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem onClick={() => setTagFilter("all")}>
              All Tags
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTagFilter("React")}>
              React
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTagFilter("Next.js")}>
              Next.js
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTagFilter("CSS")}>
              CSS
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTagFilter("Security")}>
              Security
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTagFilter("TypeScript")}>
              TypeScript
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div> */}

      <Button
        className="sm:ml-auto cursor-pointer"
        size="sm"
        onClick={openNewPostModal}
      >
        <Plus className="mr-2 h-4 w-4" /> Create Post
      </Button>
    </div>
  );
}

export default ActionsBar;
