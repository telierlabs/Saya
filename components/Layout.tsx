import React, { useState } from 'react';
import { PageView } from '../types';

export const Header: React.FC<{ onNavigate: (page: PageView) => void; toggleSidebar: () => void }> = ({ onNavigate, toggleSidebar }) => (
    <header className="bg-black/80 backdrop-blur-xl border-b border-slate-900 sticky top-0 z-50 h-16 flex items-center px-4 justify-between">
        <div className="flex items-center gap-4">
            <button onClick={toggleSidebar} className="p-2 hover:bg-slate-900 rounded-lg lg:hidden">☰</button>
            <h1 className="text-2xl font-black text-red-600 italic tracking-tighter">VYNIX</h1>
        </div>
        <button onClick={() => onNavigate('subscription')} className="bg-red-600 px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg shadow-red-900/40">Premium</button>
    </header>
);

export const Sidebar: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => (
    <div className={`fixed inset-0 z-[60] transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
        <div className="relative w-72 h-full bg-slate-950 border-r border-slate-900 p-6">
            <h2 className="text-xl font-black text-red-600 mb-10">MENU</h2>
            <nav className="space-y-6">
                <a href="#" className="block text-lg font-bold hover:text-red-600 transition">Beranda</a>
                <a href="#" className="block text-lg font-bold hover:text-red-600 transition">Film AI</a>
                <a href="#" className="block text-lg font-bold hover:text-red-600 transition">Langganan</a>
                <a href="#" className="block text-lg font-bold hover:text-red-600 transition text-red-500 mt-10">Keluar</a>
            </nav>
        </div>
    </div>
);

export const Footer: React.FC = () => (
    <footer className="border-t border-slate-900 py-12 text-center mt-20">
        <p className="text-slate-600 font-bold text-sm tracking-widest uppercase italic">© 2025 VYNIX - Semua Hak Dilindungi</p>
    </footer>
);

export const Layout: React.FC<{ children: React.ReactNode; currentPage: PageView }> = ({ children, currentPage }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="min-h-screen bg-black">
            <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
            <Header onNavigate={() => {}} toggleSidebar={() => setSidebarOpen(true)} />
            <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>
            <Footer />
        </div>
    );
};
