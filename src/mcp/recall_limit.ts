/*
*      __                      __  ___
*     / /   ____  ____  ____ _/  |/  /__  ____ ___  ____  _______  __
*    / /   / __ \/ __ \/ __ `/ /|_/ / _ \/ __ `__ \/ __ \/ ___/ / / /
*   / /___/ /_/ / / / / /_/ / /  / /  __/ / / / / / /_/ / /  / /_/ /
*  /_____/\____/_/ /_/\__, /_/  /_/\___/_/ /_/ /_/\____/_/   \__, /
                     /____/                                 /____/
 *
 *  cavira oss (c) 2026  -  nullure (c) 2026
 *  ----------------------------------------------------------
 *  file  : src/mcp/recall_limit.ts
 *  usage : parses the MCP recall result limit from the environment
 */

/** Parses LONGMEMORY_MCP_RECALL_LIMIT: unset, empty or 0 means no limit (every matching memory is returned). */
export function parse_mcp_recall_limit(env: NodeJS.ProcessEnv = process.env): number | null {
    const raw = env.LONGMEMORY_MCP_RECALL_LIMIT?.trim();
    if (!raw) return null;
    const value = Number(raw);
    if (!Number.isInteger(value) || value < 0) throw new Error('LONGMEMORY_MCP_RECALL_LIMIT must be a non-negative integer (0 or empty = no limit)');
    return value === 0 ? null : value;
}
