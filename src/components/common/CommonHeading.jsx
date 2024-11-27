import React from 'react'

const CommonHeading = ({ heading, headingSpan }) => {
  return (
    <div>
      <h2 className="font-bold text-4xl">
        {heading}{" "}
        <span className="font-normal text-2xl text-blue-500">
          {headingSpan}
        </span>
      </h2>
    </div>
  );
};

export default CommonHeading
