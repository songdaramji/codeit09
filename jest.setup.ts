// src/mocks/server.ts
import { postsHandlers } from "@/mocks/handlers/posts";
import { usersHandlers } from "@/mocks/handlers/users";
import { setupServer } from "msw/node";

// MSW 서버를 설정합니다.
export const server = setupServer(...usersHandlers, ...postsHandlers);
