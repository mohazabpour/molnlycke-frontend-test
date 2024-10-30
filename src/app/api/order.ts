export interface Order {
  id: number;
  productCode: number;
  date: string;
  amount: number;
  quantity: number;
  "status": string;
}


export interface Result<T> {
  data: T | undefined;
  error?: string;
}
