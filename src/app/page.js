import Banner from "@/components/Banner";
// import StatsCard from "@/components/dashboard/StatsCard";
import FriendCard from "@/components/dashboard/FriendCard";
import friends from "@/data/friends.json";

export default function Home() {
  return (
    <div>
      <Banner />

      <h2 className="text-xl font-semibold mt-10 mb-6">Your Friends</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
}