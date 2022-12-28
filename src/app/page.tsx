'use client'

import { PurchaseVerifier } from '@/components/envato/purchaseVerifier'
import { CheckBadgeIcon } from '@heroicons/react/24/solid'

export default function Page() {
	return (
		<>
			<section>
				<div className="mx-auto flex h-full flex-col items-start gap-4 lg:w-[52rem]">
					<div className="mt-28 flex items-center md:mt-10">
						<div className="mr-3">
							<h1 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-5xl md:text-6xl">
								Envato Purchase Verifier
							</h1>
						</div>
						<div className="flex-shrink-0">
							<CheckBadgeIcon
								className="h-8 w-8 text-green-400 md:mt-2 md:h-10 md:w-10"
								aria-hidden="true"
							/>
						</div>
					</div>
					<p className="max-w-[42rem] leading-normal text-neutral-700 sm:text-xl sm:leading-8">
						Verify the purchase code for Envato products.
					</p>
					<PurchaseVerifier />
				</div>
			</section>
		</>
	)
}
