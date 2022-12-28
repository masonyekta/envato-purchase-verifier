import { ExclamationCircleIcon } from '@heroicons/react/24/solid'

export default function Error() {
	return (
		<div className="rounded-md border border-red-700 bg-red-50 p-4">
			<div className="flex">
				<div className="flex-shrink-0">
					<ExclamationCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
				</div>
				<div className="ml-3">
					<h3 className="text-sm font-medium text-red-800">Error</h3>
					<div className="mt-2 text-sm text-red-700">
						<p>Verification failed or you have not purchased this product.</p>
					</div>
				</div>
			</div>
		</div>
	)
}
