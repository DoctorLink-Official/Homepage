"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Client-only component to prevent hydration mismatch
const ClientOnly = ({ children }: { children: React.ReactNode }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const basePath = process.env.BASE_PATH || '';

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      {/* <div className="channel-gradient-2 text-white py-3 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className="text-sm font-medium">
            🩺 병원 마케팅, 정말 효과 있을까? <span className="font-bold">2025 의료 마케팅 성공사례 리포트 다운받기</span>
          </p>
        </div>
      </div> */}

      {/* Header/Navigation */}
      <header className="w-full px-6 py-4 navbar-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <Image
                src={`${basePath}/assets/logo.png`}
                alt="닥터링크 로고"
                width={120}
                height={32}
                className="h-8 w-auto"
                priority
                unoptimized
              />
            </div>
            <nav className="hidden lg:flex space-x-8">
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium py-2 px-1 border-b-2 border-transparent hover:border-blue-600"
              >
                서비스소개
              </a>
              {/* <a href="#ai-solutions" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium py-2 px-1 border-b-2 border-transparent hover:border-blue-600">
                AI 솔루션 <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full ml-1 animate-pulse">New</span>
              </a> */}
              <a
                href="#pricing"
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium py-2 px-1 border-b-2 border-transparent hover:border-blue-600"
              >
                가격안내
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium py-2 px-1 border-b-2 border-transparent hover:border-blue-600"
              >
                고객사례
              </a>
              <a
                href="#faq"
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium py-2 px-1 border-b-2 border-transparent hover:border-blue-600"
              >
                리소스
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium py-2 px-1 border-b-2 border-transparent hover:border-blue-600"
              >
                지원
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            {/* <button className="text-gray-700 hover:text-blue-600 transition-colors font-medium">로그인</button> */}
            <button className="channel-button channel-gradient-blue text-white px-6 py-3 rounded-xl font-semibold shadow-lg">
              무료로 시작하기
            </button>
            {/* Mobile menu button */}
            <button
              className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100">
              <nav className="px-6 py-4 space-y-4">
                <a
                  href="#services"
                  onClick={closeMobileMenu}
                  className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                >
                  서비스소개
                </a>
                <a
                  href="#ai-solutions"
                  onClick={closeMobileMenu}
                  className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                >
                  AI 솔루션{" "}
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full ml-1">
                    New
                  </span>
                </a>
                <a
                  href="#pricing"
                  onClick={closeMobileMenu}
                  className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                >
                  가격안내
                </a>
                <a
                  href="#testimonials"
                  onClick={closeMobileMenu}
                  className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                >
                  고객사례
                </a>
                <a
                  href="#faq"
                  onClick={closeMobileMenu}
                  className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                >
                  리소스
                </a>
                <a
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                >
                  지원
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="services"
        className="channel-section px-6 py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            잘되는 검진병원을 만들어 주는
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="text-gradient">3 in 1 통합예약</span> 마케팅 서비스
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-4xl mx-auto leading-relaxed font-medium">
            매일 매일 검진예약이 자동 접수 됩니다.
          </p>
          <p className="text-lg text-gray-500 mb-12">
            건강검진 결과에서 예약까지 한번에, 국가검진 필수서비스
          </p>

          <button className="channel-button channel-gradient-blue text-white px-12 py-6 rounded-2xl font-bold text-xl mb-20 shadow-2xl">
            서비스 신청하기
          </button>

          {/* Main Services Preview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="channel-card glass-card rounded-3xl p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full -mr-10 -mt-10"></div>
              <div className="feature-icon w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white text-2xl feature-emoji">📞</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                예약전용 ARS
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                24시간 자동 검진예약 접수
              </p>
            </div>

            <div className="channel-card glass-card rounded-3xl p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full -mr-10 -mt-10"></div>
              <div className="feature-icon w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white text-2xl feature-emoji">📱</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                모바일 예약
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                고객이 직접 실시간 검진예약
              </p>
            </div>

            <div className="channel-card glass-card rounded-3xl p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-full -mr-10 -mt-10"></div>
              <div className="feature-icon w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white text-2xl feature-emoji">✉️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                우편 결과지
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                자동 인쇄·제작·발송
              </p>
            </div>

            <div className="channel-card glass-card rounded-3xl p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full -mr-10 -mt-10"></div>
              <div className="feature-icon w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white text-2xl feature-emoji">🔒</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                모바일 등기
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                카카오페이 인증 검진결과
              </p>
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold mt-2 inline-block">
                업계 최초
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="channel-section px-6 py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            전국 계약처 현황
          </h3>
          <p className="text-xl text-gray-600 mb-16">
            <span className="text-gradient font-bold text-3xl">350여 곳</span>의
            검진기관에서 신뢰하는 서비스
          </p>

          {/* Animated Partners Logos */}
          <ClientOnly>
            <div className="relative overflow-hidden">
              <div className="flex space-x-8 animate-scroll-logos">
                {[
                  "서울아산병원",
                  "삼성서울병원",
                  "강남세브란스",
                  "분당서울대병원",
                  "서울성모병원",
                  "연세의료원",
                  "고려대의료원",
                  "한양대병원",
                  "이대목동병원",
                  "경희대병원",
                  "서울아산병원",
                  "삼성서울병원",
                  "강남세브란스",
                  "분당서울대병원",
                  "서울성모병원",
                  "연세의료원",
                  "고려대의료원",
                  "한양대병원",
                  "이대목동병원",
                  "경희대병원",
                ].map((hospital, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex items-center justify-center"
                  >
                    <div className="w-32 h-20 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center mx-4 channel-card hover:shadow-xl transition-all duration-300">
                      <span className="text-gray-700 font-bold text-xs text-center px-2">
                        {hospital}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ClientOnly>

          {/* Second Row - Reverse Direction */}
          <ClientOnly>
            <div className="relative overflow-hidden mt-8">
              <div className="flex space-x-8 animate-scroll-logos-reverse">
                {[
                  "부산대병원",
                  "경북대병원",
                  "전남대병원",
                  "충남대병원",
                  "제주대병원",
                  "강동성심병원",
                  "을지병원",
                  "가톨릭대병원",
                  "원주세브란스",
                  "인하대병원",
                  "부산대병원",
                  "경북대병원",
                  "전남대병원",
                  "충남대병원",
                  "제주대병원",
                  "강동성심병원",
                  "을지병원",
                  "가톨릭대병원",
                  "원주세브란스",
                  "인하대병원",
                ].map((hospital, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex items-center justify-center"
                  >
                    <div className="w-32 h-20 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center mx-4 channel-card hover:shadow-xl transition-all duration-300">
                      <span className="text-gray-700 font-bold text-xs text-center px-2">
                        {hospital}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ClientOnly>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section
        id="testimonials"
        className="channel-section px-6 py-24 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          {/* Main Testimonial Carousel */}
          <div className="channel-gradient-2 rounded-3xl p-16 text-white text-center relative overflow-hidden mb-16 shadow-2xl">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full"></div>
              <div className="absolute top-1/2 right-20 w-16 h-16 bg-white/10 rounded-full"></div>
            </div>
            <div className="relative z-10 testimonial-slide">
              <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                &ldquo;닥터링크 서비스는 국가검진을 시행하는 의원들을
                <br className="hidden md:block" /> 단순한 우편업무에서 해방시켜
                주는 기다리던 서비스였습니다.&rdquo;
              </h3>
              <p className="text-blue-100 mb-8 leading-relaxed text-lg">
                특히나 바쁜 검진시즌에 크게 도움이 될 것 같습니다. 사용하면서
                많은 피드백도 전달할 예정입니다.
              </p>
              <div className="flex items-center justify-center space-x-6 testimonial-author">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white text-2xl">👨‍⚕️</span>
                </div>
                <div className="text-left">
                  <p className="font-bold text-lg">분당의료원</p>
                  <p className="text-blue-100 font-medium">원장님</p>
                </div>
              </div>
            </div>
          </div>

          {/* How to Use Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">이용 방법</h2>
            <p className="text-xl text-gray-600 mb-12">
              4단계로 간단하게 시작하세요
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="channel-card glass-card rounded-2xl p-8 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white text-2xl">1️⃣</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                전용 프로그램 설치
              </h3>
              <p className="text-gray-600 leading-relaxed">
                홈페이지에서 전용프로그램을 다운로드하고 설치
              </p>
            </div>

            <div className="channel-card glass-card rounded-2xl p-8 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white text-2xl">2️⃣</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                검진프로그램 결과지 인쇄
              </h3>
              <p className="text-gray-600 leading-relaxed">
                기존과 동일하게 인쇄, 프린터만 닥터링크 전용프린터로 선택
              </p>
            </div>

            <div className="channel-card glass-card rounded-2xl p-8 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white text-2xl">3️⃣</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                우편·모바일·이메일 발송
              </h3>
              <p className="text-gray-600 leading-relaxed">
                자동화 시스템에서 자동 출력·봉입되어 수검자에게 발송
              </p>
            </div>

            <div className="channel-card glass-card rounded-2xl p-8 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white text-2xl">4️⃣</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                검진예약 및 접수
              </h3>
              <p className="text-gray-600 leading-relaxed">
                24시간 자동 검진예약 접수로 매출 증가
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              원장님들께서 가장 많은 문의를 주신 내용들
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                닥터링크 서비스는 어떻게 사용할 수 있나요?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                홈페이지 상단 <strong>&lsquo;서비스 신청&rsquo;</strong> 메뉴를
                클릭하셔서 가입절차를 완료하시고, 전용프로그램 다운/설치 및
                로그인후에 의사서명을 등록합니다. 이제 건강검진 프로그램에서
                결과지를 인쇄하시면 우편·모바일·이메일로 검진 결과지가
                수검자에게 발송됩니다.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                건강검진 프로그램에서 어떻게 인쇄하면 자동 발송 되나요?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                기존에 원내에서 검진결과를 출력하시는 것과 동일하며, 다만
                인쇄창에서 프린터 설정을{" "}
                <strong>&lsquo;닥터링크 전용프린터&rsquo;</strong>로 선택하셔서
                인쇄 하시면{" "}
                <strong>&lsquo;우편 무인 자동화 시스템&rsquo;</strong>으로 전송,
                자동 출력·봉입되어 우체국에 접수되어 수검자에게 발송됩니다.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                검진결과지의 검진의 전자서명이 지원 되나요?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                의료법 제23조 제1항의 <strong>&ldquo;전자서명법&rdquo;</strong>
                에 따른 전자서명을 지원합니다. 본 전자서명은 카카오페이
                인증기반으로 제공해 드리는 대표적인 전자서명 서비스 입니다.{" "}
                <strong>
                  전자서명 기능은 고객센터(1644-0000)를 통해 별도 문의 및 요청
                </strong>{" "}
                부탁드립니다.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                데이터는 어떻게 안전하게 보호 받고 있나요?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>
                  데이터 보안을 위해 VPN(Virtual Private Network)을 사용
                </strong>
                하여 전용회선의 암호화된 규격으로 통신하며, 데이터 암호화,
                사용자 인증 및 사용자 억세스 권한 제한 등의 기능을 지원하여{" "}
                <strong>강력한 데이터 보안을 유지</strong>합니다.
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-600">
                  ※ VPN(Virtual Private Network)은 암호화된 규격의 인터넷
                  네트워크를 이용하여 특정 그룹만 사용 가능한 네트워크를 만드는
                  가상 사설망 기술입니다. 인증과 암호화, 터널링을 통하여 VPN
                  서버와 장치간의 암호화된 연결을 형성하여 데이터가 이동하는
                  동안 데이터를 암호화함으로써 해커가 중간에 데이터 패킷을
                  가로채고 수정하는 것을 방지함으로써 보안 및 개인정보를
                  보호합니다.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                스마트 바로예약 서비스는 어떤 서비스 인가요?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                국가검진을 시행하는 검진기관들의 마케팅에 대한 시간과 비용
                부담을 최소화,{" "}
                <strong>
                  검진예약 증가 및 매출 향상을 위한 3 in 1 통합 마케팅 서비스
                </strong>
                를 제공합니다. ① 예약전용 ARS번호 ② 모바일 예약 ③ 자동 CRM 예약
                ④ 국가검진검색 예약
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                어떻게 잘되는 검진병원이 되는지, 정말 검진예약이 늘어 날까요?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                스마트 바로예약은 3 in 1 통합 마케팅 서비스로{" "}
                <strong>휴일·통화중 없이 24시간 검진예약</strong>이 가능하며,
                기존 수진자 대상으로 <strong>자동으로 예약안내 마케팅</strong>을
                통해 재방문율을 향상, 네이버/구글 검색(예:용산국가검진)에
                &ldquo;우리동네 국가검진병원 검색&rdquo; 서비스를 우선 노출하여{" "}
                <strong>마케팅 채널을 확대</strong>, 검진기관의{" "}
                <strong>신규 및 기존고객 모두 늘어나게 됩니다</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">요금 안내</h2>
          <p className="text-xl text-gray-600 mb-16">
            더 쉽고, 더 빠르고, 간편하게
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">🏢</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                기본 운영비
              </h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                월 10,000원
              </div>
              <p className="text-sm text-gray-600 mb-6">
                (PC 사용 대수 제한없음)
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 text-center">
              <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">✉️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                결과 발송
              </h3>
              <div className="text-2xl font-bold text-green-600 mb-2">
                우편·모바일·이메일 발송
              </div>
              <p className="text-sm text-gray-600 mb-6">
                (신청페이지 비용 항목 참고)
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 text-center relative">
              <div className="absolute -top-3 right-8">
                <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full font-bold">
                  무료
                </span>
              </div>
              <div className="w-20 h-20 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                스마트 바로예약
              </h3>
              <div className="text-2xl font-bold text-purple-600 mb-2">
                3in1 통합 마케팅 서비스
              </div>
              <p className="text-sm text-gray-600 mb-6">
                (2024년 중순까지 별도요금 없음)
              </p>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              닥터링크 서비스 신청
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              검진결과 발송 및 스마트 바로예약까지, 잘되는 검진병원을 만들어
              주는 닥터링크 서비스
            </p>
            <ul className="text-sm text-gray-600 space-y-2 mb-6">
              <li>
                • 검진결과 발송 및 스마트 바로예약은{" "}
                <strong>서비스 신청후 바로 이용이 가능</strong> 합니다.
              </li>
              <li>
                • 서비스 신청완료 페이지에서 전용프로그램 및 이용가이드{" "}
                <strong>다운로드 링크를 제공</strong>
              </li>
              <li>
                • 스마트 바로예약은 관리자 페이지의 예약신청 메뉴에서{" "}
                <strong>&ldquo;ON&rdquo;으로 설정 필요</strong>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Service Benefits - AI Solutions */}
      <section id="ai-solutions" className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            우편·모바일·이메일 검진결과가
          </h2>
          <h3 className="text-3xl font-bold text-blue-600 mb-16">
            빠르고 안전하게 바로 발송 됩니다
          </h3>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="text-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                예약 전용 ARS, 예약안내 마케팅으로
                <br />
                <span className="text-blue-600">검진예약이 증가</span> 합니다
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      휴일·통화중 없이 24시간 검진예약
                    </h4>
                    <p className="text-gray-600">
                      예약전용 ARS로 언제든지 예약 접수가 가능합니다
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      자동으로 예약안내 마케팅
                    </h4>
                    <p className="text-gray-600">
                      기존 수진자 대상으로 자동 CRM 예약 안내
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      마케팅 채널 확대
                    </h4>
                    <p className="text-gray-600">
                      네이버/구글 검색에 우선 노출되어 신규 고객 유치
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-100 rounded-3xl p-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-center">
                  <div className="text-6xl mb-4">📈</div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    검진예약 증가
                  </h4>
                  <p className="text-gray-600">
                    3 in 1 통합 마케팅으로
                    <br />
                    신규 및 기존고객 모두 증가
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              3 in 1 통합 마케팅 서비스
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">📞</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">
                  예약전용 ARS번호
                </h4>
                <p className="text-sm text-gray-600">24시간 자동 예약 접수</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">📱</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">모바일 예약</h4>
                <p className="text-sm text-gray-600">실시간 검진 예약 시스템</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 text-2xl">🤖</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">자동 CRM 예약</h4>
                <p className="text-sm text-gray-600">자동 예약안내 마케팅</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 text-2xl">🔍</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">
                  국가검진검색 예약
                </h4>
                <p className="text-sm text-gray-600">지역주민 대상 검진 유치</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">
            더 쉽고, 더 빠르고, 간편하게
            <br />
            <span className="text-blue-600">닥터링크 서비스</span>를 시작하세요
          </h2>

          <div className="bg-gradient-to-br from-blue-50 to-purple-100 rounded-3xl p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  잘되는 검진병원을 만들어 주는
                  <br />
                  <span className="text-blue-600">
                    3 in 1 통합 마케팅 서비스
                  </span>
                </h3>
                <ul className="space-y-4 text-lg text-gray-700">
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>24시간 예약전용 ARS 번호 제공</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>우편 자동화 시스템으로 결과지 발송</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>모바일 등기로 검진결과 전송</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>자동 CRM 마케팅으로 재방문율 향상</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <Image
                      src={`${basePath}/assets/logo.png`}
                      alt="닥터링크 로고"
                      width={120}
                      height={32}
                      className="h-8 w-auto"
                      priority
                      unoptimized
                    />
                  </div>
                  <p className="text-gray-600 mb-6">
                    건강검진 결과에서 예약까지 한번에,
                    <br />
                    국가검진 필수서비스
                  </p>
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors text-lg w-full">
                    서비스 신청하기
                  </button>
                  <p className="text-sm text-gray-500 mt-4">
                    * 서비스 신청 후 바로 이용 가능
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="contact" className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📞</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                전화 문의
              </h4>
              <p className="text-2xl font-bold text-blue-600">1644-0000</p>
              <p className="text-sm text-gray-500">
                오전 11시 - 오후 6시
                <br />
                (점심시간: 오후 1시 - 2시)
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">✉️</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                이메일 문의
              </h4>
              <p className="text-lg text-blue-600">doctorlink.info@gmail.com</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🛠️</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">원격지원</h4>
              <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                원격지원 요청
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="border-gray-700 pt-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h5 className="font-semibold mb-4">CONTACT</h5>
                <div className="space-y-2 text-gray-400">
                  <p>본사 : 서울 서초구 효령로 431 2층, 강남탑내과의원</p>
                  <p>이메일 : doctorlink.info@gmail.com</p>
                  {/* <p>팩스 : 02-6008-4683</p> */}
                  <p className="text-2xl font-bold text-blue-400">1644-0000</p>
                  <p className="text-sm">
                    운영시간 | 오전 11시 - 오후 6시
                    <br />
                    (점심시간 | 오후 1시 - 오후 2시)
                  </p>
                </div>
              </div>
              <div>
                <ul className="space-y-2 text-gray-400 mt-8">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      이용약관
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      개인정보처리방침
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>(주) 닥터링크</p>
              <p>사업자등록번호 : 000-00-00000</p>
              <p>통신판매업신고번호 : 2025-서울강남-0000</p>
              <p className="mt-2">© 2025 DoctorLink Corp.</p>
            </div>
            {/* <div className="flex space-x-4">
              <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors">
                원격지원 요청
              </button>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
}
