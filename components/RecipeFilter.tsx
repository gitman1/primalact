type Option = {
  slug: string;
  name: string;
};

function SelectField({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: Option[];
  value: string;
  onChange: (slug: string) => void;
}) {
  return (
    <div className="relative w-full sm:w-[270px]">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full cursor-pointer appearance-none rounded-[15px] border border-green-base bg-white px-4 py-2 pr-10 font-open text-16 text-brown-500 outline-none"
      >
        <option value="">{label}</option>
        <option value="toate">Toate</option>
        {options.map((option) => (
          <option key={option.slug} value={option.slug}>
            {option.name}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 flex w-[33px] items-center justify-center rounded-r-[15px] bg-green-base">
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path d="M1 1l4 4 4-4" stroke="white" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  );
}

export default function RecipeFilter({
  typeOptions,
  productOptions,
  typeValue,
  productValue,
  onTypeChange,
  onProductChange,
  onApply,
}: {
  typeOptions: Option[];
  productOptions: Option[];
  typeValue: string;
  productValue: string;
  onTypeChange: (slug: string) => void;
  onProductChange: (slug: string) => void;
  onApply: () => void;
}) {
  return (
    <div className="flex flex-col gap-3">
      <SelectField
        label="Tip de rețetă"
        options={typeOptions}
        value={typeValue}
        onChange={onTypeChange}
      />
      <SelectField
        label="Tip de produs"
        options={productOptions}
        value={productValue}
        onChange={onProductChange}
      />
      <button
        type="button"
        onClick={onApply}
        className="w-fit rounded-[15px] bg-green-base px-6 py-2 font-dirty text-18 text-white transition-colors hover:bg-green-mountain"
      >
        Aplică filtrul
      </button>
    </div>
  );
}
