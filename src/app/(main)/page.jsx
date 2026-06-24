import DualPersona from "@/components/pages/home/DualPersona";
import FeaturedOpportunities from "@/components/pages/home/FeaturedOpportunities";
import Features from "@/components/pages/home/Features";
import FinalCTA from "@/components/pages/home/FinalCTA";
import Hero from "@/components/pages/home/Hero";
import Testimonials from "@/components/pages/home/TestiMonials";
import TrustBar from "@/components/pages/home/TrustBar";

export default async function HomePage() {
    return (
        <div className="min-h-screen w-full bg-gray-50 dark:bg-sec-black-bg overflow-hidden">
            <Hero />
            <TrustBar />
            
            <div className="space-y-24">
                <Features />
                <DualPersona />
                <FeaturedOpportunities />
                <Testimonials />
                <FinalCTA />
            </div>
        </div>
    );
}