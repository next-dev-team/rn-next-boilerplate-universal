export interface Schema {
  name: string;
  project: string;
  directory?: string;
  export?: boolean;
  pascalCaseFiles?: boolean;
  pascalCaseDirectory?: boolean;
  flat?: boolean;
}
