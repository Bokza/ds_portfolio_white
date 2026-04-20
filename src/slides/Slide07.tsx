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
        .highlight-red { color: #DC2626; font-weight: 700; }
        .glass-panel {
            background: #FFFFFF;
            border: 1px solid #E2E8F0;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
            border-radius: 16px;
        }
    `;

export default function Slide07() {
  useEffect(() => {
    {
      const chartDom = document.getElementById(
        "anomaly-chart",
      ) as HTMLDivElement | null;
      if (!chartDom) return;
      const myChart = echarts.init(chartDom);
      const dataCount = 50;
      const xData = [];
      const normalData = [];
      const anomalyPoints = [];

      for (let i = 0; i < dataCount; i++) {
        xData.push(i);
        let base = Math.sin(i / 5) * 20 + 50;
        let noise = (Math.random() - 0.5) * 5;
        let value = base + noise;
        let bandWidth = 10;
        let upper = base + bandWidth;
        let lower = base - bandWidth;

        if (i === 15) value = base + 25;
        if (i === 35) value = base - 28;
        if (i === 36) value = base - 20;

        normalData.push(value);

        if (value > upper || value < lower) {
          anomalyPoints.push([i, value]);
        }
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
        xAxis: { type: "category", data: xData, show: false },
        yAxis: {
          type: "value",
          splitLine: { lineStyle: { color: "#E2E8F0", type: "dashed" } },
          axisLabel: { color: "#64748B", fontSize: 11 },
        },
        series: [
          {
            name: "Upper Limit",
            type: "line",
            data: xData.map((i) => Math.sin(i / 5) * 20 + 50 + 12),
            lineStyle: { type: "dashed", color: "#93C5FD", width: 1 },
            symbol: "none",
            areaStyle: {
              color: "rgba(59, 130, 246, 0.1)",
            },
            z: 1,
          },
          {
            name: "Lower Limit",
            type: "line",
            data: xData.map((i) => Math.sin(i / 5) * 20 + 50 - 12),
            lineStyle: { type: "dashed", color: "#93C5FD", width: 1 },
            symbol: "none",
            areaStyle: { color: "#FFFFFF", opacity: 1 },
            z: 2,
          },
          {
            name: "Signal",
            type: "line",
            data: normalData,
            smooth: true,
            lineStyle: { color: "#475569", width: 2 },
            symbol: "circle",
            symbolSize: 4,
            itemStyle: { color: "#475569" },
            z: 3,
          },
          {
            name: "Anomaly",
            type: "effectScatter",
            rippleEffect: { brushType: "stroke", scale: 3 },
            data: anomalyPoints,
            symbolSize: 10,
            itemStyle: {
              color: "#EF4444",
              shadowBlur: 8,
              shadowColor: "rgba(239, 68, 68, 0.5)",
            },
            z: 4,
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
                  PROJECT 05
                </span>
              </div>
              <span
                style={{
                  background: "#FEF2F2",
                  border: "1px solid #FECACA",
                  color: "#DC2626",
                  fontSize: "13px",
                  fontWeight: "700",
                  padding: "4px 14px",
                  borderRadius: "20px",
                  letterSpacing: "0.05em",
                }}
              >
                Monitoring
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
                이상 탐지 시스템
              </h1>
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#64748B",
                  letterSpacing: "0.02em",
                }}
              >
                Anomaly Detection Service
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
            에너지 및 IAQ(실내공기질) 센서 데이터의 흐름을 실시간으로 감시하여,
            <span className="highlight-red">
              장비 고장, 통신 오류, 비정상적인 에너지 패턴
            </span>
            을 즉각적으로 탐지하고 알림을 제공하는 자동화된 모니터링
            시스템입니다.
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
              주요 역할 및 기술적 접근
            </h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { n: "01", content: <><strong>통계적 앙상블 탐지:</strong> <span className="highlight-blue">Hampel Filter</span>, <span className="highlight-red">IQR</span>, Sequence Detector를 결합해 오탐지 최소화</> },
              { n: "02", content: <><strong>동적 임계치 설정:</strong> 센서 유형 및 평일/주말 패턴에 따라 유동적으로 변화하는 정상 범위(Dynamic Window) 적용</> },
              { n: "03", content: <><strong>데이터 파이프라인:</strong> 7단계 전처리를 통해 노이즈 제거 및 데이터 품질 확보</> },
              { n: "04", content: <><strong>확장성 있는 배포:</strong> BentoML 기반으로 50개 이상의 센서를 실시간 병렬 처리</> },
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
            top: "630px",
            width: "540px",
            height: "70px",
            zIndex: "10",
          }}
        >
          <div
            style={{
              fontSize: "13px",
              fontWeight: "600",
              color: "#64748B",
              marginBottom: "8px",
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
                padding: "4px 12px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              <i
                className="fab fa-python"
                style={{ marginRight: "6px", color: "#EF4444" }}
              ></i>
              Python
            </span>
            <span
              style={{
                background: "#F8FAFC",
                border: "1px solid #CBD5E1",
                color: "#334155",
                padding: "4px 12px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              <i
                className="fas fa-filter"
                style={{ marginRight: "6px", color: "#EF4444" }}
              ></i>
              SciPy / Pandas
            </span>
            <span
              style={{
                background: "#F8FAFC",
                border: "1px solid #CBD5E1",
                color: "#334155",
                padding: "4px 12px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              <i
                className="fas fa-cube"
                style={{ marginRight: "6px", color: "#EF4444" }}
              ></i>
              BentoML
            </span>
            <span
              style={{
                background: "#F8FAFC",
                border: "1px solid #CBD5E1",
                color: "#334155",
                padding: "4px 12px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              <i
                className="fas fa-database"
                style={{ marginRight: "6px", color: "#EF4444" }}
              ></i>
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
                padding: "16px",
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
                  right: "-15px",
                  bottom: "-15px",
                  color: "#CBD5E1",
                  opacity: "0.15",
                }}
              >
                <i
                  className="fas fa-satellite-dish"
                  style={{ fontSize: "70px" }}
                ></i>
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
                  50
                </span>
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "#EF4444",
                  }}
                >
                  +
                </span>
              </div>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#64748B",
                  marginTop: "4px",
                }}
              >
                감시 센서 수
              </span>
            </div>
            <div
              className="glass-panel"
              style={{
                flex: "1.1",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                background: "linear-gradient(135deg, #FEF2F2 0%, #FEE2E2 100%)",
                border: "1px solid #FECACA",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  right: "-15px",
                  bottom: "-15px",
                  color: "#FCA5A5",
                  opacity: "0.25",
                }}
              >
                <i
                  className="fas fa-shield-alt"
                  style={{ fontSize: "70px" }}
                ></i>
              </div>
              <div
                style={{ display: "flex", alignItems: "baseline", gap: "4px" }}
              >
                <span
                  style={{
                    fontSize: "32px",
                    fontWeight: "800",
                    color: "#DC2626",
                    lineHeight: "1",
                  }}
                >
                  Ens.
                </span>
              </div>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#475569",
                  marginTop: "4px",
                }}
              >
                3단계 검증 알고리즘
              </span>
            </div>
            <div
              className="glass-panel"
              style={{
                flex: "1",
                padding: "16px",
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
                  right: "-15px",
                  bottom: "-15px",
                  color: "#CBD5E1",
                  opacity: "0.15",
                }}
              >
                <i className="fas fa-bell" style={{ fontSize: "70px" }}></i>
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
                    color: "#EF4444",
                    lineHeight: "1",
                  }}
                >
                  <i className="fas fa-exclamation-triangle"></i>
                </span>
              </div>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#64748B",
                  marginTop: "4px",
                }}
              >
                고장 조기 진단
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
                이상치 탐지 시뮬레이션
              </h3>
              <div style={{ display: "flex", gap: "16px" }}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "6px" }}
                >
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
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
                    정상 범위
                  </span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "6px" }}
                >
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#EF4444",
                    }}
                  ></span>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#475569",
                    }}
                  >
                    이상 발생
                  </span>
                </div>
              </div>
            </div>
            <div id="anomaly-chart" style={{ flex: "1", width: "100%" }}></div>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}
