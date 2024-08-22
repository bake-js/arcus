import handle from "./handle";
import listeners from "./listeners";

const router = new Proxy(
  {},
  {
    get(_, method) {
      if (/handle/.test(method)) return handle;
      return (path, page, name) =>
        listeners[method.toUpperCase()].push({ path, page, name });
    },
  },
);

export default router;
