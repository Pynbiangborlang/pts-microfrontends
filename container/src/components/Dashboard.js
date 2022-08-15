import React, { useEffect, useRef } from "react";
import { mount } from "dashboard/Dashboard";
import history from "history/browser";

const Dashboard = () => {
  const ref = useRef(null);
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current);
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} className="pts-dashboard-app" />;
};

export default Dashboard;
