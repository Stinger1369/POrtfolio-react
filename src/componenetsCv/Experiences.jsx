import React from "react";

function Experiences(props) {
  const datas = props.datas;

  return (
    <div className="cursus m-4">
      <h2 className="text-red-600 text-lg font-medium mb-2">
        Expériences professionnelles
      </h2>
      {datas.map((item) => (
        <div className="grid grid-cols-3 gap-4" key={item.id}>
          <div className="col-span-1">
            <p className="text-sm font-medium text-gray-600">{item.date}</p>
          </div>
          <div className="col-span-2">
            <h3 className="text-md font-medium mb-1">{item.title}</h3>
            <p className="text-sm font-medium text-gray-200 mb-2">
              {item.location}
            </p>
            <p className="text-sm font-normal text-gray-700 mb-2">
              {item.text}
            </p>
            <ul className="list-disc list-inside mb-4">
              {item.missions.map((mission) => (
                <li
                  className="text-sm font-normal text-gray-700"
                  key={mission.id}
                >
                  {mission.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experiences;
