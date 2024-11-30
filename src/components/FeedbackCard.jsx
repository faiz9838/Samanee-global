import React from 'react';

const FeedbackCard = ({ feedback }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-bold">{feedback.userName}</h3>
            <p className="text-gray-500">{feedback.type}</p>
            <p className="mt-2 text-gray-700">{feedback.content}</p>
        </div>
    );
};

export default FeedbackCard;
