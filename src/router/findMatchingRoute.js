import fallback from "./fallback";
import listeners from "./listeners";

function findMatchingRoute(request) {
  const url = new URL(request.url);
  const page = listeners[request.method].find(({ path }) => {
    path = path.replace(/:\w+/gi, "([a-z0-9-_]+)");
    const pattern = new RegExp(`^${path}$`, "i");
    return pattern.test(url.pathname);
  });
  return page ?? fallback;
}

export default findMatchingRoute;
