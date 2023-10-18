export interface Meal {
  title: string;
  ingredients: string[];
  imageUrl: string;
  altText: string;
  type: 'Rossa' | 'Bianca' | 'Focaccia';
}
