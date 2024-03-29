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
      <header>{/*        <div>HEADER / NAV</div> */}</header>

      {children}

      <footer>
        <div className="copyright">
          <div>© 2021 Frontend Finders.</div>
          <div>All Rights Reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
