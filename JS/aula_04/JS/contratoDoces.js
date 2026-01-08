// Dados da pessoa contratante
const pessoa = {
  nome: "Emilly Vitória Santos",
  cpf: "123.456.789-00",
  cidade: "Teresópolis"
};

// Dados do serviço contratado
const servico = {
  tipo: "Produção de doces artesanais",
  quantidade: 120,
  prazo: "30 dias",
  valor: 850.00
};

// Montagem do contrato
const contratoTexto = `
  Pelo presente instrumento, a pessoa <strong>${pessoa.nome}</strong>,
  inscrita no CPF nº <strong>${pessoa.cpf}</strong>, residente na cidade de
  <strong>${pessoa.cidade}</strong>, firma a contratação do serviço de
  <strong>${servico.tipo}</strong>, envolvendo a produção de
  <strong>${servico.quantidade}</strong> unidades, com prazo estimado de
  <strong>${servico.prazo}</strong>, pelo valor total de
  <strong>R$ ${servico.valor.toFixed(2)}</strong>.

  A contratante declara estar ciente das condições estabelecidas
  e concorda com os termos aqui descritos.
`;

// Inserindo o texto no HTML
document.getElementById("contrato").innerHTML = contratoTexto;
