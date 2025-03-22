import React from "react";

export default function Hello({ name }) {

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">

            <h1 className="text-3xl font-bold text-gray-700">
                Hello, {name}!
            </h1>
        </div>
    );
}
