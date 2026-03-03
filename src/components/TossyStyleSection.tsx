import { motion } from "framer-motion";
import { MousePointerClick, Eye, Target } from "lucide-react";

const REASONS = [
    {
        icon: <Eye className="w-8 h-8 text-[var(--color-neon-gold)]" />,
        title: "0.5秒の衝撃",
        desc: "ユーザーは一瞬で判断します。論理よりも本能に訴えかける「視覚的暴力」で、スクロールの手を止めさせます。",
    },
    {
        icon: <MousePointerClick className="w-8 h-8 text-[var(--color-neon-purple)]" />,
        title: "クリック率の魔法",
        desc: "「押したくなる」サムネイルには理由があります。ただ派手なだけではなく、期待感を煽り、購入へ導くための計算された配色、レイアウトと言う「理論」がここにあります。",
    },
    {
        icon: <Target className="w-8 h-8 text-cyan-400" />,
        title: "ターゲット層に刺さる「文脈」の理解",
        desc: "各タイトルの属性（炎、雷、サイバー、ファンタジー等）に合わせた最適なカラーリングとレイアウト。",
    },
];

export default function TossyStyleSection() {
    return (
        <section className="py-24 px-4 bg-gradient-to-b from-[var(--color-dark-bg)] to-black relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-neon-purple)] opacity-10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-neon-gold)] opacity-10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-black font-display mb-6">
                        なぜ、とっしーのデザインは<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-gold)] to-[var(--color-neon-purple)]">
                            ユーザーを惹きつける
                        </span>
                        のか？
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        綺麗なだけのデザインは、もう要らない。<br />
                        必要なのは、ユーザーの射幸心を正しく煽り、数値を叩き出す「武器」としてのデザイン。
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {REASONS.map((reason, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-[var(--color-neon-gold)]/50 transition-colors group"
                        >
                            <div className="mb-6 p-4 rounded-full bg-white/5 w-fit group-hover:scale-110 transition-transform duration-300">
                                {reason.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 font-display">{reason.title}</h3>
                            <p className="text-gray-400 leading-relaxed font-sans text-sm md:text-base">
                                {reason.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Closing Statement */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-20 text-center p-8 border border-[var(--color-neon-gold)] rounded-lg bg-[var(--color-neon-gold)]/5 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 translate-x-[-200%] animate-[shimmer_3s_infinite]" />
                    <p className="text-xl md:text-2xl font-black font-display text-[var(--color-neon-gold)] relative z-10">
                        「あなたのオリパを、完売に導きます。」
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
