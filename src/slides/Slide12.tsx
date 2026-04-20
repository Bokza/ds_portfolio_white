import SlideFrame from "../components/SlideFrame";

const slideCss = `

    body { margin: 0; padding: 0; overflow: hidden; background-color: #FFFFFF; }
    .slide-container { width: 1280px; height: 720px; position: relative; overflow: hidden; background-color: #FFFFFF; }
    p { margin: 0; }
`;

export default function Slide12() {
  return (
    <SlideFrame>
      <style>{slideCss}</style>
  <div className="slide-container">
    <div data-object="true" data-object-type="image" style={{position: "absolute", left: "0", top: "0", width: "1280px", height: "720px", zIndex: "1", opacity: "0.2", pointerEvents: "none"}}>
      <img src="data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23cbd5e1' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E" style={{width: "100%", height: "100%", objectFit: "cover"}} />
    </div>
    <div data-object="true" data-object-type="shape" style={{position: "absolute", left: "340px", top: "0px", width: "600px", height: "600px", zIndex: "1", opacity: "0.1", filter: "blur(80px)", backgroundColor: "#3B82F6", borderRadius: "50%"}}></div>
    <div data-object="true" data-object-type="shape" style={{position: "absolute", left: "880px", top: "420px", width: "400px", height: "300px", zIndex: "1", opacity: "0.1", filter: "blur(80px)", backgroundColor: "#10B981", borderRadius: "50%"}}></div>
    <div data-object="true" data-object-type="shape" style={{position: "absolute", left: "0px", top: "470px", width: "400px", height: "250px", zIndex: "1", opacity: "0.1", filter: "blur(80px)", backgroundColor: "#8B5CF6", borderRadius: "50%"}}></div>
    <div data-object="true" data-object-type="shape" style={{position: "absolute", left: "0", top: "100px", width: "1280px", height: "1px", zIndex: "2", backgroundColor: "#E2E8F0"}}></div>
    <div data-object="true" data-object-type="shape" style={{position: "absolute", left: "0", top: "620px", width: "1280px", height: "1px", zIndex: "2", backgroundColor: "#E2E8F0"}}></div>
    <div data-object="true" data-object-type="shape" style={{position: "absolute", left: "530px", top: "80px", width: "220px", height: "220px", zIndex: "5", border: "2px dashed #93C5FD", borderRadius: "50%"}}></div>
    <div data-object="true" data-object-type="image" style={{position: "absolute", left: "550px", top: "100px", width: "180px", height: "180px", zIndex: "6", borderRadius: "50%", border: "4px solid #FFFFFF", overflow: "hidden", boxShadow: "0 4px 20px rgba(148, 163, 184, 0.3)"}}>
      <img src="/KakaoTalk_Photo_2025-12-25-13-29-53.jpeg" style={{width: "100%", height: "100%", objectFit: "cover"}} />
    </div>
    <div data-object="true" data-object-type="textbox" style={{position: "absolute", left: "140px", top: "320px", width: "1000px", height: "160px", zIndex: "10", textAlign: "center"}}>
      <h1 style={{fontFamily: "'Noto Sans KR', sans-serif", fontSize: "3rem", fontWeight: "900", color: "#1E293B", margin: "0 0 16px 0", letterSpacing: "-0.025em"}}>
        포트폴리오를 봐주셔서 감사합니다
      </h1>
      <p style={{fontFamily: "'Noto Sans KR', sans-serif", fontSize: "1.25rem", color: "#64748B", lineHeight: "1.6", margin: "0 auto", maxWidth: "800px"}}>
        
            데이터의 가치를 발견하고 시스템을 최적화하는 엔지니어로서,
        <br />
        
            귀사의 비즈니스 성장에 기여할 수 있기를 기대합니다.
        
      </p>
    </div>
    <div data-object="true" data-object-type="shape" style={{position: "absolute", left: "600px", top: "490px", width: "80px", height: "4px", zIndex: "10", backgroundColor: "#3B82F6", borderRadius: "2px"}}></div>
    <div data-object="true" data-object-type="textbox" style={{position: "absolute", left: "165px", top: "525px", width: "300px", height: "175px", zIndex: "10"}}>
      <a href="mailto:woqhr9805@gmail.com" style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", backgroundColor: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: "16px", padding: "24px 10px", textDecoration: "none", height: "100%", boxSizing: "border-box", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)"}}>
        <div style={{width: "56px", height: "56px", borderRadius: "12px", backgroundColor: "#EFF6FF", color: "#3B82F6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px"}}>
          <i className="fas fa-envelope"></i>
        </div>
        <div style={{textAlign: "center", width: "100%"}}>
          <div style={{fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#94A3B8", fontWeight: "700"}}>
            Email
          </div>
          <div style={{fontSize: "1rem", color: "#334155", fontWeight: "500", marginTop: "4px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>
            woqhr9805@gmail.com
          </div>
        </div>
      </a>
    </div>
    <div data-object="true" data-object-type="textbox" style={{position: "absolute", left: "490px", top: "525px", width: "300px", height: "175px", zIndex: "10"}}>
      <a href="https://linkedin.com/in/\uc7ac\ubcf5-\uc774-3586352b0" style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", backgroundColor: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: "16px", padding: "24px 10px", textDecoration: "none", height: "100%", boxSizing: "border-box", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)"}} target="_blank">
        <div style={{width: "56px", height: "56px", borderRadius: "12px", backgroundColor: "#EFF6FF", color: "#0A66C2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px"}}>
          <i className="fab fa-linkedin-in"></i>
        </div>
        <div style={{textAlign: "center", width: "100%"}}>
          <div style={{fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#94A3B8", fontWeight: "700"}}>
            LinkedIn
          </div>
          <div style={{fontSize: "0.85rem", color: "#334155", fontWeight: "500", marginTop: "4px", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis"}}>
            linkedin.com/in/재복-이-3586352b0
          </div>
        </div>
      </a>
    </div>
    <div data-object="true" data-object-type="textbox" style={{position: "absolute", left: "815px", top: "525px", width: "300px", height: "175px", zIndex: "10"}}>
      <a href="https://github.com/Bokza" style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", backgroundColor: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: "16px", padding: "24px 10px", textDecoration: "none", height: "100%", boxSizing: "border-box", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)"}} target="_blank">
        <div style={{width: "56px", height: "56px", borderRadius: "12px", backgroundColor: "#F8FAFC", color: "#1E293B", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px"}}>
          <i className="fab fa-github"></i>
        </div>
        <div style={{textAlign: "center", width: "100%"}}>
          <div style={{fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#94A3B8", fontWeight: "700"}}>
            GitHub
          </div>
          <div style={{fontSize: "1rem", color: "#334155", fontWeight: "500", marginTop: "4px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>
            https://github.com/Bokza
          </div>
        </div>
      </a>
    </div>
  </div>
    </SlideFrame>
  );
}
