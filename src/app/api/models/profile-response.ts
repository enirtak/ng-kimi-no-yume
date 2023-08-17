/* tslint:disable */
import { PersonDTO } from './person-dto';
export interface ProfileResponse {
  errorMessage?: string;
  isSuccess?: boolean;
  person?: PersonDTO;
}
