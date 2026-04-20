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
        .highlight-blue { color: #2563EB; font-weight: 700; }
        .highlight-green { color: #059669; font-weight: 700; }
        .glass-panel {
            background: #FFFFFF;
            border: 1px solid #E2E8F0;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
            border-radius: 16px;
        }
    `;

export default function Slide03() {
  useEffect(() => {
    let resizeHandler = () => {};
    {
      const chartDom = document.getElementById(
        "occupancy-chart",
      ) as HTMLDivElement | null;
      if (!chartDom) return;
      const myChart = echarts.getInstanceByDom(chartDom) || echarts.init(chartDom);

      const timeData = [];
      const powerData = [];
      const probData = [];

      for (let i = 0; i <= 24; i++) {
        timeData.push(`${i}:00`);
        let power = 10 + Math.random() * 5;
        let prob = 0.02 + Math.random() * 0.05;

        if (i >= 8 && i < 9) {
          power = 40 + Math.random() * 20;
          prob = 0.6 + Math.random() * 0.2;
        } else if (i >= 9 && i <= 11) {
          power = 80 + Math.random() * 30;
          prob = 0.95 + Math.random() * 0.04;
        } else if (i === 12) {
          power = 45 + Math.random() * 15;
          prob = 0.4 + Math.random() * 0.2;
        } else if (i >= 13 && i <= 18) {
          power = 85 + Math.random() * 25;
          prob = 0.9 + Math.random() * 0.08;
        } else if (i > 18 && i <= 20) {
          power = 35 + Math.random() * 20;
          prob = 0.3 + Math.random() * 0.15;
        } else if (i > 20 && i <= 22) {
          power = 20 + Math.random() * 10;
          prob = 0.1 + Math.random() * 0.1;
        }

        powerData.push(power);
        probData.push(prob);
      }

      const option = {
        animation: true,
        animationDuration: 900,
        animationEasing: "cubicOut" as const,
        animationDurationUpdate: 600,
        animationEasingUpdate: "cubicOut" as const,
        grid: { top: 10, bottom: 20, left: 45, right: 15, containLabel: true },
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
          boundaryGap: false,
          data: timeData,
          axisLine: { lineStyle: { color: "#CBD5E1" } },
          axisLabel: { color: "#64748B", fontSize: 11, interval: 3 },
        },
        yAxis: [
          {
            type: "value",
            splitLine: { lineStyle: { color: "#E2E8F0", type: "dashed" } },
            axisLabel: { color: "#64748B", fontSize: 11 },
          },
          {
            type: "value",
            max: 1.1,
            show: false,
          },
        ],
        series: [
          {
            name: "전력 패턴",
            type: "line",
            smooth: 0.4,
            showSymbol: false,
            data: powerData,
            lineStyle: { width: 3, color: "#3B82F6" },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "rgba(59, 130, 246, 0.15)" },
                { offset: 1, color: "rgba(59, 130, 246, 0.01)" },
              ]),
            },
          },
          {
            name: "재실 확률",
            type: "line",
            yAxisIndex: 1,
            step: "end",
            showSymbol: false,
            data: probData,
            lineStyle: { width: 2, color: "#10B981", type: "solid" },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "rgba(16, 185, 129, 0.15)" },
                { offset: 1, color: "rgba(16, 185, 129, 0.01)" },
              ]),
            },
          },
        ],
      };

      myChart.clear();
      myChart.setOption(option, { notMerge: true, lazyUpdate: false });
      resizeHandler = () => myChart.resize();
      window.addEventListener("resize", resizeHandler);
    }

    return () => {
      window.removeEventListener("resize", resizeHandler);
      const dom = document.getElementById("occupancy-chart");
      if (dom) echarts.getInstanceByDom(dom)?.dispose();
    };
  }, []);

  return (
    <SlideFrame>
      <style>{slideCss}</style>
      <div className="slide-container">
        <div
          data-object="true"
          data-object-type="textbox"
          style={{
            position: "absolute",
            left: "60px",
            top: "40px",
            width: "1160px",
            height: "100px",
            zIndex: "10",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              borderBottom: "1px solid #E2E8F0",
              paddingBottom: "16px",
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
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "#94A3B8",
                    borderRadius: "50%",
                  }}
                ></span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#64748B",
                    letterSpacing: "0.15em",
                  }}
                >
                  PROJECT 01
                </span>
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
                }}
              >
                Classification
              </span>
            </div>
            <div
              style={{ display: "flex", alignItems: "baseline", gap: "16px" }}
            >
              <h1
                style={{
                  fontSize: "40px",
                  fontWeight: "800",
                  color: "#0F172A",
                  margin: "0",
                  lineHeight: "1.1",
                  letterSpacing: "-0.02em",
                }}
              >
                건물 재실 예측 솔루션
              </h1>
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#64748B",
                  letterSpacing: "0.02em",
                }}
              >
                Occupancy Assumption Service
              </span>
            </div>
          </div>
        </div>
        <div
          data-object="true"
          data-object-type="textbox"
          style={{
            position: "absolute",
            left: "60px",
            top: "160px",
            width: "540px",
            height: "130px",
            zIndex: "10",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "12px",
            }}
          >
            <i
              className="fa-solid fa-bullseye"
              style={{ color: "#3B82F6", fontSize: "18px" }}
            ></i>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#0F172A",
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
              textAlign: "justify",
              paddingRight: "10px",
            }}
          >
            BEMS(건물에너지관리시스템)의 핵심 기능으로, 실시간 전력 사용 패턴과
            조명 상태 데이터를 분석하여 현재 공간의
            <span className="highlight-blue">재실 여부(Occupancy)</span>와
            <span className="highlight-green">밀도</span>를 예측하는 머신러닝
            서비스입니다.
          </p>
        </div>
        <div
          data-object="true"
          data-object-type="textbox"
          style={{
            position: "absolute",
            left: "60px",
            top: "310px",
            width: "540px",
            height: "280px",
            zIndex: "10",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            <i
              className="fa-solid fa-layer-group"
              style={{ color: "#10B981", fontSize: "18px" }}
            ></i>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#0F172A",
                margin: "0",
              }}
            >
              주요 역할 및 기술적 접근
            </h3>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            <div
              style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}
            >
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "6px",
                  background: "rgba(59, 130, 246, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: "0",
                  marginTop: "2px",
                }}
              >
                <span
                  style={{
                    color: "#3B82F6",
                    fontSize: "12px",
                    fontWeight: "800",
                  }}
                >
                  01
                </span>
              </div>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  color: "#475569",
                }}
              >
                <strong>듀얼 알고리즘 아키텍처:</strong>
                설비 특성에 맞춰
                <span style={{ color: "#2563EB", fontWeight: "600" }}>HMM</span>
                (전열 패턴)과
                <span style={{ color: "#059669", fontWeight: "600" }}>
                  KMeans
                </span>
                (전등 ON/OFF) 모델 이원화 설계
              </p>
            </div>
            <div
              style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}
            >
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "6px",
                  background: "rgba(59, 130, 246, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: "0",
                  marginTop: "2px",
                }}
              >
                <span
                  style={{
                    color: "#3B82F6",
                    fontSize: "12px",
                    fontWeight: "800",
                  }}
                >
                  02
                </span>
              </div>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  color: "#475569",
                }}
              >
                <strong>견고한 전처리 파이프라인:</strong>
                Hampel Filter 기반 이상치 제거 및 동적 윈도우 결측치 보간 체계
                구축
              </p>
            </div>
            <div
              style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}
            >
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "6px",
                  background: "rgba(59, 130, 246, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: "0",
                  marginTop: "2px",
                }}
              >
                <span
                  style={{
                    color: "#3B82F6",
                    fontSize: "12px",
                    fontWeight: "800",
                  }}
                >
                  03
                </span>
              </div>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  color: "#475569",
                }}
              >
                <strong>모델 서빙 및 운영:</strong>
                BentoML 기반 REST API 프로덕션 배포 및 Grafana/Prometheus 실시간
                모니터링 연동
              </p>
            </div>
          </div>
        </div>
        <div
          data-object="true"
          data-object-type="textbox"
          style={{
            position: "absolute",
            left: "60px",
            top: "600px",
            width: "540px",
            height: "80px",
            zIndex: "10",
          }}
        >
          <div
            style={{
              fontSize: "13px",
              fontWeight: "600",
              color: "#64748B",
              marginBottom: "12px",
              letterSpacing: "0.1em",
            }}
          >
            TECH STACK
          </div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <span
              style={{
                background: "#F8FAFC",
                border: "1px solid #CBD5E1",
                color: "#334155",
                padding: "6px 14px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              <i
                className="fab fa-python"
                style={{ marginRight: "6px", color: "#3B82F6" }}
              ></i>
              Python
            </span>
            <span
              style={{
                background: "#F8FAFC",
                border: "1px solid #CBD5E1",
                color: "#334155",
                padding: "6px 14px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              <i
                className="fas fa-project-diagram"
                style={{ marginRight: "6px", color: "#3B82F6" }}
              ></i>
              HMM / KMeans
            </span>
            <span
              style={{
                background: "#F8FAFC",
                border: "1px solid #CBD5E1",
                color: "#334155",
                padding: "6px 14px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              <i
                className="fas fa-cube"
                style={{ marginRight: "6px", color: "#3B82F6" }}
              ></i>
              BentoML
            </span>
            <span
              style={{
                background: "#F8FAFC",
                border: "1px solid #CBD5E1",
                color: "#334155",
                padding: "6px 14px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              <i
                className="fab fa-aws"
                style={{ marginRight: "6px", color: "#3B82F6" }}
              ></i>
              AWS
            </span>
          </div>
        </div>
        <div
          data-object="true"
          data-object-type="textbox"
          style={{
            position: "absolute",
            left: "650px",
            top: "160px",
            width: "570px",
            height: "130px",
            zIndex: "10",
          }}
        >
          <div style={{ display: "flex", gap: "16px", height: "100%" }}>
            <div
              className="glass-panel"
              style={{
                flex: "1",
                padding: "16px 20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  right: "-10px",
                  bottom: "-10px",
                  color: "#CBD5E1",
                  opacity: "0.2",
                }}
              >
                <i className="fas fa-building" style={{ fontSize: "80px" }}></i>
              </div>
              <div
                style={{ display: "flex", alignItems: "baseline", gap: "4px" }}
              >
                <span
                  style={{
                    fontSize: "42px",
                    fontWeight: "800",
                    color: "#0F172A",
                    lineHeight: "1",
                  }}
                >
                  9
                </span>
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#64748B",
                  }}
                >
                  개
                </span>
              </div>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#64748B",
                  marginTop: "8px",
                }}
              >
                운영 건물 적용
              </span>
            </div>
            <div
              className="glass-panel"
              style={{
                flex: "1",
                padding: "16px 20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                background: "linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)",
                border: "1px solid #BAE6FD",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  right: "-10px",
                  bottom: "-10px",
                  color: "#93C5FD",
                  opacity: "0.3",
                }}
              >
                <i className="fas fa-bolt" style={{ fontSize: "80px" }}></i>
              </div>
              <div
                style={{ display: "flex", alignItems: "baseline", gap: "4px" }}
              >
                <span
                  style={{
                    fontSize: "42px",
                    fontWeight: "800",
                    color: "#2563EB",
                    lineHeight: "1",
                  }}
                >
                  3~10
                </span>
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#3B82F6",
                  }}
                >
                  s
                </span>
              </div>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#475569",
                  marginTop: "8px",
                }}
              >
                평균 API 응답 시간
              </span>
            </div>
            <div
              className="glass-panel"
              style={{
                flex: "1",
                padding: "16px 20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  right: "-10px",
                  bottom: "-10px",
                  color: "#CBD5E1",
                  opacity: "0.2",
                }}
              >
                <i className="fas fa-fan" style={{ fontSize: "80px" }}></i>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "42px",
                }}
              >
                <span
                  style={{
                    fontSize: "32px",
                    fontWeight: "800",
                    color: "#10B981",
                    lineHeight: "1",
                  }}
                >
                  <i className="fas fa-check-circle"></i>
                </span>
              </div>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#64748B",
                  marginTop: "8px",
                  width: "120%",
                  position: "relative",
                  left: "0",
                }}
              >
                HVAC 자동제어 연동
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
            width: "570px",
            height: "380px",
            zIndex: "10",
          }}
        >
          <div
            className="glass-panel"
            style={{
              width: "100%",
              height: "100%",
              padding: "24px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  color: "#0F172A",
                  margin: "0",
                }}
              >
                알고리즘 동작 시뮬레이션
                <span
                  style={{
                    fontWeight: "400",
                    color: "#64748B",
                    fontSize: "14px",
                    marginLeft: "6px",
                  }}
                >
                  (HMM State Transition)
                </span>
              </h3>
              <div style={{ display: "flex", gap: "16px" }}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "6px" }}
                >
                  <span
                    style={{
                      width: "12px",
                      height: "4px",
                      borderRadius: "2px",
                      backgroundColor: "#3B82F6",
                    }}
                  ></span>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#475569",
                    }}
                  >
                    전력 패턴
                  </span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "6px" }}
                >
                  <span
                    style={{
                      width: "12px",
                      height: "4px",
                      borderRadius: "2px",
                      backgroundColor: "#10B981",
                    }}
                  ></span>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#475569",
                    }}
                  >
                    재실 확률
                  </span>
                </div>
              </div>
            </div>
            <div
              id="occupancy-chart"
              style={{ flex: "1", width: "100%" }}
            ></div>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}
