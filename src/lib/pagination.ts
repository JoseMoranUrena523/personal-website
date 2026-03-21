export interface PaginationOptions {
  page: number;
  pageSize: number;
}

export interface PaginationResult<T> {
  items: T[];
  pagination: {
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

export function paginate<T>(
  items: T[],
  options: PaginationOptions
): PaginationResult<T> {
  const { page, pageSize } = options;
  if (pageSize <= 0) {
    throw new Error(`pageSize must be greater than 0, received: ${pageSize}`);
  }
  const totalItems = items.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedItems = items.slice(startIndex, endIndex);

  return {
    items: paginatedItems,
    pagination: {
      page,
      pageSize,
      totalItems,
      totalPages,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1,
    },
  };
}

export function getPaginationMeta(
  totalItems: number,
  options: PaginationOptions
) {
  const { page, pageSize } = options;
  if (pageSize <= 0) {
    throw new Error(`pageSize must be greater than 0, received: ${pageSize}`);
  }

  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

  return {
    page,
    pageSize,
    totalItems,
    totalPages,
    hasNextPage: page < totalPages,
    hasPreviousPage: page > 1,
  };
}

export function normalizePage(page: number | string | undefined, maxPage: number): number {
  const clampedMax = Math.max(1, maxPage);
  if (typeof page === "string") {
    const parsed = parseInt(page, 10);
    if (isNaN(parsed) || parsed < 1) return 1;
    return Math.min(parsed, clampedMax);
  }
  if (typeof page === "number") {
    if (page < 1) return 1;
    return Math.min(page, clampedMax);
  }
  return 1;
}

