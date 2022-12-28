import React from 'react'
import Error from '@/components/feedback/error'
import Success from '@/components/feedback/success'
import PurchaseDetails from '@/components/envato/purchaseDetails'

export const PurchaseVerifier = () => {
	const [value, setValue] = React.useState<string>('')
	const [purchaseData, setPurchaseData] = React.useState<string>('')

	const handleInput = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}, [])

	const handleClick = React.useCallback(
		async (e: React.MouseEvent<HTMLElement>) => {
			if (e) {
				const response = await fetch('/api/purchase', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ code: value }),
				})
				const data = await response.json()
				setPurchaseData(data.result ? data.result : 'Error')
			}
		},
		[value]
	)

	return (
		<>
			<div className="mt-14 h-full w-full">
				<div>
					<div className="relative mt-1 items-center sm:flex">
						<input
							aria-label="Enter the purchase code"
							value={value}
							onChange={handleInput}
							type="text"
							name="description"
							className="block w-full appearance-none rounded-md
							border border-neutral-900 px-3 py-4 transition 
							delay-75 duration-300 ease-in-out
							focus:border-neutral-800 
							focus:outline-none focus:ring-neutral-800 sm:text-sm"
							placeholder="Enter Purchase Code"
						/>
						<div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
							<button
								onClick={handleClick}
								type="submit"
								className="mt-3 flex w-full appearance-none items-center 
								justify-center rounded-md border border-transparent bg-neutral-900 
								px-5 py-4 font-medium text-white hover:bg-neutral-700  
								focus:outline-none focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-700 
								sm:mt-0 sm:ml-2 sm:w-auto sm:flex-shrink-0 sm:text-sm"
							>
								Verify Purchase
							</button>
						</div>
					</div>
					<p className="mt-6 mb-6 text-sm">
						Use{' '}
						<code className="rounded-md bg-neutral-200 pl-2 pr-2 pt-1 pb-1 text-xs">
							86781236-23d0-4b3c-7dfa-c1c147e0dece
						</code>{' '}
						to test a valid purchase.
					</p>
				</div>
				<div className="mt-6">
					{purchaseData === 'Error' && <Error />}
					{purchaseData && purchaseData !== 'Error' && <Success />}
					{purchaseData && purchaseData !== 'Error' && (
						<PurchaseDetails data={purchaseData} />
					)}
				</div>
			</div>
		</>
	)
}

export default PurchaseVerifier
