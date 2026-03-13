import { ArrowLeft } from "lucide-react";

export default function TokuteiLawPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12 px-4">
            <div className="max-w-4xl mx-auto">
                <a href="#" className="inline-flex items-center gap-2 text-[var(--color-neon-gold)] hover:text-white transition-colors mb-8">
                    <ArrowLeft className="w-5 h-5" />
                    トップページに戻る
                </a>

                <h1 className="text-3xl md:text-4xl font-bold mb-12 border-b border-white/20 pb-6">
                    特定商取引法に基づく表記
                </h1>

                <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/20 bg-white/10">
                                <th className="p-4 md:p-6 w-1/3 md:w-1/4 font-bold text-gray-300">項目</th>
                                <th className="p-4 md:p-6 font-bold text-gray-300">内容</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10 text-sm md:text-base">
                            <tr>
                                <td className="p-4 md:p-6 font-bold text-gray-400">販売業者</td>
                                <td className="p-4 md:p-6 text-gray-200">井原利明</td>
                            </tr>
                            <tr>
                                <td className="p-4 md:p-6 font-bold text-gray-400">所在地</td>
                                <td className="p-4 md:p-6 text-gray-200">〒555-0032 大阪府大阪市西淀川区大和田3-3-26 イングランドアヴェニュー10番館 303</td>
                            </tr>
                            <tr>
                                <td className="p-4 md:p-6 font-bold text-gray-400">電話番号</td>
                                <td className="p-4 md:p-6 text-gray-200">080-5368-5629</td>
                            </tr>
                            <tr>
                                <td className="p-4 md:p-6 font-bold text-gray-400">営業時間</td>
                                <td className="p-4 md:p-6 text-gray-200">10:00〜18:00（基本土日祝も営業）</td>
                            </tr>
                            <tr>
                                <td className="p-4 md:p-6 font-bold text-gray-400">連絡先メールアドレス</td>
                                <td className="p-4 md:p-6 text-gray-200">
                                    <a href="mailto:toihara2011@gmail.com" className="text-[var(--color-neon-gold)] hover:underline">
                                        toihara2011@gmail.com
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-4 md:p-6 font-bold text-gray-400">販売価格</td>
                                <td className="p-4 md:p-6 text-gray-200">各プランの詳細に記載</td>
                            </tr>
                            <tr>
                                <td className="p-4 md:p-6 font-bold text-gray-400">お支払い方法</td>
                                <td className="p-4 md:p-6 text-gray-200">銀行振込 ※振込先名義・入金期限は請求書にてご案内します</td>
                            </tr>
                            <tr>
                                <td className="p-4 md:p-6 font-bold text-gray-400 align-top">返品・キャンセルについて</td>
                                <td className="p-4 md:p-6 text-gray-200 leading-relaxed">
                                    制作着手前のキャンセルについては全額返金に対応いたします。ヒアリングやラフ制作など、制作に着手した後のキャンセルは、進行状況に応じた制作費をいただきます（目安：制作費の50〜100%）。デザインデータという性質上、納品完了後の返品・返金はお受けしておりません。
                                </td>
                            </tr>
                            <tr>
                                <td className="p-4 md:p-6 font-bold text-gray-400">修正対応</td>
                                <td className="p-4 md:p-6 text-gray-200">各プランの詳細に記載</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
