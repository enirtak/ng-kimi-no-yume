/* tslint:disable */
import { DreamDictionaryDTO } from './dream-dictionary-dto';
export interface DreamItemResponse {
  dreamItem?: DreamDictionaryDTO;
  errorMessage?: string;
  isSuccess?: boolean;
}
