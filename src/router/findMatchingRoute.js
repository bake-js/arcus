import fallback from "./fallback";
import listeners from "./listeners";

/**
 * Encontra a rota correspondente para uma requisição HTTP.
 *
 * Esta função analisa a requisição HTTP e localiza a rota registrada que corresponde ao método HTTP
 * e ao caminho da requisição. Se uma rota correspondente for encontrada, ela é retornada. Caso contrário,
 * um objeto de fallback é retornado, indicando que a rota não foi encontrada.
 *
 * @function findMatchingRoute
 * @param {Request} request - A requisição HTTP que está sendo analisada.
 * @returns {Object} - Um objeto que contém a função de callback da página e o caminho da rota correspondente.
 * @description
 * A função `findMatchingRoute` usa a URL da requisição para buscar uma rota registrada que combine com o método HTTP
 * e o caminho da requisição. Parâmetros dinâmicos na rota são substituídos por um padrão regex para permitir a correspondência.
 * Se uma rota correspondente for encontrada, o objeto da rota é retornado. Se nenhuma rota corresponder, um objeto de fallback
 * é retornado.
 *
 * @example
 * const matchedRoute = findMatchingRoute(request);
 * if (matchedRoute === fallback) {
 *   console.log("Rota não encontrada.");
 * } else {
 *   console.log("Rota encontrada:", matchedRoute);
 * }
 */
function findMatchingRoute(request) {
  // Extrai a URL da requisição
  const url = new URL(request.url);

  // Encontra a rota correspondente ao método HTTP da requisição
  const page = listeners[request.method].find(({ path }) => {
    // Substitui parâmetros dinâmicos na rota por um padrão regex
    const dynamicPath = path.replace(/:\w+/gi, "([a-z0-9-_]+)");

    // Cria um padrão regex para combinar a rota
    const pattern = new RegExp(`^${dynamicPath}$`, "i");

    // Verifica se o pathname da URL corresponde ao padrão regex
    return pattern.test(url.pathname);
  });

  // Retorna a rota correspondente ou o fallback se nenhuma rota corresponder
  return page ?? fallback;
}

export default findMatchingRoute;
