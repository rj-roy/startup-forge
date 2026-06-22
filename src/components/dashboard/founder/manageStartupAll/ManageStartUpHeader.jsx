import DeleteComponent from "@/components/actions/deleteS/DeleteComponent";
import Image from "next/image";

export default function ManageStartupHeader({ startup, role }) {
    return (
        <div className="bg-white-bg dark:bg-black-bg border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <Image
                        width={200}
                        height={200}
                        src={startup.logo}
                        alt={startup.startup_name}
                        className="w-16 h-16 rounded-xl object-cover border-2 border-gray-200 dark:border-gray-700"
                    />
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                {startup.startup_name}
                            </h1>
                            <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium">
                                {startup.status === "approved" ? "Approved" : startup.status}
                            </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            {startup.industry} • {startup.funding_stage}
                        </p>
                    </div>
                </div>
                <DeleteComponent id={startup._id} name={startup.startup_name} path={'/api/startup/delete'} revPath={'/dashboard/founder/create-startup'} role={role} />
            </div>
        </div>
    );
}