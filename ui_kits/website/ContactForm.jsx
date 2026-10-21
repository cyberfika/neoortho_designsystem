export function ContactForm() {
  const { Input, Select, Checkbox, Button, Card } = window.NeoOrthoDesignSystem_c2825f;
  const [sent, setSent] = React.useState(false);
  const [ok, setOk] = React.useState(false);
  return (
    <section id="contato" style={{ maxWidth: 1180, margin: "0 auto", padding: "96px 40px", display: "grid", gridTemplateColumns: "1fr 520px", gap: 72, alignItems: "start" }}>
      <div>
        <span style={{ display: "block", fontSize: 12, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", fontWeight: 600, color: "var(--purple-700)", marginBottom: 18 }}>Contato</span>
        <h2 style={{ margin: "0 0 20px", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 42, letterSpacing: "-0.02em", color: "var(--text-strong)" }}>Estamos aqui para você.</h2>
        <p style={{ margin: "0 0 32px", fontSize: 19, lineHeight: 1.6, maxWidth: "48ch" }}>Fale com nossa equipe sobre produtos, distribuição ou próteses personalizadas.</p>
        <div style={{ fontSize: 16, lineHeight: 2, color: "var(--text-body)" }}>
          <div>Rua Ângelo Domingos Durigan, 607</div>
          <div>Cascatinha, Curitiba — PR, Brasil</div>
          <div><a href="https://neoortho.com.br">neoortho.com.br</a></div>
        </div>
      </div>
      <Card padding="34px">
        {sent ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: "28px 0" }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 26, color: "var(--purple-700)" }}>Obrigado!</span>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6 }}>Recebemos sua mensagem. Nossa equipe entrará em contato em breve.</p>
            <Button variant="secondary" size="sm" style={{ marginTop: 12, alignSelf: "flex-start" }} onClick={() => setSent(false)}>Enviar outra</Button>
          </div>
        ) : (
          <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <Input label="Nome completo" placeholder="Nome Sobrenome" required />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
              <Input label="E-mail" type="email" placeholder="email@empresa.com.br" required />
              <Input label="Telefone" placeholder="+55 41 0 0000 0000" />
            </div>
            <Select label="Assunto" options={["Linha Trauma", "Linha Coluna", "Linha CMF", "Personalizados", "Distribuição"]} />
            <Checkbox label="Aceito receber comunicações da NeoOrtho" checked={ok} onChange={e => setOk(e.target.checked)} />
            <Button full style={{ marginTop: 6 }}>Enviar mensagem</Button>
          </form>
        )}
      </Card>
    </section>
  );
}
