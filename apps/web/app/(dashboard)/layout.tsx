'use client';

import { AuthGuard } from '@/modules/auth/ui/components/auth-guard';
import { OrgGuard } from '@/modules/auth/ui/components/org-guard';
import { ReactNode } from 'react';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
	return (
		<AuthGuard>
			<OrgGuard>{children}</OrgGuard>
		</AuthGuard>
	);
};

export default DashboardLayout;
