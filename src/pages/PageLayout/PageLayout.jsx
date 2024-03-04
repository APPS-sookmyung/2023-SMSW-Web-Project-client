import * as S from "./PageLayout.style.jsx";

const PageLayout = ({ header, footer, children }) => {
  return (
    <S.Layout>
      {header}
      {children}
      {footer}
    </S.Layout>
  );
};

export default PageLayout;
