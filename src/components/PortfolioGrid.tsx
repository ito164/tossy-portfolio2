import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Zap, Heart, Box } from "lucide-react";

import smashMaxImage from "../assets/smash_max.jpg";
import magicalGirlImage from "../assets/magical_girl.jpg";
import snsCouponImage from "../assets/sns_coupon.jpg";

// Mock Data - One per category
const WORKS = [
    {
        id: 1,
        category: "HIGH_TICKET",
        title: "スマッシュMAXガチャ",
        image: smashMaxImage,
        sellingPoint: "レインボーの光沢感で高級感を演出",
        stat: "高単価訴求に最適",
        icon: <Zap className="w-4 h-4 text-[var(--color-neon-gold)]" />,
        label: "爆アド演出",
        badgeText: "爆アド演出用"
    },
    {
        id: 2,
        category: "MOE",
        title: "誘惑の乱舞祭",
        image: magicalGirlImage,
        sellingPoint: "目のハイライト強調で視線誘導",
        stat: "コレクター心を刺激",
        icon: <Heart className="w-4 h-4 text-[var(--color-neon-purple)]" />,
        label: "美少女SR",
        badgeText: "美少女キャラ訴求用"
    },
    {
        id: 3,
        category: "BULK",
        title: "SNS投稿用画像",
        image: snsCouponImage,
        sellingPoint: "SNSで配布用のクーポン画像",
        stat: "SNSからサイトへの流入を狙う",
        icon: <Box className="w-4 h-4 text-cyan-400" />,
        label: "SNS画像",
        badgeText: "SNS用画像"
    },
];

const PORTFOLIO_URL = "https://with2023.myportfolio.com/161fa1a2c9d32d";

export default function PortfolioGrid() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <section className="py-24 px-4 bg-[var(--color-dark-bg)]">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-black font-display text-center mb-16">
                    <span className="text-stroke-neon-gold">WORKS</span>
                    <span className="block text-2xl md:text-3xl text-white mt-4 font-sans font-bold">
                        数字を作るネットオリパ・サムネイル制作実績
                    </span>
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {WORKS.map((work, i) => (
                        <motion.a
                            href={PORTFOLIO_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={work.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="relative group cursor-pointer block"
                            onMouseEnter={() => setHoveredId(work.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            {/* Image Container */}
                            <div className="relative overflow-hidden rounded-xl border border-white/10">
                                <img
                                    src={work.image}
                                    alt={work.title}
                                    className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Subtitle Badge (Unobtrusive) */}
                                <div className="absolute top-3 left-3 z-10 bg-black/60 backdrop-blur-md px-3 py-1 rounded-sm border border-white/10 transition-opacity duration-300 group-hover:opacity-0">
                                    <span className="text-white text-xs font-bold tracking-wider">
                                        {work.badgeText}
                                    </span>
                                </div>


                                {/* Hover Reveal */}
                                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <motion.div
                                        initial={{ y: 20 }}
                                        animate={{ y: hoveredId === work.id ? 0 : 20 }}
                                        className="text-center"
                                    >
                                        <p className="text-[var(--color-neon-purple)] font-bold mb-2 text-sm tracking-widest">
                                            THE LOGIC
                                        </p>
                                        <p className="text-xl font-bold text-white mb-6">
                                            {work.sellingPoint}
                                        </p>
                                        <div className="inline-block bg-[var(--color-neon-gold)] text-black font-black px-4 py-2 rounded-sm skew-x-[-10deg]">
                                            <span className="block skew-x-[10deg]">
                                                {work.stat}
                                            </span>
                                        </div>
                                        <div className="mt-8 flex items-center justify-center gap-2 text-white/50 text-sm">
                                            <ExternalLink className="w-4 h-4" />
                                            クリックでポートフォリオを見る
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <a
                        href={PORTFOLIO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-12 py-6 bg-white text-black font-black text-xl rounded-full hover:bg-[var(--color-neon-gold)] transition-colors shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                    >
                        <span>全実績をポートフォリオサイトで見る</span>
                        <ExternalLink className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </section>
    );
}
