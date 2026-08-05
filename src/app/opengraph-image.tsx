import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt =
  "Maucco Consultoria Ambiental - sua empresa em dia com as exigências ambientais";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logoData = await readFile(
    join(process.cwd(), "public", "logo-maucco2.png"),
    "base64",
  );
  const logoSrc = `data:image/png;base64,${logoData}`;

  return new ImageResponse(
    <div
      style={{
        position: "relative",
        display: "flex",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background: "#0d3028",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -180,
          right: -100,
          width: 560,
          height: 560,
          borderRadius: 9999,
          background: "#5abd55",
          opacity: 0.18,
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: -220,
          left: 320,
          width: 500,
          height: 500,
          border: "2px solid rgba(255,255,255,0.08)",
          borderRadius: 9999,
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: 760,
          padding: "72px 0 72px 76px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            padding: "10px 18px",
            border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: 9999,
            background: "rgba(255,255,255,0.08)",
            color: "#9de391",
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: 2,
          }}
        >
          CONSULTORIA AMBIENTAL PARA EMPRESAS
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 62,
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: -2,
          }}
        >
          Sua empresa em dia com as exigências ambientais.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 24,
            maxWidth: 690,
            color: "rgba(255,255,255,0.72)",
            fontSize: 25,
            lineHeight: 1.4,
          }}
        >
          Licenciamento, gestão de resíduos, laudos e regularização ambiental
          em Manaus.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 42,
            color: "rgba(255,255,255,0.48)",
            fontSize: 17,
            letterSpacing: 1,
          }}
        >
          MANAUS, AMAZONAS
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          paddingRight: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 310,
            height: 310,
            borderRadius: 48,
            background: "#ffffff",
            boxShadow: "0 32px 80px rgba(0,0,0,0.25)",
          }}
        >
          {/* ImageResponse uses Satori, so a native image is required here. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="" width={250} height={250} />
        </div>
      </div>
    </div>,
    size,
  );
}
