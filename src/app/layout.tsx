import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        this is home page
        {children} {/* this renders page.tsx */}
      </body>
    </html>
  );
}
