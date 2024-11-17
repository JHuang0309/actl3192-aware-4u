import { useState } from 'react'
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
import Modal from '../components/Modal'

const PageInvest = () => {
    const navigate = useNavigate();
    const products = [
        { name: 'Personas', description: 'Building emotional connections', href: '#', icon: UserCircleIcon },
        { name: 'Visualisations', description: 'Drawdown simulations and calculators', href: '#', icon: ChartPieIcon },
        { name: 'Educational Tools', description: 'Enhancing information architecture', href: '#', icon: CursorArrowRaysIcon },
    ];

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const unSelectedButton = 'rounded-md w-full px-3.5 py-2.5 text-sm font-semibold bg-white text-[#F61563] border border-[#F61563]/40 hover:bg-[#F61563]/10 focus:ring-2 focus:ring-[#F61563]';
    const selectedButton = 'rounded-md w-full px-3.5 py-2.5 text-sm font-semibold bg-[#F61563] text-white';

    const [cbStyle, setCbStyle] = useState(selectedButton);
    const [bStyle, setBStyle] = useState(unSelectedButton);
    const [gStyle, setGStyle] = useState(unSelectedButton);
    const [cStyle, setCStyle] = useState(unSelectedButton);

    const selectedBorder = 'border border-[#F61563]';

    const [cbBorder, setCbBorder] = useState(selectedBorder);
    const [bBorder, setBBorder] = useState('');
    const [gBorder, setGBorder] = useState('');
    const [cBorder, setCBorder] = useState('');

    const [investment, setInvestment] = useState('conservative');

    const [cbBtnText, setCbBtnText] = useState('Selected');
    const [bBtnText, setBBtnText] = useState('Select');
    const [gBtnText, setGBtnText] = useState('Select');
    const [cBtnText, setCBtnText] = useState('Select');

    const handleSelection = (portfolio) => {
        setInvestment(portfolio);
        if (portfolio === 'conservative') {
            setCbStyle(selectedButton);
            setBStyle(unSelectedButton);
            setGStyle(unSelectedButton);
            setCStyle(unSelectedButton);
            setCbBorder(selectedBorder);
            setBBorder('');
            setGBorder('');
            setCBorder('');
            setCbBtnText('Selected');
            setBBtnText('Select');
            setGBtnText('Select');
            setCBtnText('Select');
        } else if (portfolio === 'balanced') {
            setCbStyle(unSelectedButton);
            setBStyle(selectedButton);
            setGStyle(unSelectedButton);
            setCStyle(unSelectedButton);
            setCbBorder('');
            setBBorder(selectedBorder);
            setGBorder('');
            setCBorder('');
            setCbBtnText('Select');
            setBBtnText('Selected');
            setGBtnText('Select');
            setCBtnText('Select');
        } else if (portfolio === 'growth') {
            setCbStyle(unSelectedButton);
            setBStyle(unSelectedButton);
            setGStyle(selectedButton);
            setCStyle(unSelectedButton);
            setCbBorder('');
            setBBorder('');
            setGBorder(selectedBorder);
            setCBorder('');
            setCbBtnText('Select');
            setBBtnText('Select');
            setGBtnText('Selected');
            setCBtnText('Select');
        } else {
            setCbStyle(unSelectedButton);
            setBStyle(unSelectedButton);
            setGStyle(unSelectedButton);
            setCStyle(selectedButton);
            setCbBorder('');
            setBBorder('');
            setGBorder('');
            setCBorder(selectedBorder);
            setCbBtnText('Select');
            setBBtnText('Select');
            setGBtnText('Select');
            setCBtnText('Selected');
        }
    }

    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => {
        setShowModal(false);
    }

    return (
        <>
            {showModal &&
                <Modal onClose={handleCloseModal} selection={investment}/>
            }
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
                                        <a href={item.href} className="block font-semibold text-gray-900">
                                            {item.name}
                                            <span className="absolute inset-0" />
                                        </a>
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
                        <a href="#" className="text-sm/6 font-semibold text-gray-900">
                            Publications
                        </a>
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
                                    Step 4 : Investment Option
                                </span>
                            </div>
                            </li>
                        </ol>
                        </nav>
                    </div>
                </div>
            </section>
            <section className="flex px-8 lg:px-10 mx-6 lg:mx-10 flex-col">
                <div className='text-lg/8 text-gray-600'>
                    <p className='mb-4'>Choose how you'd like to invest the funds in your new Retirement Account</p>
                    <p>Select your preferred investment strategy from the four options below:</p>
                </div>
                <div className="mt-12 grid gap-4 sm:mt-12 lg:grid-cols-4 lg:grid-rows-2">
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-white lg:rounded-[2rem]"></div>
                        <div className={`relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-[calc(2rem+1px)] ${cbBorder} transition-all duration-200 ease-in-out`}>
                            <div className="px-6 py-6 sm:px-6 sm:py-6">
                                <div className='sm:min-h-[335px]'>
                                    <div className='sm:min-h-[132px]'>
                                        <p className="mt-2 mb-4 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                            The Conservative Balanced Portfolio
                                        </p>
                                        <p className="mt-2 text-3xl font-medium tracking-tight text-gray-950 max-lg:text-center mb-1">
                                            4.94%
                                        </p>
                                        <p className="text-sm text-gray-500 max-lg:text-center">
                                            5 year return per annum
                                        </p>
                                    </div>
                                    <div className='my-6 flex justify-center'>
                                        <button 
                                            className={cbStyle}
                                            onClick={() => handleSelection('conservative')}
                                        >{cbBtnText}</button>
                                    </div>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        This portfolio invests in a wide range of assets with a balanced mix of growth and defensive assets. Designed to have medium-term growth with a balance between capital stability and capital growth. May also have some short-term fluctuations.
                                    </p>
                                </div>
                                <p className="mt-4 text-lg tracking-tight text-gray-900 max-lg:text-center">
                                    Asset Allocation
                                </p>
                                <div className="mt-6 border-t border-gray-100">
                                    <dl className="divide-y divide-gray-100">
                                        <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                            <dt className="text-sm font-medium text-gray-900 sm:col-span-2">Shares</dt>
                                            <div className="mt-1 text-sm text-gray-700 sm:col-span-1 sm:mt-0 sm:text-right pr-1">42%</div>
                                        </div>
                                        <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                            <dt className="text-sm font-medium text-gray-900 sm:col-span-2">Infrastructure & Property</dt>
                                            <div className="mt-1 text-sm text-gray-700 sm:col-span-1 sm:mt-0 sm:text-right pr-1">14.25%</div>
                                        </div>
                                        <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                            <dt className="text-sm font-medium text-gray-900 sm:col-span-2">Cash and Fixed Income</dt>
                                            <div className="mt-1 text-sm text-gray-700 sm:col-span-1 sm:mt-0 sm:text-right pr-1">43.75%</div>
                                        </div>
                                    </dl>
                                </div>
                                <p className="mt-8 text-lg tracking-tight text-gray-900 max-lg:text-center">
                                    Risk Level
                                </p>
                                <div className="mt-6 border-t border-gray-100">
                                    <dl className="divide-y divide-gray-100">
                                        <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                            <dt className="text-sm font-medium text-gray-900 sm:col-span-2">Short term <span className='font-light text-gray-500'>(&lt;5 years)</span></dt>
                                            <div className="mt-1 text-sm text-gray-700 sm:col-span-1 sm:mt-0 sm:text-right pr-1">Medium - High Risk</div>
                                        </div>
                                        <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                            <dt className="text-sm font-medium text-gray-900 sm:col-span-2">Medium term <span className='font-light text-gray-500'>(5-20 years)</span></dt>
                                            <div className="mt-1 text-sm text-gray-700 sm:col-span-1 sm:mt-0 sm:text-right pr-1">Medium Risk</div>
                                        </div>
                                        <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                            <dt className="text-sm font-medium text-gray-900 sm:col-span-2">Long term <span className='font-light text-gray-500'>(20+ years)</span></dt>
                                            <div className="mt-1 text-sm text-gray-700 sm:col-span-1 sm:mt-0 sm:text-right pr-1">Low Risk</div>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-[2rem]"></div>
                    </div>
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-white lg:rounded-[2rem]"></div>
                        <div className={`relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-[calc(2rem+1px)] ${bBorder} transition-all duration-200 ease-in-out`}>
                            <div className="px-6 py-6 sm:px-6 sm:py-6">
                                <div className='sm:min-h-[335px]'>
                                    <div className='sm:min-h-[132px]'>
                                        <p className="mt-2 mb-4 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                            The Balanced Portfolio
                                        </p>
                                        <p className="mt-2 text-3xl font-medium tracking-tight text-gray-950 max-lg:text-center mb-1">
                                            6.85%
                                        </p>
                                        <p className="text-sm text-gray-500 max-lg:text-center">
                                            5 year return per annum
                                        </p>
                                    </div>
                                    <div className='my-6 flex justify-center'>
                                        <button
                                        className={bStyle}
                                        onClick={() => handleSelection('balanced')}
                                        >{bBtnText}</button>
                                    </div>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        This portfolio invests in a wide range of assets with a focus on growth assets. Designed to have medium- to long-term growth with possible short-term fluctuations.
                                    </p>
                                </div>
                                <p className="mt-4 text-lg tracking-tight text-gray-900 max-lg:text-center">
                                    Asset Allocation
                                </p>
                                <div className="mt-6 border-t border-gray-100">
                                    <dl className="divide-y divide-gray-100">
                                        <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                            <dt className="text-sm font-medium text-gray-900 sm:col-span-2">Shares</dt>
                                            <div className="mt-1 text-sm text-gray-700 sm:col-span-1 sm:mt-0 sm:text-right pr-1">59.25%</div>
                                        </div>
                                        <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                            <dt className="text-sm font-medium text-gray-900 sm:col-span-2">Infrastructure & Property</dt>
                                            <div className="mt-1 text-sm text-gray-700 sm:col-span-1 sm:mt-0 sm:text-right pr-1">17.28%</div>
                                        </div>
                                        <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                            <dt className="text-sm font-medium text-gray-900 sm:col-span-2">Cash and Fixed Income</dt>
                                            <div className="mt-1 text-sm text-gray-700 sm:col-span-1 sm:mt-0 sm:text-right pr-1">23.5%</div>
                                        </div>
                                    </dl>
                                </div>
                                <p className="mt-8 text-lg tracking-tight text-gray-900 max-lg:text-center">
                                    Risk Level
                                </p>
                                <div className="mt-6 border-t border-gray-100">
                                    <dl className="divide-y divide-gray-100">
                                        <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                            <dt className="text-sm font-medium text-gray-900 sm:col-span-2">Short term <span className='font-light text-gray-500'>(&lt;5 years)</span></dt>
                                            <div className="mt-1 text-sm text-gray-700 sm:col-span-1 sm:mt-0 sm:text-right pr-1">High Risk</div>
                                        </div>
                                        <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                            <dt className="text-sm font-medium text-gray-900 sm:col-span-2">Medium term <span className='font-light text-gray-500'>(5-20 years)</span></dt>
                                            <div className="mt-1 text-sm text-gray-700 sm:col-span-1 sm:mt-0 sm:text-right pr-1">Medium Risk</div>
                                        </div>
                                        <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                            <dt className="text-sm font-medium text-gray-900 sm:col-span-2">Long term <span className='font-light text-gray-500'>(20+ years)</span></dt>
                                            <div className="mt-1 text-sm text-gray-700 sm:col-span-1 sm:mt-0 sm:text-right pr-1">Low Risk</div>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-[2rem]"></div>
                    </div>
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-white lg:rounded-[2rem]"></div>
                        <div className={`relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-[calc(2rem+1px)] ${gBorder} transition-all duration-200 ease-in-out`}>
                            <div className="px-6 py-6 sm:px-6 sm:py-6">
                                <div className='sm:min-h-[335px]'>
                                    <div className='sm:min-h-[132px]'>
                                        <p className="mt-2 mb-4 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                            The Growth Portfolio
                                        </p>
                                        <p className="mt-2 text-3xl font-medium tracking-tight text-gray-950 max-lg:text-center mb-1">
                                            8.08%
                                        </p>
                                        <p className="text-sm text-gray-500 max-lg:text-center">
                                            5 year return per annum
                                        </p>
                                    </div>
                                    <div className='my-6 flex justify-center'>
                                        <button
                                        className={gStyle}
                                        onClick={() => handleSelection('growth')}>{gBtnText}</button>
                                    </div>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        This portfolio invests in a wide range of assets with a high focus on growth assets. Designed to have strong long-term growth with possible short-term fluctuations.
                                    </p>
                                </div>
                                <p className="mt-4 text-lg tracking-tight text-gray-900 max-lg:text-center">
                                    Asset Allocation
                                </p>
                                <div className="mt-6 border-t border-gray-100">
                                    <dl className="divide-y divide-gray-100">
                                        <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                            <dt className="text-sm font-medium text-gray-900 sm:col-span-2">Shares</dt>
                                            <div className="mt-1 text-sm text-gray-700 sm:col-span-1 sm:mt-0 sm:text-right pr-1">75.5%</div>
                                        </div>
                                        <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                            <dt className="text-sm font-medium text-gray-900 sm:col-span-2">Infrastructure & Property</dt>
                                            <div className="mt-1 text-sm text-gray-700 sm:col-span-1 sm:mt-0 sm:text-right pr-1">15%</div>
                                        </div>
                                        <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                            <dt className="text-sm font-medium text-gray-900 sm:col-span-2">Cash and Fixed Income</dt>
                                            <div className="mt-1 text-sm text-gray-700 sm:col-span-1 sm:mt-0 sm:text-right pr-1">9.5%</div>
                                        </div>
                                    </dl>
                                </div>
                                <p className="mt-8 text-lg tracking-tight text-gray-900 max-lg:text-center">
                                    Risk Level
                                </p>
                                <div className="mt-6 border-t border-gray-100">
                                    <dl className="divide-y divide-gray-100">
                                        <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                            <dt className="text-sm font-medium text-gray-900 sm:col-span-2">Short term <span className='font-light text-gray-500'>(&lt;5 years)</span></dt>
                                            <div className="mt-1 text-sm text-gray-700 sm:col-span-1 sm:mt-0 sm:text-right pr-1">High Risk</div>
                                        </div>
                                        <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                            <dt className="text-sm font-medium text-gray-900 sm:col-span-2">Medium term <span className='font-light text-gray-500'>(5-20 years)</span></dt>
                                            <div className="mt-1 text-sm text-gray-700 sm:col-span-1 sm:mt-0 sm:text-right pr-1">Medium Risk</div>
                                        </div>
                                        <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                            <dt className="text-sm font-medium text-gray-900 sm:col-span-2">Long term <span className='font-light text-gray-500'>(20+ years)</span></dt>
                                            <div className="mt-1 text-sm text-gray-700 sm:col-span-1 sm:mt-0 sm:text-right pr-1">Low Risk</div>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-[2rem]"></div>
                    </div>
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-white lg:rounded-[2rem]"></div>
                        <div className={`relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-[calc(2rem+1px)] ${cBorder} transition-all duration-200 ease-in-out`}>
                            <div className="px-6 py-6 sm:px-6 sm:py-6">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                    Choose your own Investments
                                </p>
                                <div className='my-6 flex justify-center'>
                                    <button
                                    className={cStyle}
                                    onClick={() => handleSelection('choose')}>{cBtnText}</button>
                                </div>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    Not quite sure? You can book an appointment at no extra cost to speak with a qualified financial adviser about your investment options. Visit www.aware4u.com.au/retirecheckin
                                </p>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-[2rem]"></div>
                    </div>  
                </div>
                <div className='text-lg/8 text-gray-600 mt-12'>
                    <p className='mb-4'>If you have any investment transactions in progress, such as a rollover or a change of investment choice, your new Retirement Account will be established after these transactions are complete. You can track any in-progress transactions in Member Online under <a href='' className="underline text-[#F61563]">My activities</a>.</p>
                    <p>Find out more about Aware4U's <a href='' className="underline text-[#F61563]">Investment options</a></p>
                </div>
                <div className='border-t border-gray-200 mt-8 pt-8'>
                    <button 
                        className='rounded-md px-3.5 py-2.5 text-sm font-semibold bg-white text-[#F61563] border border-[#F61563]/40 hover:bg-[#F61563]/10 focus:ring-1 focus:ring-[#F61563] mr-4'
                        onClick={() => {navigate('/')}}
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

export default PageInvest;