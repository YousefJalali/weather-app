"use client";

import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import { FiCheck, FiPlus } from "react-icons/fi";
// import styles from '@/styles/Details.module.css'

function Button({ isAdded = false, ...props }) {
  return (
    <button
      className={`focus:ring-3 absolute top-0 right-0 inline-flex items-center rounded-lg px-3 py-2 text-center text-xs  font-medium focus:outline-none focus:ring-brand-primary-200 ${
        isAdded
          ? "bg-brand-primary text-layout-level0 hover:bg-brand-primary-800"
          : "bg-brand-primary-200 text-brand-primary hover:bg-brand-primary-200"
      }`}
      {...props}
    >
      {isAdded ? "Added to list" : "Add to list"}
      {isAdded ? (
        <FiCheck className="ml-2 -mr-1 h-5 w-5" />
      ) : (
        <FiPlus className="ml-2 -mr-1 h-5 w-5" />
      )}
    </button>
  );
}

export default function AddButton({ city }: { city: string }) {
  const { refresh } = useRouter();
  const [cookie, setCookie] = useCookies(["fav-cities"]);

  const existingCookie = cookie["fav-cities"] || [];

  const addHandler = () => {
    const updatedCookie = [...existingCookie, city];

    setCookie("fav-cities", JSON.stringify(updatedCookie), {
      path: "/",
      maxAge: 3600, // Expires after 1hr
      sameSite: true,
    });

    refresh();
  };

  const removeHandler = () => {
    setCookie(
      "fav-cities",
      JSON.stringify(cookie["fav-cities"].filter((ex: string) => ex !== city)),
      {
        path: "/",
        maxAge: 3600, // Expires after 1hr
        sameSite: true,
      }
    );

    refresh();
  };

  return existingCookie.includes(city) ? (
    <Button isAdded onClick={removeHandler} />
  ) : (
    <Button onClick={addHandler} />
  );
}
