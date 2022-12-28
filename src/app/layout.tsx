import { Inter as FontSans } from '@next/font/google'
import React from 'react'
import '@/styles/globals.css'
import { cn } from '@/lib/utils'

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-inter',
})

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" className={cn('font-sans antialiased', fontSans.variable)}>
			<head />
			<body className="min-h-screen">{children}</body>
		</html>
	)
}
