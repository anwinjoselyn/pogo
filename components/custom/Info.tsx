const Info = ({ title, content }: { title: any; content: any }) => (
  <div className="flex justify-between">
    <span className="text-sm text-blueGreen-mid2 dark:text-blueGreen-light3">
      {title}
    </span>
    <span className="text-newBlue-darker dark:text-newBlue-light1">
      {content}
    </span>
  </div>
);
export default Info;
