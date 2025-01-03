import React from "react";

const ForecastProfit = () => {
  const data = [
    { quantity: "1 tree", price: "$75", pricePerTree: "$75", finalPrice: "≈ $300", profit: "300%" },
    { quantity: "10 trees", price: "$619", pricePerTree: "$63", finalPrice: "≈ $3 000", profit: "385%" },
    { quantity: "100 trees", price: "$6 090", pricePerTree: "$61", finalPrice: "≈ $30 000", profit: "393%" },
    { quantity: "300 trees", price: "$16 990", pricePerTree: "$57", finalPrice: "≈ $90 000", profit: "430%" },
    { quantity: "600 trees", price: "$32 990", pricePerTree: "$55", finalPrice: "≈ $180 000", profit: "446%" },
  ];

  return (
    <div className="flex flex-col items-center  p-8">
      <h1 className="text-2xl font-bold mb-6">Forecast profit from trees</h1>
      <div className="overflow-x-auto w-full">
        <table className="table-auto w-full text-center border-collapse">
          <thead>
            <tr className="bg-[#F7F7F7] text-[#949494] text-sm">
              <th className="p-4">Quantity</th>
              <th className="p-4">Price</th>
              <th className="p-4">Price per 1 Tree</th>
              <th className="p-4"></th> {/* Empty header for the arrow */}
              <th className="p-4">Final Price*</th>
              <th className="p-4">Profit</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-[#F7F7F7]"}>
                <td className="p-4">{row.quantity}</td>
                <td className="p-4">{row.price}</td>
                <td className="p-4">{row.pricePerTree}</td>
                <td className="p-2"> {/* Reduced padding */}
                  <div className="flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-gray-400 opacity-70"
                      width="100" // Slightly smaller width
                      height="18" // Slightly smaller height
                      viewBox="0 0 100 18" // Adjusted viewBox to match smaller size
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="0" y1="9" x2="75" y2="9" /> {/* Shortened horizontal line */}
                      <polyline points="70,5 75,9 70,13" /> {/* Adjusted arrowhead */}
                    </svg>
                  </div>
                </td>
                <td className="p-4">{row.finalPrice}</td>
                <td className="p-4">{row.profit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ForecastProfit;
