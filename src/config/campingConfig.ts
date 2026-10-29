export interface SiteZone {
  id: string;
  name: string;
  category: 'autocamping' | 'glamping' | 'caravan' | 'deck';
  categoryLabel: string;
  badge: string;
  tagline: string;
  description: string;
  size: string;
  floorType: string;
  electricity: string;
  capacity: { standard: number; max: number };
  price: { weekday: number; weekend: number; peak: number };
  amenities: string[];
  imageUrl: string;
  tqCode: string; // 땡큐캠핑 사이트 식별 코드
  remainingSlots?: number; // 땡큐캠핑 API 동기화 잔여석
}

export interface Facility {
  id: string;
  name: string;
  category: string;
  iconName: string;
  description: string;
  operatingHours: string;
  imageUrl: string;
  features: string[];
}

export interface Attraction {
  id: string;
  name: string;
  category: 'nature' | 'activity' | 'food' | 'mart';
  categoryLabel: string;
  distance: string; // e.g. "차량 8분 (5.2km)"
  address: string;
  description: string;
  tips: string;
  imageUrl: string;
}

export interface CampingInfo {
  name: string;
  englishName: string;
  slogan: string;
  subSlogan: string;
  phone: string;
  email: string;
  address: {
    road: string;
    jibun: string;
    postalCode: string;
    directions: string;
  };
  businessInfo: {
    ceo: string;
    businessNumber: string;
    tourismRegistrationNumber: string;
    insuranceInfo: string;
  };
  tqCamping: {
    partnerId: string;
    partnerName: string;
    bookingUrl: string;
    appDownloadUrl: string;
    syncPolicyApiUrl: string;
    lastSyncedAt: string;
    apiKey: string;
  };
  checkInOut: {
    checkIn: string;
    checkOut: string;
    mannerTime: string;
  };
}

export const campingConfig: {
  info: CampingInfo;
  heroSlides: { title: string; subtitle: string; imageUrl: string; ctaText: string }[];
  zones: SiteZone[];
  facilities: Facility[];
  attractions: Attraction[];
  refundPolicies: { dayBefore: string; refundRate: string; note: string }[];
  generalRules: { title: string; icon: string; items: string[] }[];
  faqs: { category: string; question: string; answer: string }[];
} = {
  info: {
    name: "포레스트힐 캠핑파크",
    englishName: "FOREST HILL CAMPING PARK",
    slogan: "청정 피톤치드 숲속, 자연이 주는 온전한 쉼과 힐링",
    subSlogan: "맑은 잣나무 숲과 1급수 계곡을 품은 프리미엄 힐링 오토캠핑 & 감성 글램핑",
    phone: "010-8765-4321 / 031-987-6543",
    email: "contact@foresthill-camp.kr",
    address: {
      road: "강원특별자치도 춘천시 남산면 잣나무숲길 128",
      jibun: "강원특별자치도 춘천시 남산면 방하리 산 45-2",
      postalCode: "24464",
      directions: "서울-양양고속도로 강촌IC에서 나와 북한강변로 방향으로 약 12분(8km) 직진"
    },
    businessInfo: {
      ceo: "홍길동",
      businessNumber: "123-45-67890",
      tourismRegistrationNumber: "제2024-52호 (일반야영장업 등록완료)",
      insuranceInfo: "야영장 사고배상 책임보험 / 화재보험 가입완료"
    },
    tqCamping: {
      partnerId: "TQ-CAMP-99214",
      partnerName: "포레스트힐 캠핑파크 [땡큐캠핑 공식제휴점]",
      bookingUrl: "https://m.thankqcamping.com/resv/view.hbb?camp_seq=99214",
      appDownloadUrl: "https://thankqcamping.com/app",
      syncPolicyApiUrl: "https://api.thankqcamping.com/v1/partners/99214/policies",
      lastSyncedAt: "2026-10-29 14:00 (실시간 동기화 활성)",
      apiKey: "TQ_KEY_LIVE_DEMO_2026"
    },
    checkInOut: {
      checkIn: "14:00 (오후 2시)",
      checkOut: "11:00 (오전 11시)",
      mannerTime: "22:00 ~ 08:00 (조용한 휴식)"
    }
  },

  heroSlides: [
    {
      title: "울창한 숲속, 별빛 아래서 피어나는 온전한 쉼",
      subtitle: "수령 40년 잣나무 군락지에서 즐기는 프라이빗 오토캠핑 & 럭셔리 글램핑",
      imageUrl: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1920&auto=format&fit=crop",
      ctaText: "땡큐캠핑 실시간 예약하기"
    },
    {
      title: "프리미엄 감성 글램핑 & 카라반",
      subtitle: "호텔식 침구류와 개별 냉난방, 감성 바비큐 테라스를 완비한 힐링 스테이",
      imageUrl: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=1920&auto=format&fit=crop",
      ctaText: "글램핑 객실 둘러보기"
    },
    {
      title: "맑은 1급수 계곡과 피톤치드 산책로",
      subtitle: "사계절 맑은 물이 흐르는 프라이빗 계곡 사이트에서 느끼는 자연의 여유",
      imageUrl: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=1920&auto=format&fit=crop",
      ctaText: "캠핑장 시설 안내"
    }
  ],

  zones: [
    {
      id: "zone-a",
      name: "포레스트 데크 사이트 (A구역)",
      category: "deck",
      categoryLabel: "숲속 프리미엄 데크",
      badge: "가장 인기있는 뷰",
      tagline: "잣나무 그늘 아래 넓은 원목 데크에서 즐기는 피톤치드 힐링",
      description: "울창한 나무 그늘 아래 독립적으로 배치된 사이트입니다. 대형 거실형 텐트 피칭이 가능한 넉넉한 사이즈와 바로 앞 숲 조망을 자랑합니다.",
      size: "6m x 8m (초대형 고급 방부목 데크)",
      floorType: "친환경 방부목 데크",
      electricity: "사이트 단독 600W 분전함 완비",
      capacity: { standard: 4, max: 5 },
      price: { weekday: 55000, weekend: 65000, peak: 75000 },
      amenities: ["차량 1대 옆 주차 가능", "개별 분전반", "소화기 비치", "화로대 받침목", "무료 Wi-Fi"],
      imageUrl: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=1200&auto=format&fit=crop",
      tqCode: "TQ_SITE_A_DECK",
      remainingSlots: 3
    },
    {
      id: "zone-b",
      name: "밸리 파쇄석 오토캠핑 (B구역)",
      category: "autocamping",
      categoryLabel: "계곡 뷰 파쇄석",
      badge: "계곡 물소리 명당",
      tagline: "시원한 계곡 물소리와 함께하는 차박 & 오토캠핑 전용 공간",
      description: "물놀이 계곡과 맞닿아 있어 여름철 인기가 가장 높은 사이트입니다. 차량 진입 및 차박 텐트, 카라반 진입이 수월한 배수 최적화 파쇄석입니다.",
      size: "8m x 10m (차량 포함 여유 공간)",
      floorType: "최고급 세척 파쇄석 (배수 극대화)",
      electricity: "사이트 단독 600W 분전함 완비",
      capacity: { standard: 4, max: 6 },
      price: { weekday: 50000, weekend: 60000, peak: 70000 },
      amenities: ["차박/트레일러 가능", "계곡 직통 계단", "개별 분전함", "가로등 안전시설", "해먹 거치대"],
      imageUrl: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=1200&auto=format&fit=crop",
      tqCode: "TQ_SITE_B_VALLEY",
      remainingSlots: 5
    },
    {
      id: "zone-c",
      name: "노블 글램핑 스위트 (C구역)",
      category: "glamping",
      categoryLabel: "호텔식 럭셔리 글램핑",
      badge: "개별 화장실/샤워실 완비",
      tagline: "장비 없이 떠나는 감성 캠핑, 호텔 침구류와 개별 냉난방",
      description: "몸만 와서 감성을 즐기는 최고급 글램핑입니다. 사계절 인버터 냉난방기, 개별 호텔식 욕실/화장실, 냉장고, 싱크대, 감성 모닥불 존을 갖추었습니다.",
      size: "내부 실내 28㎡ + 전용 바비큐 테라스 15㎡",
      floorType: "원목 마루바닥 및 테라스",
      electricity: "일반 가정용 콘센트 완비 (고용량 안전설비)",
      capacity: { standard: 2, max: 4 },
      price: { weekday: 140000, weekend: 190000, peak: 240000 },
      amenities: ["호텔식 퀸 침대", "개별 화장실/샤워부스", "인버터 에어컨/바닥난방", "냉장고/전자레인지", "프라이빗 불멍존"],
      imageUrl: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=1200&auto=format&fit=crop",
      tqCode: "TQ_SITE_C_GLAMP",
      remainingSlots: 2
    },
    {
      id: "zone-d",
      name: "루프탑 감성 카라반 (D구역)",
      category: "caravan",
      categoryLabel: "유러피안 감성 카라반",
      badge: "별빛 루프 테라스",
      tagline: "미국식 정통 와이드 카라반에서 즐기는 이색적인 로맨틱 캠핑",
      description: "감성적인 레트로 인테리어와 현대적 편의성이 결합된 카라반입니다. 옥상 별빛 루프탑 테라스에서 커피 한잔과 밤하늘 별자리를 관측할 수 있습니다.",
      size: "길이 7.5m 광폭 카라반 + 외부 어닝 테라스",
      floorType: "원목형 카라반 실내 바닥",
      electricity: "카라반 전용 220V 전원 공급",
      capacity: { standard: 2, max: 3 },
      price: { weekday: 120000, weekend: 170000, peak: 210000 },
      amenities: ["루프탑 천문 관측석", "실내 주방 & 샤워부스", "냉난방 완비", "블루투스 오디오", "전용 어닝 바비큐"],
      imageUrl: "https://images.unsplash.com/photo-1527786356703-4b100091cd2c?q=80&w=1200&auto=format&fit=crop",
      tqCode: "TQ_SITE_D_CARAVAN",
      remainingSlots: 1
    }
  ],

  facilities: [
    {
      id: "fac-1",
      name: "중앙 관리동 & 무인 편의점",
      category: "편의시설",
      iconName: "Store",
      description: "참나무 장작, 숯, 석쇠, 부탄가스, 시원한 음료, 얼음, 간편식 및 비상 상비약을 구비하고 있습니다.",
      operatingHours: "08:00 ~ 22:00 (무인 키오스크 24시간)",
      imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
      features: ["참나무 장작 판매", "카페 커피 머신", "전자레인지 3대", "아이스크림 & 얼음"]
    },
    {
      id: "fac-2",
      name: "호텔급 24시간 온수 샤워실",
      category: "위생시설",
      iconName: "Droplets",
      description: "개별 칸막이와 드라이기, 바디워시, 샴푸를 갖춘 쾌적하고 위생적인 24시간 온수 전용 샤워장입니다.",
      operatingHours: "24시간 항시 운영 (청소시간 11:30 ~ 13:00 제외)",
      imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
      features: ["24시간 펑펑 쏟아지는 고압 온수", "개별 파우더룸 & 헤어드라이기", "냉난방기 가동", "비데 설치 화장실"]
    },
    {
      id: "fac-3",
      name: "실내 개수대 & 공용 냉장고",
      category: "조리시설",
      iconName: "Utensils",
      description: "겨울에도 따뜻한 실내 세척실로 친환경 주방세제와 온수 수전, 대형 공용 냉장고가 완비되어 있습니다.",
      operatingHours: "07:00 ~ 23:00",
      imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
      features: ["온수 상시 공급", "신선 공용 냉장/냉동고", "음식물 쓰레기 전용 탈수기", "친환경 주방세제 구비"]
    },
    {
      id: "fac-4",
      name: "천연 계곡 물놀이터 & 피톤치드 숲길",
      category: "자연/레저",
      iconName: "Trees",
      description: "캠핑장 바로 앞 맑은 수심 30~80cm의 천연 계곡과 잣나무 군락 둘레길(약 1.5km)이 조성되어 있습니다.",
      operatingHours: "일출 ~ 일몰 (야간 입수 금지)",
      imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800&auto=format&fit=crop",
      features: ["어린이 물놀이 적합 완경사 계곡", "구명조끼 무료 대여", "1.5km 숲속 힐링 산책로", "다람쥐 관찰존"]
    },
    {
      id: "fac-5",
      name: "잔디 놀이마당 & 감성 모닥불 광장",
      category: "레크레이션",
      iconName: "Flame",
      description: "아이들이 안전하게 뛰어놀 수 있는 천연 잔디광장과 밤이 되면 켜지는 대형 중앙 화로대입니다.",
      operatingHours: "09:00 ~ 21:30 (점화: 19:30)",
      imageUrl: "https://images.unsplash.com/photo-1517824806704-9040b037703b?q=80&w=800&auto=format&fit=crop",
      features: ["배드민턴 네트", "대형 모닥불 불멍 타임", "마시멜로 굽기 이벤트", "안전 펜스 시공"]
    },
    {
      id: "fac-6",
      name: "전기차 완속 충전소 (2기)",
      category: "편의시설",
      iconName: "Zap",
      description: "친환경 캠핑 문화를 선도하기 위해 캠핑 중 편안하게 완속 충전할 수 있는 최신 충전기를 지원합니다.",
      operatingHours: "24시간 운영",
      imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800&auto=format&fit=crop",
      features: ["7kW 완속 충전 2대", "환경부/한전 회원카드 지원", "모바일 앱 결제 가능", "지정 주차구역"]
    }
  ],

  attractions: [
    {
      id: "att-1",
      name: "강촌 문배마을 & 구곡폭포",
      category: "nature",
      categoryLabel: "자연 명소",
      distance: "차량 12분 (7.5km)",
      address: "강원특별자치도 춘천시 남산면 강촌구곡길 254",
      description: "웅장한 암벽 사이로 50m 높이에서 쏟아지는 구곡폭포와 정겨운 산골 마을 문배마을의 산채비빔밥을 맛볼 수 있는 대표 힐링 코스입니다.",
      tips: "캠핑 체크인 전 가벼운 트레킹 코스로 추천하며 구곡폭포 매표소에서 문배마을까지 약 40분 소요됩니다.",
      imageUrl: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "att-2",
      name: "강촌 레일바이크 (김유정 레일파크)",
      category: "activity",
      categoryLabel: "액티비티",
      distance: "차량 15분 (11km)",
      address: "강원특별자치도 춘천시 신동면 김유정로 1383",
      description: "북한강의 절경과 테마 터널(VR, 버블, 은하수 터널)을 지나며 철길 위를 달리는 인기 액티비티로 가족, 연인에게 최고의 추억을 선사합니다.",
      tips: "주말에는 조기 매진될 수 있으므로 사전 온라인 예약을 강력 추천합니다.",
      imageUrl: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "att-3",
      name: "북한강 뷰 대형 베이커리 카페 '어반그린'",
      category: "food",
      categoryLabel: "감성 카페/맛집",
      distance: "차량 9분 (5.8km)",
      address: "강원특별자치도 춘천시 서면 박사로 732",
      description: "탁 트인 북한강 리버뷰를 바라보며 매일 아침 구워내는 천연 발효빵과 스페셜티 커피를 즐길 수 있는 포토존 핫플레이스입니다.",
      tips: "강변 야외 테라스석의 천국의 계단 포토존에서 인생샷을 남겨보세요.",
      imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "att-4",
      name: "강촌 하나로마트 & 춘천 정육마트",
      category: "mart",
      categoryLabel: "장보기 & 마트",
      distance: "차량 7분 (4.2km)",
      address: "강원특별자치도 춘천시 남산면 강촌로 78",
      description: "캠핑 출발 시 무겁게 장보실 필요 없이 신선한 한우, 삼겹살, 제철 쌈채소, 로컬 특산품 및 숯/음료를 저렴하게 구매할 수 있습니다.",
      tips: "영업시간은 매일 08:30 ~ 21:00이며, 춘천 로컬 생막걸리와 잣 막걸리를 꼭 맛보세요.",
      imageUrl: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "att-5",
      name: "남이섬 & 짚와이어",
      category: "nature",
      categoryLabel: "관광 명소",
      distance: "차량 18분 (14km)",
      address: "강원특별자치도 춘천시 남산면 남이섬길 1",
      description: "메타세콰이어길, 은행나무길 등 세계적인 관광 휴양지로 사계절 이색적인 자연 풍광과 문화 행사가 열리는 섬입니다.",
      tips: "캠핑 퇴실 후 아침 일찍 방문하시면 여유롭게 둘러보실 수 있습니다.",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "att-6",
      name: "춘천 강남병원 응급실 (야간 의료기관)",
      category: "mart",
      categoryLabel: "응급/의료",
      distance: "차량 22분 (18km)",
      address: "강원특별자치도 춘천시 충열로 20",
      description: "캠핑 중 혹시 모를 안전사고나 심야 응급 상황 발생 시 24시간 진료가 가능한 종합병원 응급의료센터입니다.",
      tips: "전화번호: 033-240-7000 / 응급실 직통 연결 가능",
      imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop"
    }
  ],

  refundPolicies: [
    { dayBefore: "이용일 8일 전", refundRate: "100% 전액 환불", note: "취소 수수료 없음" },
    { dayBefore: "이용일 7일 전", refundRate: "90% 환불", note: "위약금 10% 공제 후 환불" },
    { dayBefore: "이용일 5~6일 전", refundRate: "70% 환불", note: "위약금 30% 공제 후 환불" },
    { dayBefore: "이용일 3~4일 전", refundRate: "50% 환불", note: "위약금 50% 공제 후 환불" },
    { dayBefore: "이용일 1~2일 전", refundRate: "20% 환불", note: "위약금 80% 공제 후 환불" },
    { dayBefore: "이용 당일 취소 및 No-Show", refundRate: "환불 불가 (0%)", note: "기상특보(호우경보, 태풍경보) 발효 시 땡큐캠핑 정책에 의거 전액 환불" }
  ],

  generalRules: [
    {
      title: "입실 / 퇴실 시간 준수",
      icon: "Clock",
      items: [
        "입실: 오후 14:00부터 가능 (얼리 체크인은 사전 문의 요망)",
        "퇴실: 오전 11:00까지 (다음 이용객을 위한 정비 시간 준수)",
        "입실 시 관리동에서 예약자 본인 확인 후 쓰레기봉투 수령 필수"
      ]
    },
    {
      title: "매너타임 안내 (22:00 ~ 08:00)",
      icon: "VolumeX",
      items: [
        "오후 10시 이후는 이웃 캠퍼의 온전한 수면을 위한 매너타임입니다.",
        "스피커, 빔프로젝터 음향 사용 금지 및 모닥불(불멍) 조기 정리",
        "2회 이상 소음 민원 경고 누적 시 환불 없이 강제 퇴실 조치될 수 있습니다."
      ]
    },
    {
      title: "화재 안전 및 전기 사용 수칙",
      icon: "ShieldAlert",
      items: [
        "텐트 내부에서의 숯, 번개탄, 등유 난로 무단 사용 절대 금지 (일산화탄소 경보기 무료 대여)",
        "화로대 사용 시 반드시 받침대를 사용하며 재는 전용 잔불 수거통에 폐기",
        "사이트당 전기 소비전력은 600W 이하 준수 (고출력 온풍기, 에어프라이어 사용 제한)"
      ]
    },
    {
      title: "반려동물 및 분리수거 수칙",
      icon: "HeartHandshake",
      items: [
        "반려동물은 B구역(파쇄석) 일부 사이트에 한해 10kg 이하 소형견 동반 가능 (목줄 착용 필수)",
        "발생한 쓰레기는 관리동 옆 분리수거장에 재활용/일반/음식물 분리 배출",
        "자연을 지키는 친환경 캠퍼가 되어주세요."
      ]
    }
  ],

  faqs: [
    {
      category: "예약 및 결제",
      question: "땡큐캠핑 앱에서 예약하면 어떤 혜택이 있나요?",
      answer: "땡큐캠핑 실시간 예약 시스템을 통해 잔여 사이트를 실시간으로 확인하고 간편결제(네이버페이, 카카오페이 등)가 가능하며, 땡큐캠핑 포인트 적립 및 제휴 할인 쿠폰을 적용받으실 수 있습니다."
    },
    {
      category: "시설 및 전기",
      question: "전기장판이나 드라이기 사용이 가능한가요?",
      answer: "사이트마다 단독 600W 용량 분전함이 제공되므로 100~300W 내외의 캠핑용 전기장판은 충분히 사용 가능합니다. 다만 1000W 이상의 고출력 헤어드라이어는 공용 샤워장 파우더룸에 비치된 정품 드라이기를 이용해 주시기 바랍니다."
    },
    {
      category: "방문객 및 차량",
      question: "당일 방문객이나 추가 차량 진입이 가능한가요?",
      answer: "조용하고 쾌적한 힐링 캠핑 환경을 위해 사전 협의 없는 당일 방문객은 입장이 제한됩니다. 추가 차량은 1대당 1박 10,000원의 추가요금이 발생하며 지정된 외부 주차장을 이용하셔야 합니다."
    },
    {
      category: "우천 및 기상",
      question: "비가 오거나 눈이 오면 예약 취소 및 환불이 가능한가요?",
      answer: "일반적인 우천이나 눈으로는 취소 시 표준 환불 규정이 적용됩니다. 다만 기상청 공식 호우경보, 대설경보, 태풍경보 등 기상특보가 발효되어 입실이 불가능한 경우 땡큐캠핑 정책에 따라 100% 전액 환불 또는 일정 연기를 도와드립니다."
    },
    {
      category: "캠핑 용품 대여",
      question: "텐트나 장비가 없는 초보인데 대여가 되나요?",
      answer: "장비가 없으신 분들을 위해 럭셔리 글램핑과 풀옵션 카라반이 준비되어 있습니다. 또한 일반 사이트 이용객에게는 침낭, 릴선, 화로대, 일산화탄소 경보기 등 기본 안전 물품을 관리동 매점에서 저렴하게 대여해 드립니다."
    }
  ]
};
