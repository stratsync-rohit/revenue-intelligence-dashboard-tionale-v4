const OffersTable = ({ data }) => {
  return (
    <div className="mt-10">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">
        List of Offers Generated Earlier
      </h2>

      <div className="overflow-x-auto border rounded-lg">
        <table className="min-w-full text-sm">
          <thead className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
            <tr>
              <th className="p-3">
                <input type="checkbox" />
              </th>
              <th className="p-3 text-left">Item ID</th>
              <th className="p-3 text-left">SKU</th>
              <th className="p-3 text-left">Brand</th>
              <th className="p-3 text-left">Details</th>
              <th className="p-3 text-right">NCU Stock</th>
              <th className="p-3 text-right">NCU COW</th>
              <th className="p-3 text-left">ETA</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr
                key={item.itemId}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-3">
                  <input type="checkbox" />
                </td>
                <td className="p-3">{item.itemId}</td>
                <td className="p-3">{item.sku}</td>
                <td className="p-3 font-medium">{item.brand}</td>
                <td className="p-3 max-w-md truncate">
                  {item.details}
                </td>
                <td className="p-3 text-right">{item.ncuStock}</td>
                <td className="p-3 text-right">{item.ncuCow}</td>
                <td className="p-3">{item.eta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OffersTable;
