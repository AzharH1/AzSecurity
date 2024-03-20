"use client";
import { ReactElement, useEffect, useState, ComponentType } from "react";
import { validateJwt } from "./validateJwt";

const withAuth = (
  SuccessComponent: ComponentType,
  FailureComponent: ComponentType
) => {
  const AuthComponent = (): ReactElement => {
    const [hasAccess, setHasAccess] = useState<boolean | null>(null);

    useEffect(() => {
      (async () => {
        const isValid = await validateJwt();
        setHasAccess(isValid);
      })();
    }, []);

    if (hasAccess === null) {
      return <div>Loading...</div>;
    }

    if (!hasAccess) {
      return <FailureComponent />;
    }

    return <SuccessComponent />;
  };

  return AuthComponent;
};

export default withAuth;
