// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-blue-500">
      <h1>Dashboard Layout</h1>
      {children}
    </div>  
  );
}
