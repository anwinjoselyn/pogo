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
      <thead className={`${classNames?.header ?? ''}`}>
        <tr className="bg-blueGreen-light6 rounded-md">
          {headerData.map((header: any) => (
            <th key={header} className="text-left text-blueGreen-dark p-2">
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
