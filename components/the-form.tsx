'use client';

import { useContext, useRef, useState } from "react";
import { PostContext } from "./contexts/posts";

export default function TheForm() {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [emojis, setEmojis] = useState<string[]>([]);
    const {setTexts, cursor, setCursor} = useContext(PostContext);
   return (
          <form className="w-full flex flex-col justify-center items-center gap-y-4" 
            >
            <textarea 
              ref={textareaRef}
              style={{ fontFamily: 'Arial, "Segoe UI Emoji", "Apple Color Emoji", sans-serif' }}
              className="w-8/12 h-96 text-background max-md:w-11/12 rounded-md border-2 border-gray-800
              text-top p-2 text-xl"
              placeholder="What are you feeling...😊😊😊"
              onBlur={(e) => {
                e.preventDefault();
                setTexts(textareaRef.current?.value);
                if (textareaRef.current?.selectionEnd)
                  setCursor(textareaRef.current?.selectionEnd);
                else if (textareaRef.current?.selectionStart)
                  setCursor(textareaRef.current?.selectionStart);
                else
                  setCursor(0);
              }}
              />
              <div className="flex flex-col justify-center items-center gap-y-4">
                <div className="flex justify-center items-center gap-x-6">
                  {
                    emojis.length != 0 &&
                    emojis.map((elem: string, idx: number) => {
                      return (
                          <button key={`emoji-${idx}`} className="text-4xl"
                            onClick={(e) => {
                              e.preventDefault();
                              const orgText = textareaRef.current?.value || "";
                              if (cursor != undefined && textareaRef.current) {
                                textareaRef.current.value = orgText.slice(0, cursor) + `${elem}` + orgText.slice(cursor, orgText.length);
                                setTexts(textareaRef.current.value)
                                setCursor(cursor + 2);
                              }
                              else if(cursor == undefined && textareaRef.current) {
                                textareaRef.current.value = `${elem}`;
                                setTexts(textareaRef.current.value)
                                setCursor(2);
                              }
                            }}
                          >{elem}
                          </button>
                      );
                    })
                  }
                  {/* <HeartIcon size={30} color="white" className="cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      const orgText = textareaRef.current?.value || "";
                      if (cursor && textareaRef.current) {
                        textareaRef.current.value = orgText.slice(0, cursor) + "XXXXXXXXXXXXXXXXXX" + orgText.slice(cursor, orgText.length);
                        setTexts(textareaRef.current.value)
                      }
                    }}
                   />
                  <ThumbsUp size={30} color="white" className="cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      const orgText = textareaRef.current?.value || "";
                      if (cursor && textareaRef.current) {
                        textareaRef.current.value = orgText.slice(0, cursor) + "XXXXXXXXXXXXXXXXXX" + orgText.slice(cursor, orgText.length);
                        setTexts(textareaRef.current.value)
                      }
                    }}
                   /> */}
                </div>
                <input type="button" value="Emojis" className="px-6 py-2 border border-white rounded-md hover:bg-gray-800 hover:cursor-pointer"
                  onClick={async(e) => {
                    e.preventDefault();
                    const res = await fetch('api/text', {
                      method: "POST",
                      body: JSON.stringify({
                        text: textareaRef.current?.value
                      }),
                      headers: {
                        'Content-Type': 'application/json',
                      },
                    });
                    if (res.ok) {
                      const resData = await res.json();
                      setEmojis(resData.emojis);
                    }
                  }}
                />
              </div>
          </form>
   );
};
