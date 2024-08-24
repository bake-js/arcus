import params from "./params";

/**
 * Extrai parâmetros da URL com base na rota fornecida e os armazena no objeto `params`.
 *
 * @function
 * @param {Request} request - O objeto de requisição HTTP que contém a URL a ser analisada.
 * @param {string} path - O caminho da rota, que pode conter parâmetros dinâmicos (iniciados com `:`).
 * @description
 * A função `extractParams` compara o caminho da rota (`path`) com o caminho da URL da requisição, identificando segmentos dinâmicos na rota. Os valores desses segmentos na URL são extraídos e armazenados no objeto `params`.
 *
 * A rota pode conter segmentos dinâmicos, como `'/user/:id/profile'`, e a URL da requisição pode ser `'/user/123/profile'`. Neste caso, a função extrai o valor `123` e o armazena no objeto `params` com a chave `'id'`.
 *
 * @example
 * // Exemplo de uso:
 * const request = new Request('https://example.com/user/123/profile');
 * const route = '/user/:id/profile';
 * extractParams(request, route);
 * console.log(params); // { id: '123' }
 */
function extractParams(request, path) {
  // Cria uma instância de URL para extrair o caminho da requisição
  const url = new URL(request.url);

  // Divide o caminho da rota em segmentos
  const keys = path?.split("/");

  // Divide o caminho da URL em segmentos correspondentes
  const values = url.pathname.split("/");

  // Itera sobre os segmentos da rota, identificando e extraindo parâmetros dinâmicos
  keys?.forEach((key, i) => {
    // Verifica se o segmento é um parâmetro dinâmico (iniciado com ':')
    if (/^:/.test(key)) {
      // Armazena o valor do segmento correspondente no objeto `params`
      Reflect.set(params, key.slice(1), values[i]);
    }
  });
}

export default extractParams;
