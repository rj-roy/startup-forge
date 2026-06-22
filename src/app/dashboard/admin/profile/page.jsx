import ProfileComponent from '@/components/dashboard/profile/ProfileComponent';
import { getUserSession } from '@/lib/core/session';

export const metadata = {
    title: "Admin Profile Settings | Startup Forge",
    description: "Profile Settings"
}

const AdminProfile = async () => {
    const session = await getUserSession();

    return (
        <div>
            <ProfileComponent session={session} />
        </div>
    );
};

export default AdminProfile;