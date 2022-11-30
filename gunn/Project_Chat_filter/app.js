const url = "https://randomuser.me/api/?results=24";
const getUser = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const json = await (await fetch(url)).json();
      resolve(json);
    } catch (error) {
      reject(error);
    }
  });
};

const main = async () => {
  const runner = await getUser();
  if (runner?.results) {
    genList(runner.results);
    let rawData = runner.results;
    let search_box = document.getElementById("search-box-input");
    search_box.addEventListener("input", (event) => {
      let search = event.target.value;
      let userContainer = document.getElementById("user_list");
      userContainer.innerHTML = "";
      let newData = rawData.filter((x) => {
        let name = `${x.name.title}.${x.name.first} ${x.name.last} `;
        return name.toLowerCase().includes(search.toLowerCase());
      });
      genList(newData);
    });
  }
};

main();

const genList = (userList) => {
  let userContainer = document.getElementById("user_list");
  userList.forEach((x) => {
    let li = document.createElement("li");
    li.className = "user_list_detail";
    li.innerHTML = `<img src = '${x.picture.medium}' alt = '${x.name.first}' /> <div class = 'user_list_detail_contact'><div>${x.name.title}.${x.name.first} ${x.name.last} </div><div>${x.email}</div></div> `;
    userContainer.appendChild(li);
    li.addEventListener("click", () => {
      setUser(x);
    });
  });
};

const setUser = (x) => {
  console.log(x);
  let showUser = document.getElementById("chat_container");
  showUser.innerHTML = `<img src= '${x.picture.large}' />`;
  showUser.innerHTML += `<h2>${x.name.title}.${x.name.first} ${x.name.last}</h2>`;
  showUser.innerHTML += `<p>Gender: ${x.gender}, Age: ${x.dob.age}</p>`;
  showUser.innerHTML += `<p>Email: ${x.email}</p>`;
  showUser.innerHTML += `<p>Tel: ${x.phone}</p>`;
  showUser.innerHTML += `<p>Address: ${x.location.state}, ${x.location.country}</p>`;
};
