import listeners from "./listeners";

/**
 * Gera uma URL baseada no nome da rota e nos parâmetros fornecidos.
 *
 * @description
 * O método `urlFor` procura a rota correspondente ao nome (`pathName`) entre as
 * rotas registradas para o método GET. Em seguida, substitui os parâmetros
 * dinâmicos no caminho (identificados por `:paramName`) com os valores fornecidos
 * no objeto `params`. Retorna a URL resultante com os parâmetros substituídos.
 *
 * @param {string} pathName - O nome da rota para a qual gerar a URL.
 * @param {Object} params - Um objeto contendo os parâmetros a serem inseridos na URL.
 * @param {string} params.key - O valor do parâmetro a ser inserido na URL, onde `key` é o nome do parâmetro dinâmico.
 * @returns {string} - A URL gerada com os parâmetros substituídos.
 *
 * @example
 * // Supondo que a rota registrada para 'userProfile' seja '/users/:userId/profile'
 * const url = urlFor('userProfile', { userId: 123 });
 * console.log(url); // Saída: '/users/123/profile'
 */
function urlFor(pathName, params) {
  // Expressão regular para identificar os parâmetros dinâmicos no caminho
  const keysPattern = /:(?<key>\w+)/g;

  // Procurar a rota associada ao nome fornecido
  const { path } = listeners.GET.find(({ name }) => name === pathName) ?? {
    path: "#",
  };

  // Substituir os parâmetros dinâmicos no caminho com os valores fornecidos
  return path.replace(keysPattern, (_, key) => params[key]);
}

export default urlFor;
