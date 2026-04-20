import SlideFrame from "../components/SlideFrame";

const slideCss = `

        body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #F8FAFC; /* Slate 50 */
            color: #1E293B; /* Slate 800 */
            font-family: 'Noto Sans KR', sans-serif;
        }
        
        .slide-container {
            width: 1280px;
            height: 720px;
            position: relative;
            overflow: hidden;
            background-color: #F8FAFC;
        }

        /* Background Elements */
        .bg-grid {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px);
            background-size: 60px 60px;
            z-index: 1;
            pointer-events: none;
        }

        .glow-orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(100px);
            z-index: 1;
            opacity: 0.1;
            pointer-events: none;
        }

        .orb-top-right {
            width: 500px;
            height: 500px;
            background-color: #3B82F6;
            top: -150px;
            right: -150px;
        }

        .orb-bottom-left {
            width: 400px;
            height: 400px;
            background-color: #10B981;
            bottom: -100px;
            left: -100px;
        }

        /* Typography */
        .title {
            font-size: 40px;
            font-weight: 800;
            color: #0F172A; /* Slate 900 */
            letter-spacing: -0.02em;
            margin: 0 0 10px 0;
        }

        .subtitle {
            font-size: 18px;
            color: #64748B; /* Slate 500 */
            font-weight: 400;
            margin: 0;
            letter-spacing: -0.01em;
        }

        .section-label {
            font-size: 14px;
            font-weight: 700;
            color: #2563EB; /* Blue 600 */
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-bottom: 8px;
        }

        /* Stats Cards */
        .stat-card {
            background: #FFFFFF;
            border: 1px solid rgba(59, 130, 246, 0.15);
            border-radius: 12px;
            padding: 12px 20px;
            text-align: right;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
            min-width: 120px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .stat-label {
            font-size: 11px;
            color: #64748B; /* Slate 500 */
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 2px;
            font-weight: 600;
        }

        .stat-value {
            font-size: 24px;
            font-weight: 800;
            color: #0F172A; /* Slate 900 */
            line-height: 1.2;
        }

        .stat-value.highlight {
            color: #059669; /* Emerald 600 */
        }

        /* Project Cards */
        .project-card {
            background: #FFFFFF;
            border-radius: 16px;
            padding: 24px;
            position: relative;
            box-shadow: 0 10px 25px rgba(15, 23, 42, 0.06), 0 1px 3px rgba(15, 23, 42, 0.04);
            border: 1px solid rgba(226, 232, 240, 0.8);
            overflow: hidden;
            display: flex;
            flex-direction: column;
            z-index: 10;
        }

        .project-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, var(--card-color-1), var(--card-color-2));
            opacity: 0.9;
        }

        .card-number {
            position: absolute;
            top: 10px;
            right: 20px;
            font-size: 64px;
            font-weight: 900;
            color: rgba(15, 23, 42, 0.04);
            line-height: 1;
            z-index: 1;
        }

        .card-icon-wrapper {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            margin-bottom: 16px;
            background: linear-gradient(135deg, rgba(var(--icon-rgb), 0.12), rgba(var(--icon-rgb), 0.04));
            color: rgb(var(--icon-rgb-dark));
            border: 1px solid rgba(var(--icon-rgb), 0.2);
            z-index: 2;
            position: relative;
        }

        .card-title {
            font-size: 20px;
            font-weight: 700;
            color: #1E293B; /* Slate 800 */
            margin-bottom: 10px;
            z-index: 2;
            position: relative;
        }

        .card-desc {
            font-size: 14.5px;
            color: #475569; /* Slate 600 */
            line-height: 1.55;
            margin-bottom: 16px;
            flex-grow: 1;
            z-index: 2;
            position: relative;
            font-weight: 400;
        }

        .tech-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            z-index: 2;
            position: relative;
            margin-top: auto;
        }

        .tech-tag {
            padding: 4px 10px;
            background-color: #F1F5F9; /* Slate 100 */
            border: 1px solid #E2E8F0; /* Slate 200 */
            border-radius: 6px;
            font-size: 11px;
            color: #475569; /* Slate 600 */
            font-weight: 600;
        }

        /* Color Definitions for Cards */
        .color-blue {
            --card-color-1: #2563EB; /* Blue 600 */
            --card-color-2: #60A5FA; /* Blue 400 */
            --icon-rgb: 37, 99, 235;
            --icon-rgb-dark: 29, 78, 216; /* Blue 700 */
        }
        
        .color-emerald {
            --card-color-1: #059669; /* Emerald 600 */
            --card-color-2: #34D399; /* Emerald 400 */
            --icon-rgb: 5, 150, 105;
            --icon-rgb-dark: 4, 120, 87; /* Emerald 700 */
        }
        
        .color-purple {
            --card-color-1: #7C3AED; /* Violet 600 */
            --card-color-2: #A78BFA; /* Violet 400 */
            --icon-rgb: 124, 58, 237;
            --icon-rgb-dark: 109, 40, 217; /* Violet 700 */
        }
        
        .color-orange {
            --card-color-1: #D97706; /* Amber 600 */
            --card-color-2: #FBBF24; /* Amber 400 */
            --icon-rgb: 217, 119, 6;
            --icon-rgb-dark: 180, 83, 9; /* Amber 700 */
        }
        
        .color-rose {
            --card-color-1: #E11D48; /* Rose 600 */
            --card-color-2: #FB7185; /* Rose 400 */
            --icon-rgb: 225, 29, 72;
            --icon-rgb-dark: 190, 18, 60; /* Rose 700 */
        }
    `;

export default function Slide02() {
  return (
    <SlideFrame>
      <style>{slideCss}</style>
  <div className="slide-container">
    <div data-object="true" data-object-type="shape" style={{position: "absolute", left: "0", top: "0", width: "1280px", height: "720px", zIndex: "1"}}>
      <div className="bg-grid"></div>
      <div className="glow-orb orb-top-right"></div>
      <div className="glow-orb orb-bottom-left"></div>
    </div>
    <div data-object="true" data-object-type="textbox" style={{position: "absolute", left: "60px", top: "50px", width: "800px", height: "135px", zIndex: "10"}}>
      <div className="section-label">
        Project Overview
      </div>
      <h2 className="title">
        프로젝트 한눈에 보기
      </h2>
      <p className="subtitle">
        건물 에너지 관리 효율화를 위해 개발 및 운영 중인 5가지 핵심 ML 서비스
      </p>
    </div>
    <div data-object="true" data-object-type="textbox" style={{position: "absolute", left: "860px", top: "60px", width: "360px", height: "100px", zIndex: "10", display: "flex", gap: "12px", justifyContent: "flex-end"}}>
      <div className="stat-card">
        <div className="stat-label">
          Total Projects
        </div>
        <div className="stat-value">
          5
        </div>
      </div>
      <span
        style={{
          background: "#ECFDF5",
          border: "1px solid #A7F3D0",
          color: "#059669",
          fontSize: "13px",
          fontWeight: "700",
          padding: "4px 14px",
          borderRadius: "20px",
          letterSpacing: "0.05em",
          alignSelf: "center",
        }}
      >
        PRODUCTION
      </span>
    </div>
    <div data-object="true" data-object-type="shape" style={{position: "absolute", left: "60px", top: "190px", width: "1160px", height: "1px", background: "linear-gradient(90deg, rgba(148, 163, 184, 0.4), transparent)", zIndex: "10"}}></div>
    <div className="project-card color-blue" data-object="true" data-object-type="textbox" style={{position: "absolute", left: "60px", top: "220px", width: "370px", height: "235px"}}>
      <div className="card-number">
        01
      </div>
      <div className="card-icon-wrapper">
        <i className="fa-solid fa-users-viewfinder"></i>
      </div>
      <div className="card-title">
        재실 예측 솔루션
      </div>
      <div className="card-desc">
        전열·조명 에너지 패턴을 분석하여 실시간 재실 여부 및 재실률을 예측하는 BEMS 핵심 서비스
      </div>
      <div className="tech-tags">
        <span className="tech-tag">
          HMM
        </span>
        <span className="tech-tag">
          KMeans
        </span>
        <span className="tech-tag">
          BentoML
        </span>
      </div>
    </div>
    <div className="project-card color-orange" data-object="true" data-object-type="textbox" style={{position: "absolute", left: "455px", top: "220px", width: "370px", height: "235px"}}>
      <div className="card-number">
        02
      </div>
      <div className="card-icon-wrapper">
        <i className="fa-solid fa-bolt-lightning"></i>
      </div>
      <div className="card-title">
        에너지 사용량 예측
      </div>
      <div className="card-desc">
        15분 단위 데이터를 기반으로 XGBoost 듀얼 모델을 활용해 미래 수요와 낭비량을 정밀 예측
      </div>
      <div className="tech-tags">
        <span className="tech-tag">
          XGBoost
        </span>
        <span className="tech-tag">
          MLflow
        </span>
        <span className="tech-tag">
          AWS
        </span>
      </div>
    </div>
    <div className="project-card color-purple" data-object="true" data-object-type="textbox" style={{position: "absolute", left: "850px", top: "220px", width: "370px", height: "235px"}}>
      <div className="card-number">
        03
      </div>
      <div className="card-icon-wrapper">
        <i className="fa-solid fa-robot"></i>
      </div>
      <div className="card-title">
        LLM 기반 분석 챗봇
      </div>
      <div className="card-desc">
        자연어로 복잡한 에너지 데이터를 조회하고 분석할 수 있는 멀티턴 대화형 AI 에이전트
      </div>
      <div className="tech-tags">
        <span className="tech-tag">
          LangGraph
        </span>
        <span className="tech-tag">
          GPT-4
        </span>
        <span className="tech-tag">
          PostgreSQL
        </span>
      </div>
    </div>
    <div className="project-card color-rose" data-object="true" data-object-type="textbox" style={{position: "absolute", left: "257px", top: "475px", width: "370px", height: "235px"}}>
      <div className="card-number">
        04
      </div>
      <div className="card-icon-wrapper">
        <i className="fa-solid fa-temperature-arrow-up"></i>
      </div>
      <div className="card-title">
        DQN 냉난방 자동제어
      </div>
      <div className="card-desc">
        강화학습(DQN)을 통해 쾌적 범위 유지와 에너지 비용 절감을 동시에 달성하는 제어 정책 학습
      </div>
      <div className="tech-tags">
        <span className="tech-tag">
          PyTorch
        </span>
        <span className="tech-tag">
          RL / DQN
        </span>
        <span className="tech-tag">
          Airflow
        </span>
      </div>
    </div>
    <div className="project-card color-emerald" data-object="true" data-object-type="textbox" style={{position: "absolute", left: "652px", top: "475px", width: "370px", height: "235px"}}>
      <div className="card-number">
        05
      </div>
      <div className="card-icon-wrapper">
        <i className="fa-solid fa-chart-line"></i>
      </div>
      <div className="card-title">
        에너지·IAQ 이상 탐지
      </div>
      <div className="card-desc">
        통계적 기법 앙상블을 적용하여 50개 이상의 센서 데이터에서 이상 징후를 실시간 모니터링
      </div>
      <div className="tech-tags">
        <span className="tech-tag">
          Hampel Filter
        </span>
        <span className="tech-tag">
          IQR
        </span>
        <span className="tech-tag">
          Real-time
        </span>
      </div>
    </div>
  </div>
    </SlideFrame>
  );
}
