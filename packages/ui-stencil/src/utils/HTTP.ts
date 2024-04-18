type Config = Omit<RequestInit, 'body'> & {
  body?: FormData | Record<string, any>;
};

type HTTP_Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

type HTTP_Args = {
  method: HTTP_Method;
  endpoint: string;
  config?: Config;
  showToastError?: boolean;
};

async function HTTP_REQUEST<T>({ method, endpoint, config, showToastError }: HTTP_Args) {
  const isFormData = config?.body instanceof FormData;
  const response = await fetch(`https://checkout.free.beeceptor.com/${endpoint}`, {
    method,
    ...config,
    body: isFormData ? (config.body as FormData) : JSON.stringify(config?.body),
    headers: {
      'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
      ...config?.headers,
    },
  });

  let content: any;
  if (!response.ok) {
    content = (await response.text()) || 'Something went wrong!';
    if (showToastError) {
      alert('something went wrong');
      //   toast.error(content);
    }
  } else {
    content = await response.json();
    console.log('Succeed', content);
  }

  return new Promise<T>((resolve, reject) => {
    if (response.ok) return resolve(content as T);
    reject(new Error(content as string));
  });
}

export function GET<T>({ endpoint }: Omit<HTTP_Args, 'method'>) {
  return HTTP_REQUEST<T>({
    method: 'GET',
    endpoint,
  });
}
export function POST<T>({ endpoint }: Omit<HTTP_Args, 'method'>) {
  return HTTP_REQUEST<T>({
    method: 'POST',
    endpoint,
  });
}
export function PUT<T>({ endpoint }: Omit<HTTP_Args, 'method'>) {
  return HTTP_REQUEST<T>({
    method: 'PUT',
    endpoint,
  });
}
export function PATCH<T>({ endpoint }: Omit<HTTP_Args, 'method'>) {
  return HTTP_REQUEST<T>({
    method: 'PATCH',
    endpoint,
  });
}
export function DELETE<T>({ endpoint }: Omit<HTTP_Args, 'method'>) {
  return HTTP_REQUEST<T>({
    method: 'DELETE',
    endpoint,
  });
}
