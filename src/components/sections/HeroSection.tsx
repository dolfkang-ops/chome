import React, { useState, useEffect } from 'react';
import { campingConfig } from '../../config/campingConfig';
import { QuickBookingWidget } from '../layout/QuickBookingWidget';
import { 
  ChevronLeft, 
  ChevronRight, 
  CalendarCheck, 
  Sparkles, 
  ShieldCheck, 
  MapPin, 
  VolumeX, 
  Wifi, 
  Flame 
} from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: (zoneId?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = campingConfig.heroSlides;

  // 자동 슬라이드 (6초 간격)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleQuickSearch = (criteria: { checkIn: string; checkOut: string; zoneType: string; guests: number }) => {
    onOpenBooking(criteria.zoneType !== 'all' ? criteria.zoneType : undefined);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-24 pb-12 overflow-hidden bg-stone-950">
      {/* 백그라운드 슬라이드 이미지들 */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          } transform transition-transform duration-[6000ms]`}
        >
          <img
            src={slide.imageUrl}
            alt={slide.title}
            className="w-full h-full object-cover brightness-50"
          />
          {/* 어두운 그라데이션 오버레이 */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-black/60" />
        </div>
      ))}

      {/* 히어로 중앙 텍스트 콘텐츠 */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12 text-center text-white">
        {/* 제휴 뱃지 & 위치 */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs font-medium mb-6 text-emerald-300">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>땡큐캠핑(ThankQ) 공식 인증 제휴 캠핑파크</span>
          <span className="text-white/40">•</span>
          <span className="flex items-center gap-1 text-stone-200">
            <MapPin className="w-3.5 h-3.5 text-rose-400" /> 강원도 춘천 남산면
          </span>
        </div>

        {/* 메인 타이틀 & 슬로건 */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto font-sans">
          {slides[currentSlide].title}
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-xl text-stone-200 font-light max-w-2xl mx-auto leading-relaxed">
          {slides[currentSlide].subtitle}
        </p>

        {/* 핵심 셀링 포인트 4가지 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mt-8 text-xs sm:text-sm text-stone-200">
          <div className="bg-white/10 backdrop-blur-sm border border-white/15 px-3 py-2 rounded-xl flex items-center justify-center gap-2">
            <VolumeX className="w-4 h-4 text-emerald-300" />
            <span>22시 매너타임 엄격 관리</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/15 px-3 py-2 rounded-xl flex items-center justify-center gap-2">
            <Flame className="w-4 h-4 text-orange-400" />
            <span>개별 화로 & 전기 분전함</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/15 px-3 py-2 rounded-xl flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>24시간 온수 개별 샤워실</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/15 px-3 py-2 rounded-xl flex items-center justify-center gap-2">
            <Wifi className="w-4 h-4 text-blue-300" />
            <span>전 구역 기가 와이파이</span>
          </div>
        </div>

        {/* CTA 버튼 */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onOpenBooking()}
            className="px-8 py-3.5 rounded-full bg-forest-500 hover:bg-forest-600 text-white font-bold text-base shadow-xl shadow-forest-900/40 transition transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
          >
            <CalendarCheck className="w-5 h-5" />
            <span>땡큐캠핑 실시간 예약하기</span>
          </button>
          <a
            href="#zones"
            className="px-6 py-3.5 rounded-full bg-white/20 hover:bg-white/30 text-white font-semibold text-base backdrop-blur-md border border-white/30 transition"
          >
            사이트 구역 둘러보기
          </a>
        </div>
      </div>

      {/* 하단 퀵 예약 검색 위젯 */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mt-auto">
        <QuickBookingWidget onSearch={handleQuickSearch} />
      </div>

      {/* 슬라이더 컨트롤러 좌우 화살표 */}
      <div className="absolute inset-y-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none z-10 px-2 sm:px-6">
        <button
          onClick={handlePrev}
          className="pointer-events-auto p-2 sm:p-3 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-md border border-white/20 transition"
          aria-label="이전 슬라이드"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={handleNext}
          className="pointer-events-auto p-2 sm:p-3 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-md border border-white/20 transition"
          aria-label="다음 슬라이드"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* 슬라이더 인디케이터 도트 */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentSlide ? 'w-8 bg-emerald-400' : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`슬라이드 ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
