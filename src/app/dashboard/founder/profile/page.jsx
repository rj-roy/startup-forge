import ProfileForm from "@/components/dashboard/founder/profile/ProfileForm";
import { getUserSession } from "@/lib/core/session";

export const metadata = {
    title: "Profile Settings | Startup Forge",
    description: "Profile Settings"
}

export default async function ProfilePage() {
    const session = await getUserSession();

    const userData = {
        id: session?.user?.id,
        name: session?.user?.name,
        email: session?.user?.email,
        profileImage: session?.user?.profileImage
    };

    return (
        <div className="min-h-screen bg-white-bg dark:bg-black-bg py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">

                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        Profile Settings
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Manage your personal information and profile picture.
                    </p>
                </div>

                {/* Profile Form */}
                <ProfileForm initialData={userData} />

            </div>
        </div>
    );
}