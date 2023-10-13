
export interface DbInformation {
    name:       string;
    columns:    string[];
    schema:     string;
}


export interface CopyTable {
  position: number,
  name: string,
  weight: number,
  symbol: string
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
