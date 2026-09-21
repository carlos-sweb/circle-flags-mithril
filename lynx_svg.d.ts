export function mergeStyle(
  px: number,
  style?: Record<string, unknown> | string | null
): { width: string; height: string; [key: string]: unknown }

export function lynxIcon(
  inner: string,
  defaultsFn: (size: number) => Record<string, unknown>,
  defaultSize?: number
): { view: (vnode: { attrs?: Record<string, unknown> }) => unknown }
