export function StatsStrip() {
  const { StatBlock } = window.NeoOrthoDesignSystem_c2825f;
  const items = [
    ["+20 anos", "de excelência em ortopedia"],
    ["+16 mil", "itens em portfólio"],
    ["+100", "distribuidores no Brasil"],
    ["+250", "colaboradores"]
  ];
  return (
    <section style={{ background: "var(--gradient-light-field)", borderBottom: "1px solid var(--gray-200)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "56px 40px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 40 }}>
        {items.map(([v, l]) => <StatBlock key={v} value={v} label={l} />)}
      </div>
    </section>
  );
}

export function PortfolioGrid({ onSelect = () => {} }) {
  const { Tag } = window.NeoOrthoDesignSystem_c2825f;
  const lines = [
    { id: "trauma", tag: "trauma", name: "Traumatologia", sub: "Membros superiores, inferiores, pelve, costelas e extremidades", img: "../../assets/products/line-trauma.png",
      body: "A Linha Trauma NeoOrtho reúne um portfólio completo de implantes para o tratamento cirúrgico de fraturas, deformidades, pseudoartroses e reconstruções ósseas em diferentes níveis de complexidade." },
    { id: "coluna", tag: "coluna", name: "Coluna", sub: "Parafusos · cages · placas", img: "../../assets/products/line-coluna.png",
      body: "Soluções cervicais, torácicas e lombares para estabilização e correção, com sistemas de parafusos, cages e placas." },
    { id: "cmf", tag: "cmf", name: "Craniomaxilofacial", sub: "Placas · telas · parafusos", img: "../../assets/products/line-cmf.png",
      body: "A linha que deu origem à NeoOrtho em 2004: placas, telas e parafusos para osteossíntese craniomaxilofacial." },
    { id: "custom", tag: "personalizados", name: "Próteses", sub: "Paciente-específico · ATM · impressão 3D em titânio", img: "../../assets/products/line-personalizados.png",
      body: "Linha Neocustom: próteses paciente-específico, incluindo articulação temporomandibular (ATM), com impressão 3D em titânio." }
  ];
  return (
    <section id="portfolio" style={{ maxWidth: 1180, margin: "0 auto", padding: "96px 40px" }}>
      <span style={{ display: "block", fontSize: 12, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", fontWeight: 600, color: "var(--purple-700)", marginBottom: 18 }}>Nosso portfólio</span>
      <h2 style={{ margin: "0 0 12px", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 46, letterSpacing: "-0.02em", color: "var(--text-strong)" }}>Quatro linhas, uma só exigência.</h2>
      <p style={{ margin: "0 0 48px", maxWidth: "60ch", fontSize: 19, lineHeight: 1.6, color: "var(--text-body)" }}>Soluções completas em titânio puro ou liga, desenvolvidas para cada região de aplicação.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
        {lines.map(l => (
          <button key={l.id} onClick={() => onSelect(l)} style={{ textAlign: "left", cursor: "pointer", background: "var(--white)", border: "1px solid var(--gray-200)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-sm)", padding: 0, overflow: "hidden", fontFamily: "var(--font-body)", transition: "box-shadow var(--duration-base) var(--ease-standard)" }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = "var(--shadow-md)"}
            onMouseLeave={e => e.currentTarget.style.boxShadow = "var(--shadow-sm)"}>
            <div style={{ height: 230, background: "var(--gray-100)", display: "grid", placeItems: "center" }}>
              <img src={l.img} alt={l.name} style={{ maxHeight: 206, maxWidth: "84%", objectFit: "contain" }} />
            </div>
            <div style={{ padding: "22px 22px 26px", display: "flex", flexDirection: "column", gap: 12 }}>
              <Tag line={l.tag}>{l.name}</Tag>
              <span style={{ fontSize: 15, color: "var(--text-body)" }}>{l.sub}</span>
              <span style={{ fontSize: 14, fontWeight: 600, color: "var(--purple-700)" }}>Ver produtos →</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

export function ManifestoBand() {
  const { EllipseOutline } = window.NeoOrthoDesignSystem_c2825f;
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--purple-700)", backgroundImage: "url(../../assets/backgrounds/slide-bg-section.png)", backgroundSize: "cover" }}>
      <EllipseOutline width="60%" left="-14%" top="30%" rotate={-8} color="rgba(255,255,255,.26)" />
      <div style={{ position: "relative", maxWidth: 1180, margin: "0 auto", padding: "104px 40px", display: "grid", gridTemplateColumns: "1fr 380px", gap: 72, alignItems: "center" }}>
        <div>
          <p style={{ margin: 0, fontSize: 26, lineHeight: 1.6, color: "#fff" }}>
            Acreditamos que o movimento é a essência da liberdade. É o direito de caminhar sob o próprio passo, de abraçar sem hesitar, de sorrir e viver plenamente.
          </p>
          <p style={{ margin: "40px 0 0", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 44, letterSpacing: "-0.02em", color: "#fff" }}>
            Parceria <span style={{ color: "var(--teal-500)" }}>que move.</span>
          </p>
        </div>
        <img src="../../assets/photos/photo-partnership.png" alt="" style={{ width: "100%", borderRadius: "var(--radius-xl)", display: "block" }} />
      </div>
    </section>
  );
}

export function QualityBand() {
  const { Card, Badge, Divider } = window.NeoOrthoDesignSystem_c2825f;
  return (
    <section style={{ maxWidth: 1180, margin: "0 auto", padding: "96px 40px", display: "grid", gridTemplateColumns: "1fr 420px", gap: 64, alignItems: "start" }}>
      <div>
        <span style={{ display: "block", fontSize: 12, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", fontWeight: 600, color: "var(--purple-700)", marginBottom: 18 }}>Qualidade</span>
        <h2 style={{ margin: "0 0 22px", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 42, letterSpacing: "-0.02em", color: "var(--text-strong)" }}>Segurança auditada, não declarada.</h2>
        <p style={{ margin: "0 0 18px", fontSize: 19, lineHeight: 1.6, maxWidth: "58ch" }}>O sistema de gestão da qualidade da NeoOrtho e todas as suas linhas de produtos são certificados e passam frequentemente por auditorias de certificação.</p>
        <ul style={{ margin: "0 0 28px", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10, fontSize: 16 }}>
          <li>● Material biocompatível e hipoalergênico</li>
          <li>● Titânio puro ou liga, conforme região de aplicação</li>
          <li>● ASTM F136 / F67 / F382 / F543 / F1264</li>
        </ul>
        <Divider style={{ marginBottom: 24 }} />
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <Badge>ISO 13485:2016</Badge><Badge>ANVISA BPF</Badge><Badge tone="teal">ISO 37001</Badge><Badge tone="neutral">ESG em Foco 2024</Badge>
        </div>
      </div>
      <Card padding="30px" style={{ display: "flex", flexDirection: "column", gap: 24, alignItems: "flex-start" }}>
        <img src="../../assets/certs/cert-iso13485-anvisa.png" alt="ISO 13485 e ANVISA" style={{ height: 82 }} />
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <img src="../../assets/certs/cert-iso37001.png" alt="ISO 37001" style={{ height: 72 }} />
          <img src="../../assets/certs/cert-esg.png" alt="ESG em Foco" style={{ height: 80 }} />
        </div>
      </Card>
    </section>
  );
}

export function FactoryBand() {
  const { StatBlock } = window.NeoOrthoDesignSystem_c2825f;
  return (
    <section style={{ background: "var(--gradient-light-field)", borderTop: "1px solid var(--gray-200)", borderBottom: "1px solid var(--gray-200)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "88px 40px", display: "grid", gridTemplateColumns: "480px 1fr", gap: 64, alignItems: "center" }}>
        <img src="../../assets/photos/photo-new-factory.png" alt="Nova fábrica NeoOrtho" style={{ width: "100%", display: "block" }} />
        <div>
          <h2 style={{ margin: "0 0 20px", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 40, letterSpacing: "-0.02em", color: "var(--purple-700)" }}>Nova fábrica, 2026.</h2>
          <p style={{ margin: "0 0 34px", fontSize: 19, lineHeight: 1.6, maxWidth: "50ch" }}>Contínua expansão: uma nova unidade com o triplo da capacidade produtiva anual e certificação LEED.</p>
          <div style={{ display: "flex", gap: 48 }}>
            <StatBlock value="+7,8 mil m²" label="de área construída" />
            <StatBlock value="3×" label="capacidade produtiva anual" tone="teal" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ResourcesBand() {
  const { Card } = window.NeoOrthoDesignSystem_c2825f;
  // Mirrors the live site's technical-materials area.
  const items = [
    ["IFU", "Documentações oficiais de uso, instruções e recomendações para aplicação segura de cada produto."],
    ["Catálogos", "Catálogos completos com especificações técnicas, variações e detalhes de nossos sistemas."],
    ["Técnicas cirúrgicas", "Guias e materiais de apoio com técnicas cirúrgicas, recomendações e fluxos de utilização."]
  ];
  return (
    <section id="ifu" style={{ maxWidth: 1180, margin: "0 auto", padding: "88px 40px" }}>
      <span style={{ display: "block", fontSize: 12, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", fontWeight: 600, color: "var(--purple-700)", marginBottom: 18 }}>Materiais técnicos</span>
      <h2 style={{ margin: "0 0 14px", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 42, letterSpacing: "-0.02em", color: "var(--text-strong)" }}>Informação atualizada para a prática clínica.</h2>
      <p style={{ margin: "0 0 44px", maxWidth: "62ch", fontSize: 19, lineHeight: 1.6 }}>Uma área dedicada a materiais técnicos, documentações e conteúdos essenciais para o uso seguro, eficiente e preciso dos nossos produtos e sistemas.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
        {items.map(([t, d]) => (
          <Card key={t} padding="28px" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 24, color: "var(--purple-700)" }}>{t}</span>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55 }}>{d}</p>
            <a href="#" style={{ fontSize: 14, fontWeight: 600, marginTop: 6 }}>Download →</a>
          </Card>
        ))}
      </div>
    </section>
  );
}
