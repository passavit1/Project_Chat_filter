const url = "https://randomuser.me/api/?results=24";
const convertData = async () => {
  const json = await (await fetch(url)).json();
  return json;
};

const json = convertData();
const data = await json.then((x) => x);

export { data };
