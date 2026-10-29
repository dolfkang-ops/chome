import React from 'react';
import { campingConfig } from '../../config/campingConfig';
import { 
  Clock, 
  VolumeX, 
  ShieldAlert, 
  HeartHandshake, 
  AlertTriangle, 
  HelpCircle,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface PolicySectionProps {
  syncedPolicyTime: string;
}

export const PolicySection: React.FC<PolicySectionProps> = ({ syncedPolicyTime }) => {
  const iconMap: Record<string, any> = {
    Clock,
    VolumeX,
    ShieldAlert,
    HeartHandshake
  };

  return (
    <section id="policy" className="py-24 bg-stone-50 text-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-forest-700 bg-forest-100 px-3 py-1 rounded-full">
            CAMPING RULES
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            이용수칙
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            모두가 쾌적하고 안전한 캠핑을 누릴 수 있도록 정해진 규칙을 꼭 지켜주시기 바랍니다.
          </p>
        </div>

        {/* 4대 핵심 이용수칙 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {campingConfig.generalRules.map((rule, idx) => {
            const IconComponent = iconMap[rule.icon] || ShieldAlert;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-forest-50 text-forest-700 flex items-center justify-center">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-900">{rule.title}</h3>
                </div>

                <ul className="space-y-2.5">
                  {rule.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* 땡큐캠핑 표준 취소 및 환불 규정 테이블 */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  땡큐캠핑(ThankQ) 연동 공인 환불 정책
                </span>
                <span className="text-xs text-stone-400">최종 동기화: {syncedPolicyTime}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
                예약 취소 및 위약금 기준
              </h3>
            </div>
            <div className="text-xs text-stone-500 bg-stone-50 p-3 rounded-xl border border-stone-200">
              ※ 올바른 예약 문화를 위해 이용일 직전 취소 시 규정에 따른 위약금이 발생합니다.
            </div>
          </div>

          {/* 환불 테이블 */}
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-stone-100 text-stone-700 border-b border-stone-300">
                  <th className="py-3 px-4 font-bold rounded-l-xl">취소 시점 (이용일 기준)</th>
                  <th className="py-3 px-4 font-bold">환불 비율</th>
                  <th className="py-3 px-4 font-bold rounded-r-xl">비고 및 안내</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {campingConfig.refundPolicies.map((pol, i) => (
                  <tr key={i} className="hover:bg-stone-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-stone-800">{pol.dayBefore}</td>
                    <td className="py-3.5 px-4">
                      <span className={`font-bold px-2 py-0.5 rounded ${
                        pol.refundRate.includes('100%') 
                          ? 'bg-emerald-100 text-emerald-800' 
                          : pol.refundRate.includes('불가') 
                          ? 'bg-rose-100 text-rose-800' 
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {pol.refundRate}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-stone-500 text-xs">{pol.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 천재지변 및 기상특보 환불 특약 안내 */}
          <div className="mt-8 p-4 bg-amber-50/70 border border-amber-200 rounded-2xl flex items-start gap-3 text-xs text-amber-900">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong>기상특보 시 환불 규정 안내:</strong> 이용 당일 기상청 공식 <span className="font-semibold underline">호우경보, 대설경보, 태풍경보</span>가 발효되어 실외 야영이 불가능한 경우 땡큐캠핑 예약 취소 시스템 또는 캠핑장 고객센터를 통해 <strong>100% 전액 환불</strong> 또는 일정 변경이 가능합니다. (단, 단순 우천 예보는 정상 취소 규정이 적용됩니다.)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
