import listeners from "./listeners";

function urlFor(pathName, params) {
  const keys = /:(?<key>\w+)/g;
  const { path } = listeners.GET.find(({ name }) => name === pathName) ?? {
    path: "#",
  };
  const url = path.replace(keys, (_, key) => params[key]);
  return url;
}

export default urlFor;
