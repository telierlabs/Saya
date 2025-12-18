import { Movie, FAQItem } from './types';

export const HERO_MOVIE: Movie = {
    id: 0,
    title: "VYNIX - AI REBIRTH",
    genre: "Sci-Fi / Action",
    description: "Ketika kecerdasan buatan mengambil alih kendali dunia, satu-satunya harapan manusia adalah kembali ke asal mula mereka.",
    thumbnailUrl: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=1200"
};

export const TOP_MOVIES: Movie[] = [
    { id: 1, title: "Neon Shadow", genre: "Action", description: "Mengejar bayangan di kota neon.", thumbnailUrl: "https://via.placeholder.com/300x450" },
    { id: 2, title: "Silicon Mind", genre: "Thriller", description: "Otak manusia dalam mesin.", thumbnailUrl: "https://via.placeholder.com/300x450" },
    { id: 3, title: "The Last Code", genre: "Mystery", description: "Kode terakhir umat manusia.", thumbnailUrl: "https://via.placeholder.com/300x450" },
    { id: 4, title: "Vynix Origins", genre: "Documentary", description: "Sejarah berdirinya Vynix.", thumbnailUrl: "https://via.placeholder.com/300x450" },
    { id: 5, title: "Dark Algorithm", genre: "Horror", description: "Algoritma pemanggil setan.", thumbnailUrl: "https://via.placeholder.com/300x450" },
    { id: 6, title: "Cyber Justice", genre: "Crime", description: "Keadilan di dunia digital.", thumbnailUrl: "https://via.placeholder.com/300x450" }
];

export const FAQS: FAQItem[] = [
    { question: "Apa itu Vynix?", answer: "Platform streaming berbasis AI tercanggih tahun 2025." },
    { question: "Apakah bisa nonton gratis?", answer: "Ada beberapa judul gratis, namun akun Premium memberikan akses penuh." }
];
