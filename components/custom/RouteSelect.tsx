import dynamic from 'next/dynamic';
import Link from 'next/link';

const NoSSRImage = dynamic(
  () => import('../../components/custom/CustomImage'),
  {
    ssr: false,
  }
);

const RouteSelect = ({
  options,
  selected,
  onSelect,
  classNames,
}: {
  options: any;
  selected: any;
  onSelect: any;
  classNames?: {
    wrapper?: string;
    option?: string;
  };
}) => (
  <ul
    className={`flex flex-wrap rounded-md py-1 items-center justify-center mb-2 ${
      classNames?.wrapper ?? ''
    }`}
  >
    {options.map((option: any) => (
      <li
        key={option.value}
        className={`rounded-md px-3 py-1 font-semibold mx-1 cursor-pointer flex items-center ${
          selected === option.value
            ? 'bg-newBlue-light6 text-white'
            : 'bg-transparent bg-blueGreen-dark text-blueGreen-light5 hover:bg-blueGreen-light1 hover:text-blueGreen-dark'
        } ${classNames?.option ?? ''}`}
        onClick={() => onSelect(option.value)}
        role="presentation"
      >
        <Link href={option.route}>
          {option.icon && (
            <>
              <NoSSRImage src={option.icon} width={20} height={20} alt="icon" />
              <span className="mr-2" />
            </>
          )}
          {option.label}
        </Link>
      </li>
    ))}
  </ul>
);

export default RouteSelect;
