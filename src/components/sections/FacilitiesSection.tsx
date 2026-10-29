import React from 'react';
import { campingConfig } from '../../config/campingConfig';
import { 
  Store, 
  Droplets, 
  Utensils, 
  Trees, 
  Flame, 
  Zap, 
  Clock, 
  CheckCircle2 
} from 'lucide-react';

interface FacilitiesSectionProps {
  onPreviewImage: (imageUrl: string, title: string) => void;
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({ onPreviewImage }) => {
  const iconMap: Record<string, any> = {
    Store,
    Droplets,
    Utensils,
    Trees,
    Flame,
    Zap
  };

  return (
    <section id="facilities" className="py-24 bg-white text-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-forest-700 bg-forest-100 px-3 py-1 rounded-full">
            FACILITIES & AMENITIES
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            불편함 없는 완벽한 부대시설
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            자연 속에서도 집처럼 편리하고 청결한 환경을 제공하기 위해 세심하게 준비했습니다.
          </p>
        </div>

        {/* 부대시설 카드 6선 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campingConfig.facilities.map((fac) => {
            const IconComponent = iconMap[fac.iconName] || Store;
            return (
              <div
                key={fac.id}
                className="bg-stone-50 rounded-3xl overflow-hidden border border-stone-200/80 hover:shadow-lg transition-all duration-300 flex flex-col group"
              >
                {/* 이미지 영역 */}
                <div 
                  className="relative h-48 overflow-hidden cursor-pointer"
                  onClick={() => onPreviewImage(fac.imageUrl, fac.name)}
                >
                  <img
                    src={fac.imageUrl}
                    alt={fac.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-stone-800 text-xs font-semibold px-2.5 py-1 rounded-lg shadow-sm flex items-center gap-1.5">
                    <IconComponent className="w-3.5 h-3.5 text-forest-600" />
                    <span>{fac.category}</span>
                  </div>
                </div>

                {/* 텍스트 영역 */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 mb-1 group-hover:text-forest-600 transition-colors">
                      {fac.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-3">
                      <Clock className="w-3.5 h-3.5 text-forest-600" />
                      <span>{fac.operatingHours}</span>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {fac.description}
                    </p>
                  </div>

                  {/* 주요 특징 리스트 */}
                  <div className="pt-3 border-t border-stone-200/60 space-y-1.5">
                    {fac.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
