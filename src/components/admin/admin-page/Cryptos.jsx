import axios from "axios";
import React, { useState } from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import DeleteIcon from "../../../assets/icons/DeleteIcon";
import EditIcon from "../../../assets/icons/EditIcon";
import AuthUser from "../../../config/AuthUser";
import { baseURL } from "../../../config/getConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cryptos = () => {
  const { token } = AuthUser();
  const [cryptos, setCryptos] = useState([]);
  const [addCrypto, setAddCrypto] = useState(false);
  const [editCrypto, setEditCrypto] = useState(false);
  const [posEditCrypto, setPosEditCrypto] = useState();
  const [textCrypto, setTextCrypto] = useState();
  const [textEditCrypto, setTextEditCrypto] = useState();
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${baseURL}/api/cryptos`);
        setCryptos(res.data.cryptos);
      } catch (error) {}
    })();
  }, [reducerValue]);

  const handleDeleteCrypto = async (id) => {
    console.log(id);
    try {
      console.log(`${baseURL}/api/cryptos/${id}`);
      await axios.delete(`${baseURL}/api/cryptos/${id}`, {
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

  const handleAddNewCrypto = async () => {
    try {
      await axios.post(
        `${baseURL}/api/cryptos`,
        {
          name: textCrypto,
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

  const handleSaveEditCrypto = async () => {
    try {
      console.log(`${baseURL}/api/cryptos/${posEditCrypto}`);
      await axios.put(
        `${baseURL}/api/cryptos/${posEditCrypto}`,
        {
          name: textEditCrypto,
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
      <div className="w-full max-w-[800px] mx-auto left-[320px] transition-all flex  flex-col mt-[50px]">
        <span className="font-bold mb-5 text-[20px]">CRYPTOS</span>
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
            {cryptos.length > 0 &&
              cryptos.map((item) => (
                <tbody key={item.id}>
                  <tr>
                    <th className="font-[400] py-3">{item.id}</th>
                    <th className="font-[400] py-3">{item.name}</th>
                    <th className="font-[400] py-3">
                      <div className="w-full flex items-center justify-center">
                        <div
                          onClick={() => {
                            setPosEditCrypto(item.id);
                            setEditCrypto(true);
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
                            handleDeleteCrypto(item.id);
                          }}
                        >
                          <DeleteIcon></DeleteIcon>
                        </div>
                      </div>
                    </th>
                  </tr>
                  {posEditCrypto === item.id && editCrypto === true && (
                    <tr>
                      <th className="font-[400] py-3"></th>
                      <th className="font-[400] py-3">
                        <input
                          type="text"
                          placeholder={item.name}
                          onChange={(e) => setTextEditCrypto(e.target.value)}
                          className="px-5 py-4 border border-gray-700 border-solid rounded-[8px] outline-none bg-transparent text-center"
                        />
                      </th>
                      <th className="font-[400] py-3">
                        <div
                          className="w-full flex items-center justify-center cursor-pointer"
                          onClick={() => setEditCrypto(false)}
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
                            handleSaveEditCrypto();
                            setEditCrypto(false);
                          }}
                        >
                          Save
                        </div>
                      </th>
                    </tr>
                  )}
                </tbody>
              ))}
            {addCrypto === true && (
              <tbody>
                <tr>
                  <th className="font-[400] py-3"></th>
                  <th className="font-[400] py-3">
                    <input
                      type="text"
                      placeholder="Enter new crypto"
                      onChange={(e) => setTextCrypto(e.target.value)}
                      className="px-5 py-4 border border-gray-700 border-solid rounded-[4px] outline-none bg-transparent text-center"
                    />
                  </th>
                </tr>
              </tbody>
            )}
          </table>
          {addCrypto === true ? (
            <div className="flex gap-x-6 w-[300px] ml-auto">
              <button
                onClick={() => setAddCrypto(false)}
                className="top-[10%] right-0 mt-5 w-full inline-flex items-center justify-center px-8 py-4 font-sans font-semibold text-white bg-[#ed3e50] rounded-lg h-[53px]"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleAddNewCrypto();
                  setAddCrypto(false);
                }}
                className="top-[10%] right-0 mt-5 w-full inline-flex items-center justify-center px-8 py-4 font-sans font-semibold text-white bg-[#4582ff] rounded-lg h-[53px]"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="w-full ml-auto max-w-[200px]">
              <button
                onClick={() => setAddCrypto(true)}
                className="top-[10%] right-0 mt-5 w-full inline-flex items-center justify-center px-8 py-4 font-sans font-semibold text-white bg-[#4582ff] rounded-lg h-[53px]"
              >
                + Add New Item
              </button>
            </div>
          )}
        </div>
      </div>
      <ToastContainer autoClose={800} />
    </>
  );
};

export default Cryptos;
