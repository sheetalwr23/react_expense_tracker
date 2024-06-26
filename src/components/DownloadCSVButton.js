import React from "react";
import { useSelector } from "react-redux";

const DownloadCSVButton = () => {
  const expenses = useSelector((state) => state.expenses.expenses);

  const downloadCSV = () => {
    const csvContent = [
      ["Description", "Amount"],
      ...expenses.map((exp) => [exp.description, exp.amount]),
    ]
      .map((e) => e.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "expenses.csv";
    link.click();
  };

  return <button onClick={downloadCSV}>Download CSV</button>;
};

export default DownloadCSVButton;
