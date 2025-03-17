import { ReplykeProvider, useSignTestingJwt } from "@replyke/react-js";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

import PostPage from "./pages/post/[id]";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";

const users = [
  { id: "user1", username: "lionel_messi10" },
  { id: "user2", username: "diego_maradona" },
  { id: "user3", username: "pele" },
  { id: "user4", username: "ronaldo" },
];

function App() {
  const signTestingJwt = useSignTestingJwt();

  const [signedToken, setSignedToken] = useState<string>();

  useEffect(() => {
    const handleSignJwt = async () => {
      const payload = users[0];

      const token = await signTestingJwt({
        projectId: import.meta.env.VITE_PUBLIC_REPLYKE_PROJECT_ID!,
        payload,
        privateKey: import.meta.env.VITE_PUBLIC_REPLYKE_SECRET_KEY!,
      });
      // Set the signed JWT in the state
      setSignedToken(token);
    };

    handleSignJwt();
  }, []);

  return (
    <ReplykeProvider
      projectId={import.meta.env.VITE_PUBLIC_REPLYKE_PROJECT_ID}
      signedToken={signedToken}
    >
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/post/:id" element={<PostPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ReplykeProvider>
  );
}

export default App;
