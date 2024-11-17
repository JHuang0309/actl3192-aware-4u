import { useState, useEffect } from 'react'
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
import definition from '../assets/definition.png';
import dictionary from '../assets/dictionary.png';
import personas from '../assets/personas.png';
import profile from '../assets/profile.png';
import investPage from '../assets/investPage.png'


const PageStart = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const products = [
        { name: 'Personas', description: 'Building emotional connections', href: '/not-found', icon: UserCircleIcon },
        { name: 'Visualisations', description: 'Drawdown simulations and calculators', href: '/not-found', icon: ChartPieIcon },
        { name: 'Educational Tools', description: 'Enhancing information architecture', href: '/not-found', icon: CursorArrowRaysIcon },
    ]

    const team = [
        {
            name: "Jayden Huang",
            imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQGeZMxh62346A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1673090567455?e=1736985600&v=beta&t=J301wctE5Kd0EUYzlV-CapclkfM-NU2s1cu1YS9TDec",
            degree: "Actuarial Studies / Computer Science"
        },
        {
            name: "Connie Du",
            imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQEzs0CUqRJ5PQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1701693548230?e=1736985600&v=beta&t=DBMqoe_rL40mQniH97ZBmfSAnwYxfNty6Ra1lltcXJk",
            degree: "Actuarial Studies / Computer Science"
        },
        {
            name: "Cecilia Wu",
            imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQFwui_vPyp0JA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731462895839?e=1736985600&v=beta&t=dMgOA94jMXP6NkAxG1D3xl9N_crOHx7bCUmVfN1ru5k",
            degree: "Actuarial Studies / Commerce (Finance)"
        },
        {
            name: "Zoe Tang",
            imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQGa1oa48XEPrw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1731470657670?e=1736985600&v=beta&t=VURVciFxDWh79ktPawS2NqgUmuzyG8KC-Uk_x-BONQ0",
            degree: "Actuarial Studies / Commerce (Finance)"
        },
        {
            name: "Raj Taware",
            imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQEMlvJVqkbcWg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728613811472?e=1736985600&v=beta&t=4dfTcjIgNQ_SszBvYXPBemUL2wwus53rwHfD2YoIkpI",
            degree: "Actuarial Studies / Commerce (FinTech)"
        }
    ]

    const stats = [
        { id: 1, name: 'Retirees in Australia', value: '4.2 million' },
        { id: 2, name: 'of Retirees drawing down at minimum rates', value: '50%' },
        { id: 3, name: 'of members choose the default investment option', value: '70%' },
    ]

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
            <header className="bg-white">
                <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <a href="" className="-m-1.5 p-1.5">
                            <img
                            alt="logo"
                            src={logo}
                            className="h-8 w-auto"
                            />
                        </a>
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
                        <a href="#The-Challenge" className="text-sm/6 font-semibold text-gray-900">
                            The Challenge
                        </a>
                        <Link to="/not-found" className="text-sm/6 font-semibold text-gray-900">
                            Publications
                        </Link>
                    </PopoverGroup>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href='#demonstration' className="text-sm/6 font-semibold text-gray-900">
                            Set up your account <span aria-hidden="true">&rarr;</span>
                        </a>
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
            <div className="bg-white py-8 sm:pt-16 sm:pb-0">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h1 className="text-6xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#F61563] to-black sm:text-7xl pb-4">Aware4U</h1>
                        <p className="mt-2 text-lg/8 text-gray-600">Hi, welcome to our ACTL3192 Industry Challenge Group Project. We are Aware4U and together, your future is our focus.
                        </p>
                    </div>
                    <div className="mx-auto my-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-b border-gray-200 py-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none">
                        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
                            <div className="max-w-xl">
                                <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                                    Meet our team
                                </h2>
                                <p className="mt-6 text-lg/8 text-gray-600">
                                    We’re a dynamic group of passionate students who are looking to make an impact on the retirement industry.
                                </p>
                            </div>
                            <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                                {team.map((person) => (
                                    <li key={person.name}>
                                        <div className="flex items-center gap-x-6">
                                            <img alt="" src={person.imageUrl} className="size-16 rounded-full" />
                                            <div>
                                                <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                                                <p className="text-sm/6 font-semibold text-[#F61563]">{person.degree}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <section className="relative isolate overflow-hidden bg-white px-6 lg:px-8 pt-16" id="The-Challenge">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <h2 className="mx-auto h-6 text-3xl text-center font-bold">The Challenge</h2>
                    <figure className="mt-10">
                        <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                            <p>
                            How do superannuation funds encourage, assist and nudge members who are planning for their retirement, to drawdown their retirement savings at a sustainable rate?
                            </p>
                        </blockquote>
                    </figure>
                </div>
                <div className="bg-white py-16 sm:py-16">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        {stats.map((stat) => (
                            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base/7 text-gray-600">{stat.name}</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl text-[#F61563]">
                                {stat.value}
                            </dd>
                            </div>
                        ))}
                        </dl>
                    </div>
                </div>
            </section>
            <div className="bg-gray-50 py-24 sm:py-32">
                <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-center text-base/7 font-semibold text-[#F61563]">Aware4U aims to address this challenge through our tailored solutions</h2>
                    <p className="mx-auto mt-2 max-w-lg text-balance text-center text-5xl font-semibold tracking-tight text-gray-950 sm:text-6xl">
                    Aware4U Solutions
                    </p>
                    <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                        <div className="relative lg:row-span-2">
                            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                Education tools
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                A tailored information architecture that saves looked-up words for future reference. 
                                </p>
                            </div>
                            <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-white shadow-2xl">
                                    <img
                                        className="size-full object-cover object-top"
                                        src={dictionary}
                                        alt=""
                                    />
                                </div>
                            </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
                        </div>
                        <div className="relative max-lg:row-start-1">
                            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Retirement Personas</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        Enhancing information architecture by building emotional connections.
                                    </p>
                                </div>
                                <div className="flex flex-1 items-center justify-center px-2 max-lg:pb-10 max-lg:pt-10 sm:px-4 lg:pb-2">
                                    <img
                                        className="w-full max-lg:max-w-xs"
                                        src={personas}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
                        </div>
                        <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                            <div className="absolute inset-px rounded-lg bg-white"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Financial Tools</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        Incorporating frontend components such as modal pop-ups and tooltips.
                                    </p>
                                </div>
                                <div className="flex flex-1 items-center justify-center px-4 max-lg:pb-12 max-lg:pt-10 sm:px-6 lg:pb-2">
                                    <img
                                    className="w-full max-lg:max-w-xs"
                                    src={definition}
                                    alt=""
                                    />
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                        </div>
                        <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                    Drawdown Simulations
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                Using visualisations and income calculations to smooth consumption over the lifecycle.
                                </p>
                            </div>
                            <div className="relative min-h-[30rem] w-full grow">
                                <div className="absolute bottom-0 left-4 right-0 top-10 overflow-hidden rounded-tl-xl bg-white">
                                    <div className="px-2 pb-2 pt-2"><img
                                        className="size-full object-cover object-top"
                                        src={profile}
                                        alt=""
                                    /></div>
                                </div>
                            </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="bg-gray-50" id='demonstration'>
                <div className="relative isolate overflow-hidden bg-gray-50 px-6 pt-16 sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                <svg
                    viewBox="0 0 1024 1024"
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                >
                    <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                    <defs>
                    <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                        <stop stopColor="#F61563" />
                        <stop offset={1} stopColor="#F61563" />
                    </radialGradient>
                    </defs>
                </svg>
                <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                    <h2 className="text-balance text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                        View Aware4U's solutions in action.
                    </h2>
                    <p className="mt-6 text-pretty text-lg/8 text-gray-500">
                        Aware4U is committed to improving the financial wellbeing of retirees by addressing the root causes of superannuation challenges.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                    <Link
                        to="/investment-option"
                        className="rounded-md bg-[#F61563] px-3.5 py-2.5 text-sm font-semibold text-white hover:text-[#F61563] shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 ease-in-out"
                    >
                        Start demonstration
                    </Link>
                    <Link 
                        to="/not-found"
                        className="text-sm/6 font-semibold text-[#F61563]">
                        View publications <span aria-hidden="true">→</span>
                    </Link>
                    </div>
                </div>
                <div className="relative mt-16 h-80 lg:mt-8">
                    <img
                        alt="App screenshot"
                        src={investPage}
                        width={1824}
                        height={1080}
                        className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                    />
                </div>
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

export default PageStart;