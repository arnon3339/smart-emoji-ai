'use client';

import React from "react";
import PostProvider from "./contexts/posts";

export default function PostsProviderWraper({children}: {children: React.ReactNode}) {
   return (
    <PostProvider>
        {children}
    </PostProvider>
   );
};
