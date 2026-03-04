import { motion } from "framer-motion";
import { AlertCircle, Clock, Zap } from "lucide-react";

const PAIN_POINTS = [
    {
        icon: <Zap className="w-8 h-8 text-[var(--color-neon-purple)]" />,
        text: "「中身（カード）は豪華なのに、サムネが地味でクリックされない…」",
        solution: "とっしーのデザインはめちゃくちゃ豪華！ユーザーの「射幸心」を限界まで煽り、圧倒的なクリック率に直結させます。"
    },
    {
        icon: <AlertCircle className="w-8 h-8 text-red-500" />,
        text: "「毎回似たようなデザインになってしまい、新作感が出ない…」",
        solution: "オリパデザイン歴3年以上のノウハウ！豊富なデザインの引き出しから、毎回「新鮮で心躍る」様々な角度の見せ方を提案します。"
    },
    {
        icon: <Clock className="w-8 h-8 text-[var(--color-neon-gold)]" />,
        text: "「スピード感が命なのに、デザインの修正に時間がかかりすぎる…」",
        solution: "安心の「爆速」レスポンス！修正のご要望には【24時間以内】に必ず対応し、あなたの販売スケジュールを決して止めません。"
    }
];

export default function EmpathySection() {
    return (
        <section className="py-24 px-4 bg-black relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-neon-purple)] to-transparent opacity-50"></div>
            <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-[var(--color-neon-purple)] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-black font-display mb-16 leading-tight"
                >
                    <span className="text-white">こんな</span>
                    <span className="text-[var(--color-neon-gold)] mx-2">「機会損失」</span>
                    <span className="text-white">起きていませんか？</span>
                </motion.h2>

                <div className="space-y-8 mb-20 text-left md:text-center">
                    {PAIN_POINTS.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-[#111] border border-white/10 rounded-xl p-6 md:p-8 flex flex-col gap-6 shadow-[0_0_20px_rgba(0,0,0,0.5)] relative overflow-hidden group"
                        >
                            {/* Hover Highlight */}
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                            {/* Problem */}
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 relative z-10">
                                <div className="shrink-0 bg-black/50 p-4 rounded-full border border-white/5 shadow-inner">
                                    {point.icon}
                                </div>
                                <p className="text-lg md:text-2xl font-bold text-gray-300 leading-relaxed md:text-left flex-1">
                                    {point.text}
                                </p>
                            </div>

                            {/* Solution Arrow / Divider */}
                            <div className="flex items-center justify-center lg:justify-start lg:pl-24 relative z-10">
                                <div className="w-1 h-8 md:h-12 bg-gradient-to-b from-transparent via-[var(--color-neon-gold)] to-[var(--color-neon-gold)] opacity-80 mt-[-1rem] mb-[-1rem] rounded-full"></div>
                            </div>

                            {/* Tossy's Answer (Solution) */}
                            <div className="bg-gradient-to-br from-[var(--color-dark-bg)] to-black border border-[var(--color-neon-gold)]/30 rounded-lg p-5 md:p-6 md:ml-16 relative z-10 shadow-[0_0_15px_rgba(255,215,0,0.05)]">
                                <span className="absolute -top-3 left-4 bg-[var(--color-neon-gold)] text-black text-xs font-black px-3 py-1 rounded shadow-md">
                                    とっしーのアンサー
                                </span>
                                <p className="text-base md:text-lg font-bold text-white mt-2 leading-relaxed text-left">
                                    {point.solution}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="bg-gradient-to-r from-purple-900/40 via-black to-blue-900/40 border border-[var(--color-neon-purple)]/50 rounded-2xl p-8 md:p-12 shadow-[0_0_40px_rgba(189,0,255,0.15)] relative"
                >
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-neon-purple)] text-white text-sm font-bold px-6 py-1 rounded-full tracking-widest uppercase shadow-[0_0_15px_rgba(189,0,255,0.5)]">
                        Solution
                    </div>
                    <p className="text-2xl md:text-3xl font-black text-white leading-loose tracking-wide">
                        カードゲームの世界観を<span className="text-[var(--color-neon-gold)]">知り尽くしたデザイナー</span>が、<br className="hidden md:block" />
                        ユーザーの<span className="text-[var(--color-neon-purple)]">「剥きたい」</span>本能を刺激するデザインを提供します。
                    </p>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-neon-gold)] to-transparent opacity-30"></div>
        </section>
    );
}
