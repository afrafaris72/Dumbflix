import { FaArrowDown } from "react-icons/fa";
import '../components/style.css'
const UserTransaction = () => {
  return (
    <div className="container mx-auto py-20 h-[100vh]">
      <h2 className="font-bold text-white text-lg mb-5">
        Incoming Transaction
      </h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th className="titletrans">No</th>
            <th className="titletrans">Users</th>
            <th className="titletrans">Bukti Transfer</th>
            <th className="titletrans">Remaining Active</th>
            <th className="titletrans">Status User</th>
            <th className="titletrans">Status Payment</th>
            <th className="titletrans">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="plain">
            <td>1</td>
            <td>Radif Ganteng</td>
            <td>Bca.jpg</td>
            <td>26 /hari</td>
            <td className="activetrans">Active</td>
            <td className="activetrans">Approve</td>
            <td>
              <button className="pl-4">
                <FaArrowDown />
              </button>
            </td>
          </tr>
          <tr className="plain">
            <td >2</td>
            <td>Haris Rahman</td>
            <td>Bni.jpg</td>
            <td>26 /hari</td>
            <td className="activetrans">Active</td>
            <td className="activetrans">Approve</td>
            <td>
              <button className="pl-4">
                <FaArrowDown />
              </button>
            </td>
          </tr>
          <tr className="plain">
            <td >3</td>
            <td>Maman</td>
            <td>Permata.jpg</td>
            <td>0 /hari</td>
            <td className="titletrans">Not Active</td>
            <td className="titletrans">Cancel</td>
            <td>
              <button className="pl-4">
                <FaArrowDown />
              </button>
            </td>
          </tr>
          <tr className="plain">
            <td >4</td>
            <td>afra</td>
            <td>Permata.jpg</td>
            <td>0 /hari</td>
            <td className="titletrans">Not Active</td>
            <td className="pending">Pending</td>
            <td>
              <button className="pl-4">
                <FaArrowDown />
              </button>
            </td>
          </tr>
          <tr className="plain">
            <td >5</td>
            <td>Mamano</td>
            <td>BSI.jpg</td>
            <td>0 /hari</td>
            <td className="titletrans">Not Active</td>
            <td className="pending">Pending</td>
            <td>
              <button className="pl-4">
                <FaArrowDown />
              </button>
            </td>
          </tr>
          <tr className="plain">
            <td >6</td>
            <td>maon</td>
            <td>BCA.jpg</td>
            <td>0 /hari</td>
            <td className="titletrans">Not Active</td>
            <td className="pending">Pending</td>
            <td>
              <button className="pl-4">
                <FaArrowDown />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserTransaction;