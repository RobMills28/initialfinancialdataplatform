import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Activity, AlertTriangle, DollarSign, TrendingUp } from 'lucide-react';

const data = [
  { name: 'Jan', Gold: 4000, Silver: 2400, Oil: 2400 },
  { name: 'Feb', Gold: 3000, Silver: 1398, Oil: 2210 },
  { name: 'Mar', Gold: 2000, Silver: 9800, Oil: 2290 },
  { name: 'Apr', Gold: 2780, Silver: 3908, Oil: 2000 },
  { name: 'May', Gold: 1890, Silver: 4800, Oil: 2181 },
  { name: 'Jun', Gold: 2390, Silver: 3800, Oil: 2500 },
  { name: 'Jul', Gold: 3490, Silver: 4300, Oil: 2100 },
];

const CommoditiesPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Commodities Insights Platform</h1>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow flex items-center">
          <DollarSign className="text-green-500 mr-4" size={24} />
          <div>
            <h2 className="text-sm text-gray-500">Total Commodities Value</h2>
            <p className="text-2xl font-bold">$1,234,567</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow flex items-center">
          <TrendingUp className="text-blue-500 mr-4" size={24} />
          <div>
            <h2 className="text-sm text-gray-500">Today's Gain/Loss</h2>
            <p className="text-2xl font-bold text-green-500">+$12,345 (1.0%)</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow flex items-center">
          <Activity className="text-purple-500 mr-4" size={24} />
          <div>
            <h2 className="text-sm text-gray-500">Market Volatility</h2>
            <p className="text-2xl font-bold">High</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow flex items-center">
          <AlertTriangle className="text-red-500 mr-4" size={24} />
          <div>
            <h2 className="text-sm text-gray-500">Risk Level</h2>
            <p className="text-2xl font-bold">High</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow col-span-2">
          <h2 className="text-xl font-bold mb-4">Commodities Performance</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Gold" stroke="#FFD700" />
              <Line type="monotone" dataKey="Silver" stroke="#C0C0C0" />
              <Line type="monotone" dataKey="Oil" stroke="#000000" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="space-y-4">
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">Place Trade</button>
            <button className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200">Analyze Portfolio</button>
            <button className="w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition duration-200">View Reports</button>
            <button className="w-full bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-200">Set Alerts</button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">News Feed</h2>
          <ul className="space-y-2">
            <li className="text-sm">Breaking: OPEC announces production cuts</li>
            <li className="text-sm">Gold prices surge on inflation concerns</li>
            <li className="text-sm">Copper demand rises with green energy push</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Watchlist</h2>
          <ul className="space-y-2">
            <li className="flex justify-between"><span>Gold</span><span className="text-green-500">+1.2%</span></li>
            <li className="flex justify-between"><span>Silver</span><span className="text-red-500">-0.8%</span></li>
            <li className="flex justify-between"><span>Oil</span><span className="text-green-500">+2.3%</span></li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Market Insights</h2>
          <p className="text-sm">Commodities markets show increased volatility due to global supply chain disruptions and geopolitical tensions.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
          <ul className="space-y-2 text-sm">
            <li>FOMC Meeting (Tomorrow, 2 PM EST)</li>
            <li>EIA Petroleum Status Report (Wednesday, 10:30 AM EST)</li>
            <li>World Gold Council Quarterly Report (Friday)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CommoditiesPage;
