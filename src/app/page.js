import Banner from "@/components/Banner";
// import StatsCard from "@/components/dashboard/StatsCard";
// import { friends } from "@/data/friends";

export default function Home() {
  return (
    <div>
      <Banner />

      {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        <StatsCard title="Total Friends" value={friends.length} />
        <StatsCard title="Close Friends" value="12" />
        <StatsCard title="Family" value="8" />
        <StatsCard title="New" value="5" />
      </div> */}
    </div>
  );
}