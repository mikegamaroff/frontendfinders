import Link from "next/link";
import React, { FunctionComponent } from "react";
import { useRouter } from "next/router";

type LayoutProps = {
  children: any;
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  const router = useRouter();

  return (
    <div className="mainContainer">
      <header>
        <div>HEADER / NAV</div>
      </header>

      <main>
        <div>{children}</div>
      </main>
      <footer>
        <div className="copyright">
          <div>© 2021 Frontend Finders.</div>
          <div>All Rights Reserved.</div>
        </div>
        Footer
      </footer>
    </div>
  );
};

export default Layout;
