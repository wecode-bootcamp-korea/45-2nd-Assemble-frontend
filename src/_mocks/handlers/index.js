import { handlers as userHandlers } from "./user";
import { handlers as paymentHandlers } from "./payment";

export const handlers = [...userHandlers, ...paymentHandlers];
