import { HugeiconsIcon } from "@hugeicons/react";
import { Sun03Icon, Moon02Icon } from "@hugeicons/core-free-icons";
import { cn } from "@/src/lib/utils";
import { motion } from "motion/react";

export type DayNightMode = "day" | "night"

type Props = {
    value: DayNightMode;
    onChange: (next: DayNightMode) => void;
}

export function DayNightSwitch({value, onChange}: Props): React.ReactElement {

    const isDay = value == "day";

    return <button 
    className="relative flex w-9 flex-col items-center gap-1.5 border border-overlay-cream/20
    p-1.5 backdrop-blur-md transition-colors hover:border-overlay-cream/40
    focus-visible:ring-overlay-cream/45 focus-visible:outline-none group rounded-full"
    role="switch"
    onClick={() => onChange(isDay ? "night" : "day")}>

    <motion.span
    initial={false}
    animate={{ y: isDay ? 0 : 42 }}
    transition={{ type: "spring", stiffness: 420, damping: 34 }}
    className="absolute top-1.5 h-9 w-6 rounded-full bg-overlay-cream"/>
        
        <span className={cn("relative z-10 flex h-9 w-6 items-center justify-center transition-colors duration-300",
            isDay ? "text-overlay-ink" : "text-overlay-cream/55 group-hover:text-overlay-cream/85")}>
            <HugeiconsIcon
                icon={Sun03Icon}
                size={17}
                color="currentColor"
                fill={isDay ? "currentColor" : "none"}
                strokeWidth={1}
            />
        </span>

        <span className={cn("relative z-10 flex h-9 w-6 items-center justify-center transition-colors duration-300",
            !isDay ? "text-overlay-ink" : "text-overlay-cream/55 group-hover:text-overlay-cream/85")}>
            <HugeiconsIcon
                icon={Moon02Icon}
                size={17}
                color="currentColor"
                fill={!isDay ? "currentColor" : "none"}
                strokeWidth={1}
            />
        </span>

    </button>
}