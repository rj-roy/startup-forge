export default function Badge({ children, variant = "default", className = "" }) {
    const variants = {
        default: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
        primary: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
        success: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
        warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
        edtech: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
        fintech: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
        cleantech: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
        healthtech: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    };

    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant] || variants.default} ${className}`}>
            {children}
        </span>
    );
}