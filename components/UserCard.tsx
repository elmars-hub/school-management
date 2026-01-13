import Image from "next/image";

export default function UserCard({ type }: { type: string }) {
  return (
    <div className="rounded-lg odd:bg-brand-yellow even:bg-brand-purple p-4 flex-1 min-w-[130px]">
      <div className="flex items-center justify-between">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2026/25
        </span>
        <Image src="/more.png" alt="more" width={20} height={20} />
      </div>

      <h2 className="text-2xl font-semibold my-4">1,234</h2>
      <h3 className="capitalize text-sm font-medium text-gray-500">{type}s</h3>
    </div>
  );
}
