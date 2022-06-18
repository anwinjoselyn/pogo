export const Switch = ({
  on,
  onChange,
  classNames,
  label,
}: {
  on: boolean;
  onChange: (on: boolean) => void;
  classNames?: {
    wrapper?: string;
    label?: string;
  };
  label?: any;
}) => (
  <div
    className={`flex items-center justify-center cursor-pointer ${classNames?.wrapper ?? ''}`}
    role="presentation"
    onClick={() => onChange(!on)}
  >
    <span
      className={`material-icons text-4xl ${
        on ? '' : ''
      }`}
    >
      {on ? 'toggle_on' : 'toggle_off'}
    </span>
    {label && <span className="flex items-center justify-center ml-3">{label}</span>}
  </div>
);

export default Switch;
