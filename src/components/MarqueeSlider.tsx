// サムネイル画像をインポート
import marquee1 from "../assets/marquee_1.jpg";
import marquee2 from "../assets/marquee_2.jpg";
import marquee3 from "../assets/marquee_3.jpg";
import marquee4 from "../assets/marquee_4.jpg";
import marquee5 from "../assets/marquee_5.jpg";

const MARQUEE_IMAGES = [marquee1, marquee2, marquee3, marquee4, marquee5];

export default function MarqueeSlider({ direction = "left" }: { direction?: "left" | "right" }) {
    // CSSアニメーション（GPU加速）でスムーズなスクロールを実現
    const animationName = direction === "left" ? "marquee-left" : "marquee-right";

    return (
        <div className="flex overflow-hidden relative z-0 opacity-40 pointer-events-none">
            <div
                className="flex gap-6 py-4 px-4 whitespace-nowrap"
                style={{
                    animation: `${animationName} 30s linear infinite`,
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "translate3d(0, 0, 0)",
                }}
            >
                {/* 2セット分繰り返してシームレスなループを作る */}
                {[...Array(2)].map((_, groupIndex) => (
                    <div key={groupIndex} className="flex gap-6">
                        {MARQUEE_IMAGES.map((img, i) => (
                            <div
                                key={i}
                                className="w-64 h-40 md:w-96 md:h-56 rounded-xl shrink-0 border-2 border-white/10 shadow-[0_0_20px_rgba(255,215,0,0.1)] overflow-hidden"
                            >
                                <img
                                    src={img}
                                    alt={`オリパ サムネ制作実績 ${i + 1}`}
                                    className="w-full h-full object-cover"
                                    loading="eager"
                                    decoding="async"
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
