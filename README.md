# 🌲 포레스트힐 캠핑파크 (Forest Hill Camping Park)
> **땡큐캠핑(ThankQ Camping) 공식 제휴 캠핑장 웹사이트 템플릿**

최고급 캠핑장 홈페이지의 모범 사례들을 분석하여 제작된 반응형 모던 웹사이트입니다.  
가상의 캠핑장 **포레스트힐 캠핑파크**를 기반으로 구성되었으며, **향후 실제 캠핑장의 사진 첨부** 및 **땡큐캠핑 정책/예약 API 연동**을 즉시 적용할 수 있도록 모듈형 아키텍처로 설계되었습니다.

---

## 🌟 주요 구성 요소 및 특징

1. **상단 네비게이션 & 제휴 인증 배너**:
   - 땡큐캠핑 제휴 인증 마크 및 실시간 정책 동기화 상태 표시
   - 캠핑장 소개, 사이트 안내, 배치도, 부대시설, 주변 관광지, 이용수칙, 갤러리, 오시는 길
   - 원클릭 땡큐캠핑 실시간 예약 버튼

2. **메인 비주얼 & 퀵 예약 검색기 (Hero Section)**:
   - 감성적인 고화질 캠핑 사진 자동 슬라이더 (6초 간격)
   - 체크인/체크아웃 날짜, 사이트 종류, 인원 선택 후 잔여석 바로 조회 기능

3. **캠핑장 소개 (About & Story)**:
   - 4대 프리미엄 가치 (잣나무 숲, 1급수 계곡, 24시간 온수/호텔급 위생, 땡큐캠핑 정식 파트너십)
   - 지자체 야영장업 인가 및 배상책임보험 정보 명시

4. **인터랙티브 캠핑장 배치도 (Interactive Site Map)**:
   - 구역별(A 데크 / B 파쇄석 / C 글램핑 / D 카라반) 조감도
   - 클릭 시 해당 구역 스펙(크기, 바닥재, 전기용량, 인원, 요금, 땡큐캠핑 연동코드) 하이라이트

5. **4대 사이트 상세 안내 (Zones & Accommodation)**:
   - 카테고리 필터링 (전체, 데크, 파쇄석, 글램핑, 카라반)
   - 평일/주말 요금표, 수용인원, 전기용량, 제공 편의물품 배지, 땡큐캠핑 잔여석 실시간 표시

6. **땡큐캠핑 API 정책 실시간 동기화 센터**:
   - 땡큐캠핑 파트너스에 등록된 캠핑장 정책(취소/환불, 매너타임, 전기안전 수칙 등) 실시간 수신
   - [정책 실시간 동기화] 인터랙티브 테스트 버튼 탑재
   - 관리자용 API Key 및 캠핑장 고유번호(`camp_seq`) 설정 모달 제공

7. **부대시설 안내 (Facilities)**:
   - 24시간 무인 매점/관리동, 호텔급 샤워실(개별 파우더룸), 실내 개수대/공용냉장고, 천연 계곡 물놀이터, 잔디광장/불멍존, 7kW 전기차 충전소

8. **이용수칙 & 땡큐캠핑 표준 환불 규정 (Policies)**:
   - 22:00 ~ 08:00 매너타임 상세 규정
   - 사이트당 600W 전기용량 제한 및 화재 안전 수칙
   - 땡큐캠핑 표준 위약금 환불표 (10일 전 100% ~ 당일 취소 불가 및 기상특보 100% 전액환불 특약)

9. **주변 관광지 & 생활 편의 가이드 (Attractions)**:
   - 자연 명소 (구곡폭포, 남이섬), 레저 (강촌 레일바이크), 베이커리 카페 (어반그린)
   - 캠퍼 필수 정보: 장보기 마트(강촌 하나로마트) 및 야간 응급의료기관(춘천 강남병원 응급실)

10. **포토 갤러리 (Photo Gallery)**:
    - 사이트/객실, 자연풍경, 캠프파이어/불멍 카테고리별 사진 및 확대 뷰어

11. **오시는 길 & 캠핑 현장 실시간 기상 안내 (Location & Contact)**:
    - 네이버 지도, 카카오맵, 티맵 바로가기 버튼 및 도로명 주소 원클릭 복사
    - 현지 실시간 기온, 풍속(m/s), 습도, 안전 팩다운 팁 제공

---

## 📸 향후 캠핑장 이미지 첨부 및 교체 방법

본 템플릿의 모든 콘텐츠와 이미지는 **`src/config/campingConfig.ts`** 단 한 곳에서 집중 관리됩니다.

### 1) 이미지 파일 추가
- 캠핑장 실제 사진을 `public/images/` 폴더에 넣거나 외부 이미지 호스팅 URL을 준비합니다.
  ```
  public/
  └── images/
      ├── hero-1.jpg
      ├── zone-a-deck.jpg
      ├── zone-b-valley.jpg
      ├── glamping.jpg
      └── facility-shower.jpg
  ```

### 2) 설정 파일(`src/config/campingConfig.ts`) 수정
- **메인 슬라이드 이미지**: `heroSlides[i].imageUrl: "/images/hero-1.jpg"`
- **사이트 구역 이미지**: `zones[i].imageUrl: "/images/zone-a-deck.jpg"`
- **부대시설 이미지**: `facilities[i].imageUrl: "/images/facility-shower.jpg"`
- **관광지 이미지**: `attractions[i].imageUrl: "/images/attraction-1.jpg"`

---

## 🔌 땡큐캠핑 API 연동 구조 안내

### 1) 파트너 설정 (`src/config/campingConfig.ts`의 `info.tqCamping`)
```typescript
tqCamping: {
  partnerId: "TQ-CAMP-99214", // 땡큐캠핑에 등록된 캠핑장 고유번호 (camp_seq)
  partnerName: "포레스트힐 캠핑파크 [땡큐캠핑 공식제휴점]",
  bookingUrl: "https://m.thankqcamping.com/resv/view.hbb?camp_seq=99214",
  syncPolicyApiUrl: "https://api.thankqcamping.com/v1/partners/99214/policies",
  apiKey: "TQ_KEY_LIVE_DEMO_2026"
}
```

### 2) API 서비스 모듈 (`src/services/thankyouCampingApi.ts`)
- `syncCampingPolicy()`: 땡큐캠핑 서버에서 등록된 환불 규정, 매너타임, 안전 수칙을 가져와 자동 갱신합니다. (실제 서버 미연동 시 안전한 모의 데이터를 자동 반환하도록 설계)
- `getDirectBookingUrl(targetDate, siteCode)`: 특정 날짜 및 사이트가 선택된 상태로 땡큐캠핑 모바일/웹 결제창에 다이렉트 랜딩시킵니다.
- `fetchSiteAvailability(checkInDate)`: 사이트별 실시간 잔여석을 조회합니다.

### 3) 관리자 화면에서 실시간 테스트
- 사이트 상단 알림 바의 **[API 설정/동기화]** 버튼 또는 푸터의 링크를 클릭하면 나타나는 모달 창에서 언제든지 `camp_seq`와 API Key를 테스트하고 동기화할 수 있습니다.

---

## 🚀 실행 및 빌드 명령어

```bash
# 개발 서버 실행 (http://localhost:3000)
npm run dev

# 프로덕션 빌드 (dist 폴더에 정적 HTML/CSS/JS 생성)
npm run build

# 빌드 결과물 미리보기
npm run preview
```
