'use client'

import { PurchaseVerifier } from '@/components/envato/purchaseVerifier'

export default function Page() {
	return (
		<>
			<section>
				<div className="mx-auto flex h-full flex-col items-start gap-4 lg:w-[52rem]">
					<h1 className="mt-28 text-3xl font-bold leading-[1.1] tracking-tighter sm:text-5xl md:mt-10 md:text-6xl">
						Envato Purchase Verifier
					</h1>
					<p className="max-w-[42rem] leading-normal  sm:text-xl sm:leading-8">
						Verify the purchase code for Envato products.
					</p>
					<PurchaseVerifier />
				</div>
			</section>
		</>
	)
}
