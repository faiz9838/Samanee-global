// src/pages/AboutUs.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
    const companyInfo = {
        name: "EcoScrap Solutions",
        mission: "To revolutionize the scrap management industry by promoting sustainability and eco-friendly practices.",
        values: [
            { icon: '♻️', label: "Sustainability" },
            { icon: '🤝', label: "Integrity" },
            { icon: '💡', label: "Innovation" },
            { icon: '😊', label: "Customer Satisfaction" },
            { icon: '🏘️', label: "Community Engagement" }
        ],
        teamMembers: [
            {
                name: "John Doe",
                position: "CEO",
                bio: "John has over 15 years of experience in waste management and is passionate about sustainable practices.",
                linkedin: "#",
                twitter: "#"
            },
            {
                name: "Jane Smith",
                position: "Operations Manager",
                bio: "Jane leads our operations team, ensuring efficient scrap collection and processing.",
                linkedin: "#",
                twitter: "#"
            },
            {
                name: "Mike Johnson",
                position: "Environmental Specialist",
                bio: "Mike is dedicated to ensuring compliance with environmental regulations and promoting eco-friendly solutions.",
                linkedin: "#",
                twitter: "#"
            },
            {
                name: "Sara Williams",
                position: "Marketing Director",
                bio: "Sara has a background in marketing and loves crafting campaigns that promote sustainable practices.",
                linkedin: "#",
                twitter: "#"
            }
        ]
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <div className="flex-grow">
                <div className="bg-white p-28 md:p-16 lg:p-28 text-black">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-gray-800">{companyInfo.name}</h1>
                    <p className="text-xl md:text-2xl mb-8 text-center text-gray-600">{companyInfo.mission}</p>

                    {/* Our Values Section */}
                    <section className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center text-gray-800">Our Values</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-8 justify-center">
                            {companyInfo.values.map((value, index) => (
                                <div key={index} className="flex flex-col items-center bg-gray-100 p-4 md:p-6 rounded-lg shadow-lg">
                                    <span className="text-4xl md:text-5xl">{value.icon}</span>
                                    <span className="mt-2 md:mt-4 text-lg md:text-xl font-bold text-gray-800">{value.label}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Meet Our Team Section */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-gray-800">Meet Our Team</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                            {companyInfo.teamMembers.map((member, index) => (
                                <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-800">{member.name}</h3>
                                    <p className="text-gray-600 italic">{member.position}</p>
                                    <p className="mt-4 text-gray-700">{member.bio}</p>
                                    <div className="mt-4">
                                        <a href={member.linkedin} className="text-blue-500 hover:text-blue-600 mr-4">LinkedIn</a>
                                        <a href={member.twitter} className="text-blue-500 hover:text-blue-600">Twitter</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;
