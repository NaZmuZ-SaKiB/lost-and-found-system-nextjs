import CustomPagination from "@/components/Form/CustomPagination";
import ChangeUserStatus from "@/components/Shared/UserManagementPage/ChangeUserStatus";
import ToggleUserRole from "@/components/Shared/UserManagementPage/ToggleUserRole";
import { getAllUsers } from "@/lib/actions/user.actions";

type TProps = {
  searchParams: any;
};

const UserSearchResults = async ({ searchParams }: TProps) => {
  const userData = await getAllUsers(searchParams);

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[700px]">
        <div className="text-sm p-2 font-semibold border rounded-md mb-1 bg-gray-50 border-gray-300 grid gap-3 grid-cols-6">
          <span className="col-span-2">Email</span>
          <span className="text-center">Role</span>
          <span className="text-center">Status</span>
          <span className="text-right col-span-2">Actions</span>
        </div>

        {userData?.users?.length > 0 ? (
          userData?.users?.map((user: any) => (
            <div
              key={user.id}
              className="text-sm p-2 border rounded-md mb-1 border-gray-300 grid gap-3 grid-cols-6 hover:bg-gray-50 cursor-pointer"
            >
              <span className="col-span-2">{user.email}</span>

              <span className="text-center">{user.role}</span>

              <span className="text-center">{user.status}</span>
              <span className="text-right col-span-2 space-x-2">
                <ChangeUserStatus userId={user.id} status={user.status} />
                <ToggleUserRole userId={user.id} role={user.role} />
              </span>
            </div>
          ))
        ) : (
          <div className="mt-5 text-center border-2 p-3 text-lg font-semibold">
            No Users
          </div>
        )}
      </div>

      <CustomPagination
        page={userData?.meta?.page}
        limit={userData?.meta?.limit}
        total={userData?.meta?.total}
      />
    </div>
  );
};

export default UserSearchResults;
