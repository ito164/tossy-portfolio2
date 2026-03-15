import { motion } from "framer-motion";
import MarqueeSlider from "./MarqueeSlider";
import { Zap, Sparkles } from "lucide-react";

// 新しい画像をインポート
import heroImg1 from "../assets/hero_oripa_1.jpg";
import heroImg2 from "../assets/hero_oripa_2.jpg";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--color-dark-bg)]">
            {/* Background Marquee */}
            <div className="absolute inset-0 flex flex-col justify-center gap-12 rotate-[-5deg] scale-110 opacity-30">
                <MarqueeSlider direction="left" />
                <MarqueeSlider direction="right" />
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_0%,_var(--color-dark-bg)_80%] pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 w-full px-4 max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 lg:gap-8 items-center pt-8 pb-20 lg:py-0 min-h-[100dvh]">

                {/* Title Segment (Top on Mobile, Top Left on Desktop) */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="relative z-30 flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:col-start-1 lg:row-start-1 lg:self-end lg:mb-4"
                >
                    <div className="flex items-center gap-2 mb-2 mt-4 lg:mt-0">
                        <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-[var(--color-neon-gold)] animate-pulse" />
                        <span className="text-[var(--color-neon-gold)] font-bold tracking-widest text-xs md:text-sm border border-[var(--color-neon-gold)] px-3 py-1 rounded-full bg-[var(--color-neon-gold)]/10 shadow-[0_0_10px_var(--color-neon-gold)]">
                            オリパ サムネ特化型デザイン制作・外注
                        </span>
                        <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-[var(--color-neon-gold)] animate-pulse" />
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black font-display tracking-tighter text-white leading-tight drop-shadow-xl">
                        その<span className="text-[var(--color-neon-gold)] drop-shadow-[0_0_20px_var(--color-neon-gold)] text-5xl md:text-6xl lg:text-8xl">1枚</span>が、
                        <br />
                        <span className="bg-gradient-to-r from-[var(--color-neon-gold)] to-[var(--color-neon-purple)] text-transparent bg-clip-text drop-shadow-[0_0_30px_rgba(255,215,0,0.5)] leading-normal">
                            完売
                        </span>
                        までの最短ルート。
                    </h1>
                </motion.div>

                {/* Images Content (Middle on Mobile, Right on Desktop) */}
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                    className="relative w-full h-[260px] sm:h-[350px] md:h-[450px] lg:h-[600px] flex items-center justify-center my-4 lg:my-0 lg:col-start-2 lg:row-start-1 lg:row-span-2"
                >
                    {/* Image 1 (Back/Left) */}
                    <motion.img
                        src={heroImg2}
                        alt="オリパデザイン制作例 2"
                        className="absolute bottom-4 left-4 lg:left-0 w-[65%] sm:w-[55%] md:w-[60%] lg:w-[70%] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-2 border-[var(--color-neon-purple)] z-10 object-cover"
                        animate={{
                            y: [0, 15, 0],
                            rotateZ: [-10, -12, -10]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 6,
                            ease: "easeInOut",
                            delay: 0.5
                        }}
                    />

                    {/* Image 2 (Front/Right) */}
                    <motion.img
                        src={heroImg1}
                        alt="オリパデザイン制作例 1"
                        className="absolute top-4 right-4 lg:right-0 w-[70%] sm:w-[60%] md:w-[65%] lg:w-[75%] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-2 border-[var(--color-neon-gold)] z-20 object-cover"
                        animate={{
                            y: [0, -15, 0],
                            rotateZ: [5, 7, 5]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 5,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[var(--color-neon-gold)] blur-[100px] opacity-20 z-0 pointer-events-none rounded-full" />
                </motion.div>

                {/* Text & Button Segment (Bottom on Mobile, Bottom Left on Desktop) */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
                    className="relative z-30 flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:col-start-1 lg:row-start-2 lg:self-start"
                >
                    <p className="mt-2 text-sm md:text-xl font-bold text-gray-300 max-w-2xl leading-relaxed">
                        <span className="border-b-2 border-[var(--color-neon-purple)] pb-1">「ギラギラ」</span>は、ただの装飾じゃない。
                        <br className="hidden md:block" />
                        <span className="text-white">ユーザーの脳髄を刺激する</span>、最強の演出デザイン。
                    </p>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-6 mb-0 lg:mb-0 group w-full lg:w-auto flex flex-col items-center lg:items-start"
                    >
                        <a
                            href="https://tossydesign.myportfolio.com/161fa1a2c9d32d"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative px-4 py-3 md:px-10 md:py-5 bg-white text-black font-black text-base md:text-xl rounded-sm skew-x-[-10deg] hover:scale-105 transition-transform duration-200 shadow-[0_0_30px_var(--color-neon-gold)] w-[80%] lg:w-auto inline-block text-center"
                        >
                            <span className="block skew-x-[10deg] flex items-center justify-center gap-2 md:gap-3">
                                <Zap className="w-5 h-5 md:w-6 md:h-6 fill-black" />
                                まずはサムネイルを見てみる
                                <Zap className="w-5 h-5 md:w-6 md:h-6 fill-black" />
                            </span>
                            <div className="absolute inset-0 border-2 border-[var(--color-neon-gold)] rounded-sm translate-x-1 translate-y-1 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
                        </a>
                        <p className="text-gray-400 text-xs md:text-sm mt-4 font-bold tracking-widest text-center w-[80%] lg:w-full lg:text-left">
                            ※ 毎月3社限定
                        </p>
                    </motion.div>
                </motion.div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <span className="text-xs tracking-widest uppercase text-white drop-shadow-md">Scroll</span>
                <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-white to-transparent" />
            </motion.div>
        </section>
    );
}
