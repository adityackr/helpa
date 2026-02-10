import { ReactNode } from 'react';

export const AuthLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="flex items-center justify-center min-h-svh">{children}</div>
	);
};
