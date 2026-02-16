// ================= CONFIG API =================
const API_URL = "http://localhost:5234/api/contracts";

// ================= INICIALIZAÇÃO =================
document.addEventListener('DOMContentLoaded', function () {
    iniciarNavegacao();
    iniciarBusca();
    carregarContratos();
    console.log("Nexum CLM iniciado 🚀");
});

// ================= NAVEGAÇÃO =================
function iniciarNavegacao() {
    const navItems = document.querySelectorAll('.nav-item');
    const pages = document.querySelectorAll('.page');

    navItems.forEach(item => {
        item.addEventListener('click', function () {
            const pageId = this.getAttribute('data-page') + '-page';

            navItems.forEach(nav => nav.classList.remove('active'));
            pages.forEach(page => page.classList.remove('active'));

            this.classList.add('active');

            const targetPage = document.getElementById(pageId);
            if (targetPage) targetPage.classList.add('active');

            localStorage.setItem('activePage', this.getAttribute('data-page'));
        });
    });

    const savedPage = localStorage.getItem('activePage');
    if (savedPage) {
        const navItem = document.querySelector(`[data-page="${savedPage}"]`);
        if (navItem) navItem.click();
    }
}

// ================= BUSCA =================
function iniciarBusca() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', function (e) {
        const searchTerm = e.target.value.toLowerCase();
        const rows = document.querySelectorAll('.contracts-table tbody tr');

        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(searchTerm) ? '' : 'none';
        });
    });
}

// ================= CARREGAR CONTRATOS =================
async function carregarContratos() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) throw new Error("Erro ao buscar contratos");

        const contracts = await response.json();

        atualizarDashboard(contracts);
        atualizarTabelaDashboard(contracts);
        atualizarTabelaCompleta(contracts);

    } catch (error) {
        console.error("Erro API:", error);
    }
}

// ================= MÉTRICAS =================
function atualizarDashboard(contracts) {
    const total = document.getElementById("total-contracts");
    const ativos = document.getElementById("active-contracts");

    if (total) total.textContent = contracts.length;

    const ativosCount = contracts.filter(c => c.isActive === true).length;
    if (ativos) ativos.textContent = ativosCount;
}

// ================= TABELA DASHBOARD =================
function atualizarTabelaDashboard(contracts) {
    const tbody = document.getElementById("contracts-table-body");
    if (!tbody) return;

    tbody.innerHTML = "";

    contracts.slice(0, 5).forEach(contract => {
        tbody.innerHTML += gerarLinhaContrato(contract);
    });
}

// ================= TABELA COMPLETA =================
function atualizarTabelaCompleta(contracts) {
    const tbody = document.getElementById("contracts-page-table-body");
    if (!tbody) return;

    tbody.innerHTML = "";

    contracts.forEach(contract => {
        tbody.innerHTML += gerarLinhaContrato(contract);
    });
}

// ================= GERAR LINHA =================
function gerarLinhaContrato(contract) {

    const status = contract.isActive ? "Ativo" : "Inativo";

    return `
        <tr>
            <td>${contract.clientName}</td>
            <td>${gerarBadge(status)}</td>
            <td>
                <div class="actions">
                    <button class="action-btn" data-id="${contract.id}" data-action="edit">✏️</button>
                    <button class="action-btn" data-id="${contract.id}" data-action="delete">🗑️</button>
                </div>
            </td>
        </tr>
    `;
}

// ================= BADGE =================
function gerarBadge(status) {
    if (status === "Ativo")
        return `<span class="badge badge-success">${status}</span>`;

    return `<span class="badge badge-danger">${status}</span>`;
}

// ================= AÇÕES =================
document.addEventListener('click', async function (e) {

    const btn = e.target.closest('.action-btn');
    if (!btn) return;

    const action = btn.getAttribute('data-action');
    const id = btn.getAttribute('data-id');

    if (action === "edit") {
        await editarContrato(id);
    }

    if (action === "delete") {
        if (confirm("Deseja realmente excluir este contrato?")) {
            await excluirContrato(id);
        }
    }
});

// ================= EDITAR =================
async function editarContrato(id) {

    const novoNome = prompt("Digite o novo nome do cliente:");
    if (!novoNome) return;

    try {

        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) throw new Error("Erro ao buscar contrato");

        const contrato = await response.json();
        contrato.clientName = novoNome;

        const updateResponse = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contrato)
        });

        if (!updateResponse.ok) throw new Error("Erro ao atualizar");

        alert("Contrato atualizado com sucesso!");
        carregarContratos();

    } catch (error) {
        console.error(error);
        alert("Erro ao editar contrato.");
    }
}

// ================= EXCLUIR =================
async function excluirContrato(id) {

    try {

        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) throw new Error("Erro ao excluir");

        alert("Contrato excluído com sucesso!");
        carregarContratos();

    } catch (error) {
        console.error(error);
        alert("Erro ao excluir contrato.");
    }
}

// ================= ANIMAÇÃO =================
window.addEventListener('load', function () {
    const elements = document.querySelectorAll('.metric-card, .section');

    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(10px)';

        setTimeout(() => {
            el.style.transition = 'all 0.3s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 50);
    });
});

const createContract = async () => {
  const newContract = {
    clientName: "Novo Cliente",
    startDate: new Date().toISOString(),
    endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString(),
    value: 10000.00,
    isActive: true
  };

  try {
    const response = await fetch("http://localhost:5234/api/contracts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newContract)
    });

    if (!response.ok) {
      throw new Error("Erro ao criar contrato");
    }

    const created = await response.json();

    // Atualiza lista
    setContracts(prev => [...prev, created]);

  } catch (error) {
    console.error(error);
  }
};
