import React, { useState } from 'react';
import { Camera, Eye, Image as ImageIcon, Sparkles } from 'lucide-react';

interface GallerySectionProps {
  onPreviewImage: (imageUrl: string, title: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onPreviewImage }) => {
  const [filter, setFilter] = useState<'all' | 'scenery' | 'stay' | 'campfire'>('all');

  const galleryImages = [
    {
      id: 1,
      title: "석양 무렵의 감성 캠프파이어",
      category: "campfire",
      categoryName: "불멍 & 힐링",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "피톤치드 가득한 잣나무 숲속 텐트 피칭",
      category: "stay",
      categoryName: "사이트 풍경",
      url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "프리미엄 럭셔리 글램핑 야경",
      category: "stay",
      categoryName: "글램핑 & 스테이",
      url: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "시원한 물소리가 흐르는 여름 계곡",
      category: "scenery",
      categoryName: "자연 풍경",
      url: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "밤하늘 쏟아지는 은하수와 별빛",
      category: "scenery",
      categoryName: "자연 풍경",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "가족과 함께하는 바비큐 그릴 파티",
      category: "campfire",
      categoryName: "불멍 & 요리",
      url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop"
    },
  ];

  const filtered = filter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-24 bg-white text-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-forest-700 bg-forest-100 px-3 py-1 rounded-full">
            PHOTO GALLERY
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            포레스트힐의 사계절 감성 갤러리
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            자연과 함께 숨 쉬는 캠핑장의 순간들을 담았습니다. 클릭하시면 큰 사진으로 감상하실 수 있습니다.
          </p>

          {/* 카테고리 필터 */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {[
              { id: 'all', label: '전체 사진' },
              { id: 'stay', label: '사이트 & 객실' },
              { id: 'scenery', label: '숲 & 계곡 풍경' },
              { id: 'campfire', label: '캠프파이어 & 감성' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  filter === tab.id
                    ? 'bg-forest-600 text-white shadow-md shadow-forest-800/20'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 갤러리 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => onPreviewImage(item.url, item.title)}
              className="relative h-72 rounded-3xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-stone-950/30 group-hover:bg-stone-950/60 transition-colors" />

              {/* 호버 오버레이 */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-end">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-white">
                  <span className="text-xs bg-forest-600/90 text-white px-2.5 py-1 rounded-md font-semibold mb-2 inline-block">
                    {item.categoryName}
                  </span>
                  <h4 className="text-base font-bold drop-shadow">{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 템플릿 이미지 교체 팁 배너 */}
        <div className="mt-12 p-4 bg-stone-50 border border-stone-200 rounded-2xl text-xs text-stone-500 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-4 h-4 text-forest-600 flex-shrink-0" />
            <span>
              <strong>향후 이미지 커스텀 안내:</strong> <code>src/config/campingConfig.ts</code> 파일의 <code>heroSlides</code>, <code>zones</code>, <code>facilities</code>에 실제 촬영한 고화질 캠핑장 사진 파일(또는 URL)을 대입하시면 사이트 전반에 즉시 반영됩니다.
            </span>
          </div>
          <span className="text-forest-700 font-semibold whitespace-nowrap hidden sm:inline">
            Template Ready ✓
          </span>
        </div>
      </div>
    </section>
  );
};
