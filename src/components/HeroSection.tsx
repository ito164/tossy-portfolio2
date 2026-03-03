import { motion } from "framer-motion";
import MarqueeSlider from "./MarqueeSlider";
import { Zap, Sparkles } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--color-dark-bg)]">
            {/* Background Marquee */}
            <div className="absolute inset-0 flex flex-col justify-center gap-12 rotate-[-5deg] scale-110">
                <MarqueeSlider direction="left" />
                <MarqueeSlider direction="right" />
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_0%,_var(--color-dark-bg)_80%] pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="flex flex-col items-center"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <Sparkles className="w-6 h-6 text-[var(--color-neon-gold)] animate-pulse" />
                        <span className="text-[var(--color-neon-gold)] font-bold tracking-widest text-sm md:text-base border border-[var(--color-neon-gold)] px-4 py-1 rounded-full bg-[var(--color-neon-gold)]/10">
                            オリパ特化型デザイン制作・外注
                        </span>
                        <Sparkles className="w-6 h-6 text-[var(--color-neon-gold)] animate-pulse" />
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black font-display tracking-tighter text-white leading-tight drop-shadow-xl">
                        その<span className="text-[var(--color-neon-gold)] drop-shadow-[0_0_20px_var(--color-neon-gold)]">1枚</span>が、
                        <br />
                        <span className="bg-gradient-to-r from-[var(--color-neon-gold)] to-[var(--color-neon-purple)] text-transparent bg-clip-text drop-shadow-[0_0_30px_rgba(255,215,0,0.5)]">
                            完売
                        </span>
                        までの最短ルート。
                    </h1>

                    <p className="mt-8 text-lg md:text-2xl font-bold text-gray-300 max-w-3xl leading-relaxed">
                        <span className="border-b-2 border-[var(--color-neon-purple)] pb-1">「ギラギラ」</span>は、ただの装飾じゃない。
                        <br className="md:hidden" />
                        <span className="text-white">ユーザーの脳髄を刺激する</span>、最強の演出デザイン。
                    </p>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-12 mb-20 group"
                    >
                        <button className="relative px-12 py-6 bg-white text-black font-black text-xl md:text-2xl rounded-sm skew-x-[-10deg] hover:scale-105 transition-transform duration-200 shadow-[0_0_50px_var(--color-neon-gold)]">
                            <span className="block skew-x-[10deg] flex items-center gap-3">
                                <Zap className="w-6 h-6 fill-black" />
                                今すぐ「爆アド」体験する
                                <Zap className="w-6 h-6 fill-black" />
                            </span>
                            <div className="absolute inset-0 border-2 border-[var(--color-neon-gold)] rounded-sm translate-x-1 translate-y-1 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
                        </button>
                        <p className="text-gray-400 text-sm mt-8">
                            ※ 毎月3社限定
                        </p>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <span className="text-xs tracking-widest uppercase">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
            </motion.div>
        </section>
    );
}
