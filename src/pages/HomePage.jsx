import React, { useState } from 'react';

const HomePage = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setResponse(`Analysis for query: "${query}"\n\nThis is where the AI-generated response would appear, providing insights based on the natural language query about financial data and analysis.`);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Wall Street Insights Platform</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter your financial query here..."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit" 
            disabled={isLoading}
            className={`w-full p-3 bg-blue-500 text-white rounded-md ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
          >
            {isLoading ? 'Analyzing...' : 'Analyze'}
          </button>
        </form>
        {response && (
          <div className="mt-6 p-4 bg-gray-50 rounded-md">
            <h3 className="font-bold mb-2">Analysis Results:</h3>
            <pre className="whitespace-pre-wrap text-sm">{response}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;

