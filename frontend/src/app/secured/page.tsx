"use client";
import Success from "./success";
import Failure from "../components/failure";
import withAuth from "../components/auth/authhoc";

const SecuredSuccess = withAuth(Success, Failure);

const SecuredPage = () => {
  return (
    <div>
      <SecuredSuccess />
    </div>
  );
};

export default SecuredPage;
