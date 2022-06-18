import dynamic from 'next/dynamic';

const NoSSRImage = dynamic(
  () => import('../../components/custom/CustomImage'),
  {
    ssr: false,
  }
);

const MultiSelect = ({
  options,
  onSelect,
  classNames,
}: {
  options: any;
  onSelect: any;
  classNames?: {
    wrapper?: string;
    option?: string;
  };
}) => {
  const keys = Object.keys(options);
  return (
    <ul
      className={`flex flex-wrap rounded-md py-1 items-center justify-center mb-2 ${
        classNames?.wrapper ?? ''
      }`}
    >
      {keys.map((key: any) => (
        <li
          key={key}
          className={`rounded-md px-3 py-1 mx-1 cursor-pointer flex items-center justify-center ${
            options[key]?.selected
              ? 'bg-new-general-1 text-new-light-4'
              : 'text-new-light-1'
          } ${classNames?.option ?? ''}`}
          onClick={() => onSelect(key)}
          role="presentation"
        >
          {options[key]?.icon && (
            <>
              <NoSSRImage
                src={options[key]?.icon}
                width={20}
                height={20}
                alt="icon"
              />
              <span className="mr-2" />
            </>
          )}
          {options[key]?.label}
        </li>
      ))}
    </ul>
  );
};

export default MultiSelect;
