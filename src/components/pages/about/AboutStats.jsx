export default function AboutStats() {
    const stats = [
        { label: "Active Startups", value: "1,200+" },
        { label: "Registered Collaborators", value: "5,400+" },
        { label: "Successful Matches", value: "3,100+" },
        { label: "Countries Represented", value: "45+" },
    ];

    return (
        <div className="bg-linear-to-r from-indigo-600 to-purple-600 rounded-3xl p-10 sm:p-16 text-center shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-12">
                Our impact so far
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                        <p className="text-4xl sm:text-5xl font-extrabold text-white mb-2">
                            {stat.value}
                        </p>
                        <p className="text-indigo-100 text-sm sm:text-base font-medium">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}