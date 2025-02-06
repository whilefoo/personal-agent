import { Context } from "../types";

export async function helloWorld(context: Context) {
  const { logger, payload } = context;

  const sender = payload.comment.user?.login;
  const repo = payload.repository.name;

  logger.debug(`Executing helloWorld:`, { sender, repo });

  throw new Error("This is an error!");
  logger.ok(`Successfully created comment!`);
  logger.verbose(`Exiting helloWorld`);
}
