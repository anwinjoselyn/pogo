import dynamic from 'next/dynamic';

const NoSSRImage = dynamic(
  () => import('../../components/custom/CustomImage'),
  {
    ssr: false,
  }
);

const Tag = ({ label, icon }: { label: string; icon?: string }) => (
  <div className="capitalize flex items-center px-2 py-1 justify-between border border-blueGreen-mid2 rounded-md text-xs">
    {icon && (
      <>
        <NoSSRImage src={icon} width={12} height={12} alt="icon" />
        <span className="mr-2" />
      </>
    )}
    {label}
  </div>
);

export default Tag;
