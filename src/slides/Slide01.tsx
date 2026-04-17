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
        
        #slide-container {
            width: 1280px;
            height: 720px;
            position: relative;
            overflow: hidden;
            background-color: #F8FAFC;
        }

        .bg-grid {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                linear-gradient(to right, rgba(148, 163, 184, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(148, 163, 184, 0.1) 1px, transparent 1px);
            background-size: 40px 40px;
            z-index: 0;
        }

        .glow-accent-1 {
            position: absolute;
            width: 600px;
            height: 600px;
            background-color: rgba(59, 130, 246, 0.1);
            border-radius: 50%;
            filter: blur(120px);
            z-index: 1;
        }

        .glow-accent-2 {
            position: absolute;
            width: 500px;
            height: 500px;
            background-color: rgba(16, 185, 129, 0.08);
            border-radius: 50%;
            filter: blur(100px);
            z-index: 1;
        }
        
        .glow-accent-3 {
            position: absolute;
            width: 400px;
            height: 400px;
            background-color: rgba(139, 92, 246, 0.08);
            border-radius: 50%;
            filter: blur(100px);
            z-index: 1;
        }

        .tag-badge {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 20px;
            background-color: #FFFFFF;
            border: 1px solid rgba(59, 130, 246, 0.2);
            border-radius: 8px;
            font-size: 15px;
            font-weight: 600;
            color: #334155;
            white-space: nowrap;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
        }
    `;

export default function Slide01() {
  useEffect(() => {
    const chartDom = document.getElementById(
      "main-chart",
    ) as HTMLDivElement | null;
    if (!chartDom) return;
    const myChart = echarts.init(chartDom);

    const data1 = [];
    const data2 = [];

    let prev1 = 50;
    let prev2 = 30;

    for (let i = 0; i <= 100; i++) {
      const trend1 = Math.sin(i * 0.08) * 25 + Math.sin(i * 0.03) * 15 + 60;
      const noise1 = (Math.random() * 2 - 1) * 2;
      prev1 = prev1 * 0.3 + (trend1 + noise1) * 0.7;
      data1.push([i, prev1]);

      const trend2 =
        Math.sin(i * 0.08 - 0.7) * 15 + Math.sin(i * 0.04) * 10 + 40;
      const noise2 = (Math.random() * 2 - 1) * 1.5;
      prev2 = prev2 * 0.4 + (trend2 + noise2) * 0.6;
      data2.push([i, prev2]);
    }

    const option = {
      animation: true,
      animationDuration: 900,
      animationEasing: "cubicOut",
      animationDurationUpdate: 600,
      animationEasingUpdate: "cubicOut",
      grid: {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
        containLabel: false,
      },
      xAxis: {
        type: "value",
        show: false,
        min: 0,
        max: 100,
      },
      yAxis: {
        type: "value",
        show: false,
        min: 0,
        max: 120,
      },
      series: [
        {
          type: "line",
          data: data1,
          smooth: 0.4,
          showSymbol: false,
          lineStyle: {
            color: "#2563EB",
            width: 3,
            shadowColor: "rgba(37, 99, 235, 0.3)",
            shadowBlur: 10,
            shadowOffsetY: 5,
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(37, 99, 235, 0.15)" },
              { offset: 0.8, color: "rgba(37, 99, 235, 0.02)" },
              { offset: 1, color: "rgba(37, 99, 235, 0.0)" },
            ]),
          },
          zlevel: 2,
        },
        {
          type: "line",
          data: data2,
          smooth: 0.4,
          showSymbol: false,
          lineStyle: {
            color: "#10B981",
            width: 2,
            type: "dashed",
            shadowColor: "rgba(16, 185, 129, 0.2)",
            shadowBlur: 5,
          },
          zlevel: 1,
        },
      ],
    };
    myChart.clear();
    myChart.setOption(option, { notMerge: true, lazyUpdate: false });

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
      <div id="slide-container">
        <div
          className="bg-grid"
          data-object="true"
          data-object-type="shape"
          style={{
            position: "absolute",
            left: "0px",
            top: "0px",
            width: "1280px",
            height: "720px",
          }}
        ></div>
        <div
          className="glow-accent-1"
          data-object="true"
          data-object-type="shape"
          style={{
            position: "absolute",
            left: "780px",
            top: "-200px",
            width: "600px",
            height: "600px",
          }}
        ></div>
        <div
          className="glow-accent-2"
          data-object="true"
          data-object-type="shape"
          style={{
            position: "absolute",
            left: "-100px",
            top: "370px",
            width: "500px",
            height: "500px",
          }}
        ></div>
        <div
          className="glow-accent-3"
          data-object="true"
          data-object-type="shape"
          style={{
            position: "absolute",
            left: "300px",
            top: "200px",
            width: "400px",
            height: "400px",
          }}
        ></div>
        <div
          data-object="true"
          data-object-type="textbox"
          style={{
            position: "absolute",
            left: "80px",
            top: "120px",
            width: "400px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
            zIndex: "10",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(59, 130, 246, 0.1)",
              border: "1px solid rgba(59, 130, 246, 0.3)",
              color: "#2563EB",
              padding: "4px 14px",
              borderRadius: "6px",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "1.5px",
            }}
          >
            PORTFOLIO
          </div>
          <div
            style={{
              color: "#64748B",
              fontSize: "14px",
              fontWeight: "500",
              letterSpacing: "0.5px",
            }}
          >
            Updated 2026.03
          </div>
        </div>
        <div
          data-object="true"
          data-object-type="textbox"
          style={{
            position: "absolute",
            left: "80px",
            top: "175px",
            width: "800px",
            height: "195px",
            zIndex: "10",
          }}
        >
          <h1
            style={{
              fontSize: "86px",
              fontWeight: "900",
              lineHeight: "1.1",
              margin: "0",
              color: "#0F172A",
              letterSpacing: "-2px",
            }}
          >
            데이터 사이언스
          </h1>
          <h1
            style={{
              fontSize: "86px",
              fontWeight: "900",
              lineHeight: "1.1",
              margin: "0",
              color: "#2563EB",
              letterSpacing: "-2px",
            }}
          >
            포트폴리오
          </h1>
        </div>
        <div
          data-object="true"
          data-object-type="shape"
          style={{
            position: "absolute",
            left: "80px",
            top: "400px",
            width: "100px",
            height: "6px",
            backgroundColor: "#10B981",
            borderRadius: "3px",
            zIndex: "10",
          }}
        ></div>
        <div
          data-object="true"
          data-object-type="textbox"
          style={{
            position: "absolute",
            left: "80px",
            top: "440px",
            width: "850px",
            height: "80px",
            zIndex: "10",
          }}
        >
          <p
            style={{
              fontSize: "24px",
              fontWeight: "400",
              color: "#475569",
              lineHeight: "1.6",
              margin: "0",
            }}
          >
            통계적 분석 모델링 역량과
            <span
              style={{
                fontWeight: "700",
                color: "#1E293B",
                borderBottom: "2px solid rgba(16, 185, 129, 0.4)",
              }}
            >
              프로덕션 ML 파이프라인 구축 경험
            </span>
            을 결합하여
            <br />
            데이터의 실질적 가치를 창출하는 데이터 사이언티스트
          </p>
        </div>
        <div
          data-object="true"
          data-object-type="textbox"
          style={{
            position: "absolute",
            left: "80px",
            top: "550px",
            width: "1100px",
            height: "50px",
            display: "flex",
            gap: "16px",
            alignItems: "center",
            flexWrap: "nowrap",
            zIndex: "10",
          }}
        >
          <div className="tag-badge">
            <i
              className="fa-solid fa-chart-line"
              style={{ color: "#10B981" }}
            ></i>
            <span>Statistical Analysis</span>
          </div>
          <div className="tag-badge">
            <i className="fa-solid fa-bolt" style={{ color: "#F59E0B" }}></i>
            <span>Time Series Forecasting</span>
          </div>
          <div className="tag-badge">
            <i className="fa-solid fa-robot" style={{ color: "#8B5CF6" }}></i>
            <span>LLM & NLP</span>
          </div>
          <div className="tag-badge">
            <i className="fa-solid fa-server" style={{ color: "#EC4899" }}></i>
            <span>MLOps & Engineering</span>
          </div>
        </div>
        <div
          data-object="true"
          data-object-type="chart"
          id="main-chart"
          style={{
            position: "absolute",
            left: "680px",
            top: "220px",
            width: "600px",
            height: "380px",
            zIndex: "5",
          }}
        ></div>
        <div
          data-object="true"
          data-object-type="shape"
          style={{
            position: "absolute",
            left: "80px",
            top: "640px",
            width: "1120px",
            height: "1px",
            backgroundColor: "rgba(203, 213, 225, 0.8)",
            zIndex: "10",
          }}
        ></div>
        <div
          data-object="true"
          data-object-type="textbox"
          style={{
            position: "absolute",
            left: "80px",
            top: "660px",
            width: "500px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            gap: "24px",
            zIndex: "10",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#64748B",
              margin: "0",
              letterSpacing: "0.5px",
            }}
          >
            TECH STACK
          </p>
          <div
            style={{
              display: "flex",
              gap: "20px",
              fontSize: "24px",
              color: "#475569",
            }}
          >
            <i className="fa-brands fa-python"></i>
            <i className="fa-solid fa-brain"></i>
            <i className="fa-solid fa-database"></i>
            <i className="fa-brands fa-aws"></i>
            <i className="fa-brands fa-docker"></i>
            <i className="fa-solid fa-chart-simple"></i>
          </div>
        </div>
        <div
          data-object="true"
          data-object-type="textbox"
          style={{
            position: "absolute",
            left: "800px",
            top: "665px",
            width: "400px",
            height: "20px",
            textAlign: "right",
            zIndex: "10",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              fontWeight: "500",
              color: "#94A3B8",
              margin: "0",
              letterSpacing: "1px",
            }}
          >
            CONFIDENTIAL - PORTFOLIO PRESENTATION
          </p>
        </div>
      </div>
    </SlideFrame>
  );
}
