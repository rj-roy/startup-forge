import Image from "next/image";

export default function AdminUserCard({ user, onBlock, onUnblock }) {
    const isBlocked = user.status === "blocked";

    const getRoleBadge = (role) => {
        const styles = {
            founder: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
            seeker: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
            collaborator: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
            admin: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300",
        };
        return styles[role] || "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300";
    };

    const getInitials = (name) => {
        if (!name) return "?";
        const parts = name.trim().split(" ");
        if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
        return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
    };

    const getAvatarColor = (name) => {
        const colors = [
            "from-indigo-400 to-purple-500",
            "from-blue-400 to-cyan-500",
            "from-green-400 to-teal-500",
            "from-orange-400 to-red-500",
            "from-pink-400 to-rose-500",
            "from-violet-400 to-purple-500",
        ];
        const index = name ? name.charCodeAt(0) % colors.length : 0;
        return colors[index];
    };

    return (
        <div className={`bg-white dark:bg-gray-900 rounded-2xl border p-6 hover:shadow-lg transition-all duration-200 flex flex-col ${isBlocked
            ? "border-red-200 dark:border-red-900/50"
            : "border-gray-200 dark:border-gray-700"
            }`}>

            {/* Header: Avatar & Status */}
            <div className="flex items-start justify-between mb-4">
                <div className="relative">
                    {user.profileImage || user.image ? (
                        <Image
                            height={200}
                            width={200}
                            src={user.profileImage || user.image}
                            alt={user.name}
                            className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
                        />
                    ) : (
                        <div className={`w-16 h-16 rounded-full bg-linear-to-br ${getAvatarColor(user.name)} flex items-center justify-center text-white text-xl font-bold border-2 border-gray-200 dark:border-gray-700`}>
                            {getInitials(user.name)}
                        </div>
                    )}

                    {isBlocked && (
                        <div className="absolute -bottom-1 -right-1 p-1 bg-red-500 rounded-full border-2 border-white dark:border-gray-900">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                            </svg>
                        </div>
                    )}
                </div>

                <span className={`text-xs font-medium px-2.5 py-1 rounded-full capitalize ${isBlocked
                    ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300"
                    : "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                    }`}>
                    {isBlocked ? "Blocked" : "Active"}
                </span>
            </div>

            {/* User Info */}
            <div className="flex-1 space-y-2 mb-4">
                <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 truncate">
                    {user.name || "Unnamed User"}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                    {user.email}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full capitalize ${getRoleBadge(user.role)}`}>
                        {user.role}
                    </span>
                    <span className="text-xs font-medium px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full">
                        {user.plan?.replace(/_/g, " ") || "Free"}
                    </span>
                </div>
            </div>

            {/* Join Date */}
            <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mb-4">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Joined {new Date(user.createdAt).toLocaleDateString()}</span>
            </div>

            {/* Actions */}
            {user.role !== "admin" && (
                <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                    {isBlocked ? (
                        <button
                            onClick={onUnblock}
                            className="w-full px-4 py-2 text-sm font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors flex items-center justify-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Unblock User
                        </button>
                    ) : (
                        <button
                            onClick={onBlock}
                            className="w-full px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors flex items-center justify-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                            </svg>
                            Block User
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}