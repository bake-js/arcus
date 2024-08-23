const fallback = {
  /**
   * Método que retorna uma resposta padrão de 404 Not Found.
   * Usado como fallback quando nenhuma rota corresponde à solicitação.
   *
   * @returns {Response} Uma resposta HTTP 404 vazia.
   */
  page() {
    return new Response("", { status: 404 }); // Retorna uma resposta com status 404 (Not Found)
  },

  /**
   * Caminho padrão usado como fallback.
   * É definido como uma string vazia, indicando que não há rota correspondente.
   */
  path: "",
};

export default fallback;
