import { useEffect, useCallback } from "react";
import { useAtom } from "jotai";
import { userAtom } from "@/context/user.context";
export const useUser = () => {
  const [user, setUser] = useAtom(userAtom);

  const getUserId = useCallback(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      setUser({ userId });
    }
  }, [setUser]);

  const setUserId = (userId: string) => {
    localStorage.setItem("userId", userId);
    setUser({ userId });
  };

  const generateRandomUserId = () => {
    return "reader_" + Math.random().toString(15).substring(2, 8);
  };

  useEffect(() => {
    getUserId();
  }, [getUserId]);

  return { user, getUserId, setUserId, generateRandomUserId };
};
