import { motion } from "framer-motion";

export default function ProfileSection() {
    return (
        <section className="bg-black py-24 relative overflow-hidden" id="profile">
            {/* Background Accent */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-neon-purple)]/10 blur-[100px] rounded-full pointer-events-none" />
            </div>

            <div className="max-w-5xl mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">

                    {/* AVATAR IMAGE (Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-64 h-64 md:w-80 md:h-80 flex-shrink-0 relative group"
                    >
                        {/* Glow effect behind image */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-neon-purple)] to-[var(--color-neon-blue)] rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />

                        <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/20 p-2 bg-black/50 backdrop-blur-sm">
                            <img
                                src="/tossy_avatar.jpg"
                                alt="とっしー アバター"
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>
                    </motion.div>

                    {/* PROFILE TEXT (Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 text-center md:text-left"
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-wider">
                            とっしー
                        </h2>

                        <div className="space-y-6">
                            <p className="text-xl md:text-2xl font-bold text-[var(--color-neon-gold)] leading-relaxed">
                                「圧倒的存在感を放つ」<br className="hidden md:block" />
                                ギラギラデザインを作る人。
                            </p>

                            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                                カードゲームが好きすぎて、<br />
                                ネットオリパ様、トレカショップ様の<br className="md:hidden" />
                                活動をデザインで支援しています。
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
