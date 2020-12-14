export const createObserver = () => {
    return {
      next: (value: any) => console.log('next', value),
      error: (error: any) => console.log('error', error),
      complete: () => console.log('completed')
  };
}