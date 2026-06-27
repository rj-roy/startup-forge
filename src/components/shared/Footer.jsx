import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { Mail, X } from "lucide-react";
import { IoLocationSharp } from "react-icons/io5";
import { BsTwitter } from "react-icons/bs";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white z-999 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src={logo}
                                alt="StartupForge Logo"
                                width={40}
                                height={40}
                                className="rounded-xl w-auto h-auto"
                            />
                            <span className="text-xl font-bold text-gray-900 dark:text-white">
                                StartupForge
                            </span>
                        </Link>

                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            Bridging the gap between visionary founders and talented collaborators to build the future of work.
                        </p>

                        {/* Contact Information */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                <Mail color="indigo" size={20} className="font-bold text-indigo-500" />
                                <a href="mailto:hello@startupforge.com" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                    hello@startupforge.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                <IoLocationSharp color="indigo" size={20} />
                                <span>San Francisco, CA</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Platform Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-6">
                            Platform
                        </h3>
                        <ul className="space-y-4">
                            {[
                                { name: "Browse Opportunities", href: "/opportunities" },
                                { name: "For Founders", href: "/dashboard/founder" },
                                { name: "For Collaborators", href: "/dashboard/collaborator" },
                                { name: "Pricing", href: "/pricing" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Company Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-6">
                            Company
                        </h3>
                        <ul className="space-y-4">
                            {[
                                { name: "About Us", href: "/about" },
                                { name: "Careers", href: "/careers" },
                                { name: "Blog", href: "/blog" },
                                { name: "Contact", href: "/contact" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Social & Newsletter */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-6">
                            Follow Us
                        </h3>
                        <div className="flex items-center gap-4 mb-8">
                            {/* Twitter / X */}
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 transition-all duration-200">
                                <X/>
                            </a>
                            {/* LinkedIn */}
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 transition-all duration-200">
                                <FaLinkedinIn/>
                            </a>
                            {/* GitHub */}
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 transition-all duration-200">
                                <FaGithub/>
                            </a>
                            {/* Instagram */}
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 transition-all duration-200">
                                <FaInstagram/>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Copyright & Legal */}
                <div className="py-6 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        &copy; {currentYear} StartupForge. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}