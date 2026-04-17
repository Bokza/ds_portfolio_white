import Slide01 from "../slides/Slide01";
import Slide02 from "../slides/Slide02";
import Slide03 from "../slides/Slide03";
import Slide04 from "../slides/Slide04";
import Slide05 from "../slides/Slide05";
import Slide06 from "../slides/Slide06";
import Slide07 from "../slides/Slide07";
import Slide08 from "../slides/Slide08";
import Slide09 from "../slides/Slide09";
import Slide10 from "../slides/Slide10";
import Slide11 from "../slides/Slide11";
import Slide12 from "../slides/Slide12";

export const slides = [
  { id: "1", title: "데이터 사이언스 포트폴리오 커버", component: Slide01 },
  { id: "2", title: "프로젝트 개요", component: Slide02 },
  { id: "3", title: "건물 재실 예측 솔루션", component: Slide03 },
  { id: "4", title: "건물 에너지 사용량 예측", component: Slide04 },
  { id: "5", title: "LLM 기반 에너지 분석 챗봇", component: Slide05 },
  { id: "6", title: "DQN 기반 건물 냉난방 자동 제어 시스템", component: Slide06 },
  { id: "7", title: "건물 에너지·IAQ 이상 탐지 시스템", component: Slide07 },
  { id: "8", title: "기술 스택 및 성과 요약", component: Slide08 },
  { id: "9", title: "저수지 수위 예측 솔루션", component: Slide09 },
  { id: "10", title: "데이터 분석 대회 경험 하이라이트", component: Slide10 },
  { id: "11", title: "자격증 및 교육 이력", component: Slide11 },
  { id: "12", title: "마무리", component: Slide12 },
] as const;
