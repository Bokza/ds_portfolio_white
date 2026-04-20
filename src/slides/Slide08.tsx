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
            display: flex;
            flex-direction: column;
            padding: 28px 50px;
            box-sizing: border-box;
        }

        .grid-pattern {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23f1f5f9' fill-opacity='0.8' fill-rule='evenodd'/%3E%3C/svg%3E");
            opacity: 0.8;
            z-index: 0;
        }

        .glow-orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            z-index: 1;
            opacity: 0.15;
            pointer-events: none;
        }

        .orb-blue {
            width: 500px;
            height: 500px;
            background-color: #DBEAFE;
            top: -100px;
            right: -100px;
            opacity: 0.5;
        }

        .orb-purple {
            width: 400px;
            height: 400px;
            background-color: #F3E8FF;
            bottom: -50px;
            left: -50px;
            opacity: 0.5;
        }

        .content-layer {
            position: relative;
            z-index: 10;
            display: flex;
            flex-direction: column;
            height: 100%;
        }

        .header {
            margin-bottom: 14px;
            border-bottom: 1px solid #E2E8F0;
            padding-bottom: 12px;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
        }

        .header-title h1 {
            font-size: 2.25rem;
            font-weight: 800;
            color: #0F172A;
            margin: 0;
            letter-spacing: -0.025em;
        }
        
        .header-subtitle p {
            font-size: 1rem;
            color: #64748B;
            margin: 0.5rem 0 0 0;
        }

        .main-content {
            display: flex;
            gap: 28px;
            flex: 1;
        }

        .tech-column {
            flex: 0 0 42%;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .tech-category {
            background-color: #FFFFFF;
            border: 1px solid #E2E8F0;
            border-radius: 12px;
            padding: 14px 18px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
            flex: 1;
        }

        .category-title {
            font-size: 0.875rem;
            color: #2563EB;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .tag-container {
            display: flex;
            flex-wrap: wrap;
            gap: 7px;
        }

        .tech-tag {
            background-color: #F8FAFC;
            border: 1px solid #E2E8F0;
            color: #334155;
            padding: 5px 10px;
            border-radius: 6px;
            font-size: 0.82rem;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .metrics-column {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .hero-metrics {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            height: 175px;
        }

        .hero-card {
            background-color: #FFFFFF;
            border: 1px solid #E2E8F0;
            border-radius: 16px;
            padding: 16px 20px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            position: relative;
            overflow: hidden;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
        }

        .hero-value {
            font-size: 2.8rem;
            font-weight: 900;
            line-height: 1;
            margin-bottom: 6px;
        }

        .hero-label {
            font-size: 1rem;
            color: #0F172A;
            font-weight: 700;
            margin-bottom: 4px;
        }

        .hero-sub {
            font-size: 0.8rem;
            color: #64748B;
            margin-top: 2px;
            line-height: 1.4;
        }

        .grid-metrics {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
            flex: 1;
        }

        .metric-item {
            background-color: #FFFFFF;
            border: 1px solid #E2E8F0;
            border-top: 4px solid #94A3B8;
            border-radius: 12px;
            padding: 16px 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }

        .metric-item.accent-green { border-top-color: #10B981; }
        .metric-item.accent-blue { border-top-color: #3B82F6; }
        .metric-item.accent-purple { border-top-color: #8B5CF6; }
        .metric-item.accent-orange { border-top-color: #F97316; }

        .m-icon {
            font-size: 1.5rem;
            margin-bottom: 8px;
        }

        .m-value {
            font-size: 2.25rem;
            font-weight: 800;
            color: #0F172A;
        }

        .m-label {
            font-size: 0.9rem;
            color: #475569;
            font-weight: 600;
            margin-top: 8px;
            line-height: 1.2;
        }

        .chart-mini-container {
            position: absolute;
            right: 0;
            bottom: 0;
            width: 160px;
            height: 100px;
            opacity: 0.6;
            pointer-events: none;
        }

    `;

export default function Slide08() {
  return (
    <SlideFrame>
      <style>{slideCss}</style>
      <div id="slide-container">
        <div className="grid-pattern"></div>
        <div className="glow-orb orb-blue"></div>
        <div className="glow-orb orb-purple"></div>
        <div className="content-layer">
          <div className="header">
            <div className="header-title">
              <p className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-1">
                Impact Summary
              </p>
              <h1>기술 스택 & 핵심 성과</h1>
              <div className="header-subtitle">
                <p>검증된 아키텍처와 데이터 기반의 정량적 성과 달성</p>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-blue-50 border border-blue-200 px-6 py-3 rounded-xl shadow-sm">
                <p className="text-blue-500 text-xs font-bold uppercase tracking-wider mb-1">
                  Work Experience
                </p>
                <p className="text-blue-900 text-2xl font-black">
                  2+ Years
                </p>
              </div>
            </div>
          </div>
          <div className="main-content">
            <div className="tech-column">
              <div className="tech-category">
                <div className="category-title">
                  <i className="fas fa-brain text-purple-600"></i>
                  ML & Modeling
                </div>
                <div className="tag-container">
                  <div className="tech-tag">
                    <i className="fab fa-python text-blue-500"></i>
                    Python
                  </div>
                  <div className="tech-tag">
                    <i className="fas fa-microchip text-orange-500"></i>
                    PyTorch
                  </div>
                  <div className="tech-tag">
                    <i className="fas fa-project-diagram text-green-500"></i>
                    XGBoost
                  </div>
                  <div className="tech-tag">
                    <i className="fas fa-wave-square text-red-500"></i>
                    SegRNN
                  </div>
                  <div className="tech-tag">
                    <i className="fas fa-robot text-indigo-500"></i>
                    Reinforcement Learning
                  </div>
                  <div className="tech-tag">
                    <i className="fas fa-calculator text-slate-500"></i>
                    Scikit-learn
                  </div>
                </div>
              </div>
              <div className="tech-category">
                <div className="category-title">
                  <i className="fas fa-cogs text-blue-600"></i>
                  MLOps & Observability
                </div>
                <div className="tag-container">
                  <div className="tech-tag">
                    <i className="fas fa-wind text-cyan-500"></i>
                    Airflow
                  </div>
                  <div className="tech-tag">
                    <i className="fab fa-aws text-orange-400"></i>
                    EC2
                  </div>
                  <div className="tech-tag">
                    <i className="fas fa-cubes text-orange-400"></i>
                    ECS
                  </div>
                  <div className="tech-tag">
                    <i className="fas fa-box-open text-blue-400"></i>
                    BentoML
                  </div>
                  <div className="tech-tag">
                    <i className="fas fa-history text-indigo-400"></i>
                    MLflow
                  </div>
                  <div className="tech-tag">
                    <i className="fab fa-docker text-blue-600"></i>
                    Docker
                  </div>
                  <div className="tech-tag">
                    <i className="fas fa-chart-area text-orange-500"></i>
                    Grafana
                  </div>
                  <div className="tech-tag">
                    <i className="fas fa-eye text-red-500"></i>
                    Prometheus
                  </div>
                </div>
              </div>
              <div className="tech-category">
                <div className="category-title">
                  <i className="fas fa-database text-green-600"></i>
                  Database & Cloud
                </div>
                <div className="tag-container">
                  <div className="tech-tag">
                    <i className="fas fa-database text-blue-600"></i>
                    PostgreSQL
                  </div>
                  <div className="tech-tag">
                    <i className="fab fa-aws text-orange-400"></i>
                    AWS DynamoDB
                  </div>
                  <div className="tech-tag">
                    <i className="fas fa-bolt text-teal-500"></i>
                    FastAPI
                  </div>
                  <div className="tech-tag">
                    <i className="fas fa-fire text-orange-600"></i>
                    Spark
                  </div>
                  <div className="tech-tag">
                    <i className="fas fa-code-branch text-indigo-600"></i>
                    LangGraph
                  </div>
                </div>
              </div>
            </div>
            <div className="metrics-column">
              <div className="hero-metrics">
                <div className="hero-card border-t-4 border-t-green-500">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="hero-value text-green-600">6</span>
                      <span className="text-2xl font-bold text-slate-400 ml-1">
                        Projects
                      </span>
                    </div>
                    <i className="fas fa-rocket text-4xl text-green-100"></i>
                  </div>
                  <p className="hero-label">프로덕션 배포 경험</p>
                </div>
                <div className="hero-card border-t-4 border-t-yellow-500">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="hero-value text-yellow-600">3</span>
                      <span className="text-2xl font-bold text-slate-400 ml-1">
                        Awards
                      </span>
                    </div>
                    <i className="fas fa-trophy text-4xl text-yellow-100"></i>
                  </div>
                  <p className="hero-label">데이터 분석 대회 수상</p>
                </div>
              </div>
              <div className="grid-metrics">
                <div className="metric-item accent-blue">
                  <i className="fas fa-code-branch m-icon text-blue-500"></i>
                  <div>
                    <span className="m-value">6</span>
                    <span className="text-xl text-slate-400 font-bold ml-1">
                      개
                    </span>
                  </div>
                  <p className="m-label">ML 모델 프로덕션 배포</p>
                </div>
                <div className="metric-item accent-purple">
                  <i className="fas fa-certificate m-icon text-purple-500"></i>
                  <div>
                    <span className="m-value">4</span>
                    <span className="text-xl text-slate-400 font-bold ml-1">
                      개
                    </span>
                  </div>
                  <p className="m-label">데이터 관련 자격증 보유</p>
                </div>
                <div className="metric-item accent-green">
                  <i className="fas fa-network-wired m-icon text-green-500"></i>
                  <div>
                    <span className="m-value">5</span>
                    <span className="text-xl text-slate-400 font-bold ml-1">
                      개
                    </span>
                  </div>
                  <p className="m-label">데이터 파이프라인 구축</p>
                </div>
              </div>
              <div
                className="metric-item accent-orange"
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 32px",
                  borderTopWidth: "4px",
                  flex: "0 0 auto",
                }}
              >
                <div className="flex items-center gap-6">
                  <div className="bg-orange-50 p-3 rounded-full">
                    <i className="fab fa-github text-3xl text-orange-500"></i>
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold text-xl">
                      오픈소스 기여 및 협업
                    </p>
                    <p className="text-slate-500 text-sm">
                      팀 프로젝트 리딩 및 코드 리뷰 경험
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-bold bg-orange-100 text-orange-700 border border-orange-200 px-5 py-2 rounded-full">
                    Active Contributor
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}
