import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Sidebar */}
        <aside>
          <SideNav />
        </aside>
        {/* Main Content */}
        <main>
          {children}
        </main>
      </body>
    </html>

  );
}
