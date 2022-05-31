import Link from 'next/link';

const Card = ({
  title,
  footer,
  children,
  classNames,
  size = 'default',
  route = '',
}: {
  title: string;
  footer: any;
  children: any;
  classNames: {
    wrapper?: string;
    title?: string;
    body?: string;
    footer?: string;
  };
  size?: string;
  route?: string;
}) => {
  let sizeClass = '';
  if (size) {
    switch (size) {
      case 'small':
        sizeClass = 'w-40 h-40';
        break;
      case 'default':
        sizeClass = 'w-60 h-60';
        break;
      case 'large':
        sizeClass = 'w-80 h-80';
        break;
    }
  }
  return (
    <Link href={route}>
      <div
        className={`${
          classNames.wrapper ?? 'bg-newBlue-mid'
        } rounded-md p-2 ${sizeClass} ${
          route === '' ? 'disabled' : 'cursor-pointer'
        }`}
      >
        {title && (
          <div className={`text-center p-2 ${classNames.title ?? ''}`}>
            {title}
          </div>
        )}
        <div className={`${classNames.body ?? ''}`}>{children}</div>
        {footer && <div className={`${classNames.footer ?? ''}`}>{footer}</div>}
      </div>
    </Link>
  );
};
export default Card;
