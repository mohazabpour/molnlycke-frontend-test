export interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  category?: string;
  quantity?: number;
  inventoryStatus?: string;
  "label"?: string,
  image?: string;
  rating?: number;
}

export interface Result<T> {
  data: T | undefined;
  error?: string;
}
