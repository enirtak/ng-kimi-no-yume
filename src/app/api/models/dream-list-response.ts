/* tslint:disable */
import { DreamDictionaryDTO } from './dream-dictionary-dto';
export interface DreamListResponse {
  dictionaryList?: Array<DreamDictionaryDTO>;
  errorMessage?: string;
  isSuccess?: boolean;
}
