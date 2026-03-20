import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import PostPage from "@/pages/PostPage/PostPage";
import Layout from "../Layout";

export default function Router(): React.JSX.Element {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/posts" element={<PostPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
