import fallback from "./fallback";
import listeners from "./listeners";

function findMatchingRoute(request) {
  // Extrai a URL do request
  const url = new URL(request.url);

  // Encontra a rota correspondente ao método HTTP do request
  const page = listeners[request.method].find(({ path }) => {
    // Substitui parâmetros dinâmicos na rota por um padrão regex
    const dynamicPath = path.replace(/:\w+/gi, "([a-z0-9-_]+)");

    // Cria um padrão regex para combinar a rota
    const pattern = new RegExp(`^${dynamicPath}$`, "i");

    // Verifica se o pathname da URL corresponde ao padrão regex
    return pattern.test(url.pathname);
  });

  // Retorna a página correspondente ou o fallback se não houver correspondência
  return page ?? fallback;
}

export default findMatchingRoute;
