"use client"

import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon, Linkedin02Icon } from "@hugeicons/core-free-icons";
import { useRef, useState } from "react";
import { cn } from "../../lib/utils";

const MEDIA = {
    day: {
        poster: "/assets/hero-day-poster.webp",
        video: "/assets/hero-day-video.mp4",
    },
    night: {
        poster: "/assets/hero-night-poster.webp",
        video: "/assets/hero-night-video.mp4",
    }
}


export default function Hero() {
    const [videoReady, setVideoReady] = useState(false);
    const videoRef = useRef(null);
    const { poster: posterSrc, video: videoSrc } = MEDIA["day"]; // Change to "night" for night mode
    
    return (
        <section className="relative isolate h-svh w-full overflow-hidden bg-overlay-ink text-overlay-cream">

            {/* Background*/}
            <div className="absolute inset-0 -z-20">
            <video
                ref={videoRef}
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster={posterSrc}
                className="h-full w-full object-cover sm:object-center"
                onCanPlay={() => setVideoReady(true)}
            />
            <Image
                src={MEDIA["day"]["poster"]}
                alt="Hero Background"
                fill
                priority
                sizes="100vw"
                className={
                    cn("object-cover",
                        videoReady ? "opacity-0" : "opacity-100"
                    )
                }
            />
            </div>

            {/* Overlay */}
            <div
                className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(15,15,12,0.78)_0%,rgba(15,15,12,0.58)_22%,rgba(15,15,12,0.32)_46%,rgba(15,15,12,0.32)_68%,rgba(15,15,12,0.32)_84%)]"
            />

            {/* Foreground */}
            <div className="flex flex-col gap-2">
                <h1 className="text-5xl font-bold">
                    Griffin Willis.
                </h1>
                <p className="text-2xl">
                    Software Developer.
                </p>
            </div>
            <div className="flex flex-row gap-4 mt-4">
                <a
                    className="flex items-center justify-center p-1 border border-zinc-500 rounded-full text-black dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:scale-110 hover:-translate-y-1 transition-all will-change-transform duration-300"
                    href="https://github.com/griffinwillis"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                >
                    <HugeiconsIcon
                        icon={GithubIcon}
                        size={20}
                        color="currentColor"
                        strokeWidth={1}
                    />
                </a>
                <a
                    className="flex items-center justify-center p-1 border border-zinc-500 rounded-full text-black dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:scale-110 hover:-translate-y-1 transition-all will-change-transform duration-300"
                    href="https://linkedin.com/in/griffinwillis"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                >
                    <HugeiconsIcon
                        icon={Linkedin02Icon}
                        size={20}
                        color="currentColor"
                        strokeWidth={1}
                    />
                </a>
            </div>
        </section>
    )
}
