const url = "https://randomuser.me/api/?results=24";

const data = async () => {
  try {
    const json = await (await fetch(url)).json();
    return json;
  } catch (err) {
    console.log(err.message);
  }
};

const user_list = data().then((x) => x.results);

const Profile_pic = () => {
  return user_list
    .then((x) => x[0].gender)
    .catch((err) => console.log(err.message));
};

export { Profile_pic };
