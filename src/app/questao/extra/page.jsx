import CrudItem from "@/app/components/crudItem";

export default function QuestaoExtra() {
  return (
    <>
      <h1>Questão Extra</h1>
      <p>
        Crie um to-do app que adiciona e remove itens de uma lista.
        O app deve ter um pequeno formulário e um botão azul para adicionar itens.
        Cada item deve ter um botão para removê-lo.
        Deve existir também um botão verde para zerar a lista.
        Todos os botões precisam ser redondos e ficarem quadrados quando o mouse estiver sobre eles.
        A lista deve ser salva no localStorage.
      </p>
      <CrudItem/>
    </>
  );
}
