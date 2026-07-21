export default function FilesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900">
        Project Files
      </h1>

      <p className="mt-2 text-slate-600">
        Access files shared for your projects.
      </p>

      <div className="mt-8 rounded-2xl bg-white p-8 shadow">
        <p className="text-slate-600">
          No files have been uploaded yet.
        </p>
      </div>
    </div>
  );
}