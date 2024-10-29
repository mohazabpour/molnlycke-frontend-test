export interface News {
  id: number;
  title: string;
  description:string;
  category:string;
  date:string;
  updated:string;
  url:string;
}

export interface Result<T> {
  data: T | undefined;
  error?: string;
}
