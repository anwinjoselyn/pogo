const RadioSelect = ({
  options,
  selected,
  onSelect,
}: {
  options: any;
  selected: any;
  onSelect: any;
}) => (
  <ul className="flex rounded-md py-1 items-center justify-center mb-2">
    {options.map((option: any, idx: number) => (
      <li
        key={option.value}
        className={`rounded-md px-3 py-1 font-semibold mx-1 cursor-pointer flex items-center ${
          selected === option.value
            ? 'bg-newBlue-light6 text-white'
            : 'bg-transparent text-gray-darkest'
        }`}
        onClick={() => onSelect(option.value)}
        role="presentation"
      >
        {option.label}
      </li>
    ))}
  </ul>
);

export default RadioSelect;
