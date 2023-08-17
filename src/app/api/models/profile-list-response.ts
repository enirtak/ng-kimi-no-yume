/* tslint:disable */
import { PersonDTO } from './person-dto';
export interface ProfileListResponse {
  errorMessage?: string;
  isSuccess?: boolean;
  persons?: Array<PersonDTO>;
}
