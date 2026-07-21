export default function NotificationsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900">
        Notifications
      </h1>

      <p className="mt-2 text-slate-600">
        Stay updated about your projects.
      </p>

      <div className="mt-8 rounded-2xl bg-white p-8 shadow">
        <p className="text-slate-600">
          No new notifications.
        </p>
      </div>
    </div>
  );
}