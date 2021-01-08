export interface Book {
  id: number;
  name: string;
  isbn: string;
  image: File;
  language: 'en' | 'es';
  publishedDate: Date;
  publisher: string;
  numberPages: number;
  license?: string;
  summary: string;
}
