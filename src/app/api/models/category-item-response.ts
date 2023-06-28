/* tslint:disable */
import { DreamCategoryDTO } from './dream-category-dto';
export interface CategoryItemResponse {
  category?: DreamCategoryDTO;
  errorMessage?: string;
  isSuccess?: boolean;
}
