'use client';
import { useState, useEffect } from "react";
import { getDataById } from "@/lib/api/getData";
import StartupDetails from "./StartupDetails";
import { toast, ToastContainer } from "react-toastify";

export default function SDetailsC({ id }) {
    const [startup, setStartup] = useState(null);
    const [loading, setLoading] = useState(true);
    const [opportunities, setOpportunities] = useState([]);

    useEffect(() => {
        if (!id) return;
        const fetchStartup = async () => {
            setLoading(true);

            try {
                const foundStartup = await getDataById(id, '/api/startups');
                setStartup(foundStartup || null);

                try {
                    const opportunitiesByStartup = await getDataById(foundStartup._id, '/api/opportunities/startup');
                    setOpportunities(opportunitiesByStartup || []);
                } catch (error) {
                    console.error(error);
                    setOpportunities([]);
                    toast.error("Failed to load opportunities");
                }
            } catch (error) {
                console.error(error);
                setStartup(null);
                toast.error("Failed to load startup");
            } finally {
                setLoading(false);
            };
        };
        fetchStartup();
    }, [id]);

    if (loading) {
        return (
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <ToastContainer />
                <div className="animate-pulse space-y-8">
                    <div className="h-32 bg-gray-200 dark:bg-gray-800 rounded-xl"></div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded-xl"></div>
                            <div className="h-48 bg-gray-200 dark:bg-gray-800 rounded-xl"></div>
                            <div className="h-48 bg-gray-200 dark:bg-gray-800 rounded-xl"></div>
                        </div>
                        <div className="lg:col-span-1">
                            <div className="h-96 bg-gray-200 dark:bg-gray-800 rounded-xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return <StartupDetails startup={startup} opportunities={opportunities} />;
}