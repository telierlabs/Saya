import React, { useState, useEffect } from 'react';
import { Header, Sidebar, Footer, Layout } from './components/Layout';
import { Movie, PageView } from './types';
import { HERO_MOVIE, TOP_MOVIES, FAQS } from './constants';
import { auth, loginWithGoogle, logoutUser, onAuthStateChanged } from './services/firebase';
import { User } from 'firebase/auth';

const App: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [currentPage, setCurrentPage] = useState<PageView>('home');
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    return (
        <Layout currentPage={currentPage}>
            <div className="space-y-12">
                {/* Hero Section */}
                <section className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-red-900/20">
                    <img src={HERO_MOVIE.thumbnailUrl} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    <div className="relative p-10 flex flex-col justify-end h-full">
                        <span className="bg-red-600 w-fit px-3 py-1 rounded text-xs font-black uppercase tracking-widest mb-4">Original AI</span>
                        <h1 className="text-6xl font-black uppercase italic tracking-tighter leading-none">{HERO_MOVIE.title}</h1>
                        <p className="mt-4 max-w-xl text-slate-300 text-lg leading-relaxed">{HERO_MOVIE.description}</p>
                        <div className="mt-8 flex gap-4">
                            <button className="bg-white text-black px-10 py-4 rounded-full font-black uppercase text-sm hover:bg-red-600 hover:text-white transition">Tonton Sekarang</button>
                            <button className="bg-slate-800/80 backdrop-blur text-white px-10 py-4 rounded-full font-black uppercase text-sm border border-slate-700">Detail</button>
                        </div>
                    </div>
                </section>

                {/* Movie Grid */}
                <section>
                    <h2 className="text-2xl font-black uppercase italic tracking-widest text-red-600 mb-8 px-2 border-l-4 border-red-600">Trending Sekarang</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {TOP_MOVIES.map((movie) => (
                            <div key={movie.id} className="group cursor-pointer">
                                <div className="relative aspect-[2/3] rounded-xl overflow-hidden border border-slate-800 group-hover:border-red-600 transition duration-500 bg-slate-900">
                                    <img src={movie.thumbnailUrl} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition duration-500" />
                                </div>
                                <h3 className="mt-4 font-bold text-sm uppercase truncate tracking-tight">{movie.title}</h3>
                                <p className="text-[10px] font-bold text-slate-500 uppercase">{movie.genre}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default App;
