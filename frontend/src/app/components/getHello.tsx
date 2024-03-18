type ResponseData = {
  message: string;
};

async function getServerSideProps(): Promise<ResponseData> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/hello`);
  console.log(res.status);
  return res.json();
}

export default async function GetHello() {
  const repo = await getServerSideProps();
  return <div>{repo.message}</div>;
}
