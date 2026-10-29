import React, { useState } from 'react';
import { campingConfig } from '../../config/campingConfig';
import { Map, Info, Compass, Layers, CheckCircle } from 'lucide-react';

interface SiteMapSectionProps {
  onSelectZone: (zoneId: string) => void;
}

export const SiteMapSection: React.FC<SiteMapSectionProps> = ({ onSelectZone }) => {
  const [activeZone, setActiveZone] = useState<string>('zone-a');

  const selectedZoneData = campingConfig.zones.find(z => z.id === activeZone) || campingConfig.zones[0];

  return (
    <section id="sitemap" className="py-20 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-3 py-1 rounded-full">
            CAMPING MAP & LAYOUT
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
            캠핑장 전체 배치도 & 구역 안내
          </h2>
          <p className="mt-3 text-stone-400 text-sm sm:text-base">
            원하시는 구역을 클릭하시면 구역별 위치 및 세부 사양, 잔여석 정보를 바로 확인하실 수 있습니다.
          </p>
        </div>

        {/* 인터랙티브 맵 컨테이너 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* 맵 그래픽 뷰 (SVG 기반 인터랙티브 조감도) */}
          <div className="lg:col-span-8 bg-stone-800 rounded-3xl p-4 sm:p-6 border border-stone-700 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-700/80">
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-300">
                <Compass className="w-4 h-4 text-emerald-400 animate-spin-slow" />
                <span>포레스트힐 입체 배치도 (북향)</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span> 데크존
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span> 파쇄석존
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-purple-500 inline-block"></span> 글램핑
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-blue-500 inline-block"></span> 카라반
                </span>
              </div>
            </div>

            {/* 시각화 SVG 맵 */}
            <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-stone-900 to-forest-950/80 rounded-2xl border border-stone-700 overflow-hidden flex items-center justify-center p-4">
              {/* 계곡 물결 배경 */}
              <div className="absolute top-0 left-0 right-0 h-14 bg-cyan-900/30 border-b border-cyan-500/30 flex items-center px-6">
                <span className="text-cyan-300 font-bold text-xs tracking-wider flex items-center gap-1">
                  🌊 맑은 청정 계곡 물놀이 구역 (수심 30~80cm)
                </span>
              </div>

              {/* 중앙 잔디 광장 및 관리동 */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-32 bg-stone-800/80 border border-stone-600 rounded-2xl flex flex-col items-center justify-center text-center p-2 shadow-inner">
                <span className="text-amber-400 font-bold text-xs">중앙 관리동 & 매점</span>
                <span className="text-[10px] text-stone-400 mt-1">샤워실 • 화장실 • 개수대</span>
                <span className="text-[9px] bg-stone-700 text-stone-300 px-2 py-0.5 rounded-full mt-1.5">
                  체크인 본부
                </span>
              </div>

              {/* A구역: 포레스트 데크 */}
              <button
                onClick={() => setActiveZone('zone-a')}
                className={`absolute top-20 left-8 sm:left-14 p-4 rounded-2xl border-2 transition-all duration-300 text-left ${
                  activeZone === 'zone-a'
                    ? 'bg-emerald-600/90 border-emerald-300 scale-105 shadow-xl shadow-emerald-500/20 ring-4 ring-emerald-500/20'
                    : 'bg-emerald-950/70 border-emerald-600/50 hover:bg-emerald-900/80'
                }`}
              >
                <div className="text-xs font-bold text-emerald-200">A구역 데크존</div>
                <div className="text-[11px] text-emerald-100">잣나무 숲속 사이트 (A1~A8)</div>
                <div className="mt-1 text-[10px] bg-emerald-500/30 text-emerald-300 px-1.5 py-0.5 rounded inline-block">
                  잔여 3석
                </div>
              </button>

              {/* B구역: 밸리 파쇄석 */}
              <button
                onClick={() => setActiveZone('zone-b')}
                className={`absolute top-20 right-8 sm:right-14 p-4 rounded-2xl border-2 transition-all duration-300 text-left ${
                  activeZone === 'zone-b'
                    ? 'bg-amber-600/90 border-amber-300 scale-105 shadow-xl shadow-amber-500/20 ring-4 ring-amber-500/20'
                    : 'bg-amber-950/70 border-amber-600/50 hover:bg-amber-900/80'
                }`}
              >
                <div className="text-xs font-bold text-amber-200">B구역 계곡 파쇄석</div>
                <div className="text-[11px] text-amber-100">계곡 바로 앞 오토캠핑 (B1~B12)</div>
                <div className="mt-1 text-[10px] bg-amber-500/30 text-amber-300 px-1.5 py-0.5 rounded inline-block">
                  잔여 5석
                </div>
              </button>

              {/* C구역: 글램핑 스위트 */}
              <button
                onClick={() => setActiveZone('zone-c')}
                className={`absolute bottom-8 left-8 sm:left-14 p-4 rounded-2xl border-2 transition-all duration-300 text-left ${
                  activeZone === 'zone-c'
                    ? 'bg-purple-600/90 border-purple-300 scale-105 shadow-xl shadow-purple-500/20 ring-4 ring-purple-500/20'
                    : 'bg-purple-950/70 border-purple-600/50 hover:bg-purple-900/80'
                }`}
              >
                <div className="text-xs font-bold text-purple-200">C구역 럭셔리 글램핑</div>
                <div className="text-[11px] text-purple-100">호텔식 개별 화장실 (C1~C5)</div>
                <div className="mt-1 text-[10px] bg-purple-500/30 text-purple-300 px-1.5 py-0.5 rounded inline-block">
                  잔여 2석
                </div>
              </button>

              {/* D구역: 카라반 존 */}
              <button
                onClick={() => setActiveZone('zone-d')}
                className={`absolute bottom-8 right-8 sm:right-14 p-4 rounded-2xl border-2 transition-all duration-300 text-left ${
                  activeZone === 'zone-d'
                    ? 'bg-blue-600/90 border-blue-300 scale-105 shadow-xl shadow-blue-500/20 ring-4 ring-blue-500/20'
                    : 'bg-blue-950/70 border-blue-600/50 hover:bg-blue-900/80'
                }`}
              >
                <div className="text-xs font-bold text-blue-200">D구역 감성 카라반</div>
                <div className="text-[11px] text-blue-100">루프탑 테라스 완비 (D1~D4)</div>
                <div className="mt-1 text-[10px] bg-blue-500/30 text-blue-300 px-1.5 py-0.5 rounded inline-block">
                  잔여 1석
                </div>
              </button>
            </div>
            <p className="text-xs text-stone-400 text-center mt-3">
              ※ 각 구역 박스를 클릭하시면 우측 패널에서 상세 스펙과 예약 가능한 잔여석을 조회할 수 있습니다.
            </p>
          </div>

          {/* 우측 선택된 구역 요약 카드 */}
          <div className="lg:col-span-4 bg-stone-800/90 rounded-3xl p-6 border border-stone-700 shadow-xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-stone-700">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                선택된 구역 정보
              </span>
              <span className="text-xs bg-stone-700 text-stone-200 px-2.5 py-0.5 rounded-full font-medium">
                {selectedZoneData.categoryLabel}
              </span>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-video relative">
              <img
                src={selectedZoneData.imageUrl}
                alt={selectedZoneData.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[11px] font-semibold px-2 py-0.5 rounded-md">
                땡큐캠핑 연동코드: {selectedZoneData.tqCode}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">{selectedZoneData.name}</h3>
              <p className="text-xs text-stone-400 mt-1">{selectedZoneData.tagline}</p>
            </div>

            <div className="space-y-2 text-xs text-stone-300 bg-stone-900/60 p-4 rounded-2xl border border-stone-700/60">
              <div className="flex justify-between py-1 border-b border-stone-800">
                <span className="text-stone-400">구역 크기</span>
                <span className="font-semibold text-white">{selectedZoneData.size}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-800">
                <span className="text-stone-400">바닥 형태</span>
                <span className="font-semibold text-white">{selectedZoneData.floorType}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-800">
                <span className="text-stone-400">기준 / 최대인원</span>
                <span className="font-semibold text-white">
                  기준 {selectedZoneData.capacity.standard}인 / 최대 {selectedZoneData.capacity.max}인
                </span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-stone-400">이용 요금</span>
                <span className="font-bold text-emerald-400">
                  {selectedZoneData.price.weekday.toLocaleString()}원 ~ (1박)
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onSelectZone(selectedZoneData.id)}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm shadow-lg shadow-emerald-900/40 transition flex items-center justify-center gap-2"
              >
                <span>이 구역 땡큐캠핑 실시간 예약</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
