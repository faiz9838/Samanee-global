import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'; // Import Navbar
import Footer from '../components/Footer'; // Import Footer
import FeedbackCard from '../components/FeedbackCard'; // Component to display individual feedback

const Feedback = () => {
    const [googleReviews, setGoogleReviews] = useState([]); // State to hold Google Reviews
    const [name, setName] = useState(''); // State for user's name
    const [email, setEmail] = useState(''); // State for user's email
    const [feedback, setFeedback] = useState(''); // State for feedback text
    const [rating, setRating] = useState(0); // State for star rating

    useEffect(() => {
        fetchGoogleReviews(); // Fetch Google Reviews when the component mounts
    }, []);

    const fetchGoogleReviews = async () => {
        // Replace this with your actual API call to fetch Google Reviews
        try {
            // const response = await fetch('YOUR_GOOGLE_REVIEWS_API_ENDPOINT'); // Your Google Reviews API endpoint
            // const data = await response.json();
            // setGoogleReviews(data.reviews); // Adjust this based on your API response structure
        } catch (error) {
            console.error('Error fetching Google Reviews:', error);
        }
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleFeedbackChange = (e) => {
        setFeedback(e.target.value);
    };

    const handleRatingChange = (value) => {
        setRating(value);
    };

    const handleFeedbackSubmit = (e) => {
        e.preventDefault();
        // Handle feedback submission logic (you should implement the submit logic)
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Feedback:', feedback);
        console.log('Rating:', rating);
        setName(''); // Clear name after submission
        setEmail(''); // Clear email after submission
        setFeedback(''); // Clear feedback after submission
        setRating(0); // Reset rating after submission
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className="flex-grow bg-white p-24 md:p-32">
                <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-800">Feedback</h1>
                <p className="text-lg text-center mb-6 text-gray-600 max-w-2xl mx-auto">
                    We value your feedback! Please share your thoughts about our products and services.
                </p>

                {/* Feedback Form */}
                <form onSubmit={handleFeedbackSubmit} className="max-w-lg mx-auto space-y-6 mb-10 p-8 bg-white rounded-lg shadow-md border border-gray-100">
                    <h2 className="text-3xl font-semibold text-center mb-4 text-blue-600">Your Feedback</h2>
                    <input
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        placeholder="Your Name"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Your Email"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    />
                    <textarea
                        value={feedback}
                        onChange={handleFeedbackChange}
                        placeholder="Your feedback..."
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        rows="4"
                    />
                    <div className="flex items-center justify-center mb-4">
                        <span className="mr-3 text-lg font-medium text-gray-700">Rating:</span>
                        {[...Array(5)].map((_, index) => (
                            <span
                                key={index}
                                onClick={() => handleRatingChange(index + 1)}
                                className={`cursor-pointer text-3xl ${rating > index ? 'text-yellow-400' : 'text-gray-300'} hover:text-yellow-400 transition duration-200`}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300 shadow-md"
                    >
                        Submit Feedback
                    </button>
                </form>

                {/* Google Reviews */}
                <h2 className="text-3xl font-bold text-center mb-6">User Feedback from Google Reviews</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {googleReviews.length > 0 ? (
                        googleReviews.map((review) => (
                            <FeedbackCard key={review.id} feedback={review} /> // Adjust as necessary
                        ))
                    ) : (
                        <p className="text-center text-gray-600">No reviews available.</p>
                    )}
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Feedback;
