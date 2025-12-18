export type PageView = 'home' | 'profile' | 'subscription';

export interface Movie {
    id: number;
    title: string;
    genre: string;
    description: string;
    thumbnailUrl: string;
    videoUrl?: string;
}

export interface FAQItem {
    question: string;
    answer: string;
}
