import React, { useState, useEffect } from 'react';
// Path ke folder components (pastikan di GitHub namanya 'components' huruf kecil)
import { Layout } from './components/Layout'; 
import { Movie, PageView } from './types';
import { HERO_MOVIE, TOP_MOVIES } from './constants';
// Path ke folder services (pastikan folder 'services' & file 'firebase.ts' kecil semua)
import { auth, onAuthStateChanged } from './services/firebase'; 
import { User } from 'firebase/auth';

const App: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [currentPage, setCurrentPage] = useState<PageView>('home');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    return (
        <Layout currentPage={currentPage}>
            <div className="space-y-12 bg-black text-white min-h-screen">
                {/* Hero Section */}
                <section className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                    <img src={HERO_MOVIE.thumbnailUrl} className="absolute inset-0 w-full h-full object-cover" alt="Hero" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="relative p-10 flex flex-col justify-end h-full">
                        <span className="bg-red-600 w-fit px-3 py-1 rounded text-xs font-black mb-4 uppercase">Original AI</span>
                        <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none">{HERO_MOVIE.title}</h1>
                        <p className="mt-4 max-w-xl text-slate-300 text-lg">{HERO_MOVIE.description}</p>
                        <div className="mt-8">
                            <button className="bg-white text-black px-10 py-4 rounded-full font-black uppercase text-sm hover:bg-red-600 hover:text-white transition">Tonton Sekarang</button>
                        </div>
                    </div>
                </section>

                {/* Movie Grid */}
                <section>
                    <h2 className="text-2xl font-black uppercase italic tracking-widest text-red-600 mb-8 border-l-4 border-red-600 px-2">Trending Sekarang</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {TOP_MOVIES.map((movie) => (
                            <div key={movie.id} className="group cursor-pointer">
                                <div className="relative aspect-[2/3] rounded-xl overflow-hidden border border-slate-800 bg-slate-900">
                                    <img src={movie.thumbnailUrl} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition duration-500" alt={movie.title} />
                                </div>
                                <h3 className="mt-4 font-bold text-sm uppercase truncate">{movie.title}</h3>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default App;
