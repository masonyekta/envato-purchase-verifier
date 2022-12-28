import { CheckCircleIcon } from '@heroicons/react/24/solid'

export default function Success() {
	return (
		<div className="rounded-md border border-green-700 bg-green-50 p-4">
			<div className="flex">
				<div className="flex-shrink-0">
					<CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
				</div>
				<div className="ml-3">
					<h3 className="text-sm font-medium text-green-800">Verified</h3>
					<div className="mt-2 text-sm text-green-700">
						<p>Purchase code is verified. Details are listed below.</p>
					</div>
				</div>
			</div>
		</div>
	)
}
