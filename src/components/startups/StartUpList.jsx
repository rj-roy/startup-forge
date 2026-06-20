'use client'
import { useState, useMemo } from "react";
import SearchBar from "./SearchBar";
import IndustryFilter from "./IndustryFilter";
import StartupCard from "./StartUpCard";
import { toast, ToastContainer } from "react-toastify";

export default function StartupList({ startups }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("all");

  const filteredStartups = useMemo(() => {
    return startups.filter((startup) => {
      const matchesSearch = 
        startup.startup_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        startup.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        startup.industry.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesIndustry = 
        selectedIndustry === "all" || 
        startup.industry.toLowerCase().includes(selectedIndustry.toLowerCase());

      return matchesSearch && matchesIndustry;
    });
  }, [startups, searchQuery, selectedIndustry]);

  const handleViewDetails = (startup) => {
    toast.success("Viewing details for:", startup.startup_name);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ToastContainer/>
      {/* Header Section */}
      <div className="mb-8 space-y-6">
        <SearchBar onSearch={setSearchQuery} />
        <IndustryFilter 
          selectedIndustry={selectedIndustry}
          onSelect={setSelectedIndustry}
        />
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Showing {filteredStartups.length} of {startups.length} startups
        </p>
      </div>

      {/* Startup Grid */}
      {filteredStartups.length > 0 ? (
        <div className="space-y-4">
          {filteredStartups.map((startup) => (
            <StartupCard
              key={startup._id} 
              startup={startup}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <svg className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100">No startups found</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Try adjusting your search or filter to find what you&apos;re looking for.
          </p>
        </div>
      )}
    </div>
  );
}