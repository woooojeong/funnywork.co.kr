import SideNav from '../../components/SideNav';
import React, { useState } from 'react';

export default function ESGList() {
  const [activeTab, setActiveTab] = useState<'Environment' | 'Social' | 'Governance'>('Environment');

  return (
    <div className="flex">
      <SideNav />
      <div className="flex-1 pt-16 container mx-auto px-4 text-white">
        <h1 className="text-3xl font-bold mb-8">ESG경영</h1>
        {/* Tabs */}
        <div className="flex space-x-4 mb-2">
          {['Environment', 'Social', 'Governance'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as typeof activeTab)}
              className={`px-6 py-2 rounded-t-lg font-semibold focus:outline-none transition-colors duration-200
                ${activeTab === tab ? 'bg-[#1de9ff] text-navy-900' : 'bg-navy-800 text-white hover:bg-navy-600'}`}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* Tab Content */}
        <div className="bg-navy-800 rounded-b-lg p-8 min-h-[200px]">
          {activeTab === 'Environment' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Environment</h2>
              <p>환경(Enviroment) 관련 ESG 경영 내용이 여기에 표시됩니다.</p>
            </div>
          )}
          {activeTab === 'Social' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Social</h2>
              <p>사회(Social) 관련 ESG 경영 내용이 여기에 표시됩니다.</p>
            </div>
          )}
          {activeTab === 'Governance' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Governance</h2>
              <p>지배구조(Governance) 관련 ESG 경영 내용이 여기에 표시됩니다.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 