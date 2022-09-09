export enum CompanyCode {
  RBC = "rbc",
  ICUBE = "icube",
  WATTPAD = "wattpad",
  UOFT = "uoft",
}

export type Project = {
  name: string;
  techStack: string[];
  desc: string;
  link: string;
  isPrivate: boolean;
};
