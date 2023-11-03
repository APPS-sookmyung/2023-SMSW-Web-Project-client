import "./PageLayout.css";

const PageLayout = ({ header, footer, children }) => {
  return (
    <div className="Layout">
      {header}
      {children}
      {footer}
    </div>
  );
};

export default PageLayout;
