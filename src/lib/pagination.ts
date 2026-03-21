/**
 * Pagination utilities for blog posts and other content collections
 */

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

/**
 * Paginate an array of items
 */
export function paginate<T>(
  items: T[],
  options: PaginationOptions
): PaginationResult<T> {
  const { page, pageSize } = options;
  if (pageSize <= 0) {
    throw new Error(`pageSize must be greater than 0, received: ${pageSize}`);
  }
  const totalItems = items.length;
  // Clamp to at least 1 so consumers always get a valid page range
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

/**
 * Get pagination metadata without slicing the array
 */
export function getPaginationMeta(
  totalItems: number,
  options: PaginationOptions
) {
  const { page, pageSize } = options;
  if (pageSize <= 0) {
    throw new Error(`pageSize must be greater than 0, received: ${pageSize}`);
  }
  // Clamp to at least 1 so consumers always get a valid page range
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

/**
 * Validate and normalize page number
 */
export function normalizePage(page: number | string | undefined, maxPage: number): number {
  if (typeof page === "string") {
    const parsed = parseInt(page, 10);
    if (isNaN(parsed) || parsed < 1) return 1;
    return Math.min(parsed, maxPage);
  }
  if (typeof page === "number") {
    if (page < 1) return 1;
    return Math.min(page, maxPage);
  }
  return 1;
}

