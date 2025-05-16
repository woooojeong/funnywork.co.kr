export default function CEOPage() {
  return (
    <div className="pt-16 container mx-auto px-4 text-white">
      <h1 className="text-3xl font-bold mb-8">CEO 인사말</h1>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="aspect-[3/4] bg-navy-600 rounded-lg flex items-center justify-center">
              {/* CEO 이미지 추가 예정 */}
              <span className="text-gray-400">CEO 이미지</span>
            </div>
          </div>
          <div className="md:w-2/3 space-y-6">
            <p className="text-lg leading-relaxed">
              안녕하십니까, 퍼니웍 대표이사 입니다.
            </p>
            <p className="leading-relaxed">
              퍼니웍은 고객의 디지털 혁신을 선도하는 IT 서비스 기업으로서,
              최고의 기술력과 전문성을 바탕으로 고객의 비즈니스 성공을 위해 
              끊임없이 노력하고 있습니다.
            </p>
            <p className="leading-relaxed">
              앞으로도 지속적인 혁신과 도전을 통해 고객과 함께 성장하는 
              신뢰받는 파트너가 되도록 하겠습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 