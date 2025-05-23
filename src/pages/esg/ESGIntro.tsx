import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ESGIntro() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-white pb-20">
      {/* 상단 제목 */}
      <motion.div 
        className="max-w-5xl mx-auto text-center mb-20 mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold mb-20 text-indigo-900">ESG</h1>
        <h2 className="text-2xl text-indigo-600 font-bold mb-6">퍼니웍의 ESG 경영에 대해 소개합니다.</h2>
      </motion.div>

      {/* ESG 이미지 */}
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

      {/* ESG 방향성 카드 */}
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
          {/* 각 카드들 (코드는 위 내용 그대로 유지 가능) */}
          {/* ENVIRONMENTAL / SOCIAL / GOVERNANCE 카드들 */}
          {/* ... 중략 */}
        </div>
      </div>

      {/* ESG 실천 버튼 섹션 */}
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
  );
}
