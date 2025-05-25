import { Hono } from "hono";
const userRouter = new Hono();

userRouter.route("/users", userRouter);
export { userRouter };