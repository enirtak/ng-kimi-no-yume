/* tslint:disable */
import { DreamDictionaryDTO } from './dream-dictionary-dto';
export interface DictionaryResponse {
  dictionaryList?: Array<DreamDictionaryDTO>;
  errorMessage?: string;
  isSuccess?: boolean;
}
