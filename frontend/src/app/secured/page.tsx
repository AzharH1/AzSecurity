"use client";
import { useEffect, useState } from "react";
import validateJwt from "./validateJwt";

function SecuredPage() {
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);
  useEffect(() => {
    (async () => {
      setHasAccess(await validateJwt());
    })();
  }, []);
  if (hasAccess === null) {
    return <div>Loading...</div>;
  }
  if (!hasAccess) {
    return <>Error 404 Could not find page</>;
  }
  return <>Congrats You have access the secure webpage.</>;
}

export default SecuredPage;
