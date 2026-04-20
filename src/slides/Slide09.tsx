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

export default function Slide09() {
  useEffect(() => {
    {
      const chartDom = document.getElementById(
        "water-level-chart",
      ) as HTMLDivElement | null;
      if (!chartDom) return;
      const myChart = echarts.init(chartDom);

      const hours = [];
      const rainfall = [];
      const actualLevel = [];
      const predictedLevel = [];

      let currentLevel = 50;

      for (let i = -12; i <= 12; i++) {
        const label = i === 0 ? "Now" : i > 0 ? `+${i}h` : `${i}h`;
        hours.push(label);

        let rain = 0;
        if (i >= -10 && i <= -6) rain = Math.random() * 30 + 10;
        else if (i > -6 && i <= -2) rain = Math.random() * 10;
        rainfall.push(rain.toFixed(1));

        let rainEffect = 0;
        if (i >= -8) {
          const pastRainIndex = i + 12 - 2;
          if (pastRainIndex >= 0 && pastRainIndex < rainfall.length) {
            rainEffect = parseFloat(rainfall[pastRainIndex]) * 0.5;
          }
        }

        currentLevel += rainEffect * 0.8;
        if (currentLevel > 95) currentLevel = 95;

        if (i <= 0) {
          actualLevel.push(currentLevel.toFixed(1));
          predictedLevel.push(currentLevel.toFixed(1));
        } else {
          actualLevel.push(null);
          predictedLevel.push((currentLevel + Math.random() * 2).toFixed(1));
        }
      }

      const option = {
        animation: true,
        animationDuration: 900,
        animationEasing: "cubicOut" as const,
        animationDurationUpdate: 600,
        animationEasingUpdate: "cubicOut" as const,
        grid: { top: 10, bottom: 20, left: 30, right: 30, containLabel: true },
        tooltip: {
          trigger: "axis",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          borderColor: "#E2E8F0",
          textStyle: { color: "#1E293B" },
          axisPointer: { type: "cross", label: { backgroundColor: "#64748B" } },
          formatter: (params: any) => {
            const list = Array.isArray(params) ? params : [params];
            return list.map((p: any) => `${p.marker}${p.seriesName}: ${Number(p.value).toFixed(2)}`).join("<br/>");
          },
        },
        xAxis: {
          type: "category",
          data: hours,
          axisLine: { lineStyle: { color: "#CBD5E1" } },
          axisLabel: { color: "#64748B", fontSize: 11 },
          axisTick: { show: false },
        },
        yAxis: [
          {
            type: "value",
            name: "수위 (%)",
            min: 40,
            max: 100,
            position: "left",
            splitLine: { lineStyle: { color: "#E2E8F0", type: "dashed" } },
            axisLabel: { color: "#64748B", fontSize: 11 },
            nameTextStyle: {
              color: "#64748B",
              fontSize: 11,
              padding: [0, 20, 0, 0],
            },
          },
          {
            type: "value",
            name: "강우량",
            min: 0,
            max: 60,
            position: "right",
            splitLine: { show: false },
            axisLabel: { color: "#93C5FD", fontSize: 11 },
            nameTextStyle: {
              color: "#93C5FD",
              fontSize: 11,
              padding: [0, 0, 0, 20],
            },
          },
        ],
        series: [
          {
            name: "강우량",
            type: "bar",
            yAxisIndex: 1,
            data: rainfall,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#93C5FD" },
                { offset: 1, color: "rgba(147, 197, 253, 0.1)" },
              ]),
              borderRadius: [3, 3, 0, 0],
            },
            barWidth: "50%",
          },
          {
            name: "실측",
            type: "line",
            yAxisIndex: 0,
            data: actualLevel,
            smooth: true,
            showSymbol: false,
            lineStyle: { width: 3, color: "#0F172A" },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "rgba(15, 23, 42, 0.05)" },
                { offset: 1, color: "rgba(15, 23, 42, 0)" },
              ]),
            },
          },
          {
            name: "예측",
            type: "line",
            yAxisIndex: 0,
            data: predictedLevel,
            smooth: true,
            showSymbol: false,
            lineStyle: { width: 3, color: "#3B82F6", type: "dashed" },
          },
        ],
      };
      myChart.clear();
      myChart.setOption(option, { notMerge: true, lazyUpdate: false });
      window.addEventListener("resize", function () {
        myChart.resize();
      });
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
                  PROJECT 06
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
                PRODUCTION
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
                저수지 수위 예측 솔루션
              </h1>
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#64748B",
                  letterSpacing: "0.02em",
                }}
              >
                Reservoir Level Prediction Service
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
            height: "120px",
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
            주민 안전 및 수문 조작 의사결정을 지원하기 위해 강우량과 수위
            데이터를 실시간 분석하여,
            <span className="highlight-blue">12시간 후의 저수지 수위</span>를
            예측하는
            <span className="highlight-green">머신러닝 서비스</span>
            입니다.
          </p>
        </div>
        <div
          data-object="true"
          data-object-type="textbox"
          style={{
            position: "absolute",
            left: "60px",
            top: "300px",
            width: "540px",
            height: "320px",
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
              주요 역할 및 기술적 성과
            </h3>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
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
                <strong>데이터 분석(EDA):</strong>
                강우-수위 상관관계 분석을 통해
                <span style={{ color: "#2563EB", fontWeight: "600" }}>
                  1~2시간 래그(Lag) 패턴
                </span>
                도출 및 파생변수 설계
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
                <strong>강건한 전처리 파이프라인:</strong>
                <span style={{ color: "#059669", fontWeight: "600" }}>
                  Hampel Filter
                </span>
                기반 이상치(Spike) 탐지 및 선형 보간 로직 구현
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
                <strong>듀얼 모델 아키텍처:</strong>
                AutoML과 시계열 특화 모델인
                <span style={{ color: "#8B5CF6", fontWeight: "600" }}>
                  DLinear
                </span>
                를 결합하여 예측 성능 극대화
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
                  04
                </span>
              </div>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  color: "#475569",
                }}
              >
                <strong>비즈니스 임팩트:</strong>
                주민 대피 골든타임을 확보하고 수문 조작 의사결정 자동화 기반
                마련
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
            top: "625px",
            width: "540px",
            height: "85px",
            zIndex: "10",
          }}
        >
          <div
            style={{
              fontSize: "13px",
              fontWeight: "600",
              color: "#64748B",
              marginBottom: "10px",
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
                padding: "5px 12px",
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
                padding: "5px 12px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              <i
                className="fas fa-robot"
                style={{ marginRight: "6px", color: "#3B82F6" }}
              ></i>
              AutoML
            </span>
            <span
              style={{
                background: "#F8FAFC",
                border: "1px solid #CBD5E1",
                color: "#334155",
                padding: "5px 12px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              <i
                className="fas fa-wave-square"
                style={{ marginRight: "6px", color: "#3B82F6" }}
              ></i>
              DLinear
            </span>
            <span
              style={{
                background: "#F8FAFC",
                border: "1px solid #CBD5E1",
                color: "#334155",
                padding: "5px 12px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              <i
                className="fas fa-bolt"
                style={{ marginRight: "6px", color: "#3B82F6" }}
              ></i>
              FastAPI
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
                <i className="fas fa-clock" style={{ fontSize: "80px" }}></i>
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
                  12
                </span>
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#64748B",
                  }}
                >
                  h
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
                예측 선행 시간
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
                <i
                  className="fas fa-person-running"
                  style={{ fontSize: "80px" }}
                ></i>
              </div>
              <div
                style={{ display: "flex", alignItems: "baseline", gap: "4px" }}
              >
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "800",
                    color: "#2563EB",
                    lineHeight: "1",
                  }}
                >
                  Max
                </span>
                <span
                  style={{
                    fontSize: "42px",
                    fontWeight: "800",
                    color: "#2563EB",
                    lineHeight: "1",
                    marginLeft: "4px",
                  }}
                >
                  12
                </span>
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#3B82F6",
                  }}
                >
                  h
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
                대피 시간 단축
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
                <i
                  className="fas fa-layer-group"
                  style={{ fontSize: "80px" }}
                ></i>
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
                    fontSize: "28px",
                    fontWeight: "800",
                    color: "#10B981",
                    lineHeight: "1",
                  }}
                >
                  Dual
                </span>
              </div>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#64748B",
                  marginTop: "8px",
                  width: "100%",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                AutoML + DLinear
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
                강우량 기반 수위 예측 시뮬레이션
              </h3>
              <div style={{ display: "flex", gap: "12px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "12px",
                    color: "#475569",
                    fontWeight: "500",
                  }}
                >
                  <span
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "2px",
                      backgroundColor: "#93C5FD",
                    }}
                  ></span>
                  강우량
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "12px",
                    color: "#475569",
                    fontWeight: "500",
                  }}
                >
                  <span
                    style={{
                      width: "12px",
                      height: "4px",
                      borderRadius: "2px",
                      backgroundColor: "#0F172A",
                    }}
                  ></span>
                  실측
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "12px",
                    color: "#475569",
                    fontWeight: "500",
                  }}
                >
                  <span
                    style={{
                      width: "12px",
                      height: "4px",
                      borderRadius: "2px",
                      borderTop: "2px dashed #3B82F6",
                    }}
                  ></span>
                  예측
                </div>
              </div>
            </div>
            <div
              id="water-level-chart"
              style={{ flex: "1", width: "100%" }}
            ></div>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}
