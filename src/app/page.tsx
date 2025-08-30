export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <div className="text-xl font-bold text-orange-600">Tax Portfolio</div>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="hover:text-orange-600 transition-colors font-medium">홈</a>
              <a href="#about" className="hover:text-orange-600 transition-colors font-medium">소개</a>
              <a href="#services" className="hover:text-orange-600 transition-colors font-medium">서비스</a>
              <a href="#experience" className="hover:text-orange-600 transition-colors font-medium">경험</a>
              <a href="#contact" className="hover:text-orange-600 transition-colors font-medium">연락처</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="py-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              안녕하세요, <br />
              <span className="text-orange-600">세무 전문가</span>입니다
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              정확하고 신뢰할 수 있는 세무 서비스로 고객의 성공을 함께 만들어갑니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#experience" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                경험 보기
              </a>
              <a 
                href="#contact" 
                className="border-2 border-black hover:bg-black hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                상담 문의
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">소개</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-orange-600">세무 전문가로서의 여정</h3>
              <p className="text-gray-700 mb-4">
                10년 이상의 세무 실무 경험을 바탕으로 개인부터 법인까지 다양한 고객의 세무 업무를 
                성공적으로 처리해왔습니다. 복잡한 세법을 쉽게 설명하고 최적의 절세 방안을 제시합니다.
              </p>
              <p className="text-gray-700">
                국세청 출신의 풍부한 경험과 최신 세법 동향을 바탕으로 고객 맞춤형 세무 서비스를 
                제공하고 있습니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-600">
              <h4 className="text-xl font-bold mb-4 text-black">전문 분야</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• 법인세 신고 및 절세 컨설팅</li>
                <li>• 개인 종합소득세 신고</li>
                <li>• 부가가치세 신고 및 환급</li>
                <li>• 세무조사 대응 및 불복청구</li>
                <li>• 상속·증여세 신고</li>
                <li>• 기업 회계 및 세무 자문</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">자격증 & 서비스</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center bg-white p-6 rounded-lg shadow-lg border-t-4 border-orange-600">
              <h3 className="text-xl font-bold mb-4 text-black">자격증</h3>
              <div className="space-y-2">
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full inline-block m-1 text-sm">세무사</div>
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full inline-block m-1 text-sm">공인회계사</div>
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full inline-block m-1 text-sm">경영지도사</div>
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full inline-block m-1 text-sm">컴활 1급</div>
              </div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-lg border-t-4 border-black">
              <h3 className="text-xl font-bold mb-4 text-black">세무 서비스</h3>
              <div className="space-y-2">
                <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full inline-block m-1 text-sm">법인세 신고</div>
                <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full inline-block m-1 text-sm">종소세 신고</div>
                <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full inline-block m-1 text-sm">부가세 신고</div>
                <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full inline-block m-1 text-sm">상속증여세</div>
              </div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-lg border-t-4 border-orange-600">
              <h3 className="text-xl font-bold mb-4 text-black">컨설팅</h3>
              <div className="space-y-2">
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full inline-block m-1 text-sm">절세 컨설팅</div>
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full inline-block m-1 text-sm">세무조사 대응</div>
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full inline-block m-1 text-sm">회계 자문</div>
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full inline-block m-1 text-sm">기업 진단</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">주요 경험</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-orange-600">
              <div className="h-32 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <span className="text-white text-4xl">🏢</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-black">대기업 법인세 컨설팅</h3>
                <p className="text-gray-700 mb-4">
                  연매출 1000억 규모 제조업체의 법인세 신고 및 절세 방안 수립으로 30% 세액 절감 달성
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">법인세</span>
                  <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">절세컨설팅</span>
                </div>
                <div className="text-orange-600 font-semibold text-sm">2023년 완료</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-black">
              <div className="h-32 bg-gradient-to-br from-gray-600 to-black flex items-center justify-center">
                <span className="text-white text-4xl">⚖️</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-black">세무조사 대응</h3>
                <p className="text-gray-700 mb-4">
                  국세청 세무조사 대응으로 고객 추징세액 80% 감면 성공, 불복청구 승소
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">세무조사</span>
                  <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">불복청구</span>
                </div>
                <div className="text-orange-600 font-semibold text-sm">2022년 완료</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-orange-600">
              <div className="h-32 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <span className="text-white text-4xl">💰</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-black">상속세 절세 설계</h3>
                <p className="text-gray-700 mb-4">
                  고액 자산가 상속세 사전 설계를 통해 합법적 절세 방안 수립, 50억 절세 효과
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">상속세</span>
                  <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">증여설계</span>
                </div>
                <div className="text-orange-600 font-semibold text-sm">2021년 완료</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">연락처</h2>
          <p className="text-lg text-gray-700 mb-8">
            세무 상담이나 서비스 문의는 언제든 연락주세요!
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center bg-white p-6 rounded-lg shadow-lg border-t-4 border-orange-600">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-xl">📧</span>
              </div>
              <h3 className="font-bold mb-2 text-black">이메일</h3>
              <p className="text-gray-700">tax.expert@example.com</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-lg border-t-4 border-black">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black text-xl">📞</span>
              </div>
              <h3 className="font-bold mb-2 text-black">전화</h3>
              <p className="text-gray-700">02-1234-5678</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-lg border-t-4 border-orange-600">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-xl">🏢</span>
              </div>
              <h3 className="font-bold mb-2 text-black">사무실</h3>
              <p className="text-gray-700">서울시 강남구 테헤란로 123</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 세무 전문가 포트폴리오. All rights reserved.</p>
          <p className="text-sm text-gray-300 mt-2">정확하고 신뢰할 수 있는 세무 서비스</p>
        </div>
      </footer>
    </div>
  );
}

