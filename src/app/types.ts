// src/app/types.ts
export interface Event {
    id?: string;
    title: string;
    startDate: string;
    endDate: string;
    description: string;
    location: string;
    imageUrl: string;
    frenchNote: string;
}

export interface SchoolLife {
    id?: string; // Optional unique identifier
    title: string; // Title of the school life entry
    description: string; // Description text
    imageUrl: string; // URL to the entry's image
    link: string; // Navigation link for the entry
}