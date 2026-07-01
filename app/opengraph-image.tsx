import { ImageResponse } from "next/og";

export const alt = "Vireonix — Smart IT & Digital Solutions for Modern Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 82px",
        color: "white",
        background: "radial-gradient(circle at 82% 35%, #155eab 0%, #0b294b 22%, transparent 44%), linear-gradient(135deg, #07101d 0%, #091b30 58%, #050b14 100%)",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div style={{ width: 54, height: 54, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 14, background: "#2563eb", fontSize: 30, fontWeight: 800 }}>V</div>
        <div style={{ display: "flex", fontSize: 40, fontWeight: 750, letterSpacing: "-1px" }}>Vireonix</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
        <div style={{ display: "flex", color: "#93c5fd", fontSize: 22, fontWeight: 650, letterSpacing: "3px", textTransform: "uppercase" }}>Zurich · Global delivery</div>
        <div style={{ display: "flex", marginTop: 20, fontSize: 66, lineHeight: 1.05, fontWeight: 750, letterSpacing: "-3px" }}>Smart IT & Digital Solutions for Modern Businesses</div>
      </div>
      <div style={{ display: "flex", color: "#9caec4", fontSize: 23 }}>Web · Apps · AI/ML · Cybersecurity · Software · Digital Growth</div>
    </div>,
    size,
  );
}
