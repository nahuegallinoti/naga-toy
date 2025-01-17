import React from "react";

type Props = {
  width?: string;
  height?: string;
  colorFrom?: string;
  colorVia?: string;
  colorTo?: string;
};

const Divider = ({
  width = "w-full",
  colorFrom = "from-purple-400",
  colorTo = "to-orange-400",
  height = "h-2",
}: Props) => {
  return (
    <div className={`flex columns-1 md:columns-2 rounded-2xl`}>
      <div
        className={`${width} ${height} rounded-2xl bg-gradient-to-r ${colorFrom} ${colorTo}`}
      ></div>
    </div>
  );
};

export default Divider;
