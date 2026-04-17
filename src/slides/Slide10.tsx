import SlideFrame from "../components/SlideFrame";

const slideCss = `

        body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #FFFFFF;
            color: #1E293B;
            font-family: 'Noto Sans KR', sans-serif;
        }
        
        #slide-container {
            width: 1280px;
            height: 720px;
            position: relative;
            overflow: hidden;
            background: linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%);
        }

        .bg-grid-pattern {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23cbd5e1' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
            z-index: 0;
        }

        .glow-blob {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            z-index: 0;
            opacity: 0.1;
            pointer-events: none;
        }

        .blob-gold {
            width: 600px;
            height: 600px;
            background-color: #F59E0B;
            top: -200px;
            right: -100px;
        }

        .blob-blue {
            width: 500px;
            height: 500px;
            background-color: #3B82F6;
            bottom: -150px;
            left: -100px;
        }

        .contest-card {
            background-color: #FFFFFF;
            border-radius: 16px;
            padding: 24px 20px 20px 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
            overflow: hidden;
        }

        .rank-badge {
            position: absolute;
            top: 0;
            right: 0;
            padding: 6px 16px;
            border-bottom-left-radius: 16px;
            font-size: 0.85rem;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .key-point-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .key-point-list li {
            font-size: 0.875rem;
            color: #475569;
            margin-bottom: 8px;
            padding-left: 16px;
            position: relative;
            line-height: 1.5;
        }

        .key-point-list li::before {
            content: "•";
            color: #3B82F6;
            position: absolute;
            left: 0;
            font-weight: bold;
        }

        .mini-tag {
            font-size: 0.75rem;
            padding: 2px 10px;
            border-radius: 6px;
            background-color: #FFFFFF;
            color: #475569;
            border: 1px solid #E2E8F0;
            font-weight: 500;
        }
    `;

export default function Slide10() {
  return (
    <SlideFrame>
      <style>{slideCss}</style>
  <div id="slide-container">
    <div className="bg-grid-pattern"></div>
    <div className="glow-blob blob-gold"></div>
    <div className="glow-blob blob-blue"></div>
    <div className="header" data-object="true" data-object-type="textbox" style={{position: "absolute", left: "60px", top: "40px", width: "1160px", height: "100px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderBottom: "1px solid rgba(203, 213, 225, 0.8)", paddingBottom: "1.5rem"}}>
      <div>
        <p style={{color: "#D97706", fontWeight: "700", fontSize: "0.875rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px"}}>
          Competition Experience
        </p>
        <h1 style={{fontSize: "2.5rem", fontWeight: "900", color: "#0F172A", margin: "0", letterSpacing: "-0.025em"}}>
          데이터 분석 대회 성과 
          <span style={{fontWeight: "300", color: "#64748B"}}>
            | Awards & Recognition
          </span>
        </h1>
      </div>
      <div style={{display: "flex", gap: "2rem", alignItems: "center", marginBottom: "4px"}}>
        <div style={{textAlign: "center"}}>
          <p style={{fontSize: "1.75rem", fontWeight: "800", color: "#1E293B", lineHeight: "1"}}>
            6
          </p>
          <p style={{fontSize: "0.75rem", color: "#64748B", fontWeight: "600", textTransform: "uppercase", marginTop: "4px"}}>
            Total
          </p>
        </div>
        <div style={{width: "1px", height: "32px", backgroundColor: "#CBD5E1"}}></div>
        <div style={{textAlign: "center"}}>
          <p style={{fontSize: "1.75rem", fontWeight: "800", color: "#D97706", lineHeight: "1"}}>
            3
          </p>
          <p style={{fontSize: "0.75rem", color: "#64748B", fontWeight: "600", textTransform: "uppercase", marginTop: "4px"}}>
            Wins (1st)
          </p>
        </div>
      </div>
    </div>
    <div className="contest-card" data-object="true" data-object-type="textbox" style={{position: "absolute", left: "60px", top: "180px", width: "370px", height: "250px", backgroundColor: "#FFFFFF", border: "1px solid #E2E8F0"}}>
      <div className="rank-badge" style={{backgroundColor: "#FEF9EE", color: "#D97706", borderLeft: "1px solid #F5D8A8", borderBottom: "1px solid #F5D8A8"}}>
        <i className="fas fa-trophy mr-1"></i>
         1위
      </div>
      <div>
        <h2 style={{fontSize: "1.15rem", fontWeight: "800", color: "#1E293B", margin: "0", lineHeight: "1.3"}}>
          유튜브 구독자 수 회귀식 추론
        </h2>
        <p style={{fontSize: "0.85rem", color: "#64748B", margin: "6px 0 12px 0", fontWeight: "500"}}>
          교내 통계경진대회 회귀분석 부문
        </p>
        <ul className="key-point-list">
          <li>
            Best Subset Selection 기반 최적 변수 도출
          </li>
          <li>
            오차항 정규성/등분산성/독립성 가정 검정
          </li>
          <li>
            "Shorts" 콘텐츠의 유의미한 영향 입증
          </li>
        </ul>
      </div>
      <div style={{marginTop: "16px", paddingTop: "12px", borderTop: "1px solid rgba(226, 232, 240, 0.6)", display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
        <div style={{display: "flex", gap: "6px"}}>
          <span className="mini-tag">
            SPSS
          </span>
          <span className="mini-tag">
            Regression
          </span>
        </div>
        <div style={{textAlign: "right"}}>
          <div style={{fontSize: "0.95rem", fontWeight: "800", color: "#D97706"}}>
            Valid
          </div>
          <div style={{fontSize: "0.65rem", color: "#64748B", textTransform: "uppercase", fontWeight: "600"}}>
            Model Fit
          </div>
        </div>
      </div>
    </div>
    <div className="contest-card" data-object="true" data-object-type="textbox" style={{position: "absolute", left: "455px", top: "180px", width: "370px", height: "250px", backgroundColor: "#FFFFFF", border: "1px solid #E2E8F0"}}>
      <div className="rank-badge" style={{backgroundColor: "#FEF9EE", color: "#D97706", borderLeft: "1px solid #F5D8A8", borderBottom: "1px solid #F5D8A8"}}>
        <i className="fas fa-trophy mr-1"></i>
         1위
      </div>
      <div>
        <h2 style={{fontSize: "1.15rem", fontWeight: "800", color: "#1E293B", margin: "0", lineHeight: "1.3"}}>
          학습 플랫폼 구독 갱신 예측
        </h2>
        <p style={{fontSize: "0.85rem", color: "#64748B", margin: "6px 0 12px 0", fontWeight: "500"}}>
          2023 사용자 행동 데이터 분석
        </p>
        <ul className="key-point-list">
          <li>
            ESD/IQR 기반 클래스별 이상치 처리
          </li>
          <li>
            Target Encoding 피처 엔지니어링
          </li>
          <li>
            PyTorch MLP 모델 설계 및 학습
          </li>
        </ul>
      </div>
      <div style={{marginTop: "16px", paddingTop: "12px", borderTop: "1px solid rgba(226, 232, 240, 0.6)", display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
        <div style={{display: "flex", gap: "6px"}}>
          <span className="mini-tag">
            PyTorch
          </span>
          <span className="mini-tag">
            MLP
          </span>
        </div>
        <div style={{textAlign: "right"}}>
          <div style={{fontSize: "0.95rem", fontWeight: "800", color: "#D97706"}}>
            0.5264
          </div>
          <div style={{fontSize: "0.65rem", color: "#64748B", textTransform: "uppercase", fontWeight: "600"}}>
            Macro F1 Score
          </div>
        </div>
      </div>
    </div>
    <div className="contest-card" data-object="true" data-object-type="textbox" style={{position: "absolute", left: "850px", top: "180px", width: "370px", height: "250px", backgroundColor: "#FFFFFF", border: "1px solid #E2E8F0"}}>
      <div className="rank-badge" style={{backgroundColor: "#FEF9EE", color: "#D97706", borderLeft: "1px solid #F5D8A8", borderBottom: "1px solid #F5D8A8"}}>
        <i className="fas fa-trophy mr-1"></i>
         1위
      </div>
      <div>
        <h2 style={{fontSize: "1.15rem", fontWeight: "800", color: "#1E293B", margin: "0", lineHeight: "1.3"}}>
          기업 성공 확률 예측
        </h2>
        <p style={{fontSize: "0.85rem", color: "#64748B", margin: "6px 0 12px 0", fontWeight: "500"}}>
          스타트업 비즈니스 데이터 분석
        </p>
        <ul className="key-point-list">
          <li>
            직원/매출/투자금 기반 6개 파생변수 생성
          </li>
          <li>
            결측치 그룹 평균 대체 및 이상치 보정
          </li>
          <li>
            RandomForest + GridSearch 최적화
          </li>
        </ul>
      </div>
      <div style={{marginTop: "16px", paddingTop: "12px", borderTop: "1px solid rgba(226, 232, 240, 0.6)", display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
        <div style={{display: "flex", gap: "6px"}}>
          <span className="mini-tag">
            RF
          </span>
          <span className="mini-tag">
            GridSearch
          </span>
        </div>
        <div style={{textAlign: "right"}}>
          <div style={{fontSize: "0.95rem", fontWeight: "800", color: "#D97706"}}>
            0.2027
          </div>
          <div style={{fontSize: "0.65rem", color: "#64748B", textTransform: "uppercase", fontWeight: "600"}}>
            MAE (Error)
          </div>
        </div>
      </div>
    </div>
    <div className="contest-card" data-object="true" data-object-type="textbox" style={{position: "absolute", left: "60px", top: "450px", width: "370px", height: "250px", border: "1px solid #BFDBFE"}}>
      <div className="rank-badge" style={{backgroundColor: "#F1F5F9", color: "#475569", borderLeft: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0"}}>
        <i className="fas fa-star mr-1"></i>
         사전1위
      </div>
      <div>
        <h2 style={{fontSize: "1.15rem", fontWeight: "800", color: "#1E293B", margin: "0", lineHeight: "1.3"}}>
          RF 파라미터 최적화
        </h2>
        <p style={{fontSize: "0.85rem", color: "#64748B", margin: "6px 0 12px 0", fontWeight: "500"}}>
          하이퍼파라미터 튜닝 챌린지
        </p>
        <ul className="key-point-list">
          <li>
            Optuna 활용 베이지안 최적화 탐색
          </li>
          <li>
            Grid Search를 통한 미세 조정(Fine-tuning)
          </li>
          <li>
            탐색 시간 대비 성능 효율성 극대화
          </li>
        </ul>
      </div>
      <div style={{marginTop: "16px", paddingTop: "12px", borderTop: "1px solid #F1F5F9", display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
        <div style={{display: "flex", gap: "6px"}}>
          <span className="mini-tag">
            Optuna
          </span>
          <span className="mini-tag">
            AutoML
          </span>
        </div>
        <div style={{textAlign: "right"}}>
          <div style={{fontSize: "0.95rem", fontWeight: "800", color: "#2563EB"}}>
            0.833
          </div>
          <div style={{fontSize: "0.65rem", color: "#64748B", textTransform: "uppercase", fontWeight: "600"}}>
            AUC Score
          </div>
        </div>
      </div>
    </div>
    <div className="contest-card" data-object="true" data-object-type="textbox" style={{position: "absolute", left: "455px", top: "450px", width: "370px", height: "250px", border: "1px solid #BFDBFE"}}>
      <div className="rank-badge" style={{backgroundColor: "#F1F5F9", color: "#475569", borderLeft: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0"}}>
        <i className="fas fa-medal mr-1"></i>
         4위
      </div>
      <div>
        <h2 style={{fontSize: "1.15rem", fontWeight: "800", color: "#1E293B", margin: "0", lineHeight: "1.3"}}>
          서울시 평균 기온 예측
        </h2>
        <p style={{fontSize: "0.85rem", color: "#64748B", margin: "6px 0 12px 0", fontWeight: "500"}}>
          시계열 기상 데이터 분석
        </p>
        <ul className="key-point-list">
          <li>
            VIF 기반 다중공선성 진단 및 변수 제거
          </li>
          <li>
            Prophet(추세) + XGBoost(잔차) 결합
          </li>
          <li>
            하이브리드 모델링으로 예측 성능 극대화
          </li>
        </ul>
      </div>
      <div style={{marginTop: "16px", paddingTop: "12px", borderTop: "1px solid #F1F5F9", display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
        <div style={{display: "flex", gap: "6px"}}>
          <span className="mini-tag">
            Prophet
          </span>
          <span className="mini-tag">
            XGBoost
          </span>
        </div>
        <div style={{textAlign: "right"}}>
          <div style={{fontSize: "0.95rem", fontWeight: "800", color: "#2563EB"}}>
            2.556
          </div>
          <div style={{fontSize: "0.65rem", color: "#64748B", textTransform: "uppercase", fontWeight: "600"}}>
            MAE Score
          </div>
        </div>
      </div>
    </div>
    <div className="contest-card" data-object="true" data-object-type="textbox" style={{position: "absolute", left: "850px", top: "450px", width: "370px", height: "250px", border: "1px solid #BFDBFE"}}>
      <div className="rank-badge" style={{backgroundColor: "#F1F5F9", color: "#475569", borderLeft: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0"}}>
        7위 (사전2위)
      </div>
      <div>
        <h2 style={{fontSize: "1.15rem", fontWeight: "800", color: "#1E293B", margin: "0", lineHeight: "1.3"}}>
          대출 등급 분류 예측
        </h2>
        <p style={{fontSize: "0.85rem", color: "#64748B", margin: "6px 0 12px 0", fontWeight: "500"}}>
          금융 고객 데이터 등급 분류
        </p>
        <ul className="key-point-list">
          <li>
            카이제곱/ANOVA 검정 통한 변수 유의성 분석
          </li>
          <li>
            Stratified 5-Fold CV 검증 전략 수립
          </li>
          <li>
            학습 곡선(Learning Curve) 기반 과적합 방지
          </li>
        </ul>
      </div>
      <div style={{marginTop: "16px", paddingTop: "12px", borderTop: "1px solid #F1F5F9", display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
        <div style={{display: "flex", gap: "6px"}}>
          <span className="mini-tag">
            sklearn
          </span>
          <span className="mini-tag">
            RF
          </span>
        </div>
        <div style={{textAlign: "right"}}>
          <div style={{fontSize: "0.95rem", fontWeight: "800", color: "#2563EB"}}>
            0.947
          </div>
          <div style={{fontSize: "0.65rem", color: "#64748B", textTransform: "uppercase", fontWeight: "600"}}>
            Macro F1 Score
          </div>
        </div>
      </div>
    </div>
  </div>
    </SlideFrame>
  );
}
