import { motion } from "framer-motion";
import { MessageCircle, Calculator, Image as ImageIcon, Wrench, CheckCircle } from "lucide-react";

const PROCESS_STEPS = [
    {
        id: 1,
        title: "ご相談",
        description: "本サイトの下部フォーム、またはX(旧Twitter)のDMよりご連絡ください。",
        icon: <MessageCircle className="w-8 h-8 text-white" />,
        color: "from-blue-500 to-cyan-400"
    },
    {
        id: 2,
        title: "お見積り",
        description: "ご依頼内容をもとに、納期と金額のお見積りをご提示いたします。",
        icon: <Calculator className="w-8 h-8 text-white" />,
        color: "from-purple-500 to-pink-500"
    },
    {
        id: 3,
        title: "初稿提出",
        description: "デザインの方向性に沿ったラフ、または初稿デザインを提出いたします。",
        icon: <ImageIcon className="w-8 h-8 text-white" />,
        color: "from-yellow-400 to-orange-500"
    },
    {
        id: 4,
        title: "修正（必要時）",
        description: "より完璧に仕上げるため、気になる点の修正を行います。",
        icon: <Wrench className="w-8 h-8 text-white" />,
        color: "from-green-400 to-emerald-500"
    },
    {
        id: 5,
        title: "納品",
        description: "完成したデータを、ご指定の形式（PNG/JPG/ZIP等）でスピード納品！",
        icon: <CheckCircle className="w-8 h-8 text-[var(--color-neon-gold)]" />,
        color: "from-[var(--color-neon-gold)] to-yellow-600"
    }
];

export default function ProcessSection() {
    return (
        <section className="py-24 px-4 bg-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-neon-gold)] to-transparent opacity-20" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black font-display mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-gold)] to-yellow-500">
                            FLOW
                        </span>
                    </h2>
                    <p className="text-2xl md:text-3xl font-bold text-white tracking-widest">
                        納品までの爆速ステップ
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden lg:block absolute top-[50px] left-[5%] right-[5%] h-[2px] bg-white/10" />

                    <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-4 relative z-10">
                        {PROCESS_STEPS.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="flex-1 flex flex-col items-center text-center group"
                            >
                                {/* Icon Circle */}
                                <div className="relative mb-6">
                                    <div className="absolute inset-0 bg-white/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className={`w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-br ${step.color} shadow-lg relative z-10 border-4 border-black group-hover:scale-110 transition-transform duration-300`}>
                                        {step.icon}
                                    </div>
                                    {/* Step Number Badge */}
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-black border-2 border-[var(--color-neon-gold)] flex items-center justify-center text-[var(--color-neon-gold)] font-black text-sm z-20">
                                        {step.id}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed px-2">
                                    {step.description}
                                </p>

                                {/* Mobile connecting arrow (except last) */}
                                {index < PROCESS_STEPS.length - 1 && (
                                    <div className="lg:hidden w-[2px] h-8 bg-gradient-to-b from-[var(--color-neon-gold)] to-transparent mt-8" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
