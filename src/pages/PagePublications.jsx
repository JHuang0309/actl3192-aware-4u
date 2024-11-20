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


const PagePublications = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const publications = [
        {
            id: 1,
            title: 'Project Summary Presentation',
            href: 'https://unsw-my.sharepoint.com/:b:/g/personal/z5416302_ad_unsw_edu_au/EarxbAxUdJ1PlQxVBG4nkUIBC4bNf6ivekAxInuTOqwPhA?e=COdAxr',
            description:
              `A brief presentation about Aware4U's FutureFocus solution`,
            date: 'Nov 20, 2024',
            datetime: '2024-11-20',
            category: { title: 'Presentation'},
        },
        {
            id: 2,
            title: 'Project Presentation',
            href: 'https://unsw-my.sharepoint.com/:b:/g/personal/z5416302_ad_unsw_edu_au/Eap0pK_lM7RMuXXFeGFo4UIBE7qQ2ckZlUTcBdsfF7P-0g?e=hgzgvy',
            description:
              `A presentation on the Industry Challenge Project tackled by Aware4U outlining our research and solution in further depth.`,
            date: 'Nov 20, 2024',
            datetime: '2024-11-20',
            category: { title: 'Presentation'},
        },
        {
            id: 3,
            title: 'Project Infographic',
            href: 'https://unsw-my.sharepoint.com/:b:/g/personal/z5416302_ad_unsw_edu_au/EUbyFJg_gJVIhTnuw9EY-WoBlnrMv96Q_K8XaVVoi4GMWw?e=GdhYIi',
            description:
              `An infographic summarising Aware4U's FutureFocus solution.`,
            date: 'Nov 20, 2024',
            datetime: '2024-11-20',
            category: { title: 'Infographic'},
        },
    ]

    const products = [
        { name: 'Personas', description: 'Building emotional connections', href: '/not-found', icon: UserCircleIcon },
        { name: 'Visualisations', description: 'Drawdown simulations and calculators', href: '/not-found', icon: ChartPieIcon },
        { name: 'Educational Tools', description: 'Enhancing information architecture', href: '/not-found', icon: CursorArrowRaysIcon },
    ]

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
                        <Link to="/" className="text-sm/6 font-semibold text-gray-900">
                            The Challenge
                        </Link>
                        <Link to="/publications" className="text-sm/6 font-semibold text-gray-900">
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
                            <Link to="/" className="-m-1.5 p-1.5">
                                <img
                                alt=""
                                src={logo}
                                className="h-8 w-auto"
                                />
                            </Link>
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
                            <Link
                                to="/"
                                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                            >
                                The Challenge
                            </Link>
                            <Link
                                to="/publications"
                                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                            >
                                Publications
                            </Link>
                        </div>
                        <div className="py-6">
                            <Link
                                to="/"
                                className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                            >
                                Exit back to home
                            </Link>
                        </div>
                        </div>
                    </div>
                    </DialogPanel>
                </Dialog>
            </header>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">View our Publications</h2>
                        <p className="mt-2 text-lg/8 text-gray-600">Learn how we developed our solution and the underlying issues we look to tackle.</p>
                    </div>
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {publications.map((publication) => (
                            <article key={publication.id} className="flex max-w-xl flex-col items-start justify-between">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time dateTime={publication.datetime} className="text-gray-500">
                                    {publication.date}
                                    </time>
                                    <a
                                    href={publication.category.href}
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                    >
                                    {publication.category.title}
                                    </a>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                                    <a href={publication.href} target='_blank'>
                                        <span className="absolute inset-0" />
                                        {publication.title}
                                    </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{publication.description}</p>
                                </div>
                                <div>
                                    <a href={publication.href} target="_blank" className="py-2.5 text-sm font-semibold bg-white text-[#F61563]">View here</a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>                
            
        </>
    );
};

export default PagePublications;