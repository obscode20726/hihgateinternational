// types/schoolLife.ts
export interface SchoolLifeEntry {
    id: string;
    title: string;
    description: string;
    link: string;
    imageUrl: string;
  }
  
  export type EntryFormErrors = Partial<Record<keyof SchoolLifeEntry, string>>;
  