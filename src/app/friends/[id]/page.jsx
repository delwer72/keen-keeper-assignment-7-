import friends from "@/data/friends.json";

export default function FriendPage() {
  const friend = friends[0];

  const statusColor =
    friend.status === "Active"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700";

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <h1 className="text-2xl font-bold mt-4">{friend.name}</h1>

          <p className="text-gray-500 text-sm mt-1">
            {friend.email}
          </p>

          <span className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-medium ${statusColor}`}>
            {friend.status}
          </span>
        </div>

      </div>
    </div>
  );
}