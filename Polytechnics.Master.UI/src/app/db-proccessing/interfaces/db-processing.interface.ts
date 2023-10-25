
export interface DbInformation {
    name:       string;
    columns:    string[];
    schema:     string;
}



export interface StagingCustomerGuidDto {
  Guid: string
}

export interface StagingCustomerDto {
  Guid: string,
  OriginalDB: string,
  OriginalDBID: string,
  Username: string,
  FirstName: string,
  LastName: string,
  CURP: string,
  Passport: string,
  Email: string,
}


export interface StagingCustomers {
  guid: string,
  originalDB: string,
  originalDBID: string,
  username: string,
  firstName: string,
  lastName: string,
  curp: string,
  Passport: string,
  email: string,
}


export interface GuidList {
  guid: string
}

export interface CopyTable {
  OriginalDB: string,
  OriginalDBID: string,
  Username: string,
  Email: string,
  FirstName: string,
  LastName: string,
  CURP: string,
  Passport: string,

}


export interface StagingTable {
  position: number,
  name: string,
  weight: number,
  symbol: string
}


export interface FinalizedTable {
  position: number,
  name: string,
  weight: number,
  symbol: string
}
