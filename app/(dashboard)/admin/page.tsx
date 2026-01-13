import UserCard from "@/components/UserCard";

export default function AdminDashboard() {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* Left */}
      <div className="w-full lg:w-2/3">
        {/* USER CARD */}

        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="admin" />
          <UserCard type="teacher" />
          <UserCard type="student" />
          <UserCard type="staff" />
        </div>
      </div>

      {/* Right */}
      <div className=""></div>
    </div>
  );
}
