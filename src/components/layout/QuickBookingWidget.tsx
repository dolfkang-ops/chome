import React, { useState } from 'react';
import { Calendar, Users, Tent, Search, Sparkles } from 'lucide-react';
import { campingConfig } from '../../config/campingConfig';

interface QuickBookingWidgetProps {
  onSearch: (criteria: { checkIn: string; checkOut: string; zoneType: string; guests: number }) => void;
}

export const QuickBookingWidget: React.FC<QuickBookingWidgetProps> = ({ onSearch }) => {
  // 오늘 날짜 및 내일 날짜 기본 세팅
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(formatDate(today));
  const [checkOut, setCheckOut] = useState(formatDate(tomorrow));
  const [zoneType, setZoneType] = useState('all');
  const [guests, setGuests] = useState(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ checkIn, checkOut, zoneType, guests });
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-4 sm:p-6 border border-white/40 text-stone-800">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-200">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
            땡큐캠핑 실시간 잔여석 연동 검색
          </span>
        </div>
        <span className="text-xs text-stone-500 hidden sm:inline">
          ※ 땡큐캠핑 제휴 전산망으로 즉시 확정 예약됩니다
        </span>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* 체크인 & 체크아웃 날짜 */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-stone-600 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-forest-600" />
            체크인 / 체크아웃
          </label>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full text-xs sm:text-sm font-medium border border-stone-300 rounded-xl px-2.5 py-2.5 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest-500 transition"
              required
            />
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full text-xs sm:text-sm font-medium border border-stone-300 rounded-xl px-2.5 py-2.5 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest-500 transition"
              required
            />
          </div>
        </div>

        {/* 사이트 유형 선택 */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-stone-600 flex items-center gap-1.5">
            <Tent className="w-3.5 h-3.5 text-forest-600" />
            사이트 유형
          </label>
          <select
            value={zoneType}
            onChange={(e) => setZoneType(e.target.value)}
            className="w-full text-sm font-medium border border-stone-300 rounded-xl px-3 py-2.5 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest-500 transition"
          >
            <option value="all">전체 사이트 / 객실</option>
            {campingConfig.zones.map((zone) => (
              <option key={zone.id} value={zone.id}>
                {zone.name}
              </option>
            ))}
          </select>
        </div>

        {/* 인원수 */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-stone-600 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-forest-600" />
            이용 인원
          </label>
          <div className="flex items-center border border-stone-300 rounded-xl bg-stone-50 px-3 py-1.5">
            <button
              type="button"
              onClick={() => setGuests(Math.max(1, guests - 1))}
              className="w-8 h-8 rounded-lg bg-stone-200 text-stone-700 hover:bg-stone-300 flex items-center justify-center font-bold"
            >
              -
            </button>
            <span className="flex-1 text-center font-bold text-stone-800 text-sm">
              성인/아동 {guests}명
            </span>
            <button
              type="button"
              onClick={() => setGuests(Math.min(6, guests + 1))}
              className="w-8 h-8 rounded-lg bg-stone-200 text-stone-700 hover:bg-stone-300 flex items-center justify-center font-bold"
            >
              +
            </button>
          </div>
        </div>

        {/* 검색 버튼 */}
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full bg-forest-600 hover:bg-forest-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-forest-800/30 flex items-center justify-center gap-2 transition transform active:scale-98"
          >
            <Search className="w-4 h-4" />
            <span>실시간 잔여석 조회</span>
          </button>
        </div>
      </form>
    </div>
  );
};
