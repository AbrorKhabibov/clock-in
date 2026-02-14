export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Clock-In Dashboard</h1>
        <p className="text-xl text-gray-600">Admin Panel - Coming Soon</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
          <div className="border rounded-lg p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">Users</h2>
            <p className="text-gray-600">Manage employees and access</p>
          </div>
          <div className="border rounded-lg p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">Time Logs</h2>
            <p className="text-gray-600">Track clock in/out records</p>
          </div>
          <div className="border rounded-lg p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">Schedules</h2>
            <p className="text-gray-600">Manage employee schedules</p>
          </div>
        </div>
      </div>
    </main>
  );
}
