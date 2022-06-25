const Table = ({
  headerData,
  rows,
  footerData,
  classNames,
}: {
  headerData: any[];
  rows: any;
  footerData?: any[];
  classNames?: {
    wrapper?: string;
    header?: string;
    body?: string;
    footer?: string;
  };
}) => {
  return (
    <table className={`table-auto w-full ${classNames?.wrapper ?? ''}`}>
      <thead className={`${classNames?.header ?? 'bg-new-light-1 dark:text-new-dark-6'}`}>
        <tr className="rounded-md">
          {headerData.map((header: any) => (
            <th key={header} className="text-left p-2">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={`${classNames?.body ?? ''}`}>{rows}</tbody>
      {footerData && (
        <tfoot className={`${classNames?.footer ?? ''}`}>
          <tr>
            {footerData.map((footer: any) => (
              <td key={footer.label}>{footer.label}</td>
            ))}
          </tr>
        </tfoot>
      )}
    </table>
  );
};

export default Table;
