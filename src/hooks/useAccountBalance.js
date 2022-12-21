import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useAuthentication } from "../config/auth-context";
import AuthUser from "../config/AuthUser";

export default function useAccountBalance() {
  const handleFetchData = useRef();
  const { userId } = useAuthentication();
  const [accountBalance, setAccountBalance] = useState({});
  const { http } = AuthUser();
  handleFetchData.current = async () => {
    try {
      if (userId) {
        const res = await http?.get(`/account_balances?user_id=${userId}`);
        setAccountBalance(res?.data?.accountBalances[0]);
      }
    } catch (error) {}
  };

  const handleFindQuery = () => {
    handleFetchData.current();
  };

  useEffect(() => {
    handleFindQuery();
  }, [userId]);
  return {
    accountBalance,
    setAccountBalance,
  };
}
