import { Link } from 'react-router-dom';

const businessCards = [
  {
    title: 'ITO사업',
    description: '기업의 IT 인프라 구축부터 운영까지 토탈 IT 아웃소싱 서비스를 제공합니다.',
    image: '/images/ito-business.jpg',
    link: '/reference'
  },
  {
    title: 'AI',
    description: '최신 AI 기술을 활용한 맞춤형 솔루션으로 비즈니스 혁신을 지원합니다.',
    image: '/images/ai-business.jpg',
    link: '/reference'
  }
];

const BusinessSection = () => {
  return (
    <section className="py-20 bg-navy-700">
      <div className="container mx-auto px-4 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          사업분야
        </h2>
        <div className="flex flex-col space-y-8">
          {businessCards.map((card, index) => (
            <div
              key={index}
              className="bg-navy-600 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 w-full"
            >
              <div className="relative h-[400px]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-gray-300 mb-6 text-lg">{card.description}</p>
                <a
                  href={card.link}
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors"
                >
                  자세히 보기
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSection; 