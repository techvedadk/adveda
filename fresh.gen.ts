// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_404.tsx";
import * as $1 from "./routes/_500.tsx";
import * as $2 from "./routes/api/login.ts";
import * as $3 from "./routes/api/logout.ts";
import * as $4 from "./routes/api/signup.ts";
import * as $5 from "./routes/api/subscription.ts";
import * as $6 from "./routes/dashboard/_middleware.ts";
import * as $7 from "./routes/dashboard/account.tsx";
import * as $8 from "./routes/dashboard/api/todo.ts";
import * as $9 from "./routes/dashboard/index.tsx";
import * as $10 from "./routes/dashboard/manage-subscription.ts";
import * as $11 from "./routes/dashboard/todos.tsx";
import * as $12 from "./routes/dashboard/upgrade-subscription.ts";
import * as $13 from "./routes/index.tsx";
import * as $14 from "./routes/login.tsx";
import * as $15 from "./routes/logout.ts";
import * as $16 from "./routes/signup.tsx";
import * as $$0 from "./islands/TodoList.tsx";

const manifest = {
  routes: {
    "./routes/_404.tsx": $0,
    "./routes/_500.tsx": $1,
    "./routes/api/login.ts": $2,
    "./routes/api/logout.ts": $3,
    "./routes/api/signup.ts": $4,
    "./routes/api/subscription.ts": $5,
    "./routes/dashboard/_middleware.ts": $6,
    "./routes/dashboard/account.tsx": $7,
    "./routes/dashboard/api/todo.ts": $8,
    "./routes/dashboard/index.tsx": $9,
    "./routes/dashboard/manage-subscription.ts": $10,
    "./routes/dashboard/todos.tsx": $11,
    "./routes/dashboard/upgrade-subscription.ts": $12,
    "./routes/index.tsx": $13,
    "./routes/login.tsx": $14,
    "./routes/logout.ts": $15,
    "./routes/signup.tsx": $16,
  },
  islands: {
    "./islands/TodoList.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
