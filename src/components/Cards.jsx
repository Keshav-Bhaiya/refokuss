import React from "react";
import Card from "./Card";

function Cards() {
  return (
    <div className="w-full p-4 md:p-0">
      <div className="max-w-screen-xl mx-auto py-6 gap-4 flex flex-col md:flex-row">
        <Card width="md:basis-1/3 w-full" start={false} para={true} />
        <Card width="md:basis-2/3 w-full" start={true} para={false} hover="true" />
      </div>
    </div>
  );
}
export default Cards;