const fakePromise = <T>(result: T, delay: number = 1000): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(result);
    }, delay);
  });
};

const reportError = (err: any) => {
  console.log(err);
};

const helper = {
  fakePromise,
  reportError,
};

export { helper };
