// Sample NIF database for search
const nifDatabase = [
  { nif: "517466735", name: "Tech Solutions Lda", score: 85 },
  { nif: "516298451", name: "Global Import Export SA", score: 42 },
  { nif: "217745163", name: "Construções Modernas Lda", score: 67 },
  { nif: "512587963", name: "Auto Motors Portugal", score: 91 },
  { nif: "516321489", name: "Consultoria Financeira SA", score: 28 },
  { nif: "216874125", name: "Distribuição Nacional Lda", score: 74 },
  { nif: "217236977", name: "Serviços Digitais SA", score: 53 },
  { nif: "213852369", name: "Indústria Transformadora Lda", score: 36 },
  { nif: "519874123", name: "Comércio Internacional SA", score: 88 },
  { nif: "218963547", name: "Transportes Rápidos Lda", score: 61 },
];

// Service data templates based on the image provided
const serviceTemplates = {
  patrimonio: {
    title: "Património",
    icon: "fa-home",
    content: `
      <div class="service-content">
        <div class="service-header">
          <h2><i class="fas fa-home"></i> Património</h2>
        </div>
        <div class="service-sections">
          <div class="service-section">
            <h3><i class="fas fa-chart-bar"></i> Métricas</h3>
            <div class="metrics-grid">
              <div class="metric-card">
                <div class="metric-value">3</div>
                <div class="metric-label">Imóveis</div>
                <div class="metric-change positive">+1 desde 2023</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">2</div>
                <div class="metric-label">Veículos</div>
                <div class="metric-change">Sem alteração</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">€ 1.250/mês</div>
                <div class="metric-label">Rendas</div>
                <div class="metric-change positive">+5% desde 2023</div>
              </div>
            </div>
          </div>
          <div class="service-section">
            <h3><i class="fas fa-table"></i> Detalhes do Património</h3>
            <div class="data-table-container">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Tipo</th>
                    <th>Descrição</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Imóvel</td>
                    <td>Apartamento T3, Lisboa</td>
                    <td>€ 350.000</td>
                  </tr>
                  <tr>
                    <td>Imóvel</td>
                    <td>Loja Comercial, Porto</td>
                    <td>€ 220.000</td>
                  </tr>
                  <tr>
                    <td>Veículo</td>
                    <td>VW Golf, 2020</td>
                    <td>€ 25.000</td>
                  </tr>
                  <tr>
                    <td>Renda</td>
                    <td>Apartamento T2, Aveiro</td>
                    <td>€ 650/mês</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  "dividas-fiscais": {
    title: "Dívidas Fiscais",
    icon: "fa-file-invoice-dollar",
    content: `
      <div class="service-content">
        <div class="service-header">
          <h2><i class="fas fa-file-invoice-dollar"></i> Dívidas Fiscais</h2>
        </div>
        <div class="service-sections">
          <div class="service-section">
            <h3><i class="fas fa-chart-bar"></i> Métricas</h3>
            <div class="metrics-grid">
              <div class="metric-card">
                <div class="metric-value">€ 12.450</div>
                <div class="metric-label">Dívida Total</div>
                <div class="metric-change negative">+€ 2.150 desde 2023</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">3</div>
                <div class="metric-label">Dívidas Ativas</div>
                <div class="metric-change">Sem alteração</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">€ 8.750</div>
                <div class="metric-label">Dívida Vencida</div>
                <div class="metric-change negative">+€ 1.200 desde 2023</div>
              </div>
            </div>
          </div>
          <div class="service-section">
            <h3><i class="fas fa-table"></i> Detalhes das Dívidas</h3>
            <div class="data-table-container">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Exercício</th>
                    <th>Tipo</th>
                    <th>Valor</th>
                    <th>Data Vencimento</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2023</td>
                    <td>IVA</td>
                    <td>€ 5.250</td>
                    <td>15/04/2024</td>
                  </tr>
                  <tr>
                    <td>2023</td>
                    <td>IRS</td>
                    <td>€ 3.500</td>
                    <td>31/07/2024</td>
                  </tr>
                  <tr>
                    <td>2022</td>
                    <td>IRC</td>
                    <td>€ 3.700</td>
                    <td>15/05/2023</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  declaracoes: {
    title: "Declarações Entregues",
    icon: "fa-file-alt",
    content: `
      <div class="service-content">
        <div class="service-header">
          <h2><i class="fas fa-file-alt"></i> Declarações Entregues</h2>
        </div>
        <div class="service-sections">
          <div class="service-section">
            <h3><i class="fas fa-chart-bar"></i> Métricas</h3>
            <div class="metrics-grid">
              <div class="metric-card">
                <div class="metric-value">24</div>
                <div class="metric-label">Declarações Totais</div>
                <div class="metric-change positive">+4 desde 2023</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">8</div>
                <div class="metric-label">Em Análise</div>
                <div class="metric-change negative">+2 desde 2023</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">92%</div>
                <div class="metric-label">Taxa de Conformidade</div>
                <div class="metric-change positive">+3% desde 2023</div>
              </div>
            </div>
          </div>
          <div class="service-section">
            <h3><i class="fas fa-table"></i> Declarações por Tipo</h3>
            <div class="data-table-container">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Tipo</th>
                    <th>Período</th>
                    <th>Data Entrega</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>IRS</td>
                    <td>2023</td>
                    <td>15/03/2024</td>
                    <td>€ 6.840</td>
                  </tr>
                  <tr>
                    <td>IVA</td>
                    <td>1T 2024</td>
                    <td>15/04/2024</td>
                    <td>€ 2.450</td>
                  </tr>
                  <tr>
                    <td>IRC</td>
                    <td>2023</td>
                    <td>15/05/2024</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>Modelo 10</td>
                    <td>1T 2024</td>
                    <td>20/04/2024</td>
                    <td>€ 1.250</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  "sistema-cadastral": {
    title: "Sistema Cadastral",
    icon: "fa-database",
    content: `
      <div class="service-content">
        <div class="service-header">
          <h2><i class="fas fa-database"></i> Sistema Cadastral</h2>
        </div>
        <div class="service-sections">
          <div class="service-section">
            <h3><i class="fas fa-info-circle"></i> Informações Cadastrais</h3>
            <div class="info-grid">
              <div class="info-item">
                <span class="info-label">Início de Atividade:</span>
                <span class="info-value">15/03/2018</span>
              </div>
              <div class="info-item">
                <span class="info-label">Enquadramento Fiscal:</span>
                <span class="info-value">Regime Simplificado</span>
              </div>
              <div class="info-item">
                <span class="info-label">Morada Fiscal:</span>
                <span class="info-value">Av. Liberdade 245, 1250-096 Lisboa</span>
              </div>
              <div class="info-item">
                <span class="info-label">Gerente:</span>
                <span class="info-value">João Miguel Silva</span>
              </div>
              <div class="info-item">
                <span class="info-label">Contabilista Certificado:</span>
                <span class="info-value">Maria Santos & Associados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  "certidao-permanente": {
    title: "Certidão Permanente",
    icon: "fa-certificate",
    content: `
      <div class="service-content">
        <div class="service-header">
          <h2><i class="fas fa-certificate"></i> Certidão Permanente</h2>
        </div>
        <div class="service-sections">
          <div class="service-section">
            <h3><i class="fas fa-users"></i> Detentores do Capital</h3>
            <div class="data-table-container">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Participação</th>
                    <th>Tipo</th>
                    <th>Data Início</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>João Miguel Silva</td>
                    <td>60%</td>
                    <td>Sócio Gerente</td>
                    <td>15/03/2018</td>
                  </tr>
                  <tr>
                    <td>Ana Paula Costa</td>
                    <td>40%</td>
                    <td>Sócio</td>
                    <td>15/03/2018</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="service-section">
            <h3><i class="fas fa-user-tie"></i> Responsáveis</h3>
            <div class="data-table-container">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Cargo</th>
                    <th>Data Nomeação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>João Miguel Silva</td>
                    <td>Gerente</td>
                    <td>15/03/2018</td>
                  </tr>
                  <tr>
                    <td>Carlos Manuel Alves</td>
                    <td>Administrador</td>
                    <td>10/06/2022</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  "declaracoes-acessorias": {
    title: "Declarações Acessórias",
    icon: "fa-file-contract",
    content: `
      <div class="service-content">
        <div class="service-header">
          <h2><i class="fas fa-file-contract"></i> Declarações Acessórias</h2>
        </div>
        <div class="service-sections">
          <div class="service-section">
            <h3><i class="fas fa-chart-bar"></i> Métricas</h3>
            <div class="metrics-grid">
              <div class="metric-card">
                <div class="metric-value">12</div>
                <div class="metric-label">Declarações em 2024</div>
                <div class="metric-change positive">+3 desde 2023</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">€ 45.320</div>
                <div class="metric-label">Rendimentos Sujeitos</div>
                <div class="metric-change positive">+8% desde 2023</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">€ 12.580</div>
                <div class="metric-label">Dividendos Declarados</div>
                <div class="metric-change">Sem alteração</div>
              </div>
            </div>
          </div>
          <div class="service-section">
            <h3><i class="fas fa-table"></i> Detalhes das Declarações</h3>
            <div class="data-table-container">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Tipo</th>
                    <th>Período</th>
                    <th>Data</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Pagamentos Exterior</td>
                    <td>1T 2024</td>
                    <td>30/04/2024</td>
                    <td>€ 8.250</td>
                  </tr>
                  <tr>
                    <td>Dividendos</td>
                    <td>2023</td>
                    <td>31/03/2024</td>
                    <td>€ 12.580</td>
                  </tr>
                  <tr>
                    <td>Atos</td>
                    <td>1T 2024</td>
                    <td>30/04/2024</td>
                    <td>€ 5.200</td>
                  </tr>
                  <tr>
                    <td>Retenções</td>
                    <td>1T 2024</td>
                    <td>20/04/2024</td>
                    <td>€ 1.250</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  vies: {
    title: "VIES - Sistema de Trocas Intracomunitárias",
    icon: "fa-exchange-alt",
    content: `
      <div class="service-content">
        <div class="service-header">
          <h2><i class="fas fa-exchange-alt"></i> VIES - Sistema de Trocas Intracomunitárias</h2>
        </div>
        <div class="service-sections">
          <div class="service-section">
            <h3><i class="fas fa-chart-bar"></i> Métricas</h3>
            <div class="metrics-grid">
              <div class="metric-card">
                <div class="metric-value">€ 85.250</div>
                <div class="metric-label">Transações 2024</div>
                <div class="metric-change positive">+12% desde 2023</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">15</div>
                <div class="metric-label">Operações</div>
                <div class="metric-change positive">+3 desde 2023</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">5</div>
                <div class="metric-label">Países Parceiros</div>
                <div class="metric-change">Sem alteração</div>
              </div>
            </div>
          </div>
          <div class="service-section">
            <h3><i class="fas fa-table"></i> Operações Intracomunitárias</h3>
            <div class="data-table-container">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>País</th>
                    <th>NIF Parceiro</th>
                    <th>Valor</th>
                    <th>Tipo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>15/04/2024</td>
                    <td>Espanha</td>
                    <td>ESB82549973</td>
                    <td>€ 12.500</td>
                    <td>Aquisição</td>
                  </tr>
                  <tr>
                    <td>28/03/2024</td>
                    <td>França</td>
                    <td>FR83404833048</td>
                    <td>€ 8.750</td>
                    <td>Venda</td>
                  </tr>
                  <tr>
                    <td>10/03/2024</td>
                    <td>Alemanha</td>
                    <td>DE136695976</td>
                    <td>€ 15.200</td>
                    <td>Aquisição</td>
                  </tr>
                  <tr>
                    <td>22/02/2024</td>
                    <td>Itália</td>
                    <td>IT12345678901</td>
                    <td>€ 6.300</td>
                    <td>Venda</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  "e-fatura": {
    title: "E-Fatura",
    icon: "fa-file-invoice",
    content: `
      <div class="service-content">
        <div class="service-header">
          <h2><i class="fas fa-file-invoice"></i> E-Fatura</h2>
        </div>
        <div class="service-sections">
          <div class="service-section">
            <h3><i class="fas fa-chart-bar"></i> Métricas</h3>
            <div class="metrics-grid">
              <div class="metric-card">
                <div class="metric-value">€ 245.670</div>
                <div class="metric-label">Volume Total</div>
                <div class="metric-change positive">+15% desde 2023</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">458</div>
                <div class="metric-label">Faturas Emitidas</div>
                <div class="metric-change positive">+8% desde 2023</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">312</div>
                <div class="metric-label">Faturas Recebidas</div>
                <div class="metric-change positive">+12% desde 2023</div>
              </div>
            </div>
          </div>
          <div class="service-section">
            <h3><i class="fas fa-table"></i> A quem Vendeu</h3>
            <div class="data-table-container">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Cliente</th>
                    <th>NIF</th>
                    <th>Valor Total</th>
                    <th>Nº Faturas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Global Import Export SA</td>
                    <td>516298451</td>
                    <td>€ 45.320</td>
                    <td>24</td>
                  </tr>
                  <tr>
                    <td>Construções Modernas Lda</td>
                    <td>217745163</td>
                    <td>€ 38.150</td>
                    <td>18</td>
                  </tr>
                  <tr>
                    <td>Auto Motors Portugal</td>
                    <td>512587963</td>
                    <td>€ 22.840</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td>Consultoria Financeira SA</td>
                    <td>516321489</td>
                    <td>€ 18.950</td>
                    <td>8</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="service-section">
            <h3><i class="fas fa-table"></i> A quem Comprou</h3>
            <div class="data-table-container">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Fornecedor</th>
                    <th>NIF</th>
                    <th>Valor Total</th>
                    <th>Nº Faturas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Distribuição Nacional Lda</td>
                    <td>216874125</td>
                    <td>€ 32.580</td>
                    <td>28</td>
                  </tr>
                  <tr>
                    <td>Serviços Digitais SA</td>
                    <td>217236977</td>
                    <td>€ 25.430</td>
                    <td>15</td>
                  </tr>
                  <tr>
                    <td>Indústria Transformadora Lda</td>
                    <td>213852369</td>
                    <td>€ 18.750</td>
                    <td>9</td>
                  </tr>
                  <tr>
                    <td>Comércio Internacional SA</td>
                    <td>519874123</td>
                    <td>€ 12.690</td>
                    <td>6</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  mod40: {
    title: "MOD 40 - Bancos TPA",
    icon: "fa-credit-card",
    content: `
      <div class="service-content">
        <div class="service-header">
          <h2><i class="fas fa-credit-card"></i> MOD 40 - Bancos TPA</h2>
        </div>
        <div class="service-sections">
          <div class="service-section">
            <h3><i class="fas fa-chart-bar"></i> Métricas</h3>
            <div class="metrics-grid">
              <div class="metric-card">
                <div class="metric-value">€ 245.670</div>
                <div class="metric-label">Volume Transações</div>
                <div class="metric-change positive">+15% desde 2023</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">3.458</div>
                <div class="metric-label">Nº Transações</div>
                <div class="metric-change positive">+8% desde 2023</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">4</div>
                <div class="metric-label">Bancos</div>
                <div class="metric-change">Sem alteração</div>
              </div>
            </div>
          </div>
          <div class="service-section">
            <h3><i class="fas fa-table"></i> Transações por Banco</h3>
            <div class="data-table-container">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Banco</th>
                    <th>Volume (€)</th>
                    <th>Nº Transações</th>
                    <th>Taxa Média</th>
                    <th>Última Atualização</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Millennium BCP</td>
                    <td>€ 125.430</td>
                    <td>1.856</td>
                    <td>1.2%</td>
                    <td>30/04/2024</td>
                  </tr>
                  <tr>
                    <td>Novo Banco</td>
                    <td>€ 68.250</td>
                    <td>985</td>
                    <td>1.4%</td>
                    <td>30/04/2024</td>
                  </tr>
                  <tr>
                    <td>Caixa Geral de Depósitos</td>
                    <td>€ 42.150</td>
                    <td>512</td>
                    <td>1.1%</td>
                    <td>30/04/2024</td>
                  </tr>
                  <tr>
                    <td>Santander Totta</td>
                    <td>€ 9.840</td>
                    <td>105</td>
                    <td>1.5%</td>
                    <td>30/04/2024</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  dmr: {
    title: "DMR - Pagamentos a Funcionários",
    icon: "fa-users",
    content: `
      <div class="service-content">
        <div class="service-header">
          <h2><i class="fas fa-users"></i> DMR - Pagamentos a Funcionários</h2>
        </div>
        <div class="service-sections">
          <div class="service-section">
            <h3><i class="fas fa-chart-bar"></i> Métricas</h3>
            <div class="metrics-grid">
              <div class="metric-card">
                <div class="metric-value">8</div>
                <div class="metric-label">Funcionários</div>
                <div class="metric-change positive">+2 desde 2023</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">€ 185.420</div>
                <div class="metric-label">Massa Salarial Anual</div>
                <div class="metric-change positive">+12% desde 2023</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">€ 32.580</div>
                <div class="metric-label">Retenções IRS</div>
                <div class="metric-change positive">+8% desde 2023</div>
              </div>
            </div>
          </div>
          <div class="service-section">
            <h3><i class="fas fa-table"></i> Detalhes dos Funcionários</h3>
            <div class="data-table-container">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Cargo</th>
                    <th>Salário Mensal</th>
                    <th>Retenção IRS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>João Miguel Silva</td>
                    <td>Gerente</td>
                    <td>€ 3.500</td>
                    <td>€ 850</td>
                  </tr>
                  <tr>
                    <td>Maria Santos</td>
                    <td>Contabilista</td>
                    <td>€ 2.200</td>
                    <td>€ 420</td>
                  </tr>
                  <tr>
                    <td>Carlos Almeida</td>
                    <td>Comercial</td>
                    <td>€ 1.800</td>
                    <td>€ 310</td>
                  </tr>
                  <tr>
                    <td>Ana Costa</td>
                    <td>Assistente</td>
                    <td>€ 1.150</td>
                    <td>€ 180</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `,
  },
};

// Main functionality
document.addEventListener("DOMContentLoaded", function () {
  let currentService = null;
  let selectedNifForComparison = null;
  let currentNif = null;
  let currentServiceForComparison = null;
  let compareServiceForComparison = null;
  let selectedServices = { first: null, second: null };

  // DOM Elements
  const singleView = document.getElementById("single-view");
  const serviceComparisonView = document.getElementById(
    "service-comparison-view"
  );
  const nifComparisonView = document.getElementById("nif-comparison-view");
  const currentNifDetails = document.getElementById("current-nif-details");
  const comparisonCurrentContent = document.getElementById(
    "comparison-current-content"
  );
  const comparisonCompareContent = document.getElementById(
    "comparison-compare-content"
  );
  const firstServiceContent = document.getElementById("first-service-content");
  const secondServiceContent = document.getElementById(
    "second-service-content"
  );
  const firstServiceTitle = document.getElementById("first-service-title");
  const secondServiceTitle = document.getElementById("second-service-title");
  const currentNifDisplay = document.getElementById("current-nif-display");
  const compareNifDisplay = document.getElementById("compare-nif-display");
  const removeComparisonBtn = document.getElementById("remove-comparison-btn");
  const removeServiceComparisonBtn = document.getElementById(
    "remove-service-comparison-btn"
  );
  const compareNifBtn = document.getElementById("compare-nif-btn");
  const compareServicesBtn = document.querySelector(".compare-services-btn");
  const serviceComparisonModal = document.querySelector(
    ".service-comparison-modal"
  );
  const compareSelectedBtn = document.querySelector(".compare-selected-btn");
  const clearComparisonBtn = document.querySelector(".clear-comparison-btn");
  const nifSearchInput = document.getElementById("nif-search");
  const searchResults = document.getElementById("search-results");
  const generateReportBtn = document.getElementById("generate-report-btn");

  // Get current NIF from URL
  const urlParams = new URLSearchParams(window.location.search);
  currentNif = urlParams.get("nif") || "517466735";
  document.getElementById("nif-number").textContent = currentNif;
  currentNifDisplay.textContent = currentNif;

  // Service buttons functionality for single view
  document
    .querySelectorAll("#current-nif-services .service-button")
    .forEach((button) => {
      button.addEventListener("click", function () {
        const service = this.getAttribute("data-service");
        loadServiceContentSingle(service);
      });
    });

  // Service buttons functionality for comparison view - current NIF
  document
    .querySelectorAll("#comparison-current-services .service-button")
    .forEach((button) => {
      button.addEventListener("click", function () {
        const service = this.getAttribute("data-service");
        loadServiceContentComparison(service, "current");
      });
    });

  // Service buttons functionality for comparison view - compare NIF
  document
    .querySelectorAll("#comparison-compare-services .service-button")
    .forEach((button) => {
      button.addEventListener("click", function () {
        const service = this.getAttribute("data-service");
        loadServiceContentComparison(service, "compare");
      });
    });

  // Compare services button
  compareServicesBtn.addEventListener("click", function () {
    openServiceComparisonModal();
  });

  // Service selection buttons in modal
  document.querySelectorAll(".service-selection-button").forEach((button) => {
    button.addEventListener("click", function () {
      const service = this.getAttribute("data-service");
      const column =
        this.closest(".selection-column").querySelector("h4").textContent;

      if (column === "Primeiro Serviço") {
        selectServiceForComparison(service, "first");
      } else {
        selectServiceForComparison(service, "second");
      }

      updateCompareSelectedButton();
    });
  });

  // Compare selected services button
  compareSelectedBtn.addEventListener("click", function () {
    if (selectedServices.first && selectedServices.second) {
      serviceComparisonModal.classList.remove("active");
      switchToServiceComparisonView(
        selectedServices.first,
        selectedServices.second
      );
    }
  });

  // Clear comparison selection
  clearComparisonBtn.addEventListener("click", function () {
    clearServiceComparisonSelection();
  });

  function selectServiceForComparison(service, position) {
    // Deselect previous selection in this position
    document
      .querySelectorAll(
        `#${position}-service-selection .service-selection-button`
      )
      .forEach((btn) => {
        btn.classList.remove("selected");
      });

    // Select new service
    document
      .querySelector(
        `#${position}-service-selection .service-selection-button[data-service="${service}"]`
      )
      .classList.add("selected");

    // Update selected services
    selectedServices[position] = service;
  }

  function clearServiceComparisonSelection() {
    selectedServices = { first: null, second: null };
    document.querySelectorAll(".service-selection-button").forEach((btn) => {
      btn.classList.remove("selected");
    });
    updateCompareSelectedButton();
  }

  function updateCompareSelectedButton() {
    compareSelectedBtn.disabled = !(
      selectedServices.first && selectedServices.second
    );
  }

  function openServiceComparisonModal() {
    serviceComparisonModal.classList.add("active");
    clearServiceComparisonSelection();
  }

  function loadServiceContentSingle(service) {
    const template = serviceTemplates[service];
    if (template) {
      currentNifDetails.innerHTML = template.content;
      currentService = service;

      // Update active state
      document
        .querySelectorAll("#current-nif-services .service-button")
        .forEach((btn) => {
          btn.classList.remove("active");
        });
      document
        .querySelector(
          `#current-nif-services .service-button[data-service="${service}"]`
        )
        .classList.add("active");
    }
  }

  function loadServiceContentComparison(service, type) {
    const template = serviceTemplates[service];
    if (template) {
      const targetContainer =
        type === "current"
          ? comparisonCurrentContent
          : comparisonCompareContent;
      targetContainer.innerHTML = template.content;

      // Update active state
      const serviceGrid =
        type === "current"
          ? "#comparison-current-services"
          : "#comparison-compare-services";
      document
        .querySelectorAll(`${serviceGrid} .service-button`)
        .forEach((btn) => {
          btn.classList.remove("active");
        });
      document
        .querySelector(
          `${serviceGrid} .service-button[data-service="${service}"]`
        )
        .classList.add("active");

      // Store the selected service
      if (type === "current") {
        currentServiceForComparison = service;
      } else {
        compareServiceForComparison = service;
      }
    }
  }

  function switchToServiceComparisonView(firstService, secondService) {
    singleView.classList.remove("active");
    serviceComparisonView.classList.add("active");
    nifComparisonView.classList.remove("active");

    // Load services content
    const firstTemplate = serviceTemplates[firstService];
    const secondTemplate = serviceTemplates[secondService];

    if (firstTemplate && secondTemplate) {
      firstServiceContent.innerHTML = firstTemplate.content;
      secondServiceContent.innerHTML = secondTemplate.content;
      firstServiceTitle.textContent = firstTemplate.title;
      secondServiceTitle.textContent = secondTemplate.title;
    }
  }

  function switchToNifComparisonView() {
    singleView.classList.remove("active");
    serviceComparisonView.classList.remove("active");
    nifComparisonView.classList.add("active");

    // Load current service in current NIF column if available
    if (currentService) {
      loadServiceContentComparison(currentService, "current");
    }

    // Reset compare NIF service selection
    compareServiceForComparison = null;
    document
      .querySelectorAll("#comparison-compare-services .service-button")
      .forEach((btn) => {
        btn.classList.remove("active");
      });
  }

  function switchToSingleView() {
    singleView.classList.add("active");
    serviceComparisonView.classList.remove("active");
    nifComparisonView.classList.remove("active");
    selectedNifForComparison = null;
    compareNifDisplay.textContent = "-";
    compareNifBtn.disabled = true;
    nifSearchInput.value = "";
    searchResults.style.display = "none";
  }

  // Remove service comparison
  removeServiceComparisonBtn.addEventListener("click", function () {
    switchToSingleView();
  });

  // NIF Search functionality
  nifSearchInput.addEventListener("input", function () {
    const searchTerm = this.value.trim();
    searchResults.innerHTML = "";

    if (searchTerm.length < 2) {
      searchResults.style.display = "none";
      return;
    }

    const filteredNifs = nifDatabase.filter(
      (nif) =>
        nif.nif.includes(searchTerm) ||
        nif.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredNifs.length > 0) {
      filteredNifs.forEach((nif) => {
        const resultItem = document.createElement("div");
        resultItem.className = "search-result-item";
        resultItem.innerHTML = `
          <div class="search-result-nif">NIF: ${nif.nif}</div>
          <div class="search-result-name">${nif.name} (Score: ${nif.score})</div>
        `;
        resultItem.addEventListener("click", function () {
          selectedNifForComparison = nif.nif;
          compareNifDisplay.textContent = nif.nif;
          nifSearchInput.value = `${nif.nif} - ${nif.name}`;
          searchResults.style.display = "none";
          compareNifBtn.disabled = false;
        });
        searchResults.appendChild(resultItem);
      });
      searchResults.style.display = "block";
    } else {
      searchResults.style.display = "none";
    }
  });

  // Close search results when clicking outside
  document.addEventListener("click", function (e) {
    if (
      !nifSearchInput.contains(e.target) &&
      !searchResults.contains(e.target)
    ) {
      searchResults.style.display = "none";
    }
  });

  // Compare NIFs button
  compareNifBtn.addEventListener("click", function () {
    if (selectedNifForComparison && selectedNifForComparison !== currentNif) {
      switchToNifComparisonView();
    }
  });

  // Remove comparison
  removeComparisonBtn.addEventListener("click", function () {
    switchToSingleView();
  });

  // Generate Report button
  generateReportBtn.addEventListener("click", function () {
    showNotification("Relatório gerado com sucesso!", "success");
  });

  // Modal functionality
  const inconsistenciesBtn = document.querySelector(".inconsistencies-btn");
  const inconsistenciesModal = document.querySelector(".inconsistencies-modal");
  const closeModalBtns = document.querySelectorAll(".close-modal");

  inconsistenciesBtn.addEventListener("click", function () {
    inconsistenciesModal.classList.add("active");
  });

  closeModalBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      inconsistenciesModal.classList.remove("active");
      serviceComparisonModal.classList.remove("active");
    });
  });

  // Close modals when clicking outside
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("modal")) {
      inconsistenciesModal.classList.remove("active");
      serviceComparisonModal.classList.remove("active");
    }
  });

  // Notification dropdown functionality
  const userDropdown = document.querySelector(".user-dropdown");
  const userTrigger = document.querySelector(".user-trigger");
  const notificationDropdown = document.querySelector(".notification-dropdown");
  const notificationTrigger = document.querySelector(".notification-trigger");

  // User dropdown
  userTrigger.addEventListener("click", function (e) {
    e.stopPropagation();
    userDropdown.classList.toggle("active");
    notificationDropdown.classList.remove("active");
  });

  // Notification dropdown
  notificationTrigger.addEventListener("click", function (e) {
    e.stopPropagation();
    notificationDropdown.classList.toggle("active");
    userDropdown.classList.remove("active");
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", function () {
    userDropdown.classList.remove("active");
    notificationDropdown.classList.remove("active");
  });

  // Mark notifications as read when clicked
  const notificationItems = document.querySelectorAll(".notification-item");
  notificationItems.forEach((item) => {
    item.addEventListener("click", function () {
      this.classList.remove("unread");
      updateNotificationBadge();
    });
  });

  function updateNotificationBadge() {
    const unreadNotifications = document.querySelectorAll(
      ".notification-item.unread"
    ).length;
    const badge = document.querySelector(".notification-badge");

    if (unreadNotifications > 0) {
      badge.textContent = unreadNotifications;
      badge.style.display = "flex";
    } else {
      badge.style.display = "none";
    }
  }

  // Sticky notes functionality
  const stickyNotesPanel = document.querySelector(".sticky-notes-panel");
  const toggleNotesBtn = document.querySelector(".toggle-notes-btn");
  const notesTextarea = document.querySelector(".notes-content textarea");
  const saveNotesBtn = document.querySelector(".save-notes-btn");
  const clearNotesBtn = document.querySelector(".clear-notes-btn");
  const savedNotesContainer = document.querySelector(".saved-notes");

  toggleNotesBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    stickyNotesPanel.classList.toggle("minimized");
    const icon = this.querySelector("i");
    icon.classList.toggle("fa-chevron-up");
    icon.classList.toggle("fa-chevron-down");
  });

  // Close notes when clicking outside (only when minimized)
  document.addEventListener("click", function (e) {
    if (
      !stickyNotesPanel.contains(e.target) &&
      !stickyNotesPanel.classList.contains("minimized")
    ) {
      stickyNotesPanel.classList.add("minimized");
      const icon = toggleNotesBtn.querySelector("i");
      icon.classList.remove("fa-chevron-up");
      icon.classList.add("fa-chevron-down");
    }
  });

  saveNotesBtn.addEventListener("click", function () {
    const noteText = notesTextarea.value.trim();
    if (noteText) {
      const now = new Date();
      const dateString =
        now.toLocaleDateString("pt-PT") +
        " " +
        now.toLocaleTimeString("pt-PT", { hour: "2-digit", minute: "2-digit" });

      const noteItem = document.createElement("div");
      noteItem.className = "note-item";
      noteItem.innerHTML = `
        <div class="note-date">${dateString}</div>
        <div class="note-text">${noteText}</div>
      `;

      savedNotesContainer.appendChild(noteItem);
      notesTextarea.value = "";

      // Show success message
      showNotification("Nota guardada com sucesso!", "success");
    }
  });

  clearNotesBtn.addEventListener("click", function () {
    notesTextarea.value = "";
  });

  function showNotification(message, type) {
    const notification = document.createElement("div");
    notification.className = `notification-toast ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 12px 20px;
      background: ${
        type === "success"
          ? "#28a745"
          : type === "warning"
          ? "#ffc107"
          : "#dc3545"
      };
      color: ${type === "warning" ? "#333" : "white"};
      border-radius: 6px;
      z-index: 10000;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 3000);
  }
});
