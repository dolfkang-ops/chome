import React from 'react';
import { campingConfig } from '../../config/campingConfig';
import { 
  Tent, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  ExternalLink,
  ChevronRight,
  Heart
} from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenApiConfig: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenApiConfig }) => {
  const { info } = campingConfig;

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 상단 4단 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          {/* 1. 캠핑장 소개 & 땡큐캠핑 인증 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-forest-600 flex items-center justify-center text-white">
                <Tent className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">{info.name}</h3>
                <p className="text-xs text-stone-400">{info.englishName}</p>
              </div>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed">
              {info.subSlogan}
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 bg-stone-800/90 border border-stone-700/60 px-3 py-2 rounded-lg text-xs text-stone-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">땡큐캠핑(ThankQ) 공식 제휴</div>
                  <div className="text-[11px] text-stone-400">실시간 안전 예약 및 취소보장</div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. 고객센터 & 운영시간 */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">고객센터 안내</h4>
            <div className="text-2xl font-bold text-emerald-400">
              {info.phone.split('/')[0].trim()}
            </div>
            <p className="text-xs text-stone-400">
              상담시간: 매일 09:00 ~ 19:00 (점심시간 12:00 ~ 13:00)
            </p>
            <div className="space-y-1.5 text-xs text-stone-400 pt-2">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-forest-400" />
                <span>체크인 {info.checkInOut.checkIn} / 체크아웃 {info.checkInOut.checkOut}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>매너타임 {info.checkInOut.mannerTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-stone-400" />
                <span>{info.email}</span>
              </div>
            </div>
          </div>

          {/* 3. 빠른 링크 */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">빠른 메뉴</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={onOpenBooking} 
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>땡큐캠핑 실시간 예약</span>
                </button>
              </li>
              <li>
                <a href="#zones" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
                  <span>사이트 배치도 및 객실 요금</span>
                </a>
              </li>
              <li>
                <a href="#policy" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
                  <span>이용수칙</span>
                </a>
              </li>
              <li>
                <a href="#attractions" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
                  <span>인근 관광지 및 장보기 마트</span>
                </a>
              </li>
              <li>
                <button 
                  onClick={onOpenApiConfig}
                  className="text-stone-400 hover:text-amber-300 transition-colors flex items-center gap-1.5 text-xs pt-1"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" />
                  <span>땡큐캠핑 API 연동 관리자</span>
                </button>
              </li>
            </ul>
          </div>

          {/* 4. 오시는 길 약도 요약 */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">위치 정보</h4>
            <div className="flex items-start gap-2 text-xs text-stone-400 leading-relaxed">
              <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-stone-300 font-medium">{info.address.road}</p>
                <p className="text-stone-500 mt-1">지번: {info.address.jibun}</p>
                <p className="text-stone-400 mt-2 bg-stone-800 p-2 rounded">
                  {info.address.directions}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 사업자 정보 및 법적 고지 */}
        <div className="pt-8 text-xs text-stone-500 space-y-3">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>상호명: {info.name}</span>
            <span>대표자: {info.businessInfo.ceo}</span>
            <span>사업자등록번호: {info.businessInfo.businessNumber}</span>
            <span>관광사업자 등록번호: {info.businessInfo.tourismRegistrationNumber}</span>
            <span>보험가입: {info.businessInfo.insuranceInfo}</span>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-800/80">
            <p className="text-stone-400 text-xs">
              © 2026 {info.name}. All rights reserved. Powered by <span className="text-emerald-400 font-semibold">ThankQ Camping Partner API</span>
            </p>
            <div className="flex items-center gap-4 text-xs text-stone-400">
              <a href="#policy" className="hover:text-stone-300">이용약관</a>
              <span>•</span>
              <a href="#policy" className="hover:text-stone-300">개인정보처리방침</a>
              <span>•</span>
              <a 
                href={info.tqCamping.bookingUrl} 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-emerald-300 inline-flex items-center gap-1 text-emerald-400"
              >
                땡큐캠핑 예약페이지 <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
