import type { NutritionRow } from "@/lib/data";

export default function NutritionTable({
  servingSize,
  rows,
}: {
  servingSize: string;
  rows: NutritionRow[];
}) {
  return (
    <div className="overflow-hidden rounded-10 border border-beige-700">
      <table className="w-full text-left font-open text-16">
        <thead>
          <tr className="bg-green-mountain text-white">
            <th className="px-4 py-3 font-bold">Valori nutriționale</th>
            <th className="px-4 py-3 font-bold">la {servingSize}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.label}
              className={index % 2 === 0 ? "bg-white" : "bg-beige-100"}
            >
              <td className="px-4 py-2.5 text-brown-500">{row.label}</td>
              <td className="px-4 py-2.5 font-bold text-brown-dark">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
