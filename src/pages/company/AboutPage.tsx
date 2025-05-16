export default function AboutPage() {
  return (
    <div className="pt-16 container mx-auto px-4 text-white">
      <h1 className="text-3xl font-bold mb-8">회사소개</h1>
      <div className="space-y-12">
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-400">기업 소개</h2>
          <p className="leading-relaxed">
            퍼니웍은 고객의 성공을 위한 최고의 IT 파트너입니다.
            20년간의 경험과 전문성을 바탕으로 고객의 비즈니스 혁신을 지원합니다.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-400">비전</h2>
          <div className="bg-navy-600 p-6 rounded-lg">
            <p className="text-xl font-bold text-center">
              "디지털 혁신을 선도하는 글로벌 IT 서비스 리더"
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-400">핵심 가치</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-navy-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">혁신</h3>
              <p>끊임없는 도전과 혁신으로 새로운 가치를 창출합니다.</p>
            </div>
            <div className="bg-navy-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">전문성</h3>
              <p>최고의 기술력과 전문성으로 고객의 신뢰를 얻습니다.</p>
            </div>
            <div className="bg-navy-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">협력</h3>
              <p>고객과의 긴밀한 협력을 통해 함께 성장합니다.</p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-400">사업 영역</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-navy-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">IT 아웃소싱</h3>
              <p>전문적인 IT 서비스 운영 및 관리를 제공합니다.</p>
            </div>
            <div className="bg-navy-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">AI 솔루션</h3>
              <p>최신 AI 기술을 활용한 맞춤형 솔루션을 제공합니다.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 