import React from "react";
import { Eye, Globe } from "lucide-react";

interface CardProps {
  name: string;
  description: string;
  tools: string;
  github: string;
  preview: string;
}

const Card: React.FC<CardProps> = ({
  name,
  description,
  tools,
  github,
  preview,
}) => {
  const toolsArray = tools.split(", ");

  return (
    <div className="h-64 flex flex-col justify-between p-5 border-2 border-gray-800 rounded-lg">
      <div>
        <h3 className="font-semibold text-xl text-center mb-4">{name}</h3>

        <div className="flex flex-wrap gap-x-3 gap-y-2">
          {toolsArray.map((tool, index) => (
            <p
              key={index}
              className="text-gray-300 text-sm bg-gray-700 px-2 rounded-sm"
            >
              {tool}
            </p>
          ))}
        </div>

        <p className="mt-2">{description}</p>
      </div>

      <div className="flex gap-4 mt-2">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <button className="flex items-center bg-white text-black rounded-md px-2 text-xs hover:bg-gray-200">
            <Globe className="w-3 mr-2" />
            Github
          </button>
        </a>
        {preview && (
          <a href={preview} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center bg-white text-black rounded-md px-2 text-xs hover:bg-gray-200">
              <Eye className="w-3.5 mr-2" />
              Preview
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;