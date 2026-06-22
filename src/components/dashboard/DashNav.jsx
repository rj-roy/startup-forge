'use client'
import { authClient } from "@/lib/auth-client";
import { Envelope, Gear, Magnifier, Person } from "@gravity-ui/icons";
import { Bell, Bolt, Bookmark, Briefcase, Building, ClipboardPen, CreditCard, FileText, House, LayoutDashboard, LogOut, SettingsIcon, ShoppingBasket, User, Users, } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight, } from "react-icons/fa";

const DashNav = () => {
    const [activeTab, setActiveTab] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { data: user } = authClient.useSession();

    const handleLogout = async () => {
        await authClient.signOut();
        setIsMobileMenuOpen(false);
        window.location.href = '/';
    };

    const founderNavLinks = [
        { icon: House, href: "/dashboard/founder", label: "Home" },
        { icon: ClipboardPen, href: "/dashboard/founder/my-startup", label: "My Startup" },
        { icon: Bolt, href: "/dashboard/founder/manage-startup", label: "Manage Startup" },
        { icon: Briefcase, href: "/dashboard/founder/add-opportunity", label: "Add Opportunity" },
        { icon: ShoppingBasket, href: "/dashboard/founder/manage-opportunities", label: "Added Opportunities" },
        { icon: Envelope, href: "/dashboard/founder/applications", label: "Manage Applications" },
        { icon: Person, href: "/dashboard/founder/profile", label: "Profile" },
    ];
    const collaboratorNavLinks = [
        { icon: House, href: "/dashboard/collaborator", label: "Dashboard" },
        { icon: Magnifier, href: "/opportunities", label: "Browse Opportunities" },
        { icon: FileText, href: "/dashboard/collaborator/my-applications", label: "My Applications" },
        { icon: CreditCard, href: "/dashboard/collaborator/profile", label: "Profile" },
    ];
    const adminNavLinks = [
        { icon: House, href: "/dashboard/admin", label: "Dashboard" },
        { icon: Users, href: "/dashboard/admin/users", label: "Users" },
        { icon: Building, href: "/dashboard/admin/companies", label: "Companies" },
        { icon: Briefcase, href: "/dashboard/admin/jobs", label: "Jobs" },
        { icon: CreditCard, href: "/dashboard/admin/payments", label: "Payments" },
        { icon: Gear, href: "/dashboard/admin/settings", label: "Settings" },
    ];

    const navLinksMap = {
        founder: founderNavLinks,
        collaborator: collaboratorNavLinks,
        admin: adminNavLinks
    };
    const menuItems = navLinksMap[user?.user?.role || 'founder'];

    return (
        <>
            <div className="relative lg:h-screen lg:pb-15 lg:w-64">
                <button
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                    className=" z-50 lg:hidden p-2 rounded-lg bg-white-bg dark:bg-black-bg" >
                    {!isMobileMenuOpen && (
                        <FaAngleRight className="size-8 fixed top-100 bottom-100    " />
                    )}
                </button>
                <aside className={`fixed top-16 z-40 h-screen pb-15 w-64 py-5 bg-white-bg dark:bg-black-bg flex flex-col transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 border-r border-r-gray-300 dark:border-r-gray-800 shadow-r-sm`}>
                    {/* Header */}
                    <div className="p-6">
                        <div className="flex justify-between">
                            <h1 className="text-xl font-bold">Dashboard</h1>
                            <FaAngleLeft onClick={() => setIsMobileMenuOpen(false)} className="size-7 lg:hidden border rounded-full" />
                        </div>

                        <div className="relative mt-4 flex items-center gap-3 rounded-lg bg-gray-500/50 p-2">
                            <div className="flex size-8 items-center justify-center rounded-full bg-gray-900">
                                <User className="size-4 text-white" />
                            </div>

                            <div>
                                <p className="text-sm font-medium">
                                    {
                                        user?.user?.role === "founder" ? "Founder" : user?.user?.role === "collaborator" ? "Collaborator" : "Admin"
                                    }
                                </p>
                                <p className="text-xs text-gray-800 dark:text-gray-400">
                                    {user?.user?.plan.split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                                </p>
                                <span className="absolute -top-2 -right-4 inline-flex items-center rounded-full bg-green-200 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                    {
                                        user?.user?.plan.split("_")[1]
                                    }
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 px-4 space-y-1">
                        {menuItems.map(({ href, label, icon: Icon, }) => (
                            <Link href={href} key={href}>
                                <button
                                    onClick={() => setActiveTab(href)}
                                    className={`w-full text-nowrap flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${activeTab === href ? 'bg-gray-800 text-white' : 'dark:text-gray-400 hover:bg-gray-900 hover:text-gray-200'}`}>
                                    <Icon className="size-5" />
                                    <span className="font-medium">{label}</span>
                                </button>
                            </Link>
                        ))}
                    </nav>

                    {/* Footer Actions */}
                    <div className="p-4 space-y-2">
                        <button onClick={handleLogout} className="flex w-full items-center gap-3 rounded-lg px-4 py-2.5 dark:text-gray-400 transition-colors hover:bg-gray-900 hover:text-white">
                            <LogOut className="size-5" />
                            <span className="font-medium">Logout</span>
                        </button>
                    </div>
                </aside>
            </div>

            {/* Mobile Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 z-30 lg:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </>
    );
};

export default DashNav;