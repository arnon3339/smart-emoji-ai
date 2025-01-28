'use client';

import React, { createContext, useState, Dispatch, SetStateAction } from "react";

interface PostContextType {
    toggle: boolean;
    setToggle: Dispatch<SetStateAction<boolean>>;
    texts: string | undefined;
    setTexts: Dispatch<SetStateAction<string | undefined>>;
    cursor: number | undefined;
    setCursor: Dispatch<SetStateAction<number | undefined>>;
}

export const PostContext = createContext<PostContextType>({
    toggle: false, 
    setToggle: () => {},
    texts: undefined,
    setTexts: () => {},
    cursor: undefined,
    setCursor: () => {}
});

export default function PostProvider({children}: {children: React.ReactNode}) {
    const [toggle, setToggle] = useState(false);
    const [texts, setTexts] = useState<string | undefined>(undefined);
    const [cursor, setCursor] = useState<number | undefined>(undefined);

    return (
        <PostContext.Provider value={{toggle, setToggle, texts, setTexts, cursor, setCursor}}>
            {children}
        </PostContext.Provider>
    );
};
