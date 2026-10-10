import { cacheLife } from "next/cache";

/**
 * Cached so the page stays statically prerendered, then revalidated daily so
 * the copyright year rolls over without a rebuild.
 */
export async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}
