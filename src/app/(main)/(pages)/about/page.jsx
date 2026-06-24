import AboutCTA from "@/components/pages/about/AboutCTA";
import AboutHero from "@/components/pages/about/AboutHero";
import AboutMission from "@/components/pages/about/AboutMission";
import AboutStats from "@/components/pages/about/AboutStats";
import CoreValues from "@/components/pages/about/CoreValues";
import HowItWorks from "@/components/pages/about/HowItWorks";
import { getUserSession } from "@/lib/core/session";

export default async function AboutPage() {
    const session = await getUserSession();
    return (
        <div className="min-h-screen w-full bg-gray-50 dark:bg-black-bg">
            <AboutHero />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
                <AboutMission />
                <HowItWorks />
                <CoreValues />
                <AboutStats />
                {
                    !session ? (
                        <AboutCTA />
                    ) : null
                }
            </div>
        </div>
    );
}