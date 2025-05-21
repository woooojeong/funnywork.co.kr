import SideNav from '../../components/SideNav';
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ESGList from './ESGList';
import { motion } from 'framer-motion';

export default function ESGPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex">
      <SideNav />
      <div className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <div className="pt-24 min-h-screen bg-white pb-20">
                <motion.div 
                  className="max-w-5xl mx-auto text-center mb-20 mt-20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-5xl font-bold mb-20 text-indigo-900">ESG</h1>
                  <h2 className="text-2xl text-indigo-600 font-bold mb-6">퍼니웍의 ESG 경영에 대해 소개합니다.</h2>
                </motion.div>
                <motion.div 
                  className="flex justify-center w-full px-2 md:px-8 mb-20"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <img
                    src="/images/img-management.png"
                    alt="ESG 경영 안내"
                    className="w-full max-w-[900px] h-auto rounded-lg"
                    style={{ objectFit: 'contain' }}
                  />
                </motion.div>
                {/* ESG별 방향성 카드 섹션 */}
                <div className="max-w-6xl mx-auto mt-24 px-4">
                  <motion.h2 
                    className="text-center text-2xl text-indigo-600 font-bold mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    퍼니웍의 ESG별 방향성을 소개합니다.
                  </motion.h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* 카드 1: ENVIRONMENTAL */}
                    <motion.div 
                      className="relative flex flex-col h-full"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <div className="h-[285px] w-full">
                        <img src="/images/img-esg01.png" alt="환경" className="w-full h-full object-cover rounded-t-lg" />
                      </div>
                      <motion.div 
                        className="relative -mt-10 ml-5 bg-white rounded-lg shadow-lg p-6 flex-1 border-l-4 border-green-500"
                        whileHover={{ 
                          scale: 1.05,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <div className="mb-4">
                          <p className="text-sm font-semibold text-gray-500 mb-2">ENVIRONMENTAL</p>
                          <h3 className="text-xl font-bold text-blue-700 leading-relaxed">
                            환경 친화적인 경영으로<br/>지속가능한 미래를 만들겠습니다.
                          </h3>
                        </div>
                        <p className="text-[16px] text-gray-700 leading-relaxed tracking-tight">
                          퍼니웍은 소프트웨어 및 AI 솔루션 개발 과정에서 불필요한 에너지 소모를 최소화하기 위해 노력할 것입니다.<br/>
                          이를 위해 에너지 효율을 고려한 친환경적인 기술과 서비스 개발에 집중하며 환경을 우선적으로 생각하는 기업이 되고자 합니다.
                        </p>
                      </motion.div>
                    </motion.div>

                    {/* 카드 2: SOCIAL */}
                    <motion.div 
                      className="relative flex flex-col h-full"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <div className="h-[285px] w-full">
                        <img src="/images/img-esg02.png" alt="사회" className="w-full h-full object-cover rounded-t-lg" />
                      </div>
                      <motion.div 
                        className="relative -mt-10 ml-5 bg-white rounded-lg shadow-lg p-6 flex-1 border-l-4 border-blue-500"
                        whileHover={{ 
                          scale: 1.05,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <div className="mb-4">
                          <p className="text-sm font-semibold text-gray-500 mb-2">SOCIAL</p>
                          <h3 className="text-xl font-bold text-blue-700 leading-relaxed">
                            사회적 책임을 다하며<br/>지역과 함께 성장하겠습니다.
                          </h3>
                        </div>
                        <p className="text-[16px] text-gray-700 leading-relaxed tracking-tight">
                          사회적 책임을 다하고 다양성을 존중하는 기업 문화를 만들겠습니다. 직원들의 행복을 증진하고 개인정보 보호와 본연의 민감하게 대응하며 사회에 장기적으로 이바지할 수 있는 길을 모색할 것입니다.<br/>
                          궁극적으로 지역 사회와 함께 성장할 수 있도록 교육 및 기술 지원 등 꾸준한 사회 공헌 활동을 실시해 나가겠습니다.
                        </p>
                      </motion.div>
                    </motion.div>

                    {/* 카드 3: GOVERNANCE */}
                    <motion.div 
                      className="relative flex flex-col h-full"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1 }}
                    >
                      <div className="h-[285px] w-full">
                        <img src="/images/img-esg03.png" alt="윤리경영" className="w-full h-full object-cover rounded-t-lg" />
                      </div>
                      <motion.div 
                        className="relative -mt-10 ml-5 bg-white rounded-lg shadow-lg p-6 flex-1 border-l-4 border-indigo-500"
                        whileHover={{ 
                          scale: 1.05,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <div className="mb-4">
                          <p className="text-sm font-semibold text-gray-500 mb-2">GOVERNANCE</p>
                          <h3 className="text-xl font-bold text-blue-700 leading-relaxed">
                            투명한 지배구조를 통한<br/>윤리 경영을 추구합니다.
                          </h3>
                        </div>
                        <p className="text-[16px] text-gray-700 leading-relaxed tracking-tight">
                          공정하고 투명한 지배구조를 유지해 고객과 협력사, 직원 모두의 신뢰를 이끌어내겠습니다.<br/>
                          이를 위해 ESG 경영 위원회를 구성하고, 차별 없는 인사 제도와 평가 체계를 따르며 기업 구성원 및 관계자들의 존엄성을 지킬 것입니다.
                        </p>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>

                {/* ESG 실천 섹션 */}
                <motion.div 
                  className="max-w-5xl mx-auto mt-32 text-center px-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <h3 className="text-2xl font-bold text-indigo-700 mb-4">
                    퍼니웍의 ESG 실천은 현재진행형입니다.
                  </h3>
                  <p className="text-gray-700 text-base mb-8">
                    매년 환경, 사회, 윤리 경영 전반에 걸쳐 다양한 이해관계자들의 기대에 부응하기 위해<br/>
                    ESG 경영 활동과 그 성과를 투명하게 공개하고 있습니다.
                  </p>
                  <motion.button
                    onClick={() => window.location.href = "/esg/list"}
                    className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition"
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    ESG 보고자료 보러가기 →
                  </motion.button>
                </motion.div>
              </div>
            }
          />
          <Route path="list" element={<ESGList />} />
        </Routes>
      </div>
    </div>
  );
} 