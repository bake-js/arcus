/**
 * Armazena os parâmetros extraídos da URL.
 *
 * @description
 * O objeto `params` é utilizado para armazenar os parâmetros dinâmicos
 * extraídos da URL, com base nos caminhos das rotas definidas. Parâmetros
 * na URL, identificados pela notação `:paramName`, são automaticamente
 * capturados e seus valores são armazenados neste objeto, onde cada chave
 * corresponde ao nome do parâmetro.
 *
 * @example
 * // Se a URL for '/users/123/profile' e a rota definida for '/users/:userId/profile'
 * console.log(params.userId); // Saída: '123'
 *
 * @type {Object<string, string>}
 */
const params = {};

export default params;
