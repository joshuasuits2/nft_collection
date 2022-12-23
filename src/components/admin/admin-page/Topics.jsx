import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import DeleteIcon from "../../../assets/icons/DeleteIcon";
import EditIcon from "../../../assets/icons/EditIcon";
import AuthUser from "../../../config/AuthUser";
import { baseURL } from "../../../config/getConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useReducer } from "react";

const Topics = () => {
  const { token } = AuthUser();
  const [topics, setTopics] = useState([]);
  const [addTopic, setAddTopic] = useState(false);
  const [editTopic, setEditTopic] = useState(false);
  const [posEditTopic, setPosEditTopic] = useState();
  const [textTopic, setTextTopic] = useState();
  const [textEditTopic, setTextEditTopic] = useState();
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${baseURL}/api/topics`);
        setTopics(res.data.topics);
      } catch (error) {}
    })();
  }, [reducerValue]);

  const handleDeleteTopic = async (id) => {
    console.log(id);
    try {
      console.log(`${baseURL}/api/topics/${id}`);
      await axios.delete(`${baseURL}/api/topics/${id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      forceUpdate();
      toast.success("Delete successful!");
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddNewTopic = async () => {
    try {
      await axios.post(
        `${baseURL}/api/topics`,
        {
          name: textTopic,
          image_url: "No image",
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Update successful!");
      forceUpdate();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSaveEditTopic = async () => {
    try {
      console.log(`${baseURL}/api/topics/${posEditTopic}`);
      await axios.put(
        `${baseURL}/api/topics/${posEditTopic}`,
        {
          name: textEditTopic,
          image_url: "No image",
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      forceUpdate();
      toast.success("Update successful!");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {topics?.length <= 0 ? (
        <div className="left-[320px] transition-all fixed inset-0 mt-[200px]">
          <div className="spinner">
            <div
              className="double-bounce1"
              style={{ backgroundColor: "#eee" }}
            ></div>
            <div
              className="double-bounce2"
              style={{ backgroundColor: "#eee" }}
            ></div>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-[800px] mx-auto left-[320px] transition-all flex  flex-col mt-[50px]">
          <span className="font-bold mb-5 text-[20px]">TOPICS</span>
          <div className="bg-[#0d1520] w-full p-5 rounded-xl">
            <table style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th className="font-[500] py-3">Id</th>
                  <th className="font-[500] py-3">Name</th>
                  <th className="font-[500] py-3">Edit</th>
                  <th className="font-[500] py-3">Delete</th>
                </tr>
              </thead>
              {topics?.length > 0 &&
                topics.map((item) => (
                  <tbody key={item.id}>
                    <tr>
                      <th className="font-[400] py-3">{item.id}</th>
                      <th className="font-[400] py-3">{item.name}</th>
                      <th className="font-[400] py-3">
                        <div className="w-full flex items-center justify-center">
                          <div
                            onClick={() => {
                              setPosEditTopic(item.id);
                              setEditTopic(true);
                            }}
                          >
                            <EditIcon></EditIcon>
                          </div>
                        </div>
                      </th>
                      <th className="font-[400] py-3">
                        <div className="w-full flex items-center justify-center">
                          <div
                            onClick={() => {
                              handleDeleteTopic(item.id);
                            }}
                          >
                            <DeleteIcon></DeleteIcon>
                          </div>
                        </div>
                      </th>
                    </tr>
                    {posEditTopic === item.id && editTopic === true && (
                      <tr>
                        <th className="font-[400] py-3"></th>
                        <th className="font-[400] py-3">
                          <input
                            type="text"
                            placeholder={item.name}
                            onChange={(e) => setTextEditTopic(e.target.value)}
                            className="px-5 py-4 border border-gray-700 border-solid rounded-[8px] outline-none bg-transparent text-center"
                          />
                        </th>
                        <th className="font-[400] py-3">
                          <div
                            className="w-full flex items-center justify-center cursor-pointer"
                            onClick={() => setEditTopic(false)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="#eee"
                              className="bi bi-x-circle-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                            </svg>
                          </div>
                        </th>
                        <th className="font-[400] py-3">
                          <div
                            className="w-full flex items-center justify-center cursor-pointer text-[14px] font-bold"
                            onClick={() => {
                              handleSaveEditTopic();
                              setEditTopic(false);
                            }}
                          >
                            Save
                          </div>
                        </th>
                      </tr>
                    )}
                  </tbody>
                ))}
              {addTopic === true && (
                <tbody>
                  <tr>
                    <th className="font-[400] py-3"></th>
                    <th className="font-[400] py-3">
                      <input
                        type="text"
                        placeholder="Enter new topic"
                        onChange={(e) => setTextTopic(e.target.value)}
                        className="px-5 py-4 border border-gray-700 border-solid rounded-[4px] outline-none bg-transparent text-center"
                      />
                    </th>
                  </tr>
                </tbody>
              )}
            </table>
            {addTopic === true ? (
              <div className="flex gap-x-6 w-[300px] ml-auto">
                <button
                  onClick={() => setAddTopic(false)}
                  className="top-[10%] right-0 mt-5 w-full inline-flex items-center justify-center px-8 py-4 font-sans font-semibold text-white bg-[#ed3e50] rounded-lg h-[53px]"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    handleAddNewTopic();
                    setAddTopic(false);
                  }}
                  className="top-[10%] right-0 mt-5 w-full inline-flex items-center justify-center px-8 py-4 font-sans font-semibold text-white bg-[#4df6a1] rounded-lg h-[53px]"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="w-full ml-auto max-w-[200px]">
                <button
                  onClick={() => setAddTopic(true)}
                  className="top-[10%] right-0 mt-5 w-full inline-flex items-center justify-center px-8 py-4 font-sans font-semibold text-white bg-[#4df6a1] rounded-lg h-[53px]"
                >
                  + Add New Item
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      <ToastContainer autoClose={800} />
    </>
  );
};

export default Topics;
