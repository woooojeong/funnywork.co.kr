import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SideNav from '../../components/SideNav';

interface HistoryItemProps {
  year: string;
  events: string[];
  index: number;
  showYearMark?: boolean;
}

const HistoryItem = ({ year, events, index, showYearMark }: HistoryItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 1, 0.1]);
  const color = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["rgb(30, 27, 75, 0.1)", "rgb(30, 27, 75, 1)", "rgb(30, 27, 75, 0.1)"]
  );

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["0%", "100%"]
  );

  return (
    <motion.div
      ref={ref}
      className="relative mb-16 last:mb-0"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      {showYearMark && (
        <motion.div
          className="absolute -left-[15%] top-0 text-[120px] font-bold hidden lg:block pointer-events-none select-none"
          style={{ color }}
        >
          ~{year}
        </motion.div>
      )}
      <div className="flex items-start gap-8 pl-[45%]">
        <div className="relative min-h-[100px] w-[2px]">
          <motion.div 
            className="absolute left-0 top-3 w-[2px] bg-gradient-to-b from-indigo-900/30 via-indigo-900/20 to-transparent"
            style={{ 
              height: lineHeight,
              originY: 0
            }}
          />
          <div className="absolute left-0 top-3 w-3 h-3 border-2 border-indigo-900 bg-white rounded-full -translate-x-[5px]"></div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-2">
            <motion.h2 
              className="text-xl font-bold text-indigo-900"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              {year}
            </motion.h2>
          </div>
          <ul className="space-y-3">
            {events.map((event, i) => (
              <motion.li
                key={i}
                className="text-[15px] text-gray-600 leading-relaxed"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 }}
              >
                {event}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const historyData = [
  {
    year: '2024',
    events: [
      '흥국생명 차세대 프로젝트 참여'
    ]
  },
  {
    year: '2023',
    events: [
      'SK주식회사 C&C Premium BP社 선정',
      '저작권등록 AiRBot-N 12건',
      '코스콤 협력업체 인증',
      'SK AI Partners Awards 수상'
    ]
  },
  {
    year: '2022',
    events: [
      '상표출원 에어봇 관련 5건',
      '벤처기업 인증갱신'
    ]
  },
  {
    year: '2021',
    events: [
      '특허출원 2건. 1. 챗봇을 이용한 다국어 지원 시스템 및 방법',
      '2. 하이브리드 챗봇 서비스 시스템 및 서비스 방법',
      '이노비즈 인증갱신'
    ]
  },
  {
    year: '2020',
    events: [
      '우수기술기업 인증 (TCB T-3)',
      '본사 사옥이전',
      '국민은행 차세대 시스템 구축 (채널플랫폼, 전행 I/F 구축)',
      '하나은행 BigData 플랫폼 구축'
    ]
  },
  {
    year: '2018',
    events: [
      'SK Star BP 선정',
      '4IR Awards AI/챗봇부문 大賞 수상',
      "AI챗봇 솔루션 'AiRBot' 출시",
      '삼성화재 에이전트',
      "지능형 검색솔루션 'AIIS' 출시",
      'AirChatbot-A,F,G,M 4건 저작권등록'
    ]
  },
  {
    year: '2017',
    events: [
      '매출액 167억 달성',
      'SK C&C 전략 BP재선정',
      'IBM Watson 파트너 (코오롱)'
    ]
  },
  {
    year: '2016',
    events: [
      '우리은행, KDB차세대 프로젝트 참여',
      '매출액 100억 초과달성',
      'SK C&C 전략 BP재선정'
    ]
  },
  {
    year: '2015',
    events: [
      'SK C&C 전략 BP선정',
      '벤처기업 및 이노비즈 인증 갱신',
      '특허 1건, 프로그램 3건 등록'
    ]
  },
  {
    year: '2013',
    events: [
      '기업부설연구소 인증',
      '이노비즈 인증',
      '벤처기업 인증',
      'SK C&C우수 비즈니스 파트너사 선정'
    ]
  },
  {
    year: '2003',
    events: [
      '퍼니웍 상호변경'
    ]
  },
  {
    year: '2001',
    events: [
      '이비즈니스 연구센터 법인 설립'
    ]
  }
];

export default function HistoryPage() {
  return (
    <div className="flex">
      <SideNav />
      <div className="flex-1">
        <div className="pt-24 container mx-auto px-4 min-h-screen pb-20 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20 mt-20">
              <motion.h1 
                className="text-5xl font-bold mb-10 text-indigo-900"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                연혁
              </motion.h1>
              <motion.h2
                className="text-xl text-indigo-600 font-bold mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                기술과 신뢰, 그 위에 세운 시간의 증거
              </motion.h2>
              <motion.div
                className="text-[15px] text-gray-600 leading-relaxed max-w-4xl mx-auto space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p>
                  퍼니웍은 2001년 설립 이래, 끊임없는 혁신과 도전으로 디지털 전환의 흐름을 선도해왔습니다.
                </p>
                <p>
                  기술력으로 시장을 이끌고, 성과로 신뢰를 쌓아온 우리는 AI·챗봇, Big Data, Contact Center, IT 플랫폼 등 다양한 분야에서<br />
                  국내 유수의 금융·공공기관과 함께하며 '고객경험의 미래'를 현실로 만들어 왔습니다.
                </p>
                <p>
                  이제 우리는 단순한 기술 공급자를 넘어, 고객의 비즈니스 성장을 함께 설계하는 Total Business Partner로 도약합니다.
                </p>
              </motion.div>
            </div>
            <div className="relative">
              {historyData.map((item, index) => (
                <HistoryItem
                  key={item.year}
                  year={item.year}
                  events={item.events}
                  index={index}
                  showYearMark={parseInt(item.year) % 5 === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 