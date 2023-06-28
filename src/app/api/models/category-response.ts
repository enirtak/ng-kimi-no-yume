/* tslint:disable */
import { DreamCategoryDTO } from './dream-category-dto';
export interface CategoryResponse {
  categories?: Array<DreamCategoryDTO>;
  errorMessage?: string;
  isSuccess?: boolean;
}
