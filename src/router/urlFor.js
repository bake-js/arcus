import listeners from "./listeners";

/**
 * Gera uma URL baseada no nome do caminho e parâmetros fornecidos.
 *
 * O método `urlFor` busca a rota correspondente ao nome do caminho (`pathName`)
 * entre as rotas registradas para o método GET. Em seguida, substitui os
 * parâmetros dinâmicos no caminho (identificados por `:paramName`) com os
 * valores fornecidos no objeto `params`. Retorna a URL resultante.
 *
 * @param {string} pathName - O nome da rota para a qual gerar a URL.
 * @param {Object} params - Um objeto contendo os parâmetros a serem inseridos na URL.
 * @returns {string} - A URL gerada com os parâmetros substituídos.
 */
function urlFor(pathName, params) {
  // Expressão regular para identificar parâmetros dinâmicos no caminho
  const keys = /:(?<key>\w+)/g;

  // Encontrar a rota associada ao nome fornecido
  const { path } = listeners.GET.find(({ name }) => name === pathName) ?? {
    path: "#",
  };

  // Substituir os parâmetros dinâmicos no caminho com os valores fornecidos
  return path.replace(keys, (_, key) => params[key]);
}

export default urlFor;
