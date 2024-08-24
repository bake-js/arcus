/**
 * Este módulo exporta várias funcionalidades para gerenciamento de rotas e requisições.
 *
 * @module
 */

/**
 * Exporta o roteador principal para gerenciamento de rotas HTTP.
 *
 * @description
 * O roteador é responsável por registrar rotas e manipular requisições HTTP.
 * Ele utiliza um proxy para interceptar chamadas de métodos HTTP e associar
 * rotas a funções de tratamento.
 *
 * @see {@link ./router}
 */
export { default } from "./router";

/**
 * Exporta o objeto que armazena os parâmetros de consulta extraídos da URL.
 *
 * @description
 * O objeto `args` armazena os pares chave-valor dos parâmetros de consulta
 * extraídos da URL de uma requisição. É utilizado para acessar os parâmetros
 * de consulta de forma programática.
 *
 * @see {@link ./args}
 */
export { default as args } from "./args";

/**
 * Exporta o objeto que armazena o corpo da requisição em formato JSON.
 *
 * @description
 * O objeto `body` é utilizado para armazenar o corpo da requisição quando o
 * tipo de conteúdo é `application/json`. Ele é preenchido com os dados do corpo
 * da requisição em métodos POST e PUT.
 *
 * @see {@link ./body}
 */
export { default as body } from "./body";

/**
 * Exporta o objeto que armazena os parâmetros dinâmicos extraídos da URL.
 *
 * @description
 * O objeto `params` armazena os valores dos parâmetros dinâmicos extraídos da URL,
 * com base nos caminhos das rotas definidas. Cada chave no objeto corresponde ao
 * nome do parâmetro dinâmico extraído.
 *
 * @see {@link ./params}
 */
export { default as params } from "./params";

/**
 * Exporta a função que gera URLs baseadas em nomes de rota e parâmetros fornecidos.
 *
 * @description
 * A função `urlFor` é usada para gerar URLs com base no nome da rota e nos parâmetros
 * fornecidos. Ela substitui os parâmetros dinâmicos na rota com os valores fornecidos
 * no objeto de parâmetros.
 *
 * @see {@link ./urlFor}
 */
export { default as urlFor } from "./urlFor";
