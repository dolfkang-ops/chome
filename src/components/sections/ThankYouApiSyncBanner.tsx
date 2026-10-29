import React, { useState } from 'react';
import { campingConfig } from '../../config/campingConfig';
import { 
  ShieldCheck, 
  RefreshCw, 
  CheckCircle, 
  ExternalLink, 
  Database, 
  SlidersHorizontal,
  Sparkles
} from 'lucide-react';
import { thankyouCampingApi } from '../../services/thankyouCampingApi';

interface ThankYouApiSyncBannerProps {
  onOpenApiConfig: () => void;
  onSyncComplete: (time: string) => void;
}

export const ThankYouApiSyncBanner: React.FC<ThankYouApiSyncBannerProps> = ({ 
  onOpenApiConfig,
  onSyncComplete 
}) => {
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncMessage, setSyncMessage] = useState<string | null>(null);

  const handleManualSync = async () => {
    setIsSyncing(true);
    setSyncMessage(null);
    try {
      const result = await thankyouCampingApi.syncCampingPolicy();
      const updatedTime = result.syncedAt;
      onSyncComplete(updatedTime);
      setSyncMessage('땡큐캠핑 등록 정책(환불/매너타임/잔여석)이 최신 정보로 동기화되었습니다.');
      setTimeout(() => setSyncMessage(null), 5000);
    } catch (e) {
      console.error(e);
    } finally {
      setIsSyncing(false);
    }
  };

  return (
    <section className="py-12 bg-gradient-to-r from-emerald-950 via-forest-900 to-stone-900 text-white relative overflow-hidden border-y border-emerald-800/40">
      {/* 장식용 은은한 원형 블러 */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-forest-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-emerald-500/20 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* 좌측 연동 상태 안내 */}
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 text-xs px-3 py-1 rounded-full font-semibold border border-emerald-400/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>땡큐캠핑(ThankQ) 시스템 실시간 정책 API 연동</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              땡큐캠핑 등록 정책과 100% 자동 동기화
            </h3>

            <p className="text-sm text-stone-300 leading-relaxed font-light">
              본 홈페이지는 땡큐캠핑 제휴사 API를 통해 <strong className="text-emerald-300">실시간 잔여석, 시즌별 요금, 취소/환불 규정, 매너타임 정책</strong>을 자동으로 불러와 표출합니다.
              캠핑장 운영자가 땡큐캠핑 파트너스에서 정보를 변경하면 홈페이지에 즉시 반영됩니다.
            </p>

            {/* 연동 데이터 칩 */}
            <div className="flex flex-wrap gap-2 pt-1 justify-center lg:justify-start text-xs">
              <span className="bg-emerald-950/60 border border-emerald-700/50 px-2.5 py-1 rounded-lg text-emerald-200">
                ✓ 파트너 ID: {campingConfig.info.tqCamping.partnerId}
              </span>
              <span className="bg-emerald-950/60 border border-emerald-700/50 px-2.5 py-1 rounded-lg text-emerald-200">
                ✓ 표준 취소환불 규정 동기화
              </span>
              <span className="bg-emerald-950/60 border border-emerald-700/50 px-2.5 py-1 rounded-lg text-emerald-200">
                ✓ 실시간 잔여석 딥링크 연동
              </span>
            </div>

            {syncMessage && (
              <div className="mt-2 text-xs bg-emerald-900/80 text-emerald-200 p-2.5 rounded-xl border border-emerald-500 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{syncMessage}</span>
              </div>
            )}
          </div>

          {/* 우측 액션 버튼들 */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto">
            <button
              onClick={handleManualSync}
              disabled={isSyncing}
              className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-sm rounded-2xl shadow-lg shadow-emerald-500/20 transition flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isSyncing ? 'animate-spin' : ''}`} />
              <span>{isSyncing ? '정책 동기화 중...' : '땡큐캠핑 정책 실시간 동기화'}</span>
            </button>

            <button
              onClick={onOpenApiConfig}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm rounded-2xl border border-white/20 backdrop-blur-sm transition flex items-center justify-center gap-2"
            >
              <SlidersHorizontal className="w-4 h-4 text-amber-300" />
              <span>API Key & 파트너 설정 관리</span>
            </button>

            <a
              href={campingConfig.info.tqCamping.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-stone-400 hover:text-emerald-300 text-center transition flex items-center justify-center gap-1 mt-1"
            >
              <span>땡큐캠핑 예약 시스템 직접 확인하기</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
