import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12 px-4">
            <div className="max-w-4xl mx-auto">
                <a href="#" className="inline-flex items-center gap-2 text-[var(--color-neon-gold)] hover:text-white transition-colors mb-8">
                    <ArrowLeft className="w-5 h-5" />
                    トップページに戻る
                </a>

                <h1 className="text-3xl md:text-4xl font-bold mb-12 border-b border-white/20 pb-6">
                    利用規約・重要事項
                </h1>

                <div className="space-y-8 text-gray-300 leading-relaxed text-sm md:text-base">
                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">【1. 適用】</h2>
                        <p>本規約は、「とっしーデザイン」（以下「本サービス」）の利用条件を定めるものです。お客様は本規約に同意のうえ、本サービスを利用します。</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">【2. 用語の定義】</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>本サービス：Adobe Photoshop、Illustratorなどを用いたオリパサムネイル制作を請け負うサービス</li>
                            <li>運営：本サービスを企画し運営する個人または法人</li>
                            <li>成果物：本サービスを通じて制作されたサムネイル等の制作物</li>
                            <li>外部サービス：チャットワーク、Slack、Adobe Photoshop、Gemini等、本サービスの提供または利用に関連して用いる第三者サービス</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">【3. サービス内容】</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>本サービスは、デザインツール、AIサービスを用いてオリパサムネイルを制作し、提供します。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">【4. 料金】</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>料金はプラン内容の詳細部分に記載のとおりです。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">【5. キャンセル】</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>制作着手前のキャンセルについては全額返金に対応いたします。</li>
                            <li>ヒアリングやラフ制作など、制作に着手した後のキャンセルは、進行状況に応じた制作費をいただきます（目安：制作費の50〜100%）。</li>
                            <li>デザインデータという性質上、納品完了後の返品・返金はお受けしておりません。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">【6. 納品物の利用範囲】</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>納品物は商用利用が可能です。</li>
                            <li>納品物の著作権は運営に帰属します。お客様には、納品・入金完了後、目的の範囲内での使用権を付与します。</li>
                            <li>運営は、納品物をポートフォリオや制作実績として公開・掲載できるものとします。ただし、お客様から非公開の申し出があった場合はこの限りではありません。</li>
                            <li>成果物に含まれる第三者の著作権は、各権利に準じます。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">【7. 禁止事項】</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>納品物の第三者への提供、公開、転売、転載</li>
                            <li>公序良俗に反する行為、反社会的勢力への利益供与</li>
                            <li>他者の権利侵害、誹謗中傷、違法行為</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">【8. 外部サービスの利用】</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>本サービスはチャットワーク、Slack、Adobe Photoshop、Gemini等の外部サービスを利用します</li>
                            <li>各種外部サービスの仕様変更に対応できない場合があります</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">【9. 免責・責任範囲】</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>運営は、本サービスの利用により依頼主に生じた損害について、運営の故意または重過失がある場合を除き責任を負いません</li>
                            <li>本サービスは成功や報酬を保証するものではありません</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">【10. プライバシーポリシー】</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>収集する情報：メールアドレス、決済に関する情報（決済事業者を通じて取得する範囲）、任意で提出されたプロフィール情報等</li>
                            <li>利用目的：本サービス提供、本人確認、連絡、運営改善、告知、問い合わせ対応、不正防止</li>
                            <li>第三者：法令に基づく場合を除き、本人の同意なく第三者に提供しません</li>
                            <li>安全管理：適切な管理を行い、漏えい防止等に努めます</li>
                            <li>問い合わせ窓口：本ページ末尾の連絡先にご連絡ください</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">【11. 規約の変更】</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>運営は必要に応じて本規約を変更できます</li>
                            <li>重要な変更管理への記載等、運営が適切と判断する方法でお客様に通知します</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">【12. サービス終了】</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>運営上の都合により本サービスを終了する場合、原則として終了予定日の6ヶ月前までに告知します</li>
                            <li>終了日以降は本サービスの提供を停止します</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">【13. 連絡先】</h2>
                        <p>問い合わせ先メールアドレス：<a href="mailto:toihara2011@gmail.com" className="text-[var(--color-neon-gold)] hover:underline">toihara2011@gmail.com</a></p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">【14. 準拠法・管轄】</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>本規約は日本法に準拠します</li>
                            <li>紛争が生じた場合は、運営者の所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とします</li>
                        </ul>
                    </section>
                </div>

                <div className="mt-12 pt-8 border-t border-white/20 text-gray-400 text-sm">
                    最終更新日 2026年3月13日
                </div>
            </div>
        </div>
    );
}
