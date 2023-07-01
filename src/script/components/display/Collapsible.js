import { useRef } from "react";

import "stylesheets/components/display/collapsible.scss";

function Collapsible({ children, open }) {
  const contentRef = useRef();

  return (
    <div>
      <div
        className="collapsible-container"
        ref={contentRef}
        style={
          !open
            ? { height: contentRef.current.scrollHeight + "px" }
            : { height: 0 }
        }
      >
        {children}
      </div>
    </div>
  );
}

export default Collapsible;
