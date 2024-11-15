'use client';

import React, { useState, useRef, useEffect } from "react";

export default function page() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const handlePlay = () => {
        if (isPlaying) {
            if (audioRef.current) {
                audioRef.current.pause();
            }
        } else {
            if (audioRef.current) {
                audioRef.current.play();
            }
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.addEventListener("loadedmetadata", () => {
                console.log("Audio Element Ready!");
            });
        }
    }, [audioRef]); // Dependency array is important!

    return (
        <div
            className="bg-gray-800 text-white rounded-3xl flex flex-col items-center justify-center text-center pb-10 h-fit w-fit mx-auto"
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <video
                src="https://motionbgs.com/media/1999/sonic.960x540.mp4"
                autoPlay
                muted
                loop
                className="rounded-3xl"
            />
            <h1 className="text-4xl font-bold mt-5">As it was</h1>
            <h2 className="text-2xl font-semibold mt-2">Harry styles</h2>
            <audio
                ref={audioRef}
                src="https://ts13.tarafdari.com/contents/user300048/content-sound/1_1_-_as_it_was_-_harry_styles_320.mp3"
            />
            <button
                className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group mt-3"
                onClick={handlePlay}
            >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-600 rounded-full group-hover:w-56 group-hover:h-56" />
                <span className="absolute bottom-0 left-0 h-full -ml-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-auto h-full opacity-100 object-stretch"
                        viewBox="0 0 487 487"
                    >
                        <path
                            fillOpacity=".1"
                            fillRule="nonzero"
                            fill="#FFF"
                            d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                        />
                    </svg>
                </span>
                <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="object-cover w-full h-full"
                        viewBox="0 0 487 487"
                    >
                        <path
                            fillOpacity=".1"
                            fillRule="nonzero"
                            fill="#FFF"
                            d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                        />
                    </svg>
                </span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200" />
                <span className="relative font-semibold text-2xl">
                    {isPlaying ? "Pause" : "Play"}
                </span>
            </button>
        </div>
    );
}
