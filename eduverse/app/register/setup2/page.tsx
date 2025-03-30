"use client";

import { useState } from "react";

const InterestSelection = () => {
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

    const handleToggleInterest = (interest: string) => {
        setSelectedInterests((prev) =>
            prev.includes(interest)
                ? prev.filter((item) => item !== interest)
                : [...prev, interest]
        );
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-semibold mb-4">What&apos;s your interest?</h2>
                <div className="mb-4">
                    <div className="text-xl font-medium mb-2">Creatives</div>
                    <div className="flex gap-2 flex-wrap">
                        {["Arts", "Cooking", "Music"].map((interest) => (
                            <button
                                key={interest}
                                onClick={() => handleToggleInterest(interest)}
                                className={`px-4 py-2 rounded-full border border-gray-300 ${selectedInterests.includes(interest)
                                        ? "bg-blue-500 text-white"
                                        : "text-blue-500"
                                    }`}
                            >
                                {interest}
                            </button>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="text-xl font-medium mb-2">Academics</div>
                    <div className="flex gap-2 flex-wrap">
                        {["Biology", "Physics", "Chemical", "Maths"].map((interest) => (
                            <button
                                key={interest}
                                onClick={() => handleToggleInterest(interest)}
                                className={`px-4 py-2 rounded-full border border-gray-300 ${selectedInterests.includes(interest)
                                        ? "bg-blue-500 text-white"
                                        : "text-blue-500"
                                    }`}
                            >
                                {interest}
                            </button>
                        ))}
                    </div>
                </div>
                <button
                    className="mt-6 py-2 px-6 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default InterestSelection;
