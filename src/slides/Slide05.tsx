import { useEffect } from "react";
import * as echarts from "echarts";
import SlideFrame from "../components/SlideFrame";

const slideCss = `

        body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #F8FAFC;
            color: #334155;
            font-family: 'Noto Sans KR', sans-serif;
        }
        .slide-container {
            width: 1280px;
            height: 720px;
            position: relative;
            overflow: hidden;
        }
        p { margin: 0; padding: 0; }
        ul { margin: 0; padding: 0; list-style: none; }
        .highlight-violet { color: #7C3AED; font-weight: 700; }
        .highlight-indigo { color: #4F46E5; font-weight: 700; }
    `;

export default function Slide05() {
  useEffect(() => {
    {
      const chartDom = document.getElementById(
        "agent-chart",
      ) as HTMLDivElement | null;
      if (!chartDom) return;
      const myChart = echarts.init(chartDom);

      const option = {
        backgroundColor: "transparent",
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut" as const,
        series: [
          {
            type: "graph",
            layout: "none",
            symbolSize: 55,
            roam: false,
            label: {
              show: true,
              position: "bottom",
              color: "#334155",
              fontSize: 12,
              fontWeight: "bold",
              formatter: "{b}",
              distance: 8,
            },
            edgeSymbol: ["circle", "arrow"],
            edgeSymbolSize: [4, 10],
            edgeLabel: { fontSize: 11 },
            data: [
              {
                name: "User",
                x: 50,
                y: 150,
                symbolSize: 45,
                itemStyle: {
                  color: "#F1F5F9",
                  borderColor: "#94A3B8",
                  borderWidth: 2,
                },
              },
              {
                name: "Agent\n(Planner)",
                x: 200,
                y: 150,
                symbolSize: 65,
                itemStyle: {
                  color: "#EDE9FE",
                  borderColor: "#8B5CF6",
                  borderWidth: 2,
                  shadowBlur: 10,
                  shadowColor: "rgba(139, 92, 246, 0.2)",
                },
              },
              {
                name: "SQL Tool",
                x: 350,
                y: 50,
                itemStyle: {
                  color: "#DBEAFE",
                  borderColor: "#3B82F6",
                  borderWidth: 2,
                },
              },
              {
                name: "RAG",
                x: 350,
                y: 150,
                itemStyle: {
                  color: "#D1FAE5",
                  borderColor: "#10B981",
                  borderWidth: 2,
                },
              },
              {
                name: "Predict",
                x: 350,
                y: 250,
                itemStyle: {
                  color: "#FEF3C7",
                  borderColor: "#F59E0B",
                  borderWidth: 2,
                },
              },
              {
                name: "Response",
                x: 500,
                y: 150,
                symbolSize: 50,
                itemStyle: {
                  color: "#E0E7FF",
                  borderColor: "#6366F1",
                  borderWidth: 2,
                },
              },
            ],
            links: [
              {
                source: "User",
                target: "Agent\n(Planner)",
                lineStyle: { color: "#94A3B8", width: 3 },
              },
              {
                source: "Agent\n(Planner)",
                target: "SQL Tool",
                lineStyle: { curveness: -0.2, color: "#94A3B8", width: 2 },
              },
              {
                source: "Agent\n(Planner)",
                target: "RAG",
                lineStyle: { color: "#94A3B8", width: 2 },
              },
              {
                source: "Agent\n(Planner)",
                target: "Predict",
                lineStyle: { curveness: 0.2, color: "#94A3B8", width: 2 },
              },
              {
                source: "SQL Tool",
                target: "Response",
                lineStyle: {
                  curveness: -0.2,
                  color: "#94A3B8",
                  type: "dashed",
                  width: 2,
                },
              },
              {
                source: "RAG",
                target: "Response",
                lineStyle: { color: "#94A3B8", type: "dashed", width: 2 },
              },
              {
                source: "Predict",
                target: "Response",
                lineStyle: {
                  curveness: 0.2,
                  color: "#94A3B8",
                  type: "dashed",
                  width: 2,
                },
              },
            ],
            lineStyle: { width: 2, curveness: 0 },
          },
        ],
      };
      myChart.clear();
      myChart.setOption(option, { notMerge: true, lazyUpdate: false });
    }

    return () => {
      const nodes = Array.from(document.querySelectorAll("[id]"));
      nodes.forEach((node) => {
        const instance = echarts.getInstanceByDom(node as HTMLDivElement);
        if (instance) instance.dispose();
      });
    };
  }, []);

  return (
    <SlideFrame>
      <style>{slideCss}</style>
      <div className="slide-container">
        <div
          data-object="true"
          data-object-type="shape"
          style={{
            position: "absolute",
            left: "750px",
            top: "-100px",
            width: "600px",
            height: "600px",
            backgroundColor: "#8B5CF6",
            borderRadius: "50%",
            filter: "blur(120px)",
            opacity: "0.08",
            zIndex: "1",
          }}
        ></div>
        <div
          data-object="true"
          data-object-type="shape"
          style={{
            position: "absolute",
            left: "-50px",
            top: "400px",
            width: "500px",
            height: "500px",
            backgroundColor: "#6366F1",
            borderRadius: "50%",
            filter: "blur(120px)",
            opacity: "0.08",
            zIndex: "1",
          }}
        ></div>
        <div
          data-object="true"
          data-object-type="textbox"
          style={{
            position: "absolute",
            left: "60px",
            top: "40px",
            width: "1160px",
            height: "110px",
            zIndex: "10",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "8px", height: "8px", backgroundColor: "#3B82F6", borderRadius: "50%" }}></span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#64748B",
                    letterSpacing: "0.15em",
                  }}
                >
                  PROJECT 03
                </span>
              </div>
              <span
                style={{
                  background: "rgba(139, 92, 246, 0.1)",
                  border: "1px solid rgba(139, 92, 246, 0.2)",
                  color: "#7C3AED",
                  fontSize: "14px",
                  fontWeight: "600",
                  padding: "6px 16px",
                  borderRadius: "20px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }}
              >
                Service Agent
              </span>
            </div>
            <div
              style={{
                borderBottom: "2px solid rgba(0, 0, 0, 0.05)",
                paddingBottom: "12px",
              }}
            >
              <h1
                style={{
                  fontSize: "40px",
                  fontWeight: "800",
                  color: "#1E293B",
                  margin: "0",
                  lineHeight: "1.2",
                  letterSpacing: "-0.02em",
                  textShadow: "0 1px 2px rgba(0,0,0,0.05)",
                }}
              >
                LLM 에너지 분석 챗봇
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    color: "#64748B",
                    marginLeft: "15px",
                  }}
                >
                  Solution Summary Agent
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div
          data-object="true"
          data-object-type="textbox"
          style={{
            position: "absolute",
            left: "60px",
            top: "175px",
            width: "540px",
            height: "140px",
            zIndex: "10",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "14px",
              gap: "10px",
            }}
          >
            <div
              style={{
                width: "4px",
                height: "22px",
                background: "linear-gradient(to bottom, #8B5CF6, #6366F1)",
                borderRadius: "2px",
              }}
            ></div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#1E293B",
                margin: "0",
              }}
            >
              프로젝트 개요
            </h3>
          </div>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              color: "#475569",
              fontWeight: "400",
              paddingLeft: "14px",
            }}
          >
            비개발자도 SQL 작성 없이 자연어로 복잡한 건물 에너지 데이터를
            조회·분석할 수 있는
            <span style={{ color: "#7C3AED", fontWeight: "600" }}>
              LLM 기반 멀티턴 대화형 에이전트
            </span>
            입니다. LangGraph를 통해 사고 과정을 구조화하여 데이터 접근성을
            혁신했습니다.
          </p>
        </div>
        <div
          data-object="true"
          data-object-type="textbox"
          style={{
            position: "absolute",
            left: "60px",
            top: "335px",
            width: "560px",
            height: "280px",
            zIndex: "10",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "18px",
              gap: "10px",
            }}
          >
            <div
              style={{
                width: "4px",
                height: "22px",
                background: "linear-gradient(to bottom, #8B5CF6, #6366F1)",
                borderRadius: "2px",
              }}
            ></div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#1E293B",
                margin: "0",
              }}
            >
              주요 역할 및 성과
            </h3>
          </div>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              paddingLeft: "14px",
            }}
          >
            <li
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
                color: "#475569",
                paddingLeft: "28px",
                position: "relative",
              }}
            >
              <i
                className="fa-solid fa-check"
                style={{
                  position: "absolute",
                  left: "0",
                  top: "4px",
                  color: "#8B5CF6",
                  fontSize: "16px",
                }}
              ></i>
              <strong style={{ color: "#1E293B" }}>LangGraph 아키텍처:</strong>
              상태(State) 기반 멀티턴 대화 제어 및 에이전트 루프 설계로 문맥
              유지 능력 강화
            </li>
            <li
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
                color: "#475569",
                paddingLeft: "28px",
                position: "relative",
              }}
            >
              <i
                className="fa-solid fa-check"
                style={{
                  position: "absolute",
                  left: "0",
                  top: "4px",
                  color: "#8B5CF6",
                  fontSize: "16px",
                }}
              ></i>
              <strong style={{ color: "#1E293B" }}>
                Multi-Tool Orchestration:
              </strong>
              <span style={{ color: "#4F46E5", fontWeight: "600" }}>
                SQL Toolkit
              </span>
              (DB), 예측 모델 API, 매뉴얼 검색(RAG)의 유기적 결합
            </li>
            <li
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
                color: "#475569",
                paddingLeft: "28px",
                position: "relative",
              }}
            >
              <i
                className="fa-solid fa-check"
                style={{
                  position: "absolute",
                  left: "0",
                  top: "4px",
                  color: "#8B5CF6",
                  fontSize: "16px",
                }}
              ></i>
              <strong style={{ color: "#1E293B" }}>System Prompt:</strong>
              도메인 특화 쿼리 생성 규칙 및 할루시네이션 방지 로직 구현
            </li>
            <li
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
                color: "#475569",
                paddingLeft: "28px",
                position: "relative",
              }}
            >
              <i
                className="fa-solid fa-check"
                style={{
                  position: "absolute",
                  left: "0",
                  top: "4px",
                  color: "#8B5CF6",
                  fontSize: "16px",
                }}
              ></i>
              <strong style={{ color: "#1E293B" }}>Data Accessibility:</strong>
              자연어 질의로 즉시 데이터 접근 환경 구축
            </li>
          </ul>
        </div>
        <div
          data-object="true"
          data-object-type="textbox"
          style={{
            position: "absolute",
            left: "60px",
            top: "630px",
            width: "560px",
            height: "60px",
            zIndex: "10",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              fontWeight: "700",
              color: "#64748B",
              marginBottom: "10px",
              letterSpacing: "0.1em",
            }}
          >
            TECH STACK
          </div>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <span
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                color: "#475569",
                padding: "6px 14px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
              }}
            >
              <i className="fas fa-brain" style={{ color: "#8B5CF6" }}></i>
              LangGraph
            </span>
            <span
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                color: "#475569",
                padding: "6px 14px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
              }}
            >
              <i className="fas fa-link" style={{ color: "#8B5CF6" }}></i>
              LangChain
            </span>
            <span
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                color: "#475569",
                padding: "6px 14px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
              }}
            >
              <i className="fas fa-robot" style={{ color: "#8B5CF6" }}></i>
              GPT-4
            </span>
            <span
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                color: "#475569",
                padding: "6px 14px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
              }}
            >
              <i className="fas fa-database" style={{ color: "#8B5CF6" }}></i>
              PostgreSQL
            </span>
          </div>
        </div>
        <div
          data-object="true"
          data-object-type="textbox"
          style={{
            position: "absolute",
            left: "640px",
            top: "175px",
            width: "580px",
            height: "140px",
            zIndex: "10",
          }}
        >
          <div style={{ display: "flex", gap: "15px", height: "100%" }}>
            <div
              style={{
                flex: "1",
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: "12px",
                padding: "15px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 10px 25px rgba(0,0,0,0.04)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  width: "60px",
                  height: "60px",
                  background:
                    "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
                }}
              ></div>
              <div
                style={{
                  fontSize: "38px",
                  fontWeight: "800",
                  color: "#1E293B",
                  lineHeight: "1",
                  marginBottom: "8px",
                  display: "flex",
                  alignItems: "baseline",
                }}
              >
                No
                <span
                  style={{
                    fontSize: "22px",
                    color: "#8B5CF6",
                    marginLeft: "4px",
                  }}
                >
                  SQL
                </span>
              </div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#64748B",
                }}
              >
                Code-Free 분석
              </div>
            </div>
            <div
              style={{
                flex: "1",
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: "12px",
                padding: "15px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 10px 25px rgba(0,0,0,0.04)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  width: "60px",
                  height: "60px",
                  background:
                    "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
                }}
              ></div>
              <div
                style={{
                  fontSize: "38px",
                  fontWeight: "800",
                  color: "#1E293B",
                  lineHeight: "1",
                  marginBottom: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="fas fa-comments" style={{ color: "#8B5CF6" }}></i>
              </div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#64748B",
                }}
              >
                멀티턴 문맥 유지
              </div>
            </div>
            <div
              style={{
                flex: "1",
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: "12px",
                padding: "15px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 10px 25px rgba(0,0,0,0.04)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  width: "60px",
                  height: "60px",
                  background:
                    "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
                }}
              ></div>
              <div
                style={{
                  fontSize: "34px",
                  fontWeight: "800",
                  color: "#1E293B",
                  lineHeight: "1",
                  marginBottom: "8px",
                  display: "flex",
                  alignItems: "baseline",
                }}
              >
                <span style={{ color: "#4F46E5" }}>Hybrid</span>
              </div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#64748B",
                }}
              >
                SQL + RAG + API
              </div>
            </div>
          </div>
        </div>
        <div
          data-object="true"
          data-object-type="chart"
          style={{
            position: "absolute",
            left: "640px",
            top: "335px",
            width: "580px",
            height: "355px",
            zIndex: "10",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "#FFFFFF",
              border: "1px solid #E2E8F0",
              borderRadius: "12px",
              padding: "20px",
              boxSizing: "border-box",
              boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <i
                  className="fas fa-project-diagram"
                  style={{ color: "#8B5CF6", fontSize: "16px" }}
                ></i>
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#1E293B",
                  }}
                >
                  Agent Workflow (LangGraph Logic)
                </span>
              </div>
            </div>
            <div
              id="agent-chart"
              style={{ width: "100%", height: "285px" }}
            ></div>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}
