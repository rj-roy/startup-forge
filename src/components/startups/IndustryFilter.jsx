const industries = [
    { id: "all", label: "All Industries" },
    { id: "ai", label: "AI" },
    { id: "fintech", label: "FinTech" },
    { id: "cleantech", label: "CleanTech" },
    { id: "edtech", label: "EdTech" },
    { id: "healthtech", label: "HealthTech" },
    { id: "agritech", label: "AgriTech" },
    { id: "proptech", label: "PropTech" },
];

export default function IndustryFilter({ selectedIndustry, onSelect }) {
    return (
        <div className="flex flex-wrap gap-2">
            {industries.map((industry) => {
                const isSelected = selectedIndustry === industry.id ||
                    (selectedIndustry === "all" && industry.id === "all");

                return (
                    <button
                        key={industry.id}
                        onClick={() => onSelect(industry.id)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${isSelected
                                ? "bg-indigo-600 text-white shadow-md dark:bg-indigo-500"
                                : "bg-indigo-50 text-indigo-700 hover:bg-indigo-100 dark:bg-gray-800 dark:text-indigo-300 dark:hover:bg-gray-700"
                            }`}
                    >
                        {industry.label}
                    </button>
                );
            })}
        </div>
    );
}