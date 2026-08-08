export default function AdminPage() {
  return (
    <main>
      <h1 className="text-3xl font-bold text-slate-900">
        Admin Dashboard
      </h1>

      <p className="mt-2 text-slate-600">
        Welcome to the Website Wala Bihari admin dashboard.
      </p>

      <div className="mt-8 rounded-2xl bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">
          Admin Panel
        </h2>

        <p className="mt-2 text-slate-600">
          Manage projects, quotations, payments, files, and clients from
          this dashboard.
        </p>
      </div>
    </main>
  );
}