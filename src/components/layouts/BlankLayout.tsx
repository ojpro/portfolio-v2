export default function BlankLayout({children}:{children:React.ReactNode}) {
  return (
    <>
      <main className="dark:bg-gray-900 dark:text-white">
        {children}
      </main>
    </>
  );
}
