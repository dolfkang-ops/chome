import React, { useState } from 'react';
import { campingConfig } from '../../config/campingConfig';
import { thankyouCampingApi, TQPolicyResponse } from '../../services/thankyouCampingApi';
import { 
  X, 
  SlidersHorizontal, 
  Key, 
  Server, 
  RefreshCw, 
  CheckCircle, 
  FileCode, 
  ShieldCheck, 
  HelpCircle 
} from 'lucide-react';

interface ApiConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSyncSuccess: (syncedAt: string) => void;
}

export const ApiConfigModal: React.FC<ApiConfigModalProps> = ({ 
  isOpen, 
  onClose,
  onSyncSuccess 
}) => {
  if (!isOpen) return null;

  const currentCreds = thankyouCampingApi.getPartnerCredentials();

  const [partnerId, setPartnerId] = useState(currentCreds.partnerId);
  const [apiKey, setApiKey] = useState(currentCreds.apiKey);
  const [isTesting, setIsTesting] = useState(false);
  const [apiResponse, setApiResponse] = useState<TQPolicyResponse | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSaveAndSync = async () => {
    setIsTesting(true);
    setStatusMessage(null);
    try {
      thankyouCampingApi.setPartnerCredentials(partnerId, apiKey);
      const res = await thankyouCampingApi.syncCampingPolicy();
      setApiResponse(res);
      setStatusMessage('땡큐캠핑 파트너 API 연결 및 최신 정책 동기화 성공!');
      onSyncSuccess(res.syncedAt);
    } catch (err: any) {
      setStatusMessage('API 연동 테스트 중 오류가 발생했습니다.');
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-200 text-stone-800">
        {/* 헤더 */}
        <div className="bg-stone-900 text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-stone-900 flex items-center justify-center font-bold">
              <SlidersHorizontal className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-amber-400 font-semibold block uppercase">
                PARTNER INTEGRATION CENTER
              </span>
              <h3 className="text-lg sm:text-xl font-bold">땡큐캠핑(ThankQ) API 연동 관리자</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-white hover:bg-stone-800 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* 바디 */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* 가이드 설명 */}
          <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-2xl text-xs text-amber-900 leading-relaxed">
            <strong>💡 땡큐캠핑 정책 API 연동 안내:</strong><br />
            땡큐캠핑에 등록된 캠핑장 고유번호(camp_seq)와 인증 키를 입력하시면, 땡큐캠핑의 취소/환불 규정, 매너타임, 사이트 잔여석, 실시간 요금 정책을 자동으로 동기화하여 홈페이지에 노출할 수 있습니다.
          </div>

          {/* 파트너 ID 및 API KEY 입력 */}
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-stone-700 block mb-1 flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-forest-600" />
                땡큐캠핑 캠핑장 고유번호 (camp_seq / Partner ID)
              </label>
              <input
                type="text"
                value={partnerId}
                onChange={(e) => setPartnerId(e.target.value)}
                placeholder="예: TQ-CAMP-99214 또는 숫자 seq"
                className="w-full text-xs sm:text-sm font-medium border border-stone-300 rounded-xl px-3.5 py-2.5 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest-500"
              />
              <span className="text-[11px] text-stone-400 mt-1 block">
                ※ 땡큐캠핑 예약 URL 상의 camp_seq 번호와 매칭됩니다.
              </span>
            </div>

            <div>
              <label className="text-xs font-bold text-stone-700 block mb-1 flex items-center gap-1.5">
                <Key className="w-3.5 h-3.5 text-forest-600" />
                API Secret Key
              </label>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="땡큐캠핑 파트너스에서 발급받은 API Key"
                className="w-full text-xs sm:text-sm font-medium border border-stone-300 rounded-xl px-3.5 py-2.5 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest-500"
              />
            </div>
          </div>

          {/* 동기화 버튼 */}
          <div>
            <button
              onClick={handleSaveAndSync}
              disabled={isTesting}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md shadow-emerald-800/20 transition flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isTesting ? 'animate-spin' : ''}`} />
              <span>{isTesting ? '땡큐캠핑 정책 동기화 통신 중...' : '설정 저장 & 정책 실시간 동기화 실행'}</span>
            </button>
          </div>

          {statusMessage && (
            <div className="p-3 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-xl border border-emerald-200 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>{statusMessage}</span>
            </div>
          )}

          {/* 동기화된 JSON 페이로드 미리보기 */}
          {apiResponse && (
            <div className="space-y-2">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block flex items-center gap-1">
                <FileCode className="w-3.5 h-3.5 text-forest-600" />
                동기화된 땡큐캠핑 정책 페이로드 (JSON)
              </span>
              <pre className="bg-stone-900 text-emerald-400 p-4 rounded-2xl text-xs font-mono overflow-x-auto max-h-48 border border-stone-800">
                {JSON.stringify(apiResponse, null, 2)}
              </pre>
            </div>
          )}
        </div>

        {/* 푸터 */}
        <div className="bg-stone-100 p-4 sm:p-5 flex justify-end border-t border-stone-200">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-stone-800 hover:bg-stone-900 text-white font-bold text-xs sm:text-sm rounded-xl transition"
          >
            확인 및 닫기
          </button>
        </div>
      </div>
    </div>
  );
};
