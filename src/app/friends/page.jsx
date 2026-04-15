"use client";

import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

export default function FriendsPage() {
  const { friends, addFriend } = useContext(AppContext);

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Friends List</h1>

      <button
        onClick={() =>
          addFriend({ id: Date.now(), name: "New Friend" })
        }
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Add Friend
      </button>

      <ul className="mt-4">
        {friends.map((f) => (
          <li key={f.id}>{f.name}</li>
        ))}
      </ul>
    </div>
  );
}