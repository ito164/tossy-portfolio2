import { motion } from "framer-motion";

const CARD_COLORS = [
    "from-red-500 to-orange-500",
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-green-500 to-emerald-500",
    "from-yellow-400 to-amber-600",
];

const SLIDE_DURATION = 20;

export default function MarqueeSlider({ direction = "left" }: { direction?: "left" | "right" }) {
    return (
        <div className="flex overflow-hidden relative z-0 opacity-30 mix-blend-screen pointer-events-none">
            <motion.div
                className="flex gap-8 py-4 px-4 whitespace-nowrap"
                animate={{
                    x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
                }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: SLIDE_DURATION,
                }}
            >
                {[...Array(2)].map((_, groupIndex) => (
                    <div key={groupIndex} className="flex gap-8">
                        {CARD_COLORS.map((color, i) => (
                            <div
                                key={i}
                                className={`w-64 h-96 rounded-xl bg-gradient-to-br ${color} shrink-0 border-2 border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center`}
                            >
                                <div className="w-full h-full bg-black/40 flex items-center justify-center backdrop-blur-sm">
                                    <span className="text-white/50 font-display text-4xl font-bold rotate-12">SAMPLE</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
