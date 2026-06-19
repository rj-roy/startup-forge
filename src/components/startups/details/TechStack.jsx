export default function TechStack({ technologies }) {
    const getTechColor = (tech) => {
        const colors = {
            "Next.js": "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
            "React": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
            "Node.js": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
            "TypeScript": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
            "Python": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
            "MongoDB": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
            "PostgreSQL": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
            "Go": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
            "Rust": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
            "AWS": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
            "OpenAI API": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
        };
        return colors[tech] || "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
    };

    return (
        <section className="bg-linear-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-blue-100 dark:border-gray-700 p-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    Tech Stack
                </h2>
            </div>

            <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                    <span
                        key={index}
                        className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium ${getTechColor(tech)}`}
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </section>
    );
}