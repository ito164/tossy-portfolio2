export default function FooterSection() {
    return (
        <footer className="bg-black py-8 border-t border-white/10 relative z-10">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-gray-500 font-bold text-sm">
                    &copy; {new Date().getFullYear()} とっしーデザイン. All rights reserved.
                </div>
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                    <a href="#tokutei" className="text-gray-400 hover:text-[var(--color-neon-gold)] text-sm transition-colors font-bold">
                        特定商取引法に基づく表記
                    </a>
                </div>
            </div>
        </footer>
    );
}
