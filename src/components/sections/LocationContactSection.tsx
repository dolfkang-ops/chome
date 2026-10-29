import React, { useState } from 'react';
import { campingConfig } from '../../config/campingConfig';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Copy, 
  Check, 
  CloudSun, 
  Wind, 
  Droplet, 
  Compass, 
  ExternalLink,
  Car
} from 'lucide-react';

export const LocationContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { info } = campingConfig;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(info.address.road);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-24 bg-white text-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-forest-700 bg-forest-100 px-3 py-1 rounded-full">
            LOCATION & CONTACT
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            오시는 길 & 이용 문의
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            서울 강남 기준 1시간 10분, 북한강의 수려한 드라이브 코스를 따라 편안하게 오실 수 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* 좌측: 지도 그래픽 및 내비게이션 앱 바로가기 */}
          <div className="lg:col-span-7 bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
            {/* 지도 프리뷰 (실제 지도 앱 링크 연동형) */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-stone-300 shadow-inner group">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop"
                alt="위치 지도 그래픽"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
              />
              <div className="absolute inset-0 bg-stone-900/40 flex flex-col items-center justify-center text-white text-center p-4">
                <div className="w-14 h-14 rounded-full bg-forest-600/90 text-white flex items-center justify-center shadow-lg mb-3 animate-bounce">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold">{info.name}</h3>
                <p className="text-xs sm:text-sm text-stone-200 mt-1">{info.address.road}</p>
                <div className="mt-4 flex gap-2">
                  <a
                    href={`https://map.naver.com/v5/search/${encodeURIComponent(info.name)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg shadow flex items-center gap-1"
                  >
                    <span>네이버 지도</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={`https://map.kakao.com/link/search/${encodeURIComponent(info.name)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 bg-amber-400 hover:bg-amber-300 text-stone-900 text-xs font-bold rounded-lg shadow flex items-center gap-1"
                  >
                    <span>카카오맵</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={`https://tmap.life/search?q=${encodeURIComponent(info.name)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-lg shadow flex items-center gap-1"
                  >
                    <span>티맵(T-map)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* 주소 복사 바 */}
            <div className="bg-white p-4 rounded-2xl border border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="space-y-0.5">
                <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider block">
                  도로명 주소 (내비게이션 검색용)
                </span>
                <span className="text-sm font-bold text-stone-800">{info.address.road}</span>
                <span className="text-xs text-stone-500 block">지번: {info.address.jibun}</span>
              </div>
              <button
                onClick={handleCopyAddress}
                className="w-full sm:w-auto px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold rounded-xl transition flex items-center justify-center gap-1.5 flex-shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>복사 완료!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>주소 복사</span>
                  </>
                )}
              </button>
            </div>

            {/* 상세 교통 안내 */}
            <div className="space-y-3 text-xs sm:text-sm text-stone-600 bg-white p-5 rounded-2xl border border-stone-200">
              <h4 className="font-bold text-stone-900 flex items-center gap-2">
                <Car className="w-4 h-4 text-forest-600" />
                자가용 이용 시 오시는 길
              </h4>
              <p className="leading-relaxed">
                {info.address.directions}
              </p>
              <div className="p-3 bg-amber-50 rounded-xl text-amber-900 text-xs leading-relaxed">
                ⚠️ 주말 및 공휴일 오전 11시 ~ 오후 2시는 강촌IC 인근 정체가 발생할 수 있으니 우회국도(경춘국도 46호선) 이용을 권장합니다.
              </div>
            </div>
          </div>

          {/* 우측: 캠핑 현지 날씨 위젯 & 고객 문의 센터 */}
          <div className="lg:col-span-5 space-y-6">
            {/* 캠핑 필수: 현장 실시간 날씨 정보 */}
            <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-stone-900 text-white p-6 rounded-3xl shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-blue-700/60">
                <div className="flex items-center gap-2">
                  <CloudSun className="w-5 h-5 text-amber-300" />
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-200">
                    캠핑장 실시간 기상 안내
                  </span>
                </div>
                <span className="text-[11px] text-blue-300">강원 춘천 남산면</span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="text-3xl sm:text-4xl font-black">21°C</div>
                  <div className="text-xs text-blue-200 mt-1">맑음 • 야외 캠핑 최적</div>
                </div>
                <div className="text-right space-y-1 text-xs text-blue-200">
                  <div className="flex items-center justify-end gap-1.5">
                    <Wind className="w-3.5 h-3.5 text-cyan-300" />
                    <span>바람: 1.2 m/s (미풍)</span>
                  </div>
                  <div className="flex items-center justify-end gap-1.5">
                    <Droplet className="w-3.5 h-3.5 text-blue-300" />
                    <span>습도: 48% • 강수 0%</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-blue-800 text-[11px] text-blue-200/80">
                ※ 풍속 7m/s 이상 시 텐트 스트링 보강 팩다운 필수 (관리동에서 30cm 단조팩 지원)
              </div>
            </div>

            {/* 상담 문의 카드 */}
            <div className="bg-stone-50 rounded-3xl p-6 border border-stone-200 space-y-4">
              <h3 className="text-lg font-bold text-stone-900">캠핑장 직통 전화 & 상담</h3>
              
              <div className="space-y-3">
                <a
                  href={`tel:${info.phone.split('/')[0].trim()}`}
                  className="flex items-center justify-between p-4 bg-white rounded-2xl border border-stone-200 hover:border-forest-500 hover:shadow-md transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest-700 flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-stone-500 font-medium">관리실 직통 전화</div>
                      <div className="text-base font-bold text-stone-900">{info.phone.split('/')[0].trim()}</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-forest-600 bg-forest-50 px-2.5 py-1 rounded-lg">
                    전화걸기
                  </span>
                </a>

                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-900 leading-relaxed">
                  <strong>땡큐캠핑 예약 변경 / 취소 문의:</strong><br />
                  땡큐캠핑 어플리케이션 내 <strong>[마이페이지 &gt; 예약내역]</strong>에서 24시간 간편 취소 및 부분 환불 처리가 가능합니다.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
