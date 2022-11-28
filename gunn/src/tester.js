const url = "https://randomuser.me/api/?results=24";

const data = async () => {
  try {
    const json = await (await fetch(url)).json();
    return json;
  } catch (err) {
    console.log(err.message);
  }
};

const nameplayer = data().then((x) =>
  console.log(x.results[0], x.results[0].name.first, x.results[0].name.last)
);

nameplayer;
