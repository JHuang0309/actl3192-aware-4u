import { useEffect, useState } from 'react';
const Tooltip = ({tooltipPosition, dictEntry }) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div
            id="tooltip"
            className={`fixed shadow-md right-4 bg-white text-white rounded-lg shadow-lg p-4 sm:w-[500px] w-[400px] z-50 opacity-100 
                transition-all transform ${isVisible ? 'translate-x-0' : 'translate-x-full'} `}
            style={{
                top: `${tooltipPosition.top}px`,
            }}
        >
            <div>
                <div className='flex justify-between border-b border-gray pb-2'>
                    <h3 className='text-sm font-semibold text-gray-900'>Aware4U's Retirement Dictionary</h3>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="text-gray-500 hover:text-gray-900 transition-all"
                    >
                        &times;
                    </button>
                </div>
                <p className='text-xl text-gray-700 py-4'>{dictEntry.word}</p>
                <p className='text-sm text-gray-700'><span className='font-bold italic'>{dictEntry.type}. </span>{dictEntry.definition}</p>
                <p className='text-sm font-bold text-gray-700 my-2'>Example</p>
                <p className='text-sm text-gray-700'>{dictEntry.example}</p>
            </div>
            
        </div>
    );
};

export default Tooltip;