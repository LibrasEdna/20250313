"use client";
import { useState, useEffect } from "react";

export default function Information() {
  const [username, setUserName] = useState(null);
  const [birthday, setBirthday] = useState(null);
  const [sex, setSex] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [point, setPoint] = useState(null);

  const [userData, setUserData] = useState({
    username: "Kelly abc",
    birthday: "2000年4月1日",
    gender: "女性",
    email: "Kellyabc@gmail.com",
    phone: "9792 7761",
    points: 300,
    tags: [
      { name: "Sexy Baby", level: 20, color: "bg-pink-400" },
      { name: "Hip Hop Guy", level: 10, color: "bg-orange-400" },
    ],
  });

  // useEffect(() => {
  //   const token = localStorage.getItem("token");

  //   async function fetchUser() {
  //     try {
  //       const res = await fetch("http://localhost:3030/member/information", {
  //         method: "POST",
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });

  //       if (!res.ok) {
  //         throw new Error("Failed to fetch");
  //       }

  //       const data = await res.json();
  //     } catch (err) {
  //       console.log(err.message);
  //     }
  //   }

  //   fetchUser();
  // }, []);

  //     <div className="flex flex-col justify-center border-2 w-96 h-96 shadow-amber-50">
  return (
    <div className="w-full max-w-2xl mx-auto p-4 space-y-4 border-amber-2">
      {/* <div className="border-solid border-amber-500 rounded-sm border-2 mb-2">
        <div>Basic Information:</div>
        <div>Username: {username ? username : "Not Provided"}</div>
        <div>Date of Birthday: {birthday ? birthday : "Not Provided"}</div>
        <div>Gender: {sex ? sex : "Not Provided"}</div>
      </div>
      <div className="border-solid border-amber-500 rounded-sm border-2 mb-2">
        <div>Contact Information:</div>
        <div>Email: {email ? email : "Not Provided"}</div>
        <div>Phone: {phone ? phone : "Not Provided"}</div>
      </div>
      <div className="border-solid border-amber-500 rounded-sm border-2 mb-2">
        <div>Purchase History:</div>
        <div>Reward Points: {point ? point : 0}</div>
        <div>Special Tags: "None"</div>
      </div> */}

      {/* Basic Information */}
      <div className="bg-white rounded-lg p-6 border-2">
        <h2 className="text-xl font-semibold mb-6">Basic Information</h2>
        <div className="flex items-center justify-center mb-8">
          <div className="avatar">
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex items-center border-b-2 border-gray-300 pb-4 pl-3 pr-3">
            <span className="text-gray-500 w-24">Name:</span>
            <span className="flex-grow px-4">{userData.username}</span>
            <button
              className="btn btn-sm normal-case bg-gray-500 hover:bg-gray-600 text-white border-none rounded-md"
              onClick={() => handleEdit("username")}
            >
              Edit
            </button>
          </div>

          <div className="flex items-center border-b-2 border-gray-300 pb-4 pl-3 pr-3">
            <span className="text-gray-500 w-24">Date of Birth:</span>
            <span className="flex-grow px-4">{userData.birthday}</span>
            <button
              className="btn btn-sm normal-case bg-gray-500 hover:bg-gray-600 text-white border-none rounded-md"
              onClick={() => handleEdit("birthday")}
            >
              Edit
            </button>
          </div>

          <div className="flex items-center pb-2 pl-3 pr-3">
            <span className="text-gray-500 w-24">Gender:</span>
            <span className="flex-grow px-4">{userData.gender}</span>
            <button
              className="btn btn-sm normal-case bg-gray-500 hover:bg-gray-600 text-white border-none rounded-md"
              onClick={() => handleEdit("gender")}
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white rounded-lg p-6 border-2">
        <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
        <div className="space-y-6">
          <div className="flex items-center border-b-2 border-gray-300 pb-4 pl-3 pr-3">
            <span className="text-gray-500 w-24">Email</span>
            <span className="flex-grow px-4">{userData.email}</span>
            <button
              className="btn btn-sm normal-case bg-gray-500 hover:bg-gray-600 text-white border-none rounded-md"
              onClick={() => handleEdit("email")}
            >
              Edit
            </button>
          </div>

          <div className="flex items-center pb-2 pl-3 pr-3">
            <span className="text-gray-500 w-24">Phone</span>
            <span className="flex-grow px-4">{userData.phone}</span>
            <button
              className="btn btn-sm normal-case bg-gray-500 hover:bg-gray-600 text-white border-none rounded-md"
              onClick={() => handleEdit("phone")}
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      {/* Purchase Rewards */}
      <div className="bg-white rounded-lg p-6 border-2">
        <h2 className="text-xl font-semibold mb-6">Purchase Rewards</h2>
        <div className="space-y-6">
          <div className="flex items-center border-b-2 border-gray-300 pb-4 pl-3 pr-3">
            <span className="text-gray-500 w-24">Reward Points</span>
            <span className="flex-grow px-4">{userData.points}</span>
            <span className="text-gray-500">1Score = $1</span>
          </div>

          <div className="pb-2">
            <span className="text-gray-500 block mb-4 pl-3 pr-3">
              Special Tags
            </span>
            <div className="flex flex-wrap gap-3">
              {userData.tags.map((tag, index) => (
                <div
                  key={index}
                  className={`${tag.color} text-white px-4 py-2 rounded-full flex items-center gap-2`}
                >
                  <span>{tag.name}</span>
                  <span className="text-sm">Level: {tag.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copy from the Daisy UI */}

      {/* <div className="card w-108 bg-base-100 card-lg border-gray-400 border-1">
        <div className="card-body">
          <h2 className="card-title border-b border-gray-300 pb-2 mb-2">
            Basic Information
          </h2>
          <div className="border-b border-gray-300 pb-2 mb-2">
            Username: {username ? username : "Not Provided"}
          </div>
          <div className="border-b border-gray-300 pb-2 mb-2">
            Date of Birthday: {birthday ? birthday : "Not Provided"}
          </div>
          <div>Gender: {sex ? sex : "Not Provided"}</div>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Edit</button>
          </div>
        </div>
      </div> */}
    </div>
  );
}
