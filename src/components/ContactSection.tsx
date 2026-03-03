import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactSection() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        plan: "FREE",
        deadline: "NORMAL",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "53560f57-d71f-4cf1-9f58-b1b381213912", // Web3Forms Access Key
                    subject: `【とっしーデザイン】${formState.name}様よりお問い合わせ`,
                    from_name: formState.name,
                    email: formState.email,
                    message: `
■ お名前 / 貴社名
${formState.name}

■ メールアドレス
${formState.email}

■ ご希望プラン
${formState.plan === "FREE" ? "まずは無料相談" : formState.plan}

■ 希望納期
${formState.plan === "FREE" ? "なし（無料相談）" : formState.deadline}

■ ご相談詳細
${formState.message || "記載なし"}
                    `,
                }),
            });

            if (response.ok) {
                setIsSent(true);
            } else {
                console.error("Form submission failed");
                alert("送信に失敗しました。時間をおいて再度お試しください。");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("通信エラーが発生しました。");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-24 px-4 bg-black relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--color-neon-purple)_0%,_transparent_50%)] opacity-20" />

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-6xl font-black font-display mb-6">
                        <span className="text-stroke-neon-gold">CONTACT</span>
                        <span className="block text-2xl md:text-3xl text-white mt-4 font-sans font-bold">
                            完売への第一歩を踏み出す
                        </span>
                    </h2>
                    <p className="text-gray-400">
                        現在、申し込みが殺到しております。<br />
                        枠が埋まり次第、受付を停止しますのでお早めにご相談ください。
                    </p>
                </div>

                {isSent ? (
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-white/5 border border-[var(--color-neon-gold)] p-12 rounded-2xl text-center backdrop-blur-md"
                    >
                        <CheckCircle className="w-20 h-20 text-[var(--color-neon-gold)] mx-auto mb-6" />
                        <h3 className="text-3xl font-bold text-white mb-4">送信完了しました！</h3>
                        <p className="text-gray-300">
                            お問い合わせありがとうございます。<br />
                            24時間以内に、とっしー本人より「爆速」で返信いたします。
                        </p>
                    </motion.div>
                ) : (
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-2xl backdrop-blur-md space-y-8"
                    >
                        {/* Name & Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-400">貴社名 / お名前</label>
                                <input
                                    required
                                    type="text"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full bg-black/50 border border-white/20 rounded-lg p-4 text-white focus:border-[var(--color-neon-gold)] focus:outline-none transition-colors"
                                    placeholder="株式会社オリパ"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-400">メールアドレス</label>
                                <input
                                    required
                                    type="email"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full bg-black/50 border border-white/20 rounded-lg p-4 text-white focus:border-[var(--color-neon-gold)] focus:outline-none transition-colors"
                                    placeholder="info@example.com"
                                />
                            </div>
                        </div>

                        {/* Plan Selection */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-400">ご希望プラン</label>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {["FREE", "TRIAL", "SERIES", "GOD"].map((plan) => (
                                    <button
                                        type="button"
                                        key={plan}
                                        onClick={() => setFormState({ ...formState, plan })}
                                        className={`p-4 rounded-lg border font-bold transition-all ${formState.plan === plan
                                            ? "bg-[var(--color-neon-gold)] text-black border-[var(--color-neon-gold)]"
                                            : "bg-black/50 text-gray-400 border-white/20 hover:border-white"
                                            }`}
                                    >
                                        {plan === "FREE" && "まずは無料相談"}
                                        {plan === "TRIAL" && "爆アド・お試し"}
                                        {plan === "SERIES" && "集客ブースト"}
                                        {plan === "GOD" && "脳汁GIFアニメ"}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Options: Hide when FREE is selected */}
                        {formState.plan !== "FREE" && (
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-400">希望納期</label>
                                <select
                                    value={formState.deadline}
                                    onChange={(e) => setFormState({ ...formState, deadline: e.target.value })}
                                    className="w-full bg-black/50 border border-white/20 rounded-lg p-4 text-white focus:border-[var(--color-neon-gold)] focus:outline-none"
                                >
                                    <option value="NORMAL">通常（2〜3営業日）</option>
                                    <option value="EXPRESS">特急（+20% / 最短翌日）</option>
                                    <option value="RELAX">急ぎではない</option>
                                </select>
                            </div>
                        )}

                        {/* Message */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-400">ご相談詳細（任意）</label>
                            <textarea
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                className="w-full bg-black/50 border border-white/20 rounded-lg p-4 text-white focus:border-[var(--color-neon-gold)] focus:outline-none h-32"
                                placeholder="「〇〇のような雰囲気で」「手持ちのカード画像を使いたい」など"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-5 rounded-lg bg-gradient-to-r from-[var(--color-neon-gold)] to-yellow-600 text-black font-black text-xl shadow-[0_0_20px_var(--color-neon-gold)] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-6 h-6 border-4 border-black border-t-transparent rounded-full animate-spin" />
                                    送信中...
                                </>
                            ) : (
                                <>
                                    <Send className="w-6 h-6" />
                                    今すぐ申し込む
                                </>
                            )}
                        </button>

                        <p className="text-center text-xs text-gray-500 flex items-center justify-center gap-2">
                            <AlertCircle className="w-4 h-4" />
                            無理な勧誘は一切いたしません。安心してお問い合わせください。
                        </p>
                    </motion.form>
                )}
            </div>
        </section>
    );
}
