// src/mocks/browser.js

import { setupWorker } from "msw";
import { handlers } from "./handlers";

// 이것은 주어진 request 핸들러를 가진 Service Worker를 설정한다.
export const worker = setupWorker(...handlers);
