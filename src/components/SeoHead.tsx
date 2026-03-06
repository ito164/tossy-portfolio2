import { Helmet } from 'react-helmet-async';

interface SeoProps {
    title?: string;
    description?: string;
    path?: string;
}

export default function SeoHead({
    title = "とっしーデザイン | 売れるネットオリパ・サムネイル制作",
    description = "「その1枚が、完売までの最短ルート。」オリパサムネ・画像制作に特化した専門デザイナー。カードゲームユーザーの心理を深く理解し、目を引く『ギラギラ感』と信頼感のある高品質なネットオリパ用サムネイルを提供いたします。業界トップクラスのオリパデザイン外注ならお任せください。",
    path = "/"
}: SeoProps) {
    const url = `https://tossy-design.com${path}`; // Dummy domain for now

    // JSON-LD for Service
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "とっしーデザイン | ネットオリパ・サムネイル制作",
        "image": "https://placehold.co/1200x630/black/gold?text=Tossy+Design",
        "description": "オリパサムネ制作に特化した専門デザインサービス。目を引く高品質なネットオリパ用サムネイル・画像を提供します。",
        "priceRange": "¥19,800 - ¥98,000",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "JP"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "オリパサムネ・デザイン制作プラン",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "爆アドお試しプラン",
                        "description": "初回限定の特別価格プラン"
                    },
                    "price": "19800",
                    "priceCurrency": "JPY"
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "シーズン完結パック",
                        "description": "統一感のあるシリーズデザイン"
                    },
                    "price": "49800",
                    "priceCurrency": "JPY"
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "神オリパ・プラン",
                        "description": "完全お任せの最高品質デザイン"
                    },
                    "price": "98000",
                    "priceCurrency": "JPY"
                }
            ]
        }
    };

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="canonical" href={url} />

            {/* OGP */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:image" content="https://placehold.co/1200x630/black/gold?text=Tossy+Design" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </script>
        </Helmet>
    );
}
