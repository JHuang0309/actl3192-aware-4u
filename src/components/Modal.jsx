import { useEffect, useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { useNavigate } from 'react-router-dom';

const Modal = ({ selection, onClose }) => {
    const navigate = useNavigate();

    const [portfolioSelection, setPortfolioSelection] = useState('');

    useEffect(() => {
        // You've selected...
        if (selection === 'conservative') {
            setPortfolioSelection(' The Conservative Balanced Portfolio option');
        } else if (selection === 'balanced') {
            setPortfolioSelection(' The Balanced Portfolio option');
        } else if (selection === 'growth') {
            setPortfolioSelection(' The Growth Portfolio option');
        } else {
            setPortfolioSelection('to chooose your own investments');
        }
    }, [selection])

    const handleCancel = () => {
        onClose();
    };

    const handleContinue = () => {
        onClose();
        navigate('/drawdown-payment');
    }

    return (
        <>
            <Dialog open={true} onClose={onClose} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <DialogTitle as="h3" className="text-base font-semibold text-gray-900 mb-6 text-lg">
                                    Confirm Investment Option
                                </DialogTitle>
                                <div className="mt-2 mb-4">
                                    <p className="text-base text-gray-700 mb-2">
                                        You've selected <span className='font-semibold'>{portfolioSelection}</span>.
                                    </p>
                                    <p className="text-base text-gray-700 mb-2">
                                        Before confirming, please ensure you’ve considered the following:
                                    </p>
                                    <p className="text-base text-gray-700 mb-2">
                                        <ol>
                                            <li>1. How long you’re investing for.</li>
                                            <li>2. How hands-on you want to be when managing your super.</li>
                                            <li>3. How much investment risk you're comfortable with.</li>
                                        </ol>
                                    </p>
                                    <a href='https://www.australiansuper.com/investments/choosing-the-right-option' target="_blank" className="text-base underline text-[#F61563]">
                                        Learn more
                                    </a>
                                    <p className="text-base text-gray-700 mt-2">
                                        Are you sure you want to proceed with this as your investment choice?
                                    </p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                            type="button"
                            onClick={() => handleContinue()}
                            className="inline-flex w-full justify-center rounded-md bg-[#F61563] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#F61563]/50 sm:ml-3 sm:w-auto"
                        >
                            Confirm
                        </button>
                        <button
                            type="button"
                            data-autofocus
                            onClick={() => handleCancel()}
                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        >
                            Cancel
                        </button>
                        </div>
                    </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    );
};

export default Modal;