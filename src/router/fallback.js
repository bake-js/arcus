/**
 * Objeto que fornece respostas e caminhos padrão de fallback para rotas não encontradas.
 *
 * O objeto `fallback` é utilizado quando nenhuma rota registrada corresponde à solicitação feita pelo cliente.
 * Ele fornece uma resposta padrão HTTP 404 e um caminho padrão para indicar a ausência de uma rota correspondente.
 *
 * @namespace fallback
 */
const fallback = {
  /**
   * Retorna uma resposta padrão de 404 Not Found.
   *
   * Este método é utilizado como uma página de fallback quando nenhuma rota
   * registrada corresponde à solicitação feita pelo cliente. A resposta 404
   * indica que o recurso solicitado não foi encontrado.
   *
   * @function
   * @returns {Response} Uma resposta HTTP 404 vazia.
   * @example
   * // Exemplo de uso
   * const resposta = fallback.page();
   * console.log(resposta.status); // 404
   */
  page() {
    return new Response("", { status: 404 }); // Retorna uma resposta com status 404 (Not Found)
  },

  /**
   * Caminho padrão usado como fallback.
   *
   * Este campo `path` é utilizado para identificar que não há uma rota
   * correspondente ao caminho solicitado. É definido como uma string vazia.
   *
   * @constant
   * @type {string}
   * @default ""
   * @example
   * // Exemplo de uso
   * console.log(fallback.path); // ""
   */
  path: "",
};

export default fallback;
