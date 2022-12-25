import Search from './(search)/Search';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <Search />
      </header>
      <main>{children}</main>
    </>
  );
}
