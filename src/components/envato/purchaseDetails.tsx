export default function PurchaseDetails(data: any) {
	const purchaseDate = new Date(data.data.sold_at).toDateString()
	const supportDate = new Date(data.data.supported_until).toDateString()
	const today = new Date()

	return (
		<div className="mt-6 overflow-hidden rounded-md border border-neutral-900 bg-white">
			<div className="px-4 py-5 sm:px-6">
				<h3 className="text-lg font-medium leading-6 text-neutral-900">Purchase Details</h3>
				<p className="mt-1 max-w-2xl text-sm text-neutral-700">
					Purchase details and product information.
				</p>
			</div>
			<div className="border-t border-neutral-900">
				<dl className="divide-y divide-neutral-300 px-6">
					<div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
						<dt className="text-sm font-medium text-neutral-900">Product</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
							{data.data.item.name}
						</dd>
					</div>
					<div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
						<dt className="text-sm font-medium text-neutral-900">Purchase Date</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
							{purchaseDate}
						</dd>
					</div>
					<div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
						<dt className="text-sm font-medium text-neutral-900">Purchaser Username</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
							{data.data.buyer}
						</dd>
					</div>
					<div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
						<dt className="text-sm font-medium text-neutral-900">Purchase Price</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
							{data.data.amount}
						</dd>
					</div>
					<div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
						<dt className="text-sm font-medium text-neutral-900">License</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
							{data.data.license}
						</dd>
					</div>
					<div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
						<dt className="text-sm font-medium text-neutral-900">Support Date</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
							{supportDate}
							{new Date(data.data.supported_until) < today && (
								<span className="ml-4 inline-flex items-center rounded-md bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
									Support Expired
								</span>
							)}
						</dd>
					</div>
				</dl>
			</div>
		</div>
	)
}
