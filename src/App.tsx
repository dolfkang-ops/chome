import React, { useState } from 'react';
import { campingConfig } from './config/campingConfig';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { StorySection } from './components/sections/StorySection';
import { SiteMapSection } from './components/sections/SiteMapSection';
import { ZonesSection } from './components/sections/ZonesSection';
import { FacilitiesSection } from './components/sections/FacilitiesSection';
import { ThankYouApiSyncBanner } from './components/sections/ThankYouApiSyncBanner';
import { PolicySection } from './components/sections/PolicySection';
import { AttractionsSection } from './components/sections/AttractionsSection';
import { GallerySection } from './components/sections/GallerySection';
import { NoticeFaqSection } from './components/sections/NoticeFaqSection';
import { LocationContactSection } from './components/sections/LocationContactSection';
import { BookingModal } from './components/modals/BookingModal';
import { ApiConfigModal } from './components/modals/ApiConfigModal';
import { ImagePreviewModal } from './components/modals/ImagePreviewModal';
import { CalendarCheck, PhoneCall, ChevronUp } from 'lucide-react';

export const App: React.FC = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingZoneId, setBookingZoneId] = useState<string | undefined>();
  const [apiConfigModalOpen, setApiConfigModalOpen] = useState(false);
  const [apiSyncedTime, setApiSyncedTime] = useState<string>(
    campingConfig.info.tqCamping.lastSyncedAt
  );

  const [previewImage, setPreviewImage] = useState<{ url: string; title: string } | null>(null);

  const handleOpenBooking = (zoneId?: string) => {
    setBookingZoneId(zoneId);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setBookingZoneId(undefined);
  };

  const handlePreviewImage = (imageUrl: string, title: string) => {
    setPreviewImage({ url: imageUrl, title });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stone-100 flex flex-col font-sans selection:bg-forest-600 selection:text-white">
      {/* 1. 글로벌 헤더 & 네비게이션 */}
      <Header
        onOpenBooking={handleOpenBooking}
        onOpenApiConfig={() => setApiConfigModalOpen(true)}
        apiSyncedTime={apiSyncedTime}
      />

      <main className="flex-1">
        {/* 2. 메인 히어로 섹션 (슬라이더 & 퀵 예약바) */}
        <HeroSection onOpenBooking={handleOpenBooking} />

        {/* 3. 캠핑장 스토리 & 핵심 매력 */}
        <StorySection />

        {/* 4. 캠핑장 전체 배치도 (인터랙티브 맵) */}
        <SiteMapSection onSelectZone={(zoneId) => handleOpenBooking(zoneId)} />

        {/* 5. 4가지 사이트 상세 스펙 및 요금표 */}
        <ZonesSection 
          onOpenBooking={handleOpenBooking}
          onPreviewImage={handlePreviewImage}
        />

        {/* 6. 땡큐캠핑 정책 API 실시간 연동 배너 */}
        <ThankYouApiSyncBanner
          onOpenApiConfig={() => setApiConfigModalOpen(true)}
          onSyncComplete={(newTime) => setApiSyncedTime(newTime)}
        />

        {/* 7. 부대시설 안내 */}
        <FacilitiesSection onPreviewImage={handlePreviewImage} />

        {/* 8. 이용안내 & 땡큐캠핑 표준 환불 규정 */}
        <PolicySection syncedPolicyTime={apiSyncedTime} />

        {/* 9. 주변 관광지, 레저, 맛집, 마트 */}
        <AttractionsSection onPreviewImage={handlePreviewImage} />

        {/* 10. 감성 포토 갤러리 */}
        <GallerySection onPreviewImage={handlePreviewImage} />

        {/* 11. 공지사항 및 FAQ */}
        <NoticeFaqSection />

        {/* 12. 오시는 길 & 실시간 날씨 & 고객센터 */}
        <LocationContactSection />
      </main>

      {/* 13. 푸터 */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenApiConfig={() => setApiConfigModalOpen(true)}
      />

      {/* 플로팅 퀵 액션 버튼 (모바일 & 데스크톱 공통) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* 상단으로 스크롤 버튼 */}
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-stone-700 shadow-lg border border-stone-200 flex items-center justify-center transition transform hover:-translate-y-1"
          aria-label="맨 위로 가기"
        >
          <ChevronUp className="w-5 h-5" />
        </button>

        {/* 땡큐캠핑 실시간 예약 플로팅 버튼 */}
        <button
          onClick={() => handleOpenBooking()}
          className="px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-2xl shadow-emerald-900/40 flex items-center gap-2 transition transform hover:scale-105 active:scale-95"
        >
          <CalendarCheck className="w-4 h-4" />
          <span className="hidden sm:inline">땡큐캠핑 실시간 예약</span>
          <span className="sm:hidden">실시간 예약</span>
        </button>
      </div>

      {/* 모달 3종 */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        initialZoneId={bookingZoneId}
      />

      <ApiConfigModal
        isOpen={apiConfigModalOpen}
        onClose={() => setApiConfigModalOpen(false)}
        onSyncSuccess={(newTime) => setApiSyncedTime(newTime)}
      />

      <ImagePreviewModal
        isOpen={!!previewImage}
        onClose={() => setPreviewImage(null)}
        imageUrl={previewImage?.url || ''}
        title={previewImage?.title || ''}
      />
    </div>
  );
};

export default App;
