import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const slides = [
  {
    id: 1,
    title: 'IT Service Partner',
    subtitle: '시스템 통합 구축 및 유지보수',
    description: '시스템 구축 및 유지보수를 포함 스마트 뱅킹, 비대면 서비스 구축, 웹·모바일 서비스, 웹접근성 및 컨설팅 등 20년간 고객의 성공을 함께 한 IT 서비스 전문 파트너입니다.',
    image: '/images/carousel/it-service.jpg',
    buttonText: '자세히 보기'
  },
  {
    id: 2,
    title: 'AI System Consultant',
    subtitle: '인공지능 Chatbot, AI 포털 구축 및 컨설팅',
    description: '차세대 IT 서비스 플랫폼 인공지능 챗봇 시스템 및 AI 포털 시스템의 구축 및 컨설팅으로 4th Wave 시대를 함께하는 AI 시스템 컨설턴트로 도약합니다.',
    image: '/images/carousel/ai-consultant.jpg',
    buttonText: '자세히 보기'
  },
  {
    id: 3,
    title: 'AI Solution Provider',
    subtitle: 'AI 솔루션 구축 및 상용화',
    description: '자연어 대화 플랫폼, 지능형 검색 솔루션, 여론 모니터링 솔루션, AI 고객정보관리 등 인공지능 기반 솔루션 구축 및 상용화로 최적화된 AI 시스템을 제공하겠습니다.',
    image: '/images/carousel/ai-solution.jpg',
    buttonText: '자세히 보기'
  }
];

const MainCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 7000);
    }

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 7000);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 7000);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 7000);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden -mt-16 bg-black">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 1,
            ease: "easeInOut"
          }}
        >
          <div 
            className="w-full h-full bg-cover bg-center relative"
            style={{ 
              backgroundImage: `url(${slides[currentSlide].image})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex flex-col justify-center items-start container mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl font-bold text-white mb-4"
              >
                {slides[currentSlide].title}
              </motion.h2>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-2xl font-medium text-white mb-6"
              >
                {slides[currentSlide].subtitle}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-lg text-gray-200 mb-8 max-w-2xl"
              >
                {slides[currentSlide].description}
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-colors"
              >
                {slides[currentSlide].buttonText}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 p-4 rounded-full text-white transition-colors z-10"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 p-4 rounded-full text-white transition-colors z-10"
      >
        <FaChevronRight size={24} />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? 'bg-white scale-100' : 'bg-white/50 scale-75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MainCarousel; 