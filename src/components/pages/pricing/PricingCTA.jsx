import Link from "next/link";

export default function PricingCTA() {
    return (
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gray-900 dark:bg-indigo-950 p-12 sm:p-20 text-center">
            {/* Decorative Blobs */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-indigo-500/30 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/30 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
                    Ready to build your future?
                </h2>
                <p className="text-lg text-gray-300 mb-10">
                    Join over 10,000 founders and collaborators who are already transforming the way they work.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/auth/signup"
                        className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
                    >
                        Get Started for Free
                    </Link>
                    <Link
                        href="/contact"
                        className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-600 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
                    >
                        Talk to Sales
                    </Link>
                </div>

                <p className="text-sm text-gray-400 mt-8 flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    No credit card required • Cancel anytime
                </p>
            </div>
        </div>
    );
}