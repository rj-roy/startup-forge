import Link from "next/link";

export default function FinalCTA() {
    return (
        <div className="px-4 sm:px-6 lg:px-8 pb-20">
            <div className="max-w-7xl mx-auto">
                <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-12 sm:p-20 text-center">
                    {/* Decorative */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 tracking-tight">
                            Ready to build something amazing?
                        </h2>
                        <p className="text-lg sm:text-xl text-indigo-100 mb-10 leading-relaxed">
                            Join thousands of founders and collaborators who are already transforming the way they work.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/auth/signup"
                                className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
                            >
                                Get Started Free
                            </Link>
                            <Link
                                href="/pricing"
                                className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur border border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all"
                            >
                                View Pricing
                            </Link>
                        </div>
                        <p className="text-sm text-indigo-200 mt-8">
                            ✓ Free to start &nbsp; ✓ No credit card required &nbsp; ✓ Cancel anytime
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}