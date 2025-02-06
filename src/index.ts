import { helloWorld } from "./handlers/hello-world";
import { Context } from "./types";

/**
 * The main plugin function. Split for easier testing.
 */
export async function runPlugin(context: Context) {
  return await helloWorld(context);
}
