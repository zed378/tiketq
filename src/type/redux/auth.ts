export interface authStore {
  user: user;
  token: string;
}

export type user = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  role: role;
  picture: string;
  verified: boolean;
};

export enum role {
  ADMIN = "ADMIN",
  AUTHENTICATED = "AUTHENTICATED",
  CLIENT = "CLIENT",
  CS = "CS",
  DEVELOPER = "DEVELOPER",
  DRIVER = "DRIVER",
  FINANCE = "FINANCE",
  GM = "GM",
  HR = "HR",
  OPERATIONAL = "OPERATIONAL",
  PUBLIC = "PUBLIC",
  MARKETING = "MARKETING",
  RESELLER = "RESELLER",
  SELLER = "SELLER",
  SUPERADMIN = "SUPERADMIN",
  SYSADMIN = "SYS",
  WAREHOUSE = "WAREHOUSE",
  WORKER = "WORKER",
}
