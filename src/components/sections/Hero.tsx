"use client"

import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon, Linkedin02Icon } from "@hugeicons/core-free-icons";
import { useRef, useState } from "react";
import { cn } from "../../lib/utils";
import { DayNightMode, DayNightSwitch } from "../ui/day-night-switch";

const MEDIA: Record<DayNightMode, { poster: string; video: string }> = {
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
    const [mode, setMode] = useState<DayNightMode>("day");
    const [videoReady, setVideoReady] = useState(false);
    const videoRef = useRef(null);
    const { poster: posterSrc, video: videoSrc } = MEDIA[mode];
    
    return (
        <section className="relative isolate h-svh w-full overflow-hidden text-white">

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
                    src={posterSrc}
                    fill
                    priority
                    sizes="100vw"
                    alt="Hero Background"
                    className={
                        cn("object-cover transition-opacity duration-900 ease-out",
                            videoReady ? "opacity-0" : "opacity-100"
                        )
                    }
                />
            </div>

            {/* Overlay */}
            <div
                className="absolute inset-0 -z-10 bg-[linear-gradient(108deg,rgba(15,15,12,0.78)_0%,rgba(15,15,12,0.58)_22%,rgba(15,15,12,0.32)_46%,rgba(15,15,12,0.08)_68%,rgba(15,15,12,0)_84%)]"
            />

            {/* Foreground */}
            <div className="relative z-10 flex h-full flex-col">
                <div className="h-16 shrink-0 sm:h-20"/>

                <div className="flex flex-1 items-center">
                    <div className="mx-auto w-full max-w-[1480px] px-6 sm:px-10 lg:px-14">
                        <div className="max-w-[640px]">
                            <h1 className="mt-5 leading-[1.04] tracking-[-0.03em] text-[clamp(2.25rem,4.8vw,4.25rem)] font-heading">
                                Griffin Willis
                            </h1>
                            <p className="mt-2 text-lg leading-8 font-mono">
                                Software Developer.
                            </p>

                            <div className="flex flex-row gap-4 mt-4">
                                <a
                                    className="flex items-center justify-center p-1 border border-zinc-500 rounded-full text-black dark:text-white
                                    hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:scale-110 hover:-translate-y-1 transition-all will-change-transform duration-300"
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
                                    className="flex items-center justify-center p-1 border border-zinc-500 rounded-full text-black dark:text-white
                                    hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:scale-110 hover:-translate-y-1 transition-all will-change-transform duration-300"
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
                        </div>
                    </div>

                    <div className="absolute top-1/4 right-6 z-20 -translate-1/2 sm:right-10 lg:right-14">
                        <DayNightSwitch value={mode} onChange={setMode} />
                    </div>

                </div>

            </div>

        </section>
    )
}
