/* tslint:disable */
import { AddressDTO } from './address-dto';
import { EmployerDTO } from './employer-dto';
import { ProjectsDTO } from './projects-dto';
import { SkillsDTO } from './skills-dto';
export interface PersonDTO {
  aboutMe?: string;
  addresses?: Array<AddressDTO>;
  emailAddress?: string;
  employers?: Array<EmployerDTO>;
  firstName?: string;
  gitHub?: string;
  id?: number;
  isActive?: boolean;
  lastName?: string;
  linkedIn?: string;
  other?: string;
  phoneNumber?: string;
  projects?: Array<ProjectsDTO>;
  skills?: Array<SkillsDTO>;
  websiteUrl?: string;
}
