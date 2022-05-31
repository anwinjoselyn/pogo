const Card = ({
  title,
  footer,
  children,
  classNames,
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
}) => {
  return (
    <div className={`${classNames.wrapper ?? 'bg-newBlue-mid'} rounded-md p-2`}>
      {title && <div className={`${classNames.title ?? ''}`}>{title}</div>}
      <div className={`${classNames.body ?? ''}`}>{children}</div>
      {footer && <div className={`${classNames.footer ?? ''}`}>{footer}</div>}
    </div>
  );
};
export default Card;
