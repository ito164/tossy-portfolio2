import { Helmet } from 'react-helmet-async';

interface SeoProps {
    title?: string;
    description?: string;
    path?: string;
}

export default function SeoHead({
    title = "オリパ サムネ制作ならとっしーデザイン｜オリパ サムネイル・デザイン外注",
    description = "オリパ サムネ制作の専門デザイナー。目を引くオリパ サムネイル・画像を制作。『ギラギラ感』で完売率UP！ネットオリパのサムネ外注・デザイン制作なら、オリパサムネ特化のとっしーデザインにお任せください。",
    path = "/"
}: SeoProps) {
    const url = `https://tossy-design.com${path}`; // Dummy domain for now

    // JSON-LD for Service
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "オリパ サムネ制作ならとっしーデザイン｜オリパ サムネイル・デザイン外注",
        "image": "https://placehold.co/1200x630/black/gold?text=Tossy+Design",
        "description": "オリパ サムネ制作に特化した専門デザインサービス。目を引くオリパ サムネイル・ネットオリパ用サムネ画像を提供します。",
        "priceRange": "¥19,800 - ¥98,000",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "JP"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "オリパ サムネ・デザイン制作プラン",
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
