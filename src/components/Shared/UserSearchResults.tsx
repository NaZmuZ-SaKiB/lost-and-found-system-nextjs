import CustomPagination from "@/components/Form/CustomPagination";
import ChangeUserStatus from "@/components/Shared/UserManagementPage/ChangeUserStatus";
import ToggleUserRole from "@/components/Shared/UserManagementPage/ToggleUserRole";
import { getAllUsers } from "@/lib/actions/user.actions";
import "@/styles/table.css";

type TProps = {
  searchParams: any;
};

const UserSearchResults = async ({ searchParams }: TProps) => {
  const userData = await getAllUsers(searchParams);

  return (
    <div className="overflow-x-auto scrollbar-thin scrollbar-webkit bg-white p-2 rounded-lg">
      <div className="min-w-[700px]">
        <table className="table-auto admin-table">
          <thead className="text-left">
            <tr>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {userData?.users?.length > 0 ? (
              userData?.users?.map((user: any) => (
                <tr key={user.id}>
                  <td>{user.email}</td>

                  <td>{user.role}</td>

                  <td>{user.status}</td>
                  <td>
                    <div className="flex justify-end gap-3">
                      <ChangeUserStatus userId={user.id} status={user.status} />
                      <ToggleUserRole userId={user.id} role={user.role} />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="mt-5 text-center border-2 p-3 text-lg font-semibold">
                <td colSpan={4}>No Users</td>
              </tr>
            )}
          </tbody>
        </table>
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
