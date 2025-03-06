const API_SERVER_URL = process.env.API_SERVER_URL || "";

interface FetchOptions<TBody> {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: TBody;
  queryParams?: Record<string, string | number | boolean>;
  pathParams?: Record<string, string | number>;
  headers?: Record<string, string>;
  next?: NextFetchRequestConfig;
}

const replacePathParams = (
  url: string,
  pathParams?: Record<string, string | number>,
): string => {
  if (!pathParams) return url;
  return Object.keys(pathParams).reduce(
    (acc, key) =>
      acc.replace(`:${key}`, encodeURIComponent(String(pathParams[key]))),
    url,
  );
};

const buildUrl = (
  url: string,
  queryParams?: Record<string, string | number | boolean>,
): string => {
  if (!queryParams) return url;
  const queryString = new URLSearchParams(
    Object.entries(queryParams).reduce<Record<string, string>>(
      (acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      },
      {},
    ),
  ).toString();
  return queryString ? `${url}?${queryString}` : url;
};

const generateBody = <TBody>(body: TBody) => {
  if (body instanceof FormData) return body;
  return body ? JSON.stringify(body) : undefined;
};

export const fetcher = async <TResponse, TBody = undefined>({
  url,
  method = "GET",
  body,
  queryParams,
  pathParams,
  headers = {},
  next,
}: FetchOptions<TBody>): Promise<TResponse> => {
  const replacedUrl = replacePathParams(url, pathParams);
  const fullUrl = `${API_SERVER_URL}${buildUrl(replacedUrl, queryParams)}`;

  const res = await fetch(fullUrl, {
    method,
    headers: { ...headers },
    body: generateBody(body),
    next,
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error.message);
  }

  return res.json();
};

export const get = <TResponse>(
  options: Omit<FetchOptions<undefined>, "method" | "body">,
) => fetcher<TResponse>({ ...options, method: "GET" });

export const post = <TResponse, TBody>(
  options: Omit<FetchOptions<TBody>, "method">,
) => fetcher<TResponse, TBody>({ ...options, method: "POST" });

export const put = <TResponse, TBody>(
  options: Omit<FetchOptions<TBody>, "method">,
) => fetcher<TResponse, TBody>({ ...options, method: "PUT" });

export const del = <TResponse>(
  options: Omit<FetchOptions<undefined>, "method" | "body">,
) => fetcher<TResponse>({ ...options, method: "DELETE" });
