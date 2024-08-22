import extractArgs from "./extractArgs";
import extractBody from "./extractBody";
import extractParams from "./extractParams";
import findMatchingRoute from "./findMatchingRoute";

async function handle(request, env, ctx) {
  const { page, path } = findMatchingRoute(request);

  await extractBody(request);
  extractArgs(request);
  extractParams(request, path);

  return page(request, env, ctx);
}

export default handle;
