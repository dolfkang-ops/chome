import React, { useState } from 'react';
import { campingConfig } from '../../config/campingConfig';
import { 
  MapPin, 
  Car, 
  ExternalLink, 
  Sparkles, 
  Navigation, 
  Compass, 
  Lightbulb 
} from 'lucide-react';

interface AttractionsSectionProps {
  onPreviewImage: (imageUrl: string, title: string) => void;
}

export const AttractionsSection: React.FC<AttractionsSectionProps> = ({ onPreviewImage }) => {
  const [filter, setFilter] = useState<'all' | 'nature' | 'activity' | 'food' | 'mart'>('all');

  const filtered = filter === 'all' 
    ? campingConfig.attractions 
    : campingConfig.attractions.filter(a => a.category === filter);

  return (
    <section id="attractions" className="py-24 bg-camp-warm text-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-forest-700 bg-forest-100 px-3 py-1 rounded-full">
            LOCAL ATTRACTIONS & GUIDE
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            캠핑과 함께 즐기는 주변 명소 & 생활 편의
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            차량 20분 이내로 만나는 자연 관광지, 짜릿한 액티비티, 핫플레이스 카페와 신선한 장보기 마트까지 알차게 즐겨보세요.
          </p>

          {/* 카테고리 필터 버튼 */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {[
              { id: 'all', label: '전체 보기' },
              { id: 'nature', label: '자연 명소' },
              { id: 'activity', label: '레저 & 체험' },
              { id: 'food', label: '카페 & 맛집' },
              { id: 'mart', label: '마트 & 응급의료' },
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

        {/* 관광지 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* 이미지 영역 */}
              <div 
                className="relative h-52 overflow-hidden cursor-pointer"
                onClick={() => onPreviewImage(item.imageUrl, item.name)}
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />

                {/* 거리 배지 */}
                <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1">
                  <Car className="w-3.5 h-3.5 text-amber-400" />
                  <span>{item.distance}</span>
                </div>

                {/* 분류 배지 */}
                <div className="absolute top-3 right-3 bg-forest-600/90 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-lg">
                  {item.categoryLabel}
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-lg font-bold truncate">{item.name}</h3>
                </div>
              </div>

              {/* 본문 콘텐츠 */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start gap-1.5 text-xs text-stone-500">
                    <MapPin className="w-3.5 h-3.5 text-rose-500 flex-shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{item.address}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* 캠퍼를 위한 이용 꿀팁 */}
                <div className="p-3 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="leading-relaxed">
                    <strong className="font-semibold text-amber-950">캠퍼 추천 팁:</strong> {item.tips}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
