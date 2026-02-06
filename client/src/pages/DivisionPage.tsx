
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import divisionsData from '../pages/divisionsData';

const DivisionPage = () => {
  const { divisionId } = useParams();
  const division = useSelector((state: any) => state.division.selectedDivision);
  // fallback lookup if Redux state is missing
  let divisionName = division && String(division.id) === String(divisionId) ? division.name : null;
  if (!divisionName && divisionId) {
    // fallback: lookup from static data
    const fallback = divisionsData.find((d: any) => String(d.id) === String(divisionId));
    divisionName = fallback ? fallback.name : null;
  }

  return (
    <div className="w-full h-full flex items-center justify-center min-h-[80vh]">
      <div className="bg-white rounded-xl shadow-sm border p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Division Details</h1>
        <p className="text-lg text-gray-700 mb-2">Selected Division ID:</p>
        <span className="text-blue-600 text-xl font-semibold">{divisionId}</span>
        {divisionName && (
          <>
            <p className="mt-4 text-lg text-gray-700">Division Name: <span className="font-semibold text-blue-700">{divisionName}</span></p>
            <p className="mt-2 text-green-600 font-medium">Offer generated for this division.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default DivisionPage;
