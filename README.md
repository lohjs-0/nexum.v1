# 🚀 Nexum API

API REST desenvolvida em **ASP.NET Core** para gerenciamento de contratos, criada como parte do meu processo de formação **Full Stack com foco em C#**.

O projeto foi pensado para ser simples, organizado e evolutivo, servindo tanto como estudo prático quanto como base para futuras versões mais completas.

---

## 📌 Funcionalidades

- ✅ Cadastro de contratos
- ✅ Listagem de contratos
- ✅ Consulta por ID
- ✅ Atualização de contratos
- ✅ Remoção de contratos
- ✅ Documentação via Swagger

---

## 🛠️ Tecnologias Utilizadas

- **C#**
- **.NET 8**
- **ASP.NET Core Web API**
- **Entity Framework Core**
- **PostgreSQL**
- **Swagger / OpenAPI**
- **Git & GitHub**

📬 Endpoints Principais
| Método | Rota                  | Descrição             |
| ------ | --------------------- | --------------------- |
| GET    | `/api/contracts`      | Lista contratos       |
| GET    | `/api/contracts/{id}` | Busca contrato por ID |
| POST   | `/api/contracts`      | Cria novo contrato    |
| PUT    | `/api/contracts/{id}` | Atualiza contrato     |
| DELETE | `/api/contracts/{id}` | Remove contrato       |
