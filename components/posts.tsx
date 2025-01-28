'use client';

import { useContext } from "react";
import { PostContext } from "./contexts/posts";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

export default function Posts() {
    const {texts} = useContext(PostContext);
    return (
        <div className="flex justify-center items-center gap-x-6">
            <Link href={`https://twitter.com/intent/tweet?text=${texts}`} target="_blank">
                <SocialIcon network="x" 
                        className="icon-responsive cursor-pointer"/>
            </Link>
            <Link href={`https://social-plugins.line.me/lineit/share?text=${texts}`} target="_blank">
                <SocialIcon network="line.me" 
                        className="icon-responsive cursor-pointer"/>
            </Link>
        </div>
    );    
};
