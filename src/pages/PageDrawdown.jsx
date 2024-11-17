import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  UserCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import logo from '../assets/logo.svg';
import personas from '../assets/personasTool.png';
import simulators from '../assets/simulators.png';
import PaymentModal from '../components/PaymentModal';
import { Transition } from "@headlessui/react";

const PageDrawdown = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();
    const products = [
        { name: 'Personas', description: 'Building emotional connections', href: '/not-found', icon: UserCircleIcon },
        { name: 'Visualisations', description: 'Drawdown simulations and calculators', href: '/not-found', icon: ChartPieIcon },
        { name: 'Educational Tools', description: 'Enhancing information architecture', href: '/not-found', icon: CursorArrowRaysIcon },
    ];
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipContent, setTooltipContent] = useState('');

    const handleTextSelection = (event) => {
        const selectedText = window.getSelection().toString().trim().toLowerCase();
        console.log(selectedText);

        if (selectedText === 'indexation') { // Match the specific word you want
            const selection = window.getSelection();
            const range = selection.getRangeAt(0);
            const rect = range.getBoundingClientRect();

            // Position the tooltip near the selected word
            setTooltipPosition({
                top: rect.top, // Adjust the offset as needed
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

    useEffect(() => {
        document.addEventListener('mouseup', handleTextSelection);
        document.addEventListener('click', handleClickOutside);

        return () => {
        document.removeEventListener('mouseup', handleTextSelection);
        document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => {
        setShowModal(false);
    }

    const [paymentOption, setPaymentOption] = useState('Minimum Amount');

    const OptionDesc = () => {
        if (paymentOption === 'Minimum Amount') {
            return (
                <div className="space-y-2">
                    <p className="text-sm text-gray-600">The minimum drawdown amount is calculated as a percentage of your account balance, based on your age. The minimum drawdown amount is calculated as a percentage of your account balance, based on your age. These percentages are set by government regulations to ensure a sustainable withdrawal rate, preserving your retirement savings for as long as possible.</p>
                    <p className="text-sm text-gray-600">This option provides a basic income stream to cover essential expenses, making it suitable for those who want to prioritize the longevity of their superannuation balance.</p>
                    <p className="text-sm text-gray-600">Retirees seeking to maintain their account balance over the long term or those with other sources of income.</p>
                </div>
            );
        } else if (paymentOption === 'Specific Amount with Indexation') {
            return (
                <div className="space-y-2">
                    <p className="text-sm text-gray-600">A specific drawdown amount allows you to choose a fixed dollar amount to receive regularly. This amount may exceed the government-mandated minimum but must stay within the limits of your account balance.</p>
                    <p className="text-sm text-gray-600">Provides predictable, tailored income to suit your lifestyle needs, giving you greater control over your finances.</p>
                    <p className="text-sm text-gray-600">Retirees who want more flexibility and control to meet planned expenses, such as travel or home renovations, without being tied to regulatory minimums.</p>
                </div>
            );
        } else {
            return (
                <div className="space-y-2">
                    <p className="text-sm text-gray-600">This option builds on the specific amount by automatically adjusting your payments annually in line with inflation (e.g., Consumer Price Index). This ensures that your income retains its purchasing power over time.</p>
                    <p className="text-sm text-gray-600">Provides a stable, inflation-adjusted income to maintain your standard of living throughout retirement.</p>
                    <p className="text-sm text-gray-600">Retirees concerned about the long-term impact of inflation on their purchasing power and those seeking peace of mind about future financial stability.</p>
                </div>
            );
        }
    };

    const [showTransition, setShowTransition] = useState(false);
    useEffect(() => {
        setShowTransition(true);
    }, [paymentOption]);

    const [amount, setAmount] = useState(0);
    const [frequency, setFrequency] = useState('Monthly');
    const nextDate = new Date();
    nextDate.setMonth(nextDate.getMonth() + 1);
    const next = nextDate.toLocaleDateString('en-AU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    const [date, setDate] = useState(next);

    const handleChangeDate = (input) => {
        let inputDate = new Date(input);
        const currentDate = new Date();

        // Check if the input date is before the current date
        if (inputDate < currentDate) {
           setDate(next);
           return;
        }
        const formattedDate = new Date(input).toLocaleDateString('en-AU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
        setDate(formattedDate);
    };

    const callouts = [
        {
          name: 'Retirement Personas',
          description: 'Analyse your current projected lifestyle based on your drawdown rate and superannuation balance (takes less than 1 minute).',
          imageSrc: personas,
          href: '/not-found',
        },
        {
          name: 'Lifetime Income Simulation',
          description: "Visualise your retirement income to estimate the amount that's right for you (takes less than 5 minutes).",
          imageSrc: simulators,
          href: '/not-found',
        },
      ]

    return (
        <>
            {showModal &&
                <PaymentModal onClose={handleCloseModal} selection={paymentOption} amount={amount} frequency={frequency} date={date}/>
            }
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
            <header className="bg-white">
                <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <img
                            alt="logo"
                            src={logo}
                            className="h-8 w-auto"
                            />
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                        <Popover className="relative">
                            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                                Our Solutions
                                <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                            </PopoverButton>

                            <PopoverPanel
                                transition
                                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <div className="p-4">
                                    {products.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                                    >
                                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-[#F61563]" />
                                        </div>
                                        <div className="flex-auto">
                                        <Link to={item.href} className="block font-semibold text-gray-900">
                                            {item.name}
                                            <span className="absolute inset-0" />
                                        </Link>
                                        <p className="mt-1 text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                            </PopoverPanel>
                        </Popover>
                        <Link to="/" className="text-sm/6 font-semibold text-gray-900">
                            The Challenge
                        </Link>
                        <Link to="/not-found" className="text-sm/6 font-semibold text-gray-900">
                            Publications
                        </Link>
                    </PopoverGroup>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Link to="/" className="text-sm/6 font-semibold text-gray-900">
                            Exit back to home <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </nav>
                {/* Mobile (small screen) Menu */}
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-10" />
                        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <img
                                alt=""
                                src={logo}
                                className="h-8 w-auto"
                                />
                            </a>
                            <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                            <Disclosure as="div" className="-mx-3">
                                <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                    Our Solutions
                                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                                </DisclosureButton>
                                <DisclosurePanel className="mt-2 space-y-2">
                                {[...products].map((item) => (
                                    <DisclosureButton
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </DisclosureButton>
                                ))}
                                </DisclosurePanel>
                            </Disclosure>
                            <a
                            href="#The-Challenge"
                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                            >
                            The Challenge
                            </a>
                            <a
                            href="#"
                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                            >
                            Publications
                            </a>
                        </div>
                        <div className="py-6">
                            <a
                            href="#"
                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                            >
                            Set up your account
                            </a>
                        </div>
                        </div>
                    </div>
                    </DialogPanel>
                </Dialog>
            </header>
            <section className="lg:flex lg:items-center lg:justify-between px-10 lg:px-10 mx-6 lg:mx-10 mb-8">
                <div className="min-w-0 flex-1">
                    <h2 className="text-2xl/7 font-semibold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                        Set up a retirement account
                    </h2>
                    <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6 text-gray-500 pt-2">
                        <nav className="flex text-gray-500 pt-2" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 sm:space-x-3">
                            <li>
                            <a href="/" className="inline-flex items-center text-gray-500 hover:text-gray-700">
                                Home
                            </a>
                            </li>
                            <li>
                            <div className="flex items-center">
                                <svg
                                className="w-5 h-5 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L11.586 9 7.293 4.707a1 1 0 111.414-1.414l4.707 4.707a1 1 0 010 1.414l-4.707 4.707a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                                </svg>
                                <a
                                    href="/investment-option"
                                    className="ml-1 text-gray-500 hover:text-gray-700 sm:ml-2"
                                >
                                    Account Setup
                                </a>
                            </div>
                            </li>
                            <li aria-current="page">
                            <div className="flex items-center">
                                <svg
                                className="w-5 h-5 text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L11.586 9 7.293 4.707a1 1 0 111.414-1.414l4.707 4.707a1 1 0 010 1.414l-4.707 4.707a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                                </svg>
                                <span className="ml-1 text-gray-700 font-semibold sm:ml-2">
                                    Step 5 : Payment Option
                                </span>
                            </div>
                            </li>
                        </ol>
                        </nav>
                    </div>
                </div>
            </section>
            <section className="flex px-8 lg:px-10 mx-6 lg:mx-10 flex-col">
                <div className='text-md/7 '>
                    <p className='text-lg/6 mb-4 font-semibold text-gray-900'>Payment Options</p>
                    <p className='mb-4 font-semibold text-gray-800'>Select your income payment arrangements</p>
                    <p className='text-gray-600'>It's now time to decide how often and how much you'd like to recieve from your new Retirement Account.</p>
                </div>
                <div className='mt-8'>
                    <fieldset>
                    <legend className="mb-2 font-semibold text-gray-800">How much would you like to receive each payment?</legend>
                        <div className="mt-2 space-y-4">
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="minimum"
                                    name="payment-option"
                                    type="radio"
                                    className="size-4 border-gray-300 text-[#F61563] focus:ring-[#F61563]"
                                    defaultChecked
                                    onClick={() => setPaymentOption('Minimum Amount')}
                                />
                                <label htmlFor="minimum" className="block text-sm/6 font-medium text-gray-900">
                                    Minimum Amount
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="specific"
                                    name="payment-option"
                                    type="radio"
                                    className="size-4 border-gray-300 text-[#F61563] focus:ring-[#F61563]"
                                    onClick={() => setPaymentOption('Specific Amount')}
                                />
                                <label htmlFor="specific" className="block text-sm/6 font-medium text-gray-900">
                                    Specific amount
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="with-indexation"
                                    name="payment-option"
                                    type="radio"
                                    className="size-4 border-gray-300 text-[#F61563] focus:ring-[#F61563]"
                                    onClick={() => setPaymentOption('Specific Amount with Indexation')}
                                />
                                <label htmlFor="with-indexation" className="block text-sm/6 font-medium text-gray-900">
                                    Specific amount with indexation
                                </label>
                            </div>
                        </div>
                    </fieldset>
                    <Transition
                        appear={true}
                        show={showTransition}
                        enter="transition-opacity duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="mx-auto max-w-2xl px-4 pb-8 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-8 lg:pt-16">
                            <div className="lg:col-span-2">
                                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{paymentOption}</h1>
                            </div>

                            {/* Options */}
                            <div className="mt-4 lg:row-span-3 lg:mt-0 lg:border-l lg:pl-8 lg:border-gray-200  flex flex-col justify-center h-full">
                                {!(paymentOption === 'Minimum Amount') && 
                                    <div>
                                        <label htmlFor="amount" className="block text-sm/6 font-medium text-gray-900">
                                            Amount
                                        </label>
                                        <div className="relative mb-4 rounded-md shadow-sm">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <span className="text-gray-500 sm:text-sm">$</span>
                                            </div>
                                            <input
                                                id="amount"
                                                name="amount"
                                                type="text"
                                                placeholder="0.00"
                                                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#F61563] sm:max-w-xs sm:text-sm/6 mt-2"
                                                onChange={(e) => setAmount(e.target.value)}
                                            />
                                        </div>
                                    </div>  
                                }
                                <div className="sm:col-span-3 mb-4">
                                    <label htmlFor="payment-frequency" className="block text-sm/6 font-medium text-gray-900">
                                        Payment Frequency
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="payment-frequency"
                                            name="payment-frequency"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#F61563] sm:max-w-xs sm:text-sm/6"
                                            onChange={(e) => setFrequency(e.target.value)}
                                        >
                                            <option>Monthly</option>
                                            <option>Quarterly</option>
                                            <option>Annually</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="start-date" className="block text-sm/6 font-medium text-gray-900">
                                        Start Date
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="start-date"
                                            name="start-date"
                                            type='date'
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#F61563] sm:max-w-xs sm:text-sm/6"
                                            onChange={(e) => handleChangeDate(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:pb-16 lg:pt-6">
                                {/* Description and details */}
                                <div className="space-y-6">
                                    <h2 className="text-sm font-medium text-gray-900">Description</h2>
                                    <OptionDesc />
                                </div>

                                <div className="mt-10">
                                    <div className="mt-2 space-y-2">
                                        <p className="text-sm text-gray-600">Your regular income payments will be taken from your account according to the Aware4U Super default option.</p>
                                        <p className="text-sm text-gray-600">You can change this draw-down order, once your account is set up, on the change investment options page.</p>
                                        <p className="text-sm text-gray-600">For more information on Aware4U's default drawdown approach please refer to the <a className='underline text-[#F61563]'>Aware4U Retirement Income PDS</a>.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>
                <div className='text-md/7 text-gray-600 mt-4'>
                    <p className='mb-4'>For your first payment, you will need to complete this application 5 business days before the 13th of the month to meet processing times.</p>
                </div>
                <div className='text-md/7 mb-4 mt-8'>
                    <p className='mb-2 font-semibold text-gray-800'>View our selection of tools</p>
                    <p className='text-gray-600'>Run our Aware4U simulators to ensure your selections are right for you.</p>
                </div>
                <div className="border">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl py-16 sm:py-8 lg:max-w-none lg:py-8">
                            <h2 className="text-1xl font-bold text-gray-900">Aware4U Tool Suite</h2>
                            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
                                {callouts.map((callout) => (
                                <div key={callout.name} className="group relative">
                                    <img
                                    alt={callout.imageAlt}
                                    src={callout.imageSrc}
                                    className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-h-40 max-sm:h-40 sm:aspect-[2/1] lg:aspect-square"
                                    />
                                    <h3 className="mt-6 text-base font-semibold text-gray-900">
                                    <Link to={callout.href}>
                                        <span className="absolute inset-0" />
                                        {callout.name}
                                    </Link>
                                    </h3>
                                    <p className="text-sm text-gray-700">{callout.description}</p>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-t border-gray-200 mt-8 pt-8'>
                    <button 
                        className='rounded-md px-3.5 py-2.5 text-sm font-semibold bg-white text-[#F61563] border border-[#F61563]/40 hover:bg-[#F61563]/10 focus:ring-1 focus:ring-[#F61563] mr-4'
                        onClick={() => {navigate('/investment-option')}}
                    >Back</button>
                    <button 
                        className='rounded-md px-3.5 py-2.5 text-sm font-semibold bg-[#F61563] text-white hover:bg-[#F61563]/90'
                        onClick={() => setShowModal(true)}
                    >Continue</button>
                </div>
            </section>
            <footer className="bg-white text-black py-10">
                <div className="container mx-auto text-center">
                    <p className="text-sm">&copy; 2024 Aware4U. All rights reserved.</p>
                    <div className="mt-4">
                        <a href="#about" className="text-gray-400 hover:text-[#F61563] mx-2">About</a>
                        <a href="#services" className="text-gray-400 hover:text-[#F61563] mx-2">Services</a>
                        <a href="#contact" className="text-gray-400 hover:text-[#F61563] mx-2">Contact</a>
                    </div>
                </div>
            </footer>
        </>
        
    );
};  

export default PageDrawdown;