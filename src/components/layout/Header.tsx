import React, { useState, useEffect } from 'react';
import { campingConfig } from '../../config/campingConfig';
import { 
  Tent, 
  Menu, 
  X, 
  PhoneCall, 
  CalendarCheck, 
  Sparkles, 
  SlidersHorizontal, 
  Compass, 
  ShieldCheck 
} from 'lucide-react';

interface HeaderProps {
  onOpenBooking: (zoneId?: string) => void;
  onOpenApiConfig: () => void;
  apiSyncedTime: string;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenBooking, 
  onOpenApiConfig,
  apiSyncedTime 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '캠핑장 소개', href: '#story' },
    { label: '사이트 안내', href: '#zones' },
    { label: '배치도', href: '#sitemap' },
    { label: '부대시설', href: '#facilities' },
    { label: '주변 관광지', href: '#attractions' },
    { label: '이용수칙', href: '#policy' },
    { label: '갤러리', href: '#gallery' },
    { label: '오시는 길', href: '#location' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* 땡큐캠핑 제휴 최상단 알림 띠 */}
      <div className="bg-forest-900 text-emerald-200 text-xs py-1.5 px-4 font-medium border-b border-forest-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full text-[11px] font-semibold border border-emerald-500/30">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              땡큐캠핑 공식 제휴점
            </span>
            <span className="hidden sm:inline text-forest-200">
              실시간 예약 및 땡큐캠핑 정책 API 연동 활성화 ({apiSyncedTime})
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={onOpenApiConfig}
              className="inline-flex items-center gap-1 text-[11px] text-amber-300 hover:text-amber-200 bg-amber-900/30 hover:bg-amber-900/50 px-2 py-0.5 rounded border border-amber-500/30 transition-colors"
              title="땡큐캠핑 API 및 캠핑장 메타정보 설정"
            >
              <SlidersHorizontal className="w-3 h-3" />
              <span>API 설정/동기화</span>
            </button>
            <a 
              href={`tel:${campingConfig.info.phone.split('/')[0].trim()}`} 
              className="hidden md:flex items-center gap-1 text-forest-300 hover:text-white"
            >
              <PhoneCall className="w-3 h-3" />
              <span>문의: {campingConfig.info.phone.split('/')[0].trim()}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 메인 내비게이션 바 */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 text-stone-900' 
          : 'bg-gradient-to-b from-stone-950/80 via-stone-950/40 to-transparent py-4 text-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* 브랜드 로고 */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-forest-600 flex items-center justify-center text-white shadow-lg shadow-forest-900/20 group-hover:bg-forest-500 transition-colors">
              <Tent className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight block leading-tight font-sans">
                {campingConfig.info.name}
              </span>
              <span className={`text-[10px] tracking-widest uppercase font-semibold ${
                isScrolled ? 'text-forest-700' : 'text-emerald-300'
              }`}>
                {campingConfig.info.englishName}
              </span>
            </div>
          </a>

          {/* 데스크톱 메뉴 */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-forest-500 ${
                  isScrolled ? 'text-stone-700' : 'text-stone-100 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* 우측 땡큐캠핑 예약 액션 */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-forest-600 hover:from-emerald-500 hover:to-forest-500 text-white font-semibold text-sm px-4 py-2.5 rounded-full shadow-lg shadow-emerald-700/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>땡큐캠핑 실시간 예약</span>
            </button>
          </div>

          {/* 모바일 햄버거 토글 */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg lg:hidden transition-colors ${
              isScrolled ? 'text-stone-800 hover:bg-stone-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* 모바일 드롭다운 메뉴 */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white text-stone-900 border-b border-stone-200 shadow-xl px-4 pt-3 pb-6 space-y-3">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-stone-100">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-stone-700 hover:bg-forest-50 hover:text-forest-700 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 bg-forest-600 hover:bg-forest-700 text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-md"
              >
                <CalendarCheck className="w-4 h-4" />
                땡큐캠핑 실시간 예약 바로가기
              </button>
              
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApiConfig();
                }}
                className="w-full py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                땡큐캠핑 API 및 연동 설정 관리
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
