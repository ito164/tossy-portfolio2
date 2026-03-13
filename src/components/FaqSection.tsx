import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQ {
    q: string;
    a: React.ReactNode;
}

const FAQS: FAQ[] = [
    {
        q: "どんなカードやジャンルでも対応可能ですか？",
        a: (
            <>
                はい、ポケモンカード・遊戯王・ワンピースなど、幅広く対応可能です。<br />
                素材（カード画像やロゴ）をご提供いただければ、どんなジャンルでも対応できます。
            </>
        ),
    },
    {
        q: "GIFアニメーションとはどんなものですか？",
        a: (
            <>
                キラッと光る、文字が点滅する、エフェクトが動くなど、視覚的に目を引く動きのあるサムネイルです。<br />
                販促力を高めたい方や、他と差別化したい方におすすめです。<br />
                内容によってお見積もりが変動するため、ご相談ください。
            </>
        ),
    },
    {
        q: "サンプルのようなデザインに寄せて作ってもらうことは可能ですか？",
        a: (
            <>
                可能です。ご希望のサンプルや参考ショップのURLを共有いただければ、雰囲気を寄せたデザインで制作します。<br />
                ※完全コピーは不可ですので、オリジナル要素を加えた"アレンジ寄せ"になります。
            </>
        ),
    },
    {
        q: "修正は何回まで可能ですか？",
        a: (
            <>
                基本的には2回まで無料修正を承っております。<br />
                それ以上の修正や、納品後の大幅な変更は別途料金をお願いする場合がございます。<br />
                （小さな微調整は柔軟に対応しますのでご安心ください）
            </>
        ),
    },
    {
        q: "急ぎの納品にも対応していますか？",
        a: (
            <>
                スケジュールに空きがある場合は、最短即日〜翌日対応も可能です。<br />
                ご希望納期がある場合は、事前にメッセージにてご相談ください。
            </>
        ),
    },
    {
        q: "納品後のキャンセルはできますか？",
        a: (
            <>
                デザイン制作の性質上、納品後のキャンセル・返金は対応しておりません。<br />
                事前にしっかりヒアリングを行い、ご納得いただける形で制作を進めさせていただきます。
            </>
        ),
    },
    {
        q: "実績としてSNSやポートフォリオに掲載されますか？",
        a: (
            <>
                はい、基本的に掲載させていただいております。<br />
                掲載NGの場合は事前にお知らせください。非公開対応（+1,000円）にて承ります。
            </>
        ),
    },
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-black relative" id="faq">
            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black italic tracking-wider mb-4 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                        FAQ
                    </h2>
                    <p className="text-[var(--color-neon-gold)] font-bold tracking-widest text-lg">
                        よくある質問
                    </p>
                </div>

                <div className="space-y-4">
                    {FAQS.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm transition-colors hover:bg-white/10"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left focus:outline-none"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">
                                            Q
                                        </div>
                                        <h3 className="text-white font-bold text-sm md:text-base leading-snug">
                                            {faq.q}
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-400 flex-shrink-0">
                                        <span className="text-xs font-bold hidden md:inline-block">
                                            {isOpen ? "閉じる" : "回答を見る"}
                                        </span>
                                        <motion.div
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown className="w-5 h-5 text-[var(--color-neon-gold)]" />
                                        </motion.div>
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-6 pt-2 border-t border-white/5 flex gap-4">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[var(--color-neon-gold)] flex items-center justify-center text-[var(--color-neon-gold)] font-bold text-sm mt-1">
                                                    A
                                                </div>
                                                <div className="text-gray-300 text-sm md:text-base leading-relaxed">
                                                    {faq.a}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
