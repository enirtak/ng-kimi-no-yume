/* tslint:disable */
import { WorkExperienceDTO } from './work-experience-dto';
export interface EmployerDTO {
  address1?: string;
  address2?: string;
  city?: string;
  companyName?: string;
  country?: string;
  endDate?: string;
  id?: number;
  isActive?: boolean;
  personId?: number;
  position?: string;
  salary?: number;
  startDate?: string;
  state?: string;
  workExps?: Array<WorkExperienceDTO>;
  zip?: string;
}
