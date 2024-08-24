import extractArgs from "./extractArgs";
import extractBody from "./extractBody";
import extractParams from "./extractParams";
import findMatchingRoute from "./findMatchingRoute";

/**
 * Lida com a requisição HTTP, identificando a rota correta e processando os dados necessários.
 *
 * Esta função é responsável por processar uma requisição HTTP, encontrar a rota correspondente,
 * extrair dados da requisição como corpo, argumentos de consulta e parâmetros de rota, e finalmente
 * invocar a função de callback da página correspondente. O resultado dessa função é retornado como
 * a resposta HTTP.
 *
 * @async
 * @function handle
 * @param {Request} request - A requisição HTTP que está sendo tratada.
 * @param {Object} env - Variáveis de ambiente que podem ser usadas durante o processamento.
 * @param {Object} ctx - O contexto de execução, geralmente usado para operações assíncronas.
 * @returns {Promise<Response>} - Retorna uma resposta gerada pela página correspondente à rota.
 * @description
 * A função `handle` realiza a seguinte sequência de operações:
 * 1. Encontra a rota correspondente com base na requisição usando a função `findMatchingRoute`.
 * 2. Extrai o corpo da requisição, se aplicável, utilizando `extractBody`.
 * 3. Extrai argumentos de consulta e parâmetros de rota utilizando `extractArgs` e `extractParams`.
 * 4. Retorna a resposta gerada pela função de callback da página correspondente à rota encontrada.
 *
 * @example
 * // Exemplo de uso dentro de um ambiente de worker ou servidor
 * addEventListener("fetch", event => {
 *   event.respondWith(handle(event.request, env, event)));
 * });
 */
async function handle(request, env, ctx) {
  // Encontra a rota correspondente com base na requisição
  const { page, path } = findMatchingRoute(request);

  // Extrai o corpo da requisição, se aplicável
  await extractBody(request);

  // Extrai argumentos de consulta e parâmetros da URL da requisição
  extractArgs(request);
  extractParams(request, path);

  // Retorna a resposta gerada pela função de callback da página correspondente
  return page(request, env, ctx);
}

export default handle;
