import args from "./args";

/**
 * Extrai parâmetros de busca da URL de uma requisição e os armazena no objeto `args`.
 *
 * @function
 * @param {Request} request - O objeto de requisição da qual os parâmetros de busca serão extraídos.
 * @description A função cria uma instância de `URL` para manipular a URL da requisição e utiliza `URLSearchParams` para iterar sobre os parâmetros de busca. Cada par chave-valor é armazenado no objeto `args`.
 *
 * O objeto `args` deve ser previamente importado do módulo `./args`. Após a execução desta função, `args` conterá os parâmetros de busca da URL como pares chave-valor.
 *
 * @example
 * // Exemplo de uso:
 * const request = new Request('https://example.com?param1=value1&param2=value2');
 * extractArgs(request);
 * console.log(args); // { param1: 'value1', param2: 'value2' }
 */
function extractArgs(request) {
  // Cria uma instância de URL para manipular facilmente a URL da requisição
  const url = new URL(request.url);

  // Extrai os parâmetros de busca (query string) da URL
  const searchParams = new URLSearchParams(url.search);

  // Itera sobre cada par chave-valor dos parâmetros de busca e os armazena no objeto 'args'
  for (const [key, value] of searchParams.entries()) {
    Reflect.set(args, key, value);
  }
}

export default extractArgs;
