const fallback = {
  page() {
    return new Response("", { status: 404 });
  },

  path: "",
};

export default fallback;
