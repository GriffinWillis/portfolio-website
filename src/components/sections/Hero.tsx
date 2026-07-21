import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon, Linkedin02Icon } from "@hugeicons/core-free-icons";


export default function Hero() {
    return (
        <section className="flex flex-col items-start border border-red-500">
            <div className="flex flex-col gap-2 border border-red-500">
                <h1 className="text-5xl font-bold">
                    Griffin Willis.
                </h1>
                <p className="text-2xl">
                    Software Developer.
                </p>
            </div>
            <div className="flex flex-row gap-4 mt-4 border border-red-500">
                <a
                    className="flex items-center justify-center p-1 border border-zinc-500 rounded-full text-black dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:scale-110 hover:-translate-y-1 transition-[transform, background-color] will-change-transform duration-300"
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
                    className="flex items-center justify-center p-1 border border-zinc-500 rounded-full text-black dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:scale-110 hover:-translate-y-1 transition-[transform, background-color] will-change-transform duration-300"
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
