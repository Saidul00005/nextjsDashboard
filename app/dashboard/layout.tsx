import NavLinks from "../ui/dashboard/nav-links";



export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavLinks />
        <main>
          {children}
        </main>
      </body>
    </html >
  );
}
