import { motion } from 'framer-motion';

export default function CEOPage() {
  return (
    <div className="pt-24 min-h-screen bg-white pb-20">
      {/* 상단: 제목/부제목/설명 */}
      <motion.div
        className="max-w-5xl mx-auto text-center mb-20 mt-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h1
          className="text-5xl font-bold mb-10 text-indigo-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          CEO 인사말
        </motion.h1>
        <motion.h2
          className="text-2xl text-indigo-600 font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          IT Service Partner, AI System Consultant, AI Solution Provider
        </motion.h2>
        <motion.p
          className="text-base text-gray-500 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          퍼니웍은 기술과 신뢰를 바탕으로 고객가 발전을 담보하는 책임 파트너로서의 역할을 다하겠습니다.
        </motion.p>
      </motion.div>

      {/* 하단: 인사말 + 대표 이미지 카드 */}
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow flex flex-col md:flex-row items-stretch p-8 md:p-12">
          {/* 좌측: 인사말 */}
          <motion.div 
            className="flex-1 flex flex-col justify-center md:pr-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="text-lg font-semibold text-gray-800 mb-10 text-left">
              안녕하십니까?<br/>(주)퍼니웍 대표이사 김태중 입니다.
            </p>
            {[
              "2001년 E-BUSINESS 연구소로 출발한 당사는 금융, 공공, 서비스 등 여러 분야의 시스템 구축과 유지 보수를 수행하며 풍부한 역량을 보유한 시스템 개발 전문 업체로 발전해 왔습니다.",
              "'고객과 함께하는 성장'이라는 슬로건 아래 GLOBAL E-BUSINESS INTEGRATOR의 리더로서 역량 발휘에 묵묵히 힘썼던 시간은 끊임없이 변하는 비즈니스 환경 속에서 기술 선도를 향한 걸음을 지속하는 원동력이 되었습니다.",
              "퍼니웍은 지난 20여 년의 노하우를 바탕으로 더 큰 미래를 꿈꾸며 지속 가능한 경영을 추진하기 위해 최선을 다하고 있습니다.",
              "환경, 윤리, 사회적 책임을 엄중히 준수하며 고객과 협력사, 직원 모두의 신뢰를 바탕으로 윤리적이고 투명한 기업 문화를 확립할 것입니다.",
              "이러한 경영 원칙을 구체화하기 위해 자체적인 ESG 경영 지침을 제정해 따르며, 궁극적으로 지역 사회와 상생할 수 있는 교육 및 기술 지원 등 꾸준한 사회 공헌 활동을 실시함과 동시에 IT 자산 가치 극대화 및 안정된 서비스 제공을 위해 전사적 역량을 집중해 나갈 것입니다.",
              "기술과 신뢰를 바탕으로 더욱 깊은 책임감을 가지고 귀사의 IT 발전에 일익을 담당할 수 있도록 아낌없는 성원을 기대하며, 항상 최선을 다하는 퍼니웍이 되겠습니다.",
              "감사합니다."
            ].map((text, i) => (
              <p key={i} className="text-gray-700 mb-4 text-left">{text}</p>
            ))}
          </motion.div>

          {/* 우측: 대표 사진 및 서명 */}
          <motion.div 
            className="flex flex-col items-center justify-center md:w-1/3 mt-8 md:mt-0 h-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <motion.div
              className="w-full h-full rounded-lg overflow-hidden ring-2 ring-gray-300/30 flex items-center justify-center mb-4 bg-transparent"
              style={{
                WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, white 80%, transparent 100%)',
                maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, white 80%, transparent 100%)'
              }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <img src="/images/asp.png" alt="대표이사" className="object-contain w-full h-full" />
            </motion.div>
            <motion.div 
              className="text-center md:text-right w-full"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <img src="/images/ceo_sign.png" alt="대표이사 서명" className="inline-block mt-2 h-[64px] w-auto object-contain mr-5" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
