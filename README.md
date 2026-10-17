# Test-session-Chinedu

One-page site for Test-session-Chinedu, hosted on Cloudflare Workers.

Edit `public/index.html` to update the page. Deploy with `npx wrangler deploy`.
The Wrangler configuration publishes only `public/` as static assets, alongside
the explicit server-side entry point `worker.mjs`. Keep private files, notes,
and environment files outside `public/`. Missing pages return a 404 response.

To store a DeepSeek key, open the Worker in Cloudflare, then Settings > Variables
and Secrets > Add. Choose Secret, name it DEEPSEEK_API_KEY, enter the key, and
deploy the change. Never commit the value or add it to public/. The Worker now
supports secrets; an AI feature that calls DeepSeek has not been added yet.
