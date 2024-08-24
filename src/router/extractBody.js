import body from "./body";

/**
 * Extrai e armazena o corpo da requisição no objeto `body` se a requisição for POST ou PUT e o conteúdo for JSON.
 *
 * @function
 * @param {Request} request - O objeto de requisição HTTP que contém os dados a serem extraídos.
 * @returns {Promise<void>} - Uma Promise que resolve quando o corpo da requisição é extraído e armazenado no objeto `body`.
 * @description
 * A função `extractBody` realiza as seguintes etapas:
 * - Verifica se o método da requisição é POST ou PUT.
 * - Verifica se o cabeçalho `Content-Type` da requisição é `application/json`.
 * - Se ambas as condições forem verdadeiras, lê o corpo da requisição como JSON e armazena os dados extraídos no objeto `body`.
 *
 * O objeto `body` deve ser previamente importado do módulo `./body`. Após a execução desta função, `body` conterá os dados extraídos do corpo da requisição, se as condições forem atendidas.
 *
 * @example
 * // Exemplo de uso:
 * const request = new Request('https://example.com', {
 *   method: 'POST',
 *   headers: {
 *     'Content-Type': 'application/json'
 *   },
 *   body: JSON.stringify({ key: 'value' })
 * });
 *
 * await extractBody(request);
 * console.log(body); // { key: 'value' }
 */
async function extractBody(request) {
  // Verifica se o método da requisição é POST ou PUT
  const isPostOrPut = /POST|PUT/i.test(request.method);

  // Verifica se o Content-Type do request é JSON
  const isJsonContent = /application\/json/i.test(
    request.headers.get("Content-Type"),
  );

  // Se ambas as condições forem verdadeiras, faz a leitura do corpo da requisição e atribui ao objeto 'body'
  if (isPostOrPut && isJsonContent) {
    Object.assign(body, await request.json());
  }
}

export default extractBody;
