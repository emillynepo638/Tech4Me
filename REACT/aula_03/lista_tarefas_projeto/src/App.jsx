export default function Tarefas() {
  const tarefas = [
    "Estudar React",
    "Fazer exercícios de JavaScript",
    "Revisar HTML e CSS",
    "Organizar os estudos da semana",
    "Enviar atividade para a professora",
  ];

  return (
    <>
      <h1>Lista de Tarefas</h1>

      <>
        <ul>
          {tarefas.map((tarefa, index) => (
            <li key={index}>{tarefa}</li>
          ))}
        </ul>
      </>
    </>
  );
}
