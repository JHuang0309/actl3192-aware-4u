import React, { useState } from 'react';

const PageDrawdown = () => {
    const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipContent, setTooltipContent] = useState('');

    const handleTextSelection = (event) => {
        const selectedText = window.getSelection().toString().trim();

        if (selectedText === 'word') { // Match the specific word you want
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();

        // Position the tooltip near the selected word
        setTooltipPosition({
            top: rect.top + 30, // Adjust the offset as needed
            left: rect.left + rect.width / 2 - 50, // Adjust to center tooltip
        });

        setTooltipContent('This is the tooltip content!');
        setShowTooltip(true);
        } else {
        setShowTooltip(false);
        }
    };

    const handleClickOutside = (event) => {
        if (event.target.id !== 'text' && event.target.id !== 'tooltip') {
        setShowTooltip(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener('mouseup', handleTextSelection);
        document.addEventListener('click', handleClickOutside);

        return () => {
        document.removeEventListener('mouseup', handleTextSelection);
        document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative">
        <p id="text" className="text-lg">
            This is a sample text where <span className="highlight">word</span> is selected to show a tooltip.
        </p>

        {/* Tooltip */}
        {showTooltip && (
            <div
            id="tooltip"
            className="absolute bg-gray-800 text-white text-sm rounded py-1 px-2 shadow-lg transition-opacity opacity-100"
            style={{
                top: `${tooltipPosition.top}px`,
                left: `${tooltipPosition.left}px`,
            }}
            >
            {tooltipContent}
            </div>
        )}
        </div>
    );
};  

export default PageDrawdown;