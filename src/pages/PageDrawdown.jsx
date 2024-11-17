import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { 
    DialogBackdrop,
    Dialog,
    DialogTitle,
    TransitionChild,
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
import Tooltip from '../components/Tooltip';
import Dictionary from '../components/Dictionary';

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

    const dictionary = [
        {
            word: 'indexation',
            type: 'noun',
            definition: 'Indexation refers to the process of adjusting payments or benefits in line with inflation to maintain purchasing power over time.',
            example: `Imagine you receive $1,000 per month in superannuation payments. With inflation, prices rise over time, meaning that $1,000 won’t buy as much next year as it does today. Indexation adjusts your payment to keep up with these price increases. For example, if inflation is 3% over the year, your monthly payment would increase by 3% to $1,030, helping you maintain the same purchasing power.`
        },
        {
            word: 'fixed dollar amount',
            type: 'noun',
            definition: 'A fixed dollar amount refers to a predetermined and unchanging sum of money allocated or withdrawn, regardless of market conditions or account balances.',
            example: `If you decide to withdraw $2,000 every month from your retirement account, this amount remains the same regardless of how much money is in the account or how the market performs.`
        },
        {
            word: 'account balance',
            type: 'noun',
            definition: 'The total value of funds available in a financial account, including deposits, withdrawals, and earnings, at a specific point in time.',
            example: `After contributing $500 to your superannuation account this month and earning $50 in interest, your account balance is $10,550.`
        },
        {
            word: 'investment',
            type: 'noun',
            definition: 'The allocation of money into financial instruments, assets, or ventures with the expectation of generating income or capital appreciation.',
            example: `Investing $10,000 into a diversified portfolio of stocks and bonds could grow over time, providing additional funds for your retirement.`
        },
        {
            word: 'drawdown',
            type: 'noun',
            definition: 'Drawdown refers to the process of withdrawing funds from a retirement account or investment portfolio to cover expenses during retirement.',
            example: `After retiring, you might initiate a drawdown of $2,000 monthly from your retirement savings to cover living expenses.`
        },
        {
            word: 'regulatory',
            type: 'adjective',
            definition: 'Pertaining to laws, rules, and guidelines established by governing bodies to oversee and manage financial systems or practices.',
            example: `Superannuation funds must comply with regulatory requirements, such as setting a minimum drawdown amount for retirees each year.`
        },
        {
            word: 'retirement account',
            type: 'noun',
            definition: 'A financial account specifically designed to hold savings and investments intended for use during retirement, often with tax advantages.',
            example: `A superannuation fund in Australia is an example of a retirement account that allows individuals to save for retirement while benefiting from tax incentives and employer contributions.`
        },
        {
            word: 'payment arrangements',
            type: 'noun',
            definition: 'Payment arrangements refer to the agreed-upon plan between a service provider and an individual for making payments over time, typically involving specific amounts and schedules.',
            example: `For instance, if you owe $5,000 to a utility company, you might set up a payment arrangement to pay $500 per month over 10 months instead of paying the full amount upfront. This ensures your obligation is met without financial strain.`
        },
        {
            word: 'payment options',
            type: 'noun',
            definition: 'Payment options refer to the various methods or plans available for making payments, including lump sums, installments, or tailored payment schedules.',
            example: `In retirement planning, you might have payment options for receiving your superannuation benefits, such as choosing between monthly payments, a lump sum, or a combination of both, based on what suits your financial goals.`
        },
        {
            word: 'purchasing power',
            type: 'noun',
            definition: 'Purchasing power refers to the ability of money to buy goods and services. It decreases when prices rise (inflation) and increases when prices fall (deflation).',
            example: `For instance, if $100 could buy a basket of groceries last year but now the same basket costs $120, your purchasing power has decreased. In retirement, maintaining purchasing power is crucial to ensure your savings last as prices rise over time.`
        },
        {
            word: 'inflation',
            type: 'noun',
            definition: 'Inflation is the rate at which the general level of prices for goods and services rises over a period of time, reducing the purchasing power of money.',
            example: `If inflation is 3% per year, an item costing $100 this year will cost $103 next year. Over time, inflation can significantly impact the real value of retirement savings and income.`
        },
        {
            word: 'inflation-adjusted',
            type: 'adjective',
            definition: 'Inflation-adjusted refers to values or payments that are modified to reflect changes in the purchasing power of money due to inflation, ensuring they retain their real value over time.',
            example: `If a retirement pension starts at $20,000 per year and inflation is 2%, an inflation-adjusted payment for the next year would increase to $20,400 to maintain the same purchasing power.`
        },
        {
            word: 'draw-down order',
            type: 'noun',
            definition: 'Draw-down order refers to the sequence in which a retiree withdraws funds from different sources of savings or investments to maximize income, minimize taxes, and preserve wealth.',
            example: `A common draw-down order is to withdraw from taxable accounts first, followed by tax-deferred accounts like superannuation, and finally tax-free accounts like a Roth IRA. This strategy helps manage tax liabilities and extends the lifespan of retirement savings.`
        }
    ];

    const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
    const [showTooltip, setShowTooltip] = useState(false);
    const [highlight, setHighlight] = useState('');
    const [tooltipContent, setTooltipContent] = useState('');

    const handleTextSelection = () => {
        const selectedText = window.getSelection().toString().trim().toLowerCase();
        setHighlight(selectedText);
        const dictionaryIndex = dictionary.findIndex(item => item.word.toLowerCase() === selectedText);

        if (dictionaryIndex != -1) {
            setTooltipPosition({
                top: 100, 
            });
            setTooltipContent(dictionary[dictionaryIndex]);
            setShowTooltip(true);
        } else {
            setShowTooltip(false);
        }
    };

    const handleClickOutside = (event) => {
        if (event.target.id === 'tooltip') {
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
                    <p className="text-sm text-gray-600">The minimum <span className='hover:text-[#F61563] transition duration-300 ease-in-out'>drawdown</span> amount is calculated as a percentage of your <span className='hover:text-[#F61563] transition duration-300 ease-in-out'>account balance</span>, based on your age. The minimum drawdown amount is calculated as a percentage of your <span className='hover:text-[#F61563] transition duration-300 ease-in-out'>account balance</span>, based on your age. These percentages are set by government regulations to ensure a sustainable withdrawal rate, preserving your retirement savings for as long as possible.</p>
                    <p className="text-sm text-gray-600">This option provides a basic income stream to cover essential expenses, making it suitable for those who want to prioritise the longevity of their superannuation balance.</p>
                    <p className="text-sm text-gray-600">Retirees seeking to maintain their <span className='hover:text-[#F61563] transition duration-300 ease-in-out'>account balance</span> over the long term or those with other sources of income.</p>
                </div>
            );
        } else if (paymentOption === 'Specific Amount with Indexation') {
            return (
                <div className="space-y-2">
                    <p className="text-sm text-gray-600">A specific <span className='hover:text-[#F61563] transition duration-300 ease-in-out'>drawdown</span> amount allows you to choose a <span className='hover:text-[#F61563] transition duration-300 ease-in-out'>fixed dollar amount</span> to receive regularly. This amount may exceed the government-mandated minimum but must stay within the limits of your <span className='hover:text-[#F61563] transition duration-300 ease-in-out'>account balance</span>.</p>
                    <p className="text-sm text-gray-600">Provides predictable, tailored income to suit your lifestyle needs, giving you greater control over your finances.</p>
                    <p className="text-sm text-gray-600">Retirees who want more flexibility and control to meet planned expenses, such as travel or home renovations, without being tied to <span className='hover:text-[#F61563] transition duration-300 ease-in-out'>regulatory</span> minimums.</p>
                </div>
            );
        } else {
            return (
                <div className="space-y-2">
                    <p className="text-sm text-gray-600">This option builds on the specific amount by automatically adjusting your payments annually in line with <span className='hover:text-[#F61563] transition duration-300 ease-in-out'>inflation</span> (e.g., Consumer Price Index). This ensures that your income retains its <span className='hover:text-[#F61563] transition duration-300 ease-in-out'>purchasing power</span> over time.</p>
                    <p className="text-sm text-gray-600">Provides a stable, <span className='hover:text-[#F61563] transition duration-300 ease-in-out'>inflation-adjusted</span> income to maintain your standard of living throughout retirement.</p>
                    <p className="text-sm text-gray-600">Retirees concerned about the long-term impact of <span className='hover:text-[#F61563] transition duration-300 ease-in-out'>inflation</span> on their <span className='hover:text-[#F61563] transition duration-300 ease-in-out'>purchasing power</span> and those seeking peace of mind about future financial stability.</p>
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
      ];

      const [open, setOpen] = useState(true)

    return (
        <>
            {showModal &&
                <PaymentModal onClose={handleCloseModal} selection={paymentOption} amount={amount} frequency={frequency} date={date}/>
            }
            {showTooltip && (
                <Tooltip word={highlight} tooltipPosition={tooltipPosition} dictEntry={tooltipContent}/>
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
            <button
                onClick={() => setOpen(true)}
                className="fixed bottom-4 right-4 z-50 flex items-center justify-center w-12 h-12 bg-[#F61563] text-white rounded-full shadow-lg hover:bg-[#F61563]/70 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-[#F61563]"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
                    />
                </svg>
            </button>
            <Dialog open={open} onClose={setOpen} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
                />

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <DialogPanel
                        transition
                        className="pointer-events-auto relative w-screen max-w-md transform transition duration-400 ease-in-out data-[closed]:translate-x-full sm:duration-500"
                        >
                        <TransitionChild>
                            <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                            >
                                <span className="absolute -inset-2.5" />
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                            </div>
                        </TransitionChild>
                        <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                            <div className="px-4 sm:px-6">
                            <DialogTitle className="text-base font-semibold text-gray-900">Page Dictionary</DialogTitle>
                            </div>
                            <div className="relative flex-1 px-4 sm:px-6"><Dictionary /></div>
                        </div>
                        </DialogPanel>
                    </div>
                    </div>
                </div>
            </Dialog>
            <section className="lg:flex lg:items-center lg:justify-between px-10 lg:px-10 mx-6 lg:mx-10 mb-8">
                <div className="min-w-0 flex-1">
                    <h2 className="text-2xl/7 font-semibold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                        Set up a <span className='hover:text-[#F61563] transition duration-300 ease-in-out'>retirement account</span>
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
                    <p className='text-lg/6 mb-4 font-semibold text-gray-900'><span className='hover:text-[#F61563] transition duration-300 ease-in-out'>Payment Options</span></p>
                    <p className='mb-4 font-semibold text-gray-800'>Select your income <span className='hover:text-[#F61563] transition duration-300 ease-in-out'>payment arrangements</span></p>
                    <p className='text-gray-600'>It's now time to decide how often and how much you'd like to recieve from your new <span className='hover:text-[#F61563] transition duration-300 ease-in-out'>Retirement Account</span>.</p>
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
                                    Specific amount with <span className='hover:text-[#F61563] transition duration-300 ease-in-out'>indexation</span>
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
                                        <p className="text-sm text-gray-600">You can change this <span className='hover:text-[#F61563] transition duration-300 ease-in-out'>draw-down order</span>, once your account is set up, on the change <span className='hover:text-[#F61563] transition duration-300 ease-in-out'>investment</span> options page.</p>
                                        <p className="text-sm text-gray-600">For more information on Aware4U's default <span className='hover:text-[#F61563] transition duration-300 ease-in-out'>drawdown</span> approach please refer to the <a className='underline text-[#F61563]'>Aware4U Retirement Income PDS</a>.</p>
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