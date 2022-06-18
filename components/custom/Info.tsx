const Info = ({ title, content }: { title: any; content: any }) => (
  <div className="flex justify-between mb-1">
    <span className="text-sm  mr-4">
      {title}
    </span>
    <span className="text-right flex flex-wrap">
      {content}
    </span>
  </div>
);
export default Info;
