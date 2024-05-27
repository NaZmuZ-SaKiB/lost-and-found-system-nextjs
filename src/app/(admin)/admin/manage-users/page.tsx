"use client";

import CustomPagination from "@/components/Form/CustomPagination";
import Filters from "@/components/Shared/Filters";
import ChangeUserStatus from "@/components/Shared/UserManagementPage/ChangeUserStatus";
import ToggleUserRole from "@/components/Shared/UserManagementPage/ToggleUserRole";
import { useGetAllUsersQuery } from "@/redux/api/user.api";
import { useSearchParams } from "next/navigation";

const ManageUsersPage = () => {
  const searchParams = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());

  const {
    data: userData,
    isLoading: loadingUsers,
    isFetching,
  } = useGetAllUsersQuery(params);

  return (
    <main className="container !py-10 !px-2 sm:!px-4">
      <h1 className="text-4xl font-semibold">User Management</h1>

      <div className="mt-5 flex gap-3 justify-center items-center flex-wrap max-w-screen-md mx-auto">
        <Filters category={false} />
      </div>

      <div className="overflow-x-auto">
        <div className="mt-3 min-w-[700px]">
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

        {!loadingUsers && (
          <CustomPagination
            page={userData?.meta?.page}
            limit={userData?.meta?.limit}
            total={userData?.meta?.total}
          />
        )}
      </div>
    </main>
  );
};

export default ManageUsersPage;
