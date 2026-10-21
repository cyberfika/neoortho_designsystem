export function EmailSignature({
  name = "Nome Sobrenome",
  rolePt = "Cargo Português",
  roleEn = "Cargo Inglês",
  company = "NeoOrtho - Medartis Group",
  phone = "+55 41 0000 0000",
  mobile = "+55 41 9 0000 0000",
  email = "email@neoortho.com.br",
  site = "neoortho.com.br",
  address = "Rua Ângelo Domingos Durigan, 607, Cascatinha, Curitiba - PR - Brasil",
  symbol = "../../assets/logos/symbol_color.png"
}) {
  return (
    <table cellPadding="0" cellSpacing="0" style={{ fontFamily: "'Poppins', Arial, sans-serif", width: "100%", maxWidth: 700, background: "none" }}>
      <tbody>
        <tr>
          <td style={{ padding: "16px 0 0 16px", verticalAlign: "top", width: "80%" }}>
            <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td style={{ verticalAlign: "top", width: 100 }}>
                    <img src={symbol} alt="NeoOrtho Logo" width="80" height="80" style={{ display: "block" }} />
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <h2 style={{ margin: 0, fontSize: 18, color: "#111111", fontWeight: 700, letterSpacing: ".5px" }}>{name}</h2>
                    <p style={{ margin: "4px 0 0", fontSize: 14, color: "#582c83", fontWeight: 500 }}>{rolePt} | {roleEn}</p>
                    <p style={{ margin: "4px 0 0", fontSize: 13, color: "#333" }}>{company}</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <table cellPadding="1" cellSpacing="1" style={{ width: "100%", marginTop: 16 }}>
              <tbody>
                <tr><td style={{ verticalAlign: "middle", fontSize: 13, color: "#111111", paddingLeft: 100 }}>{phone} | {mobile}</td></tr>
                <tr><td style={{ verticalAlign: "middle", fontSize: 13, color: "#111111", paddingLeft: 100 }}>{email}</td></tr>
                <tr><td style={{ verticalAlign: "middle", fontSize: 13, color: "#111111", paddingLeft: 100 }}><a href={"https://" + site} style={{ color: "#582c83", textDecoration: "none", fontWeight: 500 }}>{site}</a></td></tr>
                <tr><td style={{ verticalAlign: "middle", fontSize: 13, color: "#111111", paddingLeft: 100 }}>{address}</td></tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
