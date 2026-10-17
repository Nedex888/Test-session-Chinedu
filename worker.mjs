// Server-side entry point. Secrets such as env.DEEPSEEK_API_KEY belong here,
// never in public/ or in responses sent to the browser.
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
