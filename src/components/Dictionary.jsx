import { useState } from 'react';

const Dictionary = () => {
    const [searchQuery, setSearchQuery] = useState('');
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
    const sortedDictionary = dictionary.sort((a, b) => a.word.localeCompare(b.word));
    const filteredDictionary = sortedDictionary.filter(entry => entry.word.toLowerCase().includes(searchQuery.toLowerCase()));

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
    };

    return (
        <div className="space-y-4 px-4 py-6">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search for a word..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full p-2 border border-gray-300 rounded-md text-sm focus:border-[#F61563] focus:outline-none focus:ring-1 focus:ring-[#F61563]"
                />
            </div>

            {filteredDictionary.length === 0 ? (
                <p className="text-sm italic text-gray-600">No definitions that match</p>
            ) : (
                filteredDictionary.map((entry, index) => (
                    <div key={index} className="bg-white border-b pb-4">
                        <h3 className="text-base font-semibold text-gray-900">{entry.word}</h3>
                        <p className="text-xs italic text-gray-600">{entry.type}</p>
                        <p className="mt-2 text-xs text-gray-800">{entry.definition}</p>
                        <p className="mt-4 text-xs text-gray-600">
                            <span className="font-bold italic">Example:</span> {entry.example}
                        </p>
                    </div>
                ))
            )}
        </div>
    );
}

export default Dictionary;