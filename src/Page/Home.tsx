import React from "react";
import Layout from "../Components/Layout";
import Input from "../Components/Input";
import { AiFillGithub } from "react-icons/ai";
import Share from "../Components/Share";

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="flex justify-between items-center mt-2 mx-3">
        <p className="text-gray-500">Made by Kittipod Lambangchang (Kittonn)</p>
        <a
          className="text-gray-500"
          href="https://github.com/Kittonn"
          rel="noopener noreferrer"
          target="_blank"
        >
          <AiFillGithub size={30} />
        </a>
      </div>
      <div className="flex flex-col min-h-[90vh] justify-center items-center font-[Mitr]">
        <h1 className="text-center text-4xl md:text-7xl font-bold mb-5">
          GameMongGamer
        </h1>
        <Input />
        <Share />
      </div>
    </Layout>
  );
};

export default Home;
