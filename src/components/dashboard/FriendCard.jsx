"use client";
import Link from "next/link";

export default function FriendCard({ friend }) {
  const statusColor = {
    overdue: "bg-red-100 text-red-600",
    "almost due": "bg-yellow-100 text-yellow-600",
    "on-track": "bg-green-100 text-green-600",
  };

  return (
    <Link href={`/friends/${friend.id}`}>
      <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition cursor-pointer">
        
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-16 h-16 rounded-full mx-auto"
        />

        <h3 className="text-center mt-3 font-semibold">
          {friend.name}
        </h3>

        <p className="text-center text-sm text-gray-500">
          {friend.days_since_contact} days ago
        </p>

        <div className="flex flex-wrap justify-center gap-1 mt-2">
          {friend.tags.map((tag, i) => (
            <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>

        <div className={`mt-3 text-center text-xs px-2 py-1 rounded ${statusColor[friend.status]}`}>
          {friend.status}
        </div>
      </div>
    </Link>
  );
}