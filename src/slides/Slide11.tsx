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
            background-color: #FFFFFF;
        }

        .bg-grid-pattern {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e2e8f0' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
            z-index: 0;
        }

        .glow-blob {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            z-index: 0;
            opacity: 0.15;
            pointer-events: none;
        }

        .blob-emerald {
            width: 600px;
            height: 600px;
            background-color: #10B981;
            top: -200px;
            left: -100px;
        }

        .blob-blue {
            width: 500px;
            height: 500px;
            background-color: #3B82F6;
            bottom: -150px;
            right: -100px;
        }

        .cert-card {
            width: 260px;
            height: 205px;
            background-color: #FFFFFF;
            border: 1px solid #E2E8F0;
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            text-align: center;
            box-sizing: border-box;
        }

        .cert-icon {
            width: 44px;
            height: 44px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            font-size: 1.25rem;
        }

        .cert-title {
            font-size: 1.05rem;
            font-weight: 700;
            color: #1E293B;
            line-height: 1.3;
            margin: 0;
        }

        .cert-org {
            font-size: 0.8rem;
            color: #64748B;
            margin: 0;
        }

        .cert-tag {
            font-size: 0.75rem;
            font-weight: 500;
            padding: 6px 0;
            border-radius: 4px;
            margin: 0;
        }

        .date-pill {
            background-color: #FFFFFF;
            border: 1px solid #CBD5E1;
            color: #475569;
            padding: 6px 0;
            border-radius: 9999px;
            font-size: 0.85rem;
            font-weight: 600;
            letter-spacing: 0.05em;
            font-family: monospace;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            text-align: center;
            width: 100px;
            box-sizing: border-box;
        }

        .timeline-dot {
            width: 20px;
            height: 20px;
            background-color: #FFFFFF;
            border-radius: 50%;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            box-sizing: border-box;
        }

        .accent-blue-dot { border: 4px solid #3B82F6; }
        .accent-blue-icon { color: #3B82F6; background-color: rgba(59, 130, 246, 0.1); }
        .accent-blue-tag { color: #2563EB; background-color: rgba(59, 130, 246, 0.1); }
        
        .accent-emerald-dot { border: 4px solid #10B981; }
        .accent-emerald-icon { color: #10B981; background-color: rgba(16, 185, 129, 0.1); }
        .accent-emerald-tag { color: #059669; background-color: rgba(16, 185, 129, 0.1); }
        
        .accent-purple-dot { border: 4px solid #8B5CF6; }
        .accent-purple-icon { color: #8B5CF6; background-color: rgba(139, 92, 246, 0.1); }
        .accent-purple-tag { color: #7C3AED; background-color: rgba(139, 92, 246, 0.1); }
        
        .accent-amber-dot { border: 4px solid #F59E0B; }
        .accent-amber-icon { color: #F59E0B; background-color: rgba(245, 158, 11, 0.1); }
        .accent-amber-tag { color: #D97706; background-color: rgba(245, 158, 11, 0.1); }

    `;

export default function Slide11() {
  return (
    <SlideFrame>
      <style>{slideCss}</style>
  <div className="slide-container">
    <div className="bg-grid-pattern" data-object="true" data-object-type="shape" style={{position: "absolute", left: "0px", top: "0px", width: "1280px", height: "720px"}}></div>
    <div className="glow-blob blob-emerald" data-object="true" data-object-type="shape" style={{position: "absolute", left: "-100px", top: "-200px", width: "600px", height: "600px"}}></div>
    <div className="glow-blob blob-blue" data-object="true" data-object-type="shape" style={{position: "absolute", left: "880px", top: "270px", width: "500px", height: "500px"}}></div>
    <div data-object="true" data-object-type="textbox" style={{position: "absolute", left: "60px", top: "40px", width: "1160px", height: "125px", borderBottom: "1px solid #E2E8F0", paddingBottom: "16px"}}>
      <p style={{color: "#3B82F6", fontWeight: "700", fontSize: "14px", letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 4px 0"}}>
        Certification & Education
      </p>
      <h1 style={{fontSize: "36px", fontWeight: "800", color: "#0F172A", margin: "0", letterSpacing: "-0.025em", display: "inline-block"}}>
        자격증 및 전문 이력
      </h1>
      <div style={{float: "right", marginTop: "16px"}}>
        <p style={{color: "#64748B", fontSize: "14px", margin: "0"}}>
          <i className="fas fa-check-circle" style={{color: "#10B981", marginRight: "8px"}}></i>
          All Certified
        </p>
      </div>
    </div>
    <div data-object="true" data-object-type="shape" style={{position: "absolute", left: "100px", top: "400px", width: "1080px", height: "4px", backgroundColor: "#E2E8F0", borderRadius: "2px"}}></div>
    <div data-object="true" data-object-type="shape" style={{position: "absolute", left: "100px", top: "400px", width: "1080px", height: "4px", backgroundColor: "#3B82F6", opacity: "0.3", borderRadius: "2px"}}></div>
    <div data-object="true" data-object-type="shape" style={{position: "absolute", left: "249px", top: "345px", width: "2px", height: "55px", backgroundColor: "#CBD5E1"}}></div>
    <div data-object="true" data-object-type="shape" style={{position: "absolute", left: "512px", top: "404px", width: "2px", height: "60px", backgroundColor: "#CBD5E1"}}></div>
    <div data-object="true" data-object-type="shape" style={{position: "absolute", left: "768px", top: "345px", width: "2px", height: "55px", backgroundColor: "#CBD5E1"}}></div>
    <div data-object="true" data-object-type="shape" style={{position: "absolute", left: "1024px", top: "404px", width: "2px", height: "60px", backgroundColor: "#CBD5E1"}}></div>
    <div className="timeline-dot accent-blue-dot" data-object="true" data-object-type="shape" style={{position: "absolute", left: "240px", top: "392px"}}></div>
    <div className="timeline-dot accent-emerald-dot" data-object="true" data-object-type="shape" style={{position: "absolute", left: "503px", top: "392px"}}></div>
    <div className="timeline-dot accent-purple-dot" data-object="true" data-object-type="shape" style={{position: "absolute", left: "759px", top: "392px"}}></div>
    <div className="timeline-dot accent-amber-dot" data-object="true" data-object-type="shape" style={{position: "absolute", left: "1015px", top: "392px"}}></div>
    <div className="date-pill" data-object="true" data-object-type="textbox" style={{position: "absolute", left: "200px", top: "420px"}}>
      <p style={{margin: "0"}}>
        2021.03
      </p>
    </div>
    <div className="date-pill" data-object="true" data-object-type="textbox" style={{position: "absolute", left: "463px", top: "350px"}}>
      <p style={{margin: "0"}}>
        2021.09
      </p>
    </div>
    <div className="date-pill" data-object="true" data-object-type="textbox" style={{position: "absolute", left: "719px", top: "420px"}}>
      <p style={{margin: "0"}}>
        2022.06
      </p>
    </div>
    <div className="date-pill" data-object="true" data-object-type="textbox" style={{position: "absolute", left: "975px", top: "350px"}}>
      <p style={{margin: "0"}}>
        2022.07
      </p>
    </div>
    <div className="cert-card" data-object="true" data-object-type="textbox" style={{position: "absolute", left: "120px", top: "140px"}}>
      <div className="cert-icon accent-blue-icon">
        <i className="fas fa-laptop-code"></i>
      </div>
      <p className="cert-title">
        컴퓨터활용능력 1급
      </p>
      <p className="cert-org">
        대한상공회의소
      </p>
      <p className="cert-tag accent-blue-tag">
        Database & Spreadsheet
      </p>
    </div>
    <div className="cert-card" data-object="true" data-object-type="textbox" style={{position: "absolute", left: "383px", top: "475px"}}>
      <div className="cert-icon accent-emerald-icon">
        <i className="fas fa-chart-pie"></i>
      </div>
      <p className="cert-title">
        데이터분석준전문가
      </p>
      <p className="cert-org" style={{fontSize: "0.75rem"}}>
        (ADsP) 한국데이터산업진흥원
      </p>
      <p className="cert-tag accent-emerald-tag">
        Data Analysis Basics
      </p>
    </div>
    <div className="cert-card" data-object="true" data-object-type="textbox" style={{position: "absolute", left: "639px", top: "140px"}}>
      <div className="cert-icon accent-purple-icon">
        <i className="fas fa-clipboard-list"></i>
      </div>
      <p className="cert-title">
        사회조사분석사 2급
      </p>
      <p className="cert-org">
        한국산업인력공단
      </p>
      <p className="cert-tag accent-purple-tag">
        Statistical Survey
      </p>
    </div>
    <div className="cert-card" data-object="true" data-object-type="textbox" style={{position: "absolute", left: "895px", top: "475px"}}>
      <div className="cert-icon accent-amber-icon">
        <i className="fas fa-database"></i>
      </div>
      <p className="cert-title">
        빅데이터 분석기사
      </p>
      <p className="cert-org">
        한국데이터산업진흥원
      </p>
      <p className="cert-tag accent-amber-tag">
        Data Engineering
      </p>
    </div>
  </div>
    </SlideFrame>
  );
}
