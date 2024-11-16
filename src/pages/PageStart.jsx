const PageStart = () => {

    const team = [
        {
            name: "Jayden Huang",
            imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQGeZMxh62346A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1673090567455?e=1736985600&v=beta&t=J301wctE5Kd0EUYzlV-CapclkfM-NU2s1cu1YS9TDec",
            degree: "Actuarial Studies / Computer Science"
        },
        {
            name: "Connie Due",
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

    return (
        <>
            <div className="bg-white py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Aware4U</h2>
                        <p className="mt-2 text-lg/8 text-gray-600">Hi, welcome to our ACTL3192 Industry Challenge Group Project. We are Aware4U and together, your future is our focus.
                        </p>
                    </div>
                    <div className="mx-auto my-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 py-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none">
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
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        content continued
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default PageStart;