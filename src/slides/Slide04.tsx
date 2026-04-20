import { useEffect } from "react";
import * as echarts from "echarts";
import SlideFrame from "../components/SlideFrame";

const slideCss = `

        body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #F8FAFC;
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
    `;

export default function Slide04() {
  useEffect(() => {
    {
      const chartDom = document.getElementById(
        "energy-chart",
      ) as HTMLDivElement | null;
      if (!chartDom) return;
      const myChart = echarts.init(chartDom);

      const timeData = [];
      const actualData = [];
      const predictData = [];

      for (let i = 0; i < 24; i++) {
        const hour = i < 10 ? `0${i}:00` : `${i}:00`;
        timeData.push(hour);

        let base = 50;
        if (i >= 7 && i <= 20) {
          base = 200 + Math.sin(((i - 7) / 13) * Math.PI) * 150;
        }

        const noise = (Math.random() - 0.5) * 20;
        const actual = Math.max(0, base + noise);
        const predicted = Math.max(0, base + (Math.random() - 0.5) * 5);

        actualData.push(actual.toFixed(1));
        predictData.push(predicted.toFixed(1));
      }

      const option = {
        animation: true,
        grid: {
          top: 20,
          bottom: 25,
          left: 50,
          right: 20,
          containLabel: true,
        },
        tooltip: {
          trigger: "axis",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          borderColor: "#E2E8F0",
          borderWidth: 1,
          textStyle: { color: "#1E293B" },
          padding: [10, 15],
          axisPointer: {
            type: "line",
            lineStyle: { color: "#CBD5E1", type: "dashed" },
          },
          formatter: (params: any) => {
            const list = Array.isArray(params) ? params : [params];
            return list.map((p: any) => `${p.marker}${p.seriesName}: ${Number(p.value).toFixed(2)}`).join("<br/>");
          },
        },
        xAxis: {
          type: "category",
          data: timeData,
          axisLine: { lineStyle: { color: "#E2E8F0" } },
          axisLabel: {
            color: "#64748B",
            fontSize: 11,
            interval: 3,
            margin: 12,
          },
          axisTick: { show: false },
        },
        yAxis: {
          type: "value",
          name: "kWh",
          splitLine: { lineStyle: { color: "#F1F5F9", type: "dashed" } },
          axisLabel: { color: "#64748B", margin: 12 },
          nameTextStyle: {
            color: "#64748B",
            padding: [0, 0, 0, 20],
            fontSize: 11,
          },
        },
        series: [
          {
            name: "실측값",
            type: "line",
            smooth: true,
            showSymbol: false,
            data: actualData,
            lineStyle: { width: 3, color: "#3B82F6" },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "rgba(59, 130, 246, 0.2)" },
                { offset: 1, color: "rgba(59, 130, 246, 0.02)" },
              ]),
            },
          },
          {
            name: "예측값",
            type: "line",
            smooth: true,
            showSymbol: false,
            data: predictData,
            lineStyle: { width: 2, color: "#10B981", type: "dashed" },
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
          data-object-type="shape"
          style={{
            position: "absolute",
            left: "800px",
            top: "-100px",
            width: "600px",
            height: "600px",
            backgroundColor: "#DBEAFE",
            borderRadius: "50%",
            filter: "blur(120px)",
            opacity: "0.07",
            zIndex: "1",
          }}
        ></div>
        <div
          data-object="true"
          data-object-type="shape"
          style={{
            position: "absolute",
            left: "-150px",
            top: "400px",
            width: "500px",
            height: "500px",
            backgroundColor: "#D1FAE5",
            borderRadius: "50%",
            filter: "blur(120px)",
            opacity: "0.07",
            zIndex: "1",
          }}
        ></div>
        <div
          data-object="true"
          data-object-type="shape"
          style={{
            position: "absolute",
            left: "400px",
            top: "200px",
            width: "400px",
            height: "400px",
            backgroundColor: "#EDE9FE",
            borderRadius: "50%",
            filter: "blur(150px)",
            opacity: "0.07",
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
            height: "100px",
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
                  PROJECT 02
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
                Time Series Forecasting
              </span>
            </div>
            <div
              style={{
                borderBottom: "1px solid rgba(148, 163, 184, 0.3)",
                paddingBottom: "12px",
              }}
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
                건물 에너지 사용량 예측
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    color: "#64748B",
                    marginLeft: "15px",
                    letterSpacing: "0",
                  }}
                >
                  Energy Prediction Service
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
            top: "155px",
            width: "550px",
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
            <i className="fa-solid fa-bullseye" style={{ color: "#3B82F6", fontSize: "18px" }}></i>
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
              lineHeight: "1.65",
              color: "#475569",
              fontWeight: "400",
            }}
          >
            15분 단위의 에너지 데이터를 기반으로 일·월 단위의
            <span className="highlight-blue">전력 수요를 정밀 예측</span>
            하고, 비효율적인
            <span className="highlight-green">낭비량</span>을 사전에 감지하여
            에너지 비용 절감을 지원하는 ML 서비스입니다.
          </p>
        </div>
        <div
          data-object="true"
          data-object-type="textbox"
          style={{
            position: "absolute",
            left: "60px",
            top: "300px",
            width: "550px",
            height: "310px",
            zIndex: "10",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "16px",
            }}
          >
            <i className="fa-solid fa-layer-group" style={{ color: "#10B981", fontSize: "18px" }}></i>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#0F172A",
                margin: "0",
              }}
            >
              주요 역할 및 성과
            </h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { n: "01", content: <><strong style={{ color: "#0F172A" }}>XGBoost 듀얼 모델 아키텍처:</strong> <span className="highlight-blue">실사용량 예측</span> 및 <span className="highlight-green">낭비량 감지</span> 모델 분리 설계로 정확도 극대화</> },
              { n: "02", content: <><strong style={{ color: "#0F172A" }}>Feature Engineering:</strong> 체감온도, 냉방도일(CDH), 시간 주기성(Sin/Cos) 등 도메인 특화 변수 적용</> },
              { n: "03", content: <><strong style={{ color: "#0F172A" }}>MLOps 파이프라인 구축:</strong> 건물별 GridSearchCV 하이퍼파라미터 최적화 및 MLflow 기반 모델 버전 관리</> },
              { n: "04", content: <><strong style={{ color: "#0F172A" }}>프로덕션 성과:</strong> 11개 건물 배포, 피크 요금 제어 지원으로 운영 비용 절감 기여</> },
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
            left: "60px",
            top: "620px",
            width: "550px",
            height: "90px",
            zIndex: "10",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              fontWeight: "800",
              color: "#64748B",
              marginBottom: "12px",
              letterSpacing: "0.1em",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <i className="fas fa-layer-group" style={{ fontSize: "12px" }}></i>
            TECH STACK
          </div>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <span
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                color: "#334155",
                padding: "6px 14px",
                borderRadius: "24px",
                fontSize: "14px",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              }}
            >
              <i className="fab fa-python" style={{ color: "#2563EB" }}></i>
              Python
            </span>
            <span
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                color: "#334155",
                padding: "6px 14px",
                borderRadius: "24px",
                fontSize: "14px",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              }}
            >
              <i className="fas fa-brain" style={{ color: "#2563EB" }}></i>
              XGBoost
            </span>
            <span
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                color: "#334155",
                padding: "6px 14px",
                borderRadius: "24px",
                fontSize: "14px",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              }}
            >
              <i className="fas fa-cogs" style={{ color: "#2563EB" }}></i>
              MLflow
            </span>
            <span
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                color: "#334155",
                padding: "6px 14px",
                borderRadius: "24px",
                fontSize: "14px",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              }}
            >
              <i className="fas fa-box-open" style={{ color: "#2563EB" }}></i>
              BentoML
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
            height: "125px",
            zIndex: "10",
          }}
        >
          <div style={{ display: "flex", gap: "16px", height: "100%" }}>
            <div
              style={{
                flex: "1",
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: "16px",
                padding: "20px",
                boxShadow:
                  "0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)",
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
                  top: "-10px",
                  opacity: "0.05",
                  fontSize: "80px",
                  color: "#3B82F6",
                }}
              >
                <i className="fas fa-bullseye"></i>
              </div>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#64748B",
                  marginBottom: "6px",
                  zIndex: "1",
                }}
              >
                예측 정확도
              </span>
              <span
                style={{
                  fontSize: "42px",
                  fontWeight: "800",
                  color: "#0F172A",
                  lineHeight: "1",
                  zIndex: "1",
                }}
              >
                0.93
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#3B82F6",
                    marginLeft: "4px",
                  }}
                >
                  R²
                </span>
              </span>
            </div>
            <div
              style={{
                flex: "1",
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: "16px",
                padding: "20px",
                boxShadow:
                  "0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)",
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
                  top: "-10px",
                  opacity: "0.05",
                  fontSize: "80px",
                  color: "#10B981",
                }}
              >
                <i className="fas fa-bolt"></i>
              </div>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#64748B",
                  marginBottom: "6px",
                  zIndex: "1",
                }}
              >
                낭비량 예측 오차
              </span>
              <span
                style={{
                  fontSize: "42px",
                  fontWeight: "800",
                  color: "#0F172A",
                  lineHeight: "1",
                  zIndex: "1",
                }}
              >
                8.9
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#10B981",
                    marginLeft: "4px",
                  }}
                >
                  %
                </span>
              </span>
            </div>
            <div
              style={{
                flex: "1",
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: "16px",
                padding: "20px",
                boxShadow:
                  "0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)",
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
                  top: "-10px",
                  opacity: "0.05",
                  fontSize: "80px",
                  color: "#8B5CF6",
                }}
              >
                <i className="fas fa-building"></i>
              </div>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#64748B",
                  marginBottom: "6px",
                  zIndex: "1",
                }}
              >
                운영 건물 배포
              </span>
              <span
                style={{
                  fontSize: "42px",
                  fontWeight: "800",
                  color: "#0F172A",
                  lineHeight: "1",
                  zIndex: "1",
                }}
              >
                11
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#8B5CF6",
                    marginLeft: "4px",
                  }}
                >
                  개
                </span>
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
            top: "290px",
            width: "580px",
            height: "390px",
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
                "0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <i
                  className="fas fa-chart-area"
                  style={{ color: "#3B82F6" }}
                ></i>
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#1E293B",
                    letterSpacing: "-0.01em",
                  }}
                >
                  실시간 전력량 예측 (Actual vs Predicted)
                </span>
              </div>
              <div style={{ display: "flex", gap: "15px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "13px",
                    color: "#64748B",
                    fontWeight: "600",
                  }}
                >
                  <span
                    style={{
                      width: "12px",
                      height: "3px",
                      backgroundColor: "#3B82F6",
                      borderRadius: "2px",
                    }}
                  ></span>
                  실측값
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "13px",
                    color: "#64748B",
                    fontWeight: "600",
                  }}
                >
                  <span
                    style={{
                      width: "12px",
                      height: "3px",
                      backgroundColor: "#10B981",
                      borderRadius: "2px",
                    }}
                  ></span>
                  예측값
                </div>
              </div>
            </div>
            <div
              id="energy-chart"
              style={{ width: "100%", height: "310px" }}
            ></div>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}
