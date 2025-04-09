import React from 'react'
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <div className='app-container flex'>
            <button
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Go back"
                onClick={() => window.history.back()}
            >
                <ArrowLeft size={24} />
            </button>

            <button
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Go forward"
                onClick={() => window.history.forward()}
            >
                <ArrowRight size={24} /> {/* Используем иконку стрелки вправо */}
            </button>
        </div>
    )
}

export default Footer