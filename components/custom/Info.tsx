const Info = ({ title, content }: { title: any; content: any }) => (
  <div className="flex justify-between mb-1">
    <span className="text-sm text-blueGreen-mid2 dark:text-blueGreen-light3 mr-4">
      {title}
    </span>
    <span className="text-newBlue-darker dark:text-newBlue-light1 text-right">
      {content}
    </span>
  </div>
);
export default Info;
