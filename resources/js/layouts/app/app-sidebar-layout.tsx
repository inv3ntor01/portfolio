import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { AppSidebar } from '@/components/app-sidebar';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import type { AppLayoutProps } from '@/types';
import { usePage } from '@inertiajs/react';

export default function AppSidebarLayout({
    children,
    breadcrumbs = [],
}: AppLayoutProps) {
    const { component } = usePage();

    // Conditionally render the sidebar based on the current page component name.
    // The route definition `Route::inertia('contact','contact')` indicates the component name is 'contact'.
    const shouldShowSidebar = component !== 'contact';

    return (
        <AppShell variant="sidebar">
            {shouldShowSidebar && <AppSidebar />}
            <AppContent variant="sidebar" className="overflow-x-hidden">
                <AppSidebarHeader breadcrumbs={breadcrumbs} />
                {children}
            </AppContent>
        </AppShell>
    );
}
