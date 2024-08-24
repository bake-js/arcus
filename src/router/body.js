/**
 * @fileoverview Módulo para armazenar o corpo da requisição em formato JSON.
 * @module body
 */

/**
 * Objeto que armazena o corpo da requisição em formato JSON.
 *
 * O `body` é um objeto vazio que será preenchido com os dados do corpo
 * da requisição, quando o tipo de conteúdo for `application/json`.
 *
 * @constant
 * @type {Object<string, any>}
 * @description O objeto `body` é utilizado para armazenar o corpo da requisição em formato JSON.
 *              Cada propriedade do objeto representa uma chave do corpo JSON, e o valor é o dado
 *              associado a essa chave. Este objeto é preenchido quando a requisição tem o tipo de
 *              conteúdo `application/json`.
 * @example
 * // Exemplo de uso do objeto body após o preenchimento com dados JSON
 * body['key1'] = 'value1';
 * body['key2'] = 123;
 * console.log(body['key1']); // 'value1'
 * console.log(body['key2']); // 123
 */
const body = {};

export default body;
