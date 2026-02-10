'use client';

import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';
import { api } from '@workspace/backend/_generated/api';
import { Button } from '@workspace/ui/components/button';
import { useMutation, useQuery } from 'convex/react';

export default function Page() {
	const users = useQuery(api.users.getMany);

	const addUser = useMutation(api.users.add);

	return (
		<div className="flex items-center justify-center min-h-svh">
			<div className="flex flex-col gap-4 items-center justify-center">
				<UserButton />
				<OrganizationSwitcher hidePersonal />
				<p>apps/web</p>
				<Button onClick={() => addUser({})}>Add User</Button>
				<div className="max-w-sm w-full mx-auto">
					<ul>
						{users?.map((user) => (
							<li key={user._id}>{user.name}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
