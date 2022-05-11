import { CommonType } from "./pagination";

export interface TeamMember {
  personSid: string;
  companySid?: string | null;
  email: string;
  firstName: string;
  lastName?: string | null;
  initials: string;
  phone?: string | null;
  roleType: string;
  staffType?: string | null;
  salutation?: CommonType | null;
  globalHourlyRate?: number | null;
  active: boolean;
  autoAssignNewCase?: boolean;
  lastLogin?: string | null;
}
