import { useEffect, useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { useNavigate } from 'react-router-dom';

const formatAmount = (amount) => {
    // Convert to a number if it's a string and parse it to a float
    const parsedAmount = parseFloat(amount);

    if (isNaN(parsedAmount)) {
        return '$0.00'; // Return a default value if the amount is not valid
    }

    // Format the amount with commas and fixed to two decimal places
    return `$${parsedAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

const PaymentModal = ({ selection, onClose, amount, frequency, date }) => {
    const navigate = useNavigate();

    const ModalText = () => {
        if (selection === 'Minimum Amount') {
            return (
                <p className="text-base text-gray-700 mb-2">
                    You've selected to be paid the <span className='font-semibold'>Minimum Amount</span>, with payments starting on {date}.
                </p>
            );
        } else if (selection === 'Specific Amount') {
            return (
                <p className="text-base text-gray-700 mb-2">
                    You've selected to be paid a <span className='font-semibold'>Specific Amount of {formatAmount(amount)}</span> paid <span className='font-semibold'>{frequency}</span> with payments starting on {date}.
                </p>
            );
        } else if (selection === 'Specific Amount with Indexation') {
            return (
                <p className="text-base text-gray-700 mb-2">
                    You've selected to be paid a <span className='font-semibold'>Specific Amount of {formatAmount(amount)}</span> with indexation paid <span className='font-semibold'>{frequency}</span> with payments starting on {date}.
                </p>
            );
        }
    };

    const handleCancel = () => {
        onClose();
    };

    const handleContinue = () => {
        onClose();
        navigate('/');
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
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <DialogTitle as="h3" className="text-base font-semibold text-gray-900 mb-6 text-lg">
                                        Confirm Payment Arrangement
                                    </DialogTitle>
                                    <div className="mt-2 mb-4">
                                        <ModalText />
                                        <p className="text-base text-gray-700 mb-2">
                                            Before confirming, please ensure you’ve considered the following:
                                        </p>
                                        <div className="text-sm text-gray-600 mb-2">
                                            <ol className='pl-5 list-decimal'>
                                                <li>How long you plan to draw from your retirement funds.</li>
                                                <li>How comfortable you are with the amount of flexibility in your retirement payments.</li>
                                                <li>What income level do you require to live your desired retirement lifestyle.</li>
                                            </ol>
                                        </div>
                                        <a href='https://aware.com.au/employer/payment/payment-options' target="_blank" className="text-sm underline text-[#F61563]">
                                            Learn more
                                        </a>
                                        <p className="text-sm text-gray-500 my-2">
                                            We understand your circumstances may change over time, so you can change payment options wherever it suits you.
                                        </p>
                                        <p className="text-base text-gray-700 mt-2">
                                            Are you sure you want to proceed with this as your payment arrangement?
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

export default PaymentModal;