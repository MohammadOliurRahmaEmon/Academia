import React from "react";

const NoteFound = () => {
  return (
    // It's Use for when client going wrong path or link it will show up on website
    <div className="flex flex-col items-center justify-center py-24 lg:py-12 md:px-16 px-4">
      <h1 className="text-7xl font-bold text-indigo-700 pb-2">⚠️404</h1>
      <h2 className="lg:text-5xl md:text-4xl text-2xl font-bold text-gray-800 py-2">
        OOPS!Page Does Not Exist
      </h2>
      <p className="text-base text-gray-600 py-2 text-center">
        Sorry! We could not find you the page you are looking for. Please check
        URL in address bar and try again.
      </p>

      <div className="hidden md:grid place-content-center lg:w-1/3 w-1/2">
        <img
          src="https://i.ibb.co/JjmY1tm/tuk-component.png"
          alt="girl in an underconstruction site"
        />
      </div>
      <div className="md:hidden grid place-content-center">
        <img
          src="https://i.ibb.co/zxQ6hyF/undraw-warning-cyit-1-1.png"
          alt="girl in an underconstruction site"
        />
      </div>
    </div>
  );
};

export default NoteFound;
