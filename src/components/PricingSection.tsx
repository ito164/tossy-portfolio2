import { motion } from "framer-motion";
import { Check, Zap, Crown, Package } from "lucide-react";

const PLANS = [
    {
        id: "TRIAL",
        name: "【初回限定】爆アド・お試しプラン",
        price: "¥4,000",
        desc: "「まずはとっしーの威力を体感」してもらうためのエントリープランです。",
        icon: <Zap className="w-8 h-8 text-black" />,
        features: [
            "サムネイル 1枚（静止画）",
            "視線を惹く構図設計",
            "修正 1回まで",
            "最短 当日納品",
        ],
        color: "from-yellow-400 to-orange-500",
        textColor: "text-black",
        buttonBg: "bg-black text-white hover:bg-gray-800 hover:scale-105 transition-transform",
        recommend: false,
    },
    {
        id: "SERIES",
        name: "【集客ブースト】煽りコピー・構成プラン",
        price: "¥7,000",
        desc: "「何を書いていいか分からない」悩みを解決し、クリック率を最大化。",
        icon: <Package className="w-8 h-8 text-white" />,
        features: [
            "静止画サムネ ＋ コピー考案",
            "売れる要素を詰め込んだ構成提案",
            "修正 1回まで",
            "最短 24時間以内",
        ],
        color: "from-[var(--color-neon-purple)] to-blue-600",
        textColor: "text-white",
        buttonBg: "bg-white text-[var(--color-neon-purple)] hover:bg-gray-100 hover:scale-105 transition-transform",
        recommend: true,
    },
    {
        id: "GOD",
        name: "【覇権確定】脳汁爆発GIFアニメプラン",
        price: "¥12,000",
        desc: "Xやオリパサイトでの手を止めさせる、圧倒的な差別化プラン。",
        icon: <Crown className="w-8 h-8 text-yellow-200" />,
        features: [
            "GIFアニメーション ＋ コピー考案",
            "光る・揺れる・弾ける「脳汁」演出",
            "タイトル・煽り文句の考案込み",
            "最短 3日納品",
        ],
        color: "from-black to-gray-900 border border-[var(--color-neon-gold)]",
        textColor: "text-[var(--color-neon-gold)]",
        buttonBg: "bg-gradient-to-r from-[var(--color-neon-gold)] to-yellow-600 text-black shadow-[0_0_20px_var(--color-neon-gold)] hover:scale-105 transition-transform",
        recommend: false,
    },
];

export default function PricingSection() {
    return (
        <section className="py-24 px-4 bg-gradient-to-b from-black to-[var(--color-dark-bg)]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black font-display mb-6">
                        <span className="text-stroke-neon-purple">PLANS</span>
                        <span className="block text-2xl md:text-3xl text-white mt-4 font-sans font-bold">
                            投資対効果を最大化するプラン
                        </span>
                    </h2>
                    <p className="text-gray-400">
                        安くはありません。しかし、「売れる」ことを考えれば、これ以上ない投資です。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {PLANS.map((plan) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className={`relative p-8 rounded-2xl ${plan.id === "GOD" ? "bg-black border border-[var(--color-neon-gold)] shadow-[0_0_30px_rgba(255,215,0,0.1)]" : `bg-gradient-to-br ${plan.color}`
                                } ${plan.recommend ? "transform md:-translate-y-8 scale-105 z-10 shadow-2xl" : ""}`}
                        >
                            {plan.recommend && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-neon-gold)] text-black font-black px-4 py-1 rounded-full text-sm shadow-lg">
                                    RECOMMENDED
                                </div>
                            )}

                            <div className="flex justify-between items-start mb-6">
                                <div className={`p-3 rounded-lg bg-white/10 backdrop-blur-sm ${plan.textColor}`}>
                                    {plan.icon}
                                </div>
                                {plan.id === "GOD" && <span className="text-[var(--color-neon-gold)] text-xs border border-[var(--color-neon-gold)] px-2 py-1 rounded">VIP ONLY</span>}
                            </div>

                            <h3 className={`text-xl font-bold font-display mb-2 ${plan.textColor}`}>
                                {plan.name}
                            </h3>
                            <div className={`text-4xl font-black mb-1 ${plan.textColor}`}>
                                {plan.price}
                            </div>
                            <div className={`text-xs mb-4 font-bold opacity-60 ${plan.textColor}`}>
                                ※ 表示価格とは別に消費税が加算されます
                            </div>
                            <p className={`text-sm mb-8 opacity-80 font-bold ${plan.textColor}`}>
                                {plan.desc}
                            </p>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className={`flex items-center gap-2 text-sm font-bold ${plan.textColor}`}>
                                        <Check className="w-5 h-5 opacity-70" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => {
                                    // Update URL with selected plan
                                    const url = new URL(window.location.href);
                                    url.searchParams.set('plan', plan.id);
                                    window.history.pushState({}, '', url);

                                    // Dispatch custom event for ContactSection to reliably catch
                                    window.dispatchEvent(new CustomEvent('planSelected', { detail: { plan: plan.id } }));

                                    // Scroll to contact section
                                    const contactSection = document.getElementById("contact");
                                    if (contactSection) {
                                        contactSection.scrollIntoView({ behavior: "smooth" });
                                    }
                                }}
                                className={`w-full py-4 rounded-lg font-black text-lg transition-colors ${plan.buttonBg}`}
                            >
                                相談する
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
