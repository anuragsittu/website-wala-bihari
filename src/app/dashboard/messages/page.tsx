export default function MessagesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900">
        Messages
      </h1>

      <p className="mt-2 text-slate-600">
        Communicate with the Website Wala Bihari team.
      </p>

      <div className="mt-8 rounded-2xl bg-white p-8 shadow">
        <p className="text-slate-600">
          No messages yet.
        </p>
      </div>
    </div>
  );
}