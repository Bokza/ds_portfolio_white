import { useEffect } from "react";
import * as echarts from "echarts";
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
        .slide-container {
            width: 1280px;
            height: 720px;
            position: relative;
            overflow: hidden;
        }
        p { margin: 0; padding: 0; }
        ul { margin: 0; padding: 0; list-style: none; }
        .highlight-violet { color: #8B5CF6; font-weight: 700; }
        .highlight-cyan { color: #06B6D4; font-weight: 700; }
    `;

export default function Slide06() {
  useEffect(() => {
    {
      const chartDom = document.getElementById(
        "rl-chart",
      ) as HTMLDivElement | null;
      if (!chartDom) return;
      const myChart = echarts.init(chartDom);

      const hours = Array.from({ length: 24 }, (_, i) => `${i}h`);
      const outdoorTemp = [
        -4, -5, -6, -6, -7, -7, -6, -4, -2, 0, 2, 4, 5, 5, 4, 2, 0, -1, -2, -3,
        -3, -4, -4, -5,
      ];
      const fixedSetPoint = Array(24).fill(20);
      const rlSetPoint = [
        18, 18, 18, 18, 19, 24, 24, 23, 22, 21, 20, 19, 19, 19, 20, 22, 22, 22,
        22, 21, 19, 18, 18, 18,
      ];

      const option = {
        animation: true,
        animationDuration: 900,
        animationEasing: "cubicOut" as const,
        animationDurationUpdate: 600,
        animationEasingUpdate: "cubicOut" as const,
        grid: { top: 20, bottom: 25, left: 55, right: 20, containLabel: true },
        tooltip: {
          trigger: "axis",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          borderColor: "#E2E8F0",
          textStyle: { color: "#1E293B" },
          formatter: (params: any) => {
            const list = Array.isArray(params) ? params : [params];
            return list.map((p: any) => `${p.marker}${p.seriesName}: ${Number(p.value).toFixed(2)}`).join("<br/>");
          },
        },
        xAxis: {
          type: "category",
          data: hours,
          axisLine: { lineStyle: { color: "#CBD5E1" } },
          axisLabel: { color: "#64748B", interval: 3, fontSize: 11 },
        },
        yAxis: [
          {
            type: "value",
            name: "Temp (°C)",
            nameLocation: "middle",
            nameGap: 40,
            nameTextStyle: { color: "#64748B", fontSize: 11 },
            min: -10,
            max: 30,
            splitLine: { lineStyle: { color: "rgba(203, 213, 225, 0.5)" } },
            axisLabel: { color: "#64748B", fontSize: 11 },
          },
        ],
        series: [
          {
            name: "외기온도",
            type: "line",
            smooth: true,
            data: outdoorTemp,
            lineStyle: { type: "dotted", color: "#94A3B8", width: 2 },
            showSymbol: false,
            z: 1,
          },
          {
            name: "기존 고정 제어",
            type: "line",
            step: "end",
            data: fixedSetPoint,
            lineStyle: { color: "#94A3B8", width: 2 },
            showSymbol: false,
            z: 2,
          },
          {
            name: "DQN 난방 제어",
            type: "line",
            step: "end",
            data: rlSetPoint,
            lineStyle: { color: "#3B82F6", width: 3 },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "rgba(59, 130, 246, 0.2)" },
                { offset: 1, color: "rgba(59, 130, 246, 0)" },
              ]),
            },
            showSymbol: false,
            z: 3,
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
            left: "830px",
            top: "0px",
            width: "450px",
            height: "450px",
            backgroundColor: "#8B5CF6",
            borderRadius: "50%",
            filter: "blur(100px)",
            opacity: "0.1",
            zIndex: "1",
          }}
        ></div>
        <div
          data-object="true"
          data-object-type="shape"
          style={{
            position: "absolute",
            left: "0px",
            top: "400px",
            width: "450px",
            height: "450px",
            backgroundColor: "#06B6D4",
            borderRadius: "50%",
            filter: "blur(100px)",
            opacity: "0.1",
            zIndex: "1",
          }}
        ></div>
        <div
          data-object="true"
          data-object-type="textbox"
          style={{
            position: "absolute",
            left: "50px",
            top: "40px",
            width: "1180px",
            height: "100px",
            zIndex: "10",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              borderBottom: "2px solid rgba(148, 163, 184, 0.2)",
              paddingBottom: "15px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ width: "8px", height: "8px", backgroundColor: "#94A3B8", borderRadius: "50%" }}></span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#64748B",
                    letterSpacing: "0.15em",
                  }}
                >
                  PROJECT 04
                </span>
              </div>
              <span
                style={{
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  border: "1px solid rgba(139, 92, 246, 0.3)",
                  color: "#7C3AED",
                  fontSize: "14px",
                  fontWeight: "700",
                  padding: "4px 12px",
                  borderRadius: "4px",
                }}
              >
                Reinforcement Learning
              </span>
            </div>
            <h1
              style={{
                fontSize: "40px",
                fontWeight: "800",
                color: "#0F172A",
                margin: "0",
                lineHeight: "1.1",
                letterSpacing: "-0.02em",
                display: "flex",
                alignItems: "baseline",
                gap: "15px",
              }}
            >
              HVAC 자동 제어 시스템
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#64748B",
                }}
              >
                DQN-based HVAC Control
              </span>
            </h1>
          </div>
        </div>
        <div
          data-object="true"
          data-object-type="textbox"
          style={{
            position: "absolute",
            left: "50px",
            top: "155px",
            width: "560px",
            height: "130px",
            zIndex: "10",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <i className="fa-solid fa-bullseye" style={{ color: "#3B82F6", fontSize: "18px" }}></i>
            <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#0F172A", margin: "0" }}>
              프로젝트 개요
            </h3>
          </div>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.6",
              color: "#334155",
              fontWeight: "400",
            }}
          >
            심층 강화학습(DQN)을 활용해 HVAC 설정온도를 자동 조정하는 제어
            시스템입니다.
            <strong>겨울철 난방 운전</strong>시 실내 쾌적성 유지와
            <strong>에너지 비용 절감</strong>
            이라는 상충되는 목표 간의 최적 균형 정책을 학습하여 적용합니다.
          </p>
        </div>
        <div
          data-object="true"
          data-object-type="textbox"
          style={{
            position: "absolute",
            left: "50px",
            top: "310px",
            width: "560px",
            height: "310px",
            zIndex: "10",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "15px" }}>
            <i className="fa-solid fa-layer-group" style={{ color: "#10B981", fontSize: "18px" }}></i>
            <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#0F172A", margin: "0" }}>
              주요 역할 및 성과
            </h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { n: "01", content: <><strong style={{ color: "#0F172A" }}>RL 환경 설계:</strong> 상태(실내/외기온도), 행동(난방 설정온도 ±2°C), 보상(쾌적도+비용페널티) 정의</> },
              { n: "02", content: <><strong style={{ color: "#0F172A" }}>DQN 모델 구현:</strong> PyTorch 기반 Q Network/Target Network 이중 구조 및 Replay Buffer 적용</> },
              { n: "03", content: <><strong style={{ color: "#0F172A" }}>온라인 학습 파이프라인:</strong> Airflow 기반 <span style={{ color: "#2563EB", fontWeight: "700" }}>15분 주기</span> 데이터 수집-학습-추론 자동화</> },
              { n: "04", content: <><strong style={{ color: "#0F172A" }}>에너지 최적화:</strong> 외기온도 급감 시 선제적 난방 강화, 일사량 충분 시 설정온도 하향으로 과난방 방지</> },
            ].map(({ n, content }) => (
              <div key={n} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <div style={{ width: "24px", height: "24px", borderRadius: "6px", background: "rgba(59,130,246,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                  <span style={{ color: "#3B82F6", fontSize: "12px", fontWeight: "800" }}>{n}</span>
                </div>
                <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#475569" }}>{content}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          data-object="true"
          data-object-type="textbox"
          style={{
            position: "absolute",
            left: "50px",
            top: "625px",
            width: "560px",
            height: "80px",
            zIndex: "10",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              fontWeight: "700",
              color: "#64748B",
              marginBottom: "10px",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            TECH STACK
          </div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <span
              style={{
                background: "#F8FAFC",
                border: "1px solid #E2E8F0",
                color: "#3B82F6",
                padding: "6px 14px",
                borderRadius: "20px",
                fontSize: "14px",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <i className="fab fa-python"></i>
              PyTorch
            </span>
            <span
              style={{
                background: "#F8FAFC",
                border: "1px solid #E2E8F0",
                color: "#3B82F6",
                padding: "6px 14px",
                borderRadius: "20px",
                fontSize: "14px",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <i className="fas fa-brain"></i>
              DQN (RL)
            </span>
            <span
              style={{
                background: "#F8FAFC",
                border: "1px solid #E2E8F0",
                color: "#3B82F6",
                padding: "6px 14px",
                borderRadius: "20px",
                fontSize: "14px",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <i className="fas fa-wind"></i>
              Airflow
            </span>
            <span
              style={{
                background: "#F8FAFC",
                border: "1px solid #E2E8F0",
                color: "#3B82F6",
                padding: "6px 14px",
                borderRadius: "20px",
                fontSize: "14px",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <i className="fas fa-database"></i>
              PostgreSQL
            </span>
          </div>
        </div>
        <div
          data-object="true"
          data-object-type="textbox"
          style={{
            position: "absolute",
            left: "650px",
            top: "155px",
            width: "580px",
            height: "135px",
            zIndex: "10",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "15px",
              height: "100%",
            }}
          >
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: "12px",
                padding: "15px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
              }}
            >
              <span
                style={{
                  fontSize: "42px",
                  fontWeight: "800",
                  color: "#0F172A",
                  lineHeight: "1",
                }}
              >
                15
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    color: "#64748B",
                    marginLeft: "4px",
                  }}
                >
                  대
                </span>
              </span>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#64748B",
                  marginTop: "8px",
                }}
              >
                제어 적용 실내기
              </span>
            </div>
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: "12px",
                padding: "15px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
              }}
            >
              <span
                style={{
                  fontSize: "42px",
                  fontWeight: "800",
                  color: "#0F172A",
                  lineHeight: "1",
                }}
              >
                15
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    color: "#64748B",
                    marginLeft: "4px",
                  }}
                >
                  min
                </span>
              </span>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#64748B",
                  marginTop: "8px",
                }}
              >
                제어 주기 (Online)
              </span>
            </div>
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: "12px",
                padding: "15px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
              }}
            >
              <span
                style={{
                  fontSize: "42px",
                  fontWeight: "800",
                  color: "#3B82F6",
                  lineHeight: "1",
                }}
              >
                <i className="fas fa-balance-scale"></i>
              </span>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#64748B",
                  marginTop: "8px",
                }}
              >
                쾌적-비용 균형
              </span>
            </div>
          </div>
        </div>
        <div
          data-object="true"
          data-object-type="chart"
          style={{
            position: "absolute",
            left: "650px",
            top: "310px",
            width: "580px",
            height: "380px",
            zIndex: "10",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "#FFFFFF",
              border: "1px solid #E2E8F0",
              borderRadius: "16px",
              padding: "20px",
              boxSizing: "border-box",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
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
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  color: "#1E293B",
                }}
              >
                겨울철 난방 최적 제어 시뮬레이션 (DQN Policy)
              </span>
              <div style={{ display: "flex", gap: "15px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "12px",
                    color: "#64748B",
                  }}
                >
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#3B82F6",
                    }}
                  ></span>
                  DQN 제어
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "12px",
                    color: "#64748B",
                  }}
                >
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#94A3B8",
                    }}
                  ></span>
                  고정 제어
                </div>
              </div>
            </div>
            <div id="rl-chart" style={{ width: "100%", height: "300px" }}></div>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}
