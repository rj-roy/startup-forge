import CultureSection from "./CultureSections";
import FounderCard from "./FounderCard";
import MissionSection from "./MissionSection";
import OpportunitiesShow from "./OpportunitiesShow";
import StartupHeader from "./StartupHeader";
import TechStack from "./TechStack";

export default function StartupDetails({ startup, opportunities }) {
    if (!startup) {
        return (
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        Startup not found
                    </h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                        The startup you&apos;re looking for doesn&apos;t exist or has been removed.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <StartupHeader startup={startup} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content - Left Column */}
                <div className="lg:col-span-2 space-y-6">
                    <MissionSection mission={startup.our_mission} />
                    <TechStack technologies={startup.tech_stack} />
                    <CultureSection culture={startup.culture} />
                    <OpportunitiesShow opportunities={opportunities}  />
                </div>

                {/* Sidebar - Right Column */}
                <div className="lg:col-span-1">
                    <div className="sticky top-25">
                        <FounderCard founder={{
                            name: startup.founder.name,
                            title: startup.founder.title,
                            linkedin: startup.founder.linkedin,
                            experience: startup.founder.experience,
                            email: startup.founder_email
                        }} />
                    </div>
                </div>
            </div>
        </div>
    );
}