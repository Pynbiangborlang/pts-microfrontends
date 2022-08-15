import { mount } from "helloWorld/HelloWorld";
import React, { useRef, useEffect } from "react";
import { createMemoryHistory } from "history";

const history = createMemoryHistory();

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current);
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} className="helloworld-container" />;
};
