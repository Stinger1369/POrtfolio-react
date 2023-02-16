import React from "react";

function Formations(props) {
  const datas = props.datas;

  return (
    <div className="cursus mb-3 m-4">
      <h2 className="text-red-500 text-lg font-medium">Formations</h2>
      {datas.map((item) => (
        <div className="grid grid-cols-3 gap-4" key={item.id}>
          <div className="col-span-1">
            <p className="text-sm font-medium text-gray-500">{item.date}</p>
          </div>
          <div className="col-span-2">
            <h3 className="text-lg font-medium">{item.title}</h3>
            <p className="text-sm font-medium text-gray-500">{item.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Formations;
