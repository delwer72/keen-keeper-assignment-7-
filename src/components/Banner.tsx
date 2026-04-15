import { UserPlus } from "lucide-react";

export default function Banner() {
  return (
    <section className="w-full bg-gray-100 py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Friends to keep close in your life
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.
        </p>

        {/* Button */}
        <button className="mt-6 inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-5 py-2.5 rounded-lg shadow transition">
          <UserPlus size={18} />
          Add a Friend
        </button>
      </div>

      {/* Summary Cards */}
      <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <Card title="Close Friends" value="12" />
        <Card title="Family" value="8" />
        <Card title="Colleagues" value="15" />
        <Card title="New Connections" value="5" />
      </div>
    </section>
  );
}

type CardProps = {
  title: string;
  value: string;
};

function Card({ title, value }: CardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-2xl font-semibold text-gray-800 mt-2">{value}</h3>
    </div>
  );
}