import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxios from "../../../Hooks/useAxios";
import Sectiontitle from "../../../Comonents/Sectiontitle";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();

  // Fetch payment data using react-query
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <Sectiontitle heading="Payment History" subheading="View your recent payments below" />

      <h2 className="text-3xl mb-4">Total Payments: {payments.length}</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* Table head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Price</th>
              <th>Payment ID</th>
              <th>Status</th>
            </tr>
          </thead>

          {/* Table body */}
          <tbody>
            {payments.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>${item.price}</td>
                <td>{item.transectionID}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
