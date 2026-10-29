import React, { useState } from 'react';
import { campingConfig } from '../../config/campingConfig';
import { HelpCircle, ChevronDown, ChevronUp, Bell, CheckCircle } from 'lucide-react';

export const NoticeFaqSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-stone-50 text-stone-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-forest-700 bg-forest-100 px-3 py-1 rounded-full">
            FAQ & NOTICE
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            자주 묻는 질문 & 공지사항
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            방문 전 캠퍼님들께서 가장 많이 궁금해하시는 사항들을 모았습니다.
          </p>
        </div>

        {/* 상단 긴급/주요 공지사항 카드 */}
        <div className="mb-10 bg-emerald-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-800 flex items-center justify-center flex-shrink-0">
              <Bell className="w-6 h-6 text-emerald-300" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="bg-emerald-500 text-stone-950 text-xs font-bold px-2 py-0.5 rounded">
                  중요 공지
                </span>
                <span className="text-xs text-emerald-200">2026 시즌 안전 캠핑 안내</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold">
                땡큐캠핑 실시간 예약 오픈 및 동계/춘계 안전 점검 완료 안내
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed font-light">
                전 사이트 단독 누전차단기 및 일산화탄소 경보기 무상 대여를 지원하며, 땡큐캠핑 앱을 통해 예약 시 실시간 잔여석 조회 및 쿠폰 적용이 즉시 가능합니다.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ 아코디언 리스트 */}
        <div className="space-y-4">
          {campingConfig.faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-stone-50/80 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-forest-50 text-forest-700 font-bold text-xs flex items-center justify-center flex-shrink-0">
                      Q
                    </span>
                    <span className="text-sm sm:text-base font-bold text-stone-900">
                      {faq.question}
                    </span>
                  </div>
                  <div className="text-stone-400">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-forest-600" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/50">
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        A
                      </span>
                      <div className="space-y-2">
                        <p>{faq.answer}</p>
                        <div className="text-[11px] text-stone-400">
                          분류: {faq.category}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
