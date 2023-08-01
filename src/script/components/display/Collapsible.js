import { useRef } from "react";

import "stylesheets/components/display/collapsible.scss";

function Collapsible({ children, open }) {
  const contentRef = useRef();

  return (
    <div
      className="collapsible-container"
      ref={contentRef}
      style={
        !open
          ? { height: 0 }
          : { height: contentRef.current.scrollHeight + "px" }
      }
    >
      {children}
    </div>
  );
}

export default Collapsible;
