import React, { useState } from 'react';
import { campingConfig, SiteZone } from '../../config/campingConfig';
import { 
  Users, 
  Maximize2, 
  Zap, 
  CalendarCheck, 
  Check, 
  Sparkles, 
  Info,
  Clock
} from 'lucide-react';

interface ZonesSectionProps {
  onOpenBooking: (zoneId?: string) => void;
  onPreviewImage: (imageUrl: string, title: string) => void;
}

export const ZonesSection: React.FC<ZonesSectionProps> = ({ 
  onOpenBooking,
  onPreviewImage 
}) => {
  const [filter, setFilter] = useState<'all' | 'deck' | 'autocamping' | 'glamping' | 'caravan'>('all');

  const filteredZones = filter === 'all' 
    ? campingConfig.zones 
    : campingConfig.zones.filter(z => z.category === filter);

  return (
    <section id="zones" className="py-24 bg-camp-warm text-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 타이틀 */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-forest-700 bg-forest-100 px-3 py-1 rounded-full">
            CAMPING SITES & STAY
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            자연을 품은 특별한 4가지 사이트
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            나무 그늘 데크부터 계곡 파쇄석, 풀옵션 글램핑, 이색 카라반까지 취향에 맞는 최고의 힐링 공간을 선택해보세요.
          </p>

          {/* 카테고리 필터 탭 */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {[
              { id: 'all', label: '전체 보기' },
              { id: 'deck', label: '숲속 데크 (A)' },
              { id: 'autocamping', label: '계곡 파쇄석 (B)' },
              { id: 'glamping', label: '럭셔리 글램핑 (C)' },
              { id: 'caravan', label: '감성 카라반 (D)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  filter === tab.id
                    ? 'bg-forest-600 text-white shadow-md shadow-forest-800/20'
                    : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 사이트 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredZones.map((zone) => (
            <div
              key={zone.id}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* 이미지 영역 */}
              <div 
                className="relative h-64 sm:h-72 overflow-hidden cursor-pointer group"
                onClick={() => onPreviewImage(zone.imageUrl, zone.name)}
              >
                <img
                  src={zone.imageUrl}
                  alt={zone.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-80" />

                {/* 뱃지들 */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="bg-forest-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    {zone.categoryLabel}
                  </span>
                  <span className="bg-amber-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full shadow flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    {zone.badge}
                  </span>
                </div>

                {/* 땡큐캠핑 연동 잔여석 배지 */}
                <div className="absolute top-4 right-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-emerald-400/50 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping"></span>
                  <span>땡큐캠핑 잔여 {zone.remainingSlots ?? 3}석</span>
                </div>

                {/* 이미지 하단 제목 오버레이 */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold">{zone.name}</h3>
                  <p className="text-xs sm:text-sm text-stone-200 mt-1 line-clamp-1">
                    {zone.tagline}
                  </p>
                </div>
              </div>

              {/* 본문 콘텐츠 */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {zone.description}
                </p>

                {/* 스펙 정보 4단 그리드 */}
                <div className="grid grid-cols-2 gap-3 text-xs bg-stone-50 p-4 rounded-2xl border border-stone-200/80">
                  <div className="flex items-center gap-2">
                    <Maximize2 className="w-4 h-4 text-forest-600 flex-shrink-0" />
                    <div>
                      <span className="text-stone-400 block text-[10px]">사이즈 / 바닥</span>
                      <span className="font-semibold text-stone-800">{zone.size}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-forest-600 flex-shrink-0" />
                    <div>
                      <span className="text-stone-400 block text-[10px]">수용 인원</span>
                      <span className="font-semibold text-stone-800">
                        기준 {zone.capacity.standard}인 (최대 {zone.capacity.max}인)
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-forest-600 flex-shrink-0" />
                    <div>
                      <span className="text-stone-400 block text-[10px]">전기 규격</span>
                      <span className="font-semibold text-stone-800">{zone.electricity}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-forest-600 flex-shrink-0" />
                    <div>
                      <span className="text-stone-400 block text-[10px]">입실 / 퇴실</span>
                      <span className="font-semibold text-stone-800">14:00 / 11:00</span>
                    </div>
                  </div>
                </div>

                {/* 제공 편의 태그들 */}
                <div>
                  <span className="text-xs font-semibold text-stone-500 block mb-2">제공 편의시설</span>
                  <div className="flex flex-wrap gap-1.5">
                    {zone.amenities.map((item, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 text-[11px] bg-stone-100 text-stone-700 px-2.5 py-1 rounded-lg border border-stone-200"
                      >
                        <Check className="w-3 h-3 text-emerald-600" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 요금표 & 예약 버튼 */}
                <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-[11px] text-stone-500">1박 이용요금 (부가세 포함)</div>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-2xl font-black text-forest-800">
                        {zone.price.weekday.toLocaleString()}
                        <span className="text-sm font-normal text-stone-600">원~</span>
                      </span>
                      <span className="text-xs text-stone-400">
                        (주말 {zone.price.weekend.toLocaleString()}원)
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenBooking(zone.id)}
                    className="w-full sm:w-auto px-6 py-3 bg-forest-600 hover:bg-forest-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-forest-800/20 transition flex items-center justify-center gap-2"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span>땡큐캠핑 예약하기</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
