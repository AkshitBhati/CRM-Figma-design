import React from "react";
import Today from "../../component/highlights/today/Today";
import Completed from "../../component/highlights/completed/Completed";
import Scheduled from "../../component/highlights/scheduled/Scheduled";

const HighlightPage = () => {
  return (
    <div>
      <div>
        {/* today highlights  */}
        <Today />
      </div>

      <div>
        {/* Completed highlights  */}

        <Completed />
      </div>

      <div>
        {/* Scheduled highlights  */}

        <Scheduled />
      </div>
    </div>
  );
};

export default HighlightPage;
