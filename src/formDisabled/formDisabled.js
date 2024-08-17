import intercept, { exec } from "../intercept";
import { formDisabledCallback } from "../interfaces";

/**
 * Cria um decorator para adicionar lógica ao método `formDisabledCallback` de um Custom Element.
 *
 * @param target - O alvo do decorator, geralmente a classe do Custom Element.
 * @param propertyKey - O nome do método decorado.
 * @returns Um decorator que intercepta a chamada do `formDisabledCallback`.
 */
const formDisabled = (target, propertyKey) => {
  // Cria uma instância do interceptor para o método `formDisabledCallback`.
  const interceptor = intercept(formDisabledCallback);

  // Adiciona o método decorado à lista de callbacks a serem executados.
  return interceptor
    .in(target) // Define o alvo do interceptor.
    .then(exec(propertyKey)); // Define o método a ser executado pelo interceptor.
};

export default formDisabled;
