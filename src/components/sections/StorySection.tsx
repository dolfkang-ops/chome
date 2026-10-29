import React from 'react';
import { campingConfig } from '../../config/campingConfig';
import { Trees, Droplets, ShieldCheck, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';

export const StorySection: React.FC = () => {
  const points = [
    {
      icon: Trees,
      title: "수령 40년 잣나무 군락지",
      desc: "피톤치드가 뿜어져 나오는 울창한 자연림 속에서 머무는 것만으로도 도심의 피로가 씻겨 내려갑니다."
    },
    {
      icon: Droplets,
      title: "사계절 맑은 1급수 계곡",
      desc: "캠핑장 부지와 바로 연결된 완경사 계곡은 여름철 아이들의 안전한 물놀이장이자 시원한 휴식처입니다."
    },
    {
      icon: ShieldCheck,
      title: "호텔급 위생 & 24시간 온수",
      desc: "매일 수시 청결 소독을 진행하며, 개별 부스 샤워장과 비데, 파우더룸을 갖춰 여성 캠퍼도 안심할 수 있습니다."
    },
    {
      icon: HeartHandshake,
      title: "땡큐캠핑 공인 파트너십",
      desc: "땡큐캠핑 표준 환불 보장 규정을 준수하며, 투명하고 정직한 운영으로 다시 찾고 싶은 캠핑장을 만듭니다."
    }
  ];

  return (
    <section id="story" className="py-24 bg-stone-50 text-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-forest-600 bg-forest-100 px-3 py-1 rounded-full">
            ABOUT OUR CAMPSITE
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            자연이 주는 가장 깨끗한 선물, <br className="hidden sm:inline" />
            <span className="text-forest-600">{campingConfig.info.name}</span>에서 시작됩니다
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            우리는 텐트를 치는 행위를 넘어, 자연과 온전히 교감하는 쉼의 공간을 만듭니다.
            자연을 훼손하지 않는 친환경 캠핑과 머무는 동안의 최고의 쾌적함을 약속드립니다.
          </p>
        </div>

        {/* 2열 레이아웃: 이미지 콜라주 & 매력 포인트 리스트 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* 이미지 영역 */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=1200&auto=format&fit=crop"
                alt="포레스트힐 전경"
                className="w-full h-[460px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="bg-emerald-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Eco-friendly
                </span>
                <h3 className="text-xl font-bold mt-2">사계절이 아름다운 잣나무 숲속 야영장</h3>
                <p className="text-xs sm:text-sm text-stone-200 mt-1">
                  봄의 벚꽃, 여름의 청정 계곡, 가을의 잣나무 단풍, 겨울의 은빛 설경
                </p>
              </div>
            </div>

            {/* 떠있는 플로팅 배지 */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white p-4 rounded-2xl shadow-xl border border-stone-100 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-forest-100 text-forest-700 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-stone-500 font-medium">캠퍼 만족도 평점</div>
                <div className="text-xl font-black text-stone-900 flex items-center gap-1">
                  4.9 <span className="text-xs text-amber-500 font-semibold">★★★★★</span>
                </div>
                <div className="text-[11px] text-stone-400">땡큐캠핑 인증 리뷰 기준</div>
              </div>
            </div>
          </div>

          {/* 포인트 카드 그리드 */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((pt, i) => {
                const IconComponent = pt.icon;
                return (
                  <div 
                    key={i} 
                    className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-sm hover:shadow-md transition group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-forest-50 text-forest-600 flex items-center justify-center mb-4 group-hover:bg-forest-600 group-hover:text-white transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-stone-900 mb-2">{pt.title}</h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{pt.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span>
                <strong>야영장 책임배상보험 가입 및 지자체 정식 인가 등록</strong> 완료 시설로 온 가족이 안심하고 이용하실 수 있습니다.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
