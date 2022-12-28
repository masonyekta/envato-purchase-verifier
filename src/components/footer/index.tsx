import Link from 'next/link'

export function Footer() {
	return (
		<div className="mx-auto w-full max-w-7xl overflow-hidden border-t-[1px] border-neutral-700 py-12 px-4 text-center text-sm sm:px-6 lg:px-8">
			<p>
				Made by{' '}
				<Link className="underline" target="_blank" href="https://twitter.com/masonyekta">
					@masonyekta
				</Link>
			</p>
			<p>
				View source code on{' '}
				<Link
					target="_blank"
					className="underline"
					href="https://github.com/masonyekta/envato-purchase-verifier"
				>
					GitHub
				</Link>
			</p>
		</div>
	)
}
