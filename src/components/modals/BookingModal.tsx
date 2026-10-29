import React, { useState } from 'react';
import { campingConfig, SiteZone } from '../../config/campingConfig';
import { thankyouCampingApi } from '../../services/thankyouCampingApi';
import { 
  X, 
  CalendarCheck, 
  ExternalLink, 
  ShieldCheck, 
  Clock, 
  Users, 
  Zap, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialZoneId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ 
  isOpen, 
  onClose, 
  initialZoneId 
}) => {
  if (!isOpen) return null;

  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [selectedZoneId, setSelectedZoneId] = useState<string>(
    initialZoneId || campingConfig.zones[0].id
  );
  const [checkIn, setCheckIn] = useState(today);
  const [nights, setNights] = useState(1);
  const [guests, setGuests] = useState(2);

  const selectedZone = campingConfig.zones.find(z => z.id === selectedZoneId) || campingConfig.zones[0];
  const basePrice = selectedZone.price.weekday;
  const totalPrice = basePrice * nights;

  const directBookingUrl = thankyouCampingApi.getDirectBookingUrl(checkIn, selectedZone.tqCode);

  const handleProceedBooking = () => {
    // 땡큐캠핑 실시간 예약 페이지로 새창 이동
    window.open(directBookingUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-200 text-stone-800 relative">
        {/* 상단 헤더 */}
        <div className="bg-forest-900 text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
              <CalendarCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs text-emerald-300 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>땡큐캠핑(ThankQ) 실시간 전산 연동</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold">캠핑장 실시간 예약하기</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-300 hover:text-white hover:bg-forest-800 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* 바디 영역 */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* 사이트 선택 라디오 카드 */}
          <div>
            <label className="text-xs font-bold text-stone-500 uppercase tracking-wider block mb-2">
              1. 예약 사이트 구역 선택
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {campingConfig.zones.map((zone) => (
                <div
                  key={zone.id}
                  onClick={() => setSelectedZoneId(zone.id)}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition flex items-center justify-between ${
                    selectedZoneId === zone.id
                      ? 'border-forest-600 bg-forest-50/70 ring-2 ring-forest-500/20'
                      : 'border-stone-200 hover:border-stone-300 bg-stone-50/50'
                  }`}
                >
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-stone-900 block">{zone.name}</span>
                    <span className="text-[11px] text-stone-500">
                      {zone.price.weekday.toLocaleString()}원~ (기준 {zone.capacity.standard}인)
                    </span>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    selectedZoneId === zone.id 
                      ? 'bg-forest-600 text-white' 
                      : 'bg-stone-200 text-stone-600'
                  }`}>
                    잔여 {zone.remainingSlots ?? 3}석
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 일정 및 인원 선택 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="text-xs font-semibold text-stone-600 block mb-1">체크인 날짜</label>
              <input
                type="date"
                value={checkIn}
                min={today}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full text-xs font-medium border border-stone-300 rounded-xl px-3 py-2.5 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest-500"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-stone-600 block mb-1">숙박 기간</label>
              <select
                value={nights}
                onChange={(e) => setNights(Number(e.target.value))}
                className="w-full text-xs font-medium border border-stone-300 rounded-xl px-3 py-2.5 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest-500"
              >
                <option value={1}>1박 2일</option>
                <option value={2}>2박 3일 (연박)</option>
                <option value={3}>3박 4일</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-stone-600 block mb-1">총 인원 (성인/아동)</label>
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full text-xs font-medium border border-stone-300 rounded-xl px-3 py-2.5 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest-500"
              >
                <option value={2}>2인 (기준)</option>
                <option value={3}>3인</option>
                <option value={4}>4인</option>
                <option value={5}>5인 (최대)</option>
              </select>
            </div>
          </div>

          {/* 예상 요금 안내 박스 */}
          <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200 space-y-2">
            <div className="flex justify-between text-xs text-stone-600">
              <span>선택 사이트: {selectedZone.name}</span>
              <span>{basePrice.toLocaleString()}원 × {nights}박</span>
            </div>
            <div className="flex justify-between items-baseline pt-2 border-t border-stone-200">
              <span className="text-xs font-bold text-stone-800">총 예상 결제 금액</span>
              <span className="text-xl font-black text-forest-700">
                {totalPrice.toLocaleString()}원
              </span>
            </div>
          </div>

          {/* 땡큐캠핑 연동 예약 안내 */}
          <div className="p-3.5 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-900 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              [땡큐캠핑 실시간 예약하기]를 누르시면 땡큐캠핑 공식 예약 결제 화면으로 바로 연결되어 즉시 확정 예약 및 영수증 발행이 진행됩니다.
            </div>
          </div>
        </div>

        {/* 하단 버튼 액션 */}
        <div className="bg-stone-100 p-4 sm:p-5 flex items-center justify-end gap-3 border-t border-stone-200">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-stone-600 hover:text-stone-900 transition"
          >
            닫기
          </button>
          <button
            onClick={handleProceedBooking}
            className="px-6 py-2.5 bg-forest-600 hover:bg-forest-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-forest-800/20 transition flex items-center gap-2"
          >
            <span>땡큐캠핑으로 예약 진행</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
