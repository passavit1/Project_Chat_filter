import { data } from "./FetchData.js";

const profile_pic = document.getElementById("profile_pic");
const user_list = document.getElementById("user_list"); //ul

profile_pic.src = `${data.results[0].picture.thumbnail}`;

// const setUser = (item) => {
//   console.log(item);
//   let chat_show = document.getElementById("chat_container");
// chat_show.innerHTML = `<img src="${item.picture.large}"  alt="please keep phone"/>`;
// chat_show.innerHTML += `<h2>${item.name.title}.${item.name.first} ${item.name.last}</h2>`;
// chat_show.innerHTML += `<span>Gender: ${item.gender},  Age: ${item.dob.age}</span>`;
// chat_show.innerHTML += `<span>Email: ${item.email}</span>`;
// chat_show.innerHTML += `<span class='location'><img width='20' src="./image/phone.svg"  alt="phone"/> ${item.phone}</span>`;
// chat_show.innerHTML += `<span class='location'><img width='20' src="./image/location.svg"  alt="location"/> ${item.location.city}, ${item.location.country}</span>`;
// };

const generateList = (userlist) => {
  userlist.forEach((x) => {
    let li = document.createElement("li");
    li.className = "user_list_detail";
    li.innerHTML = `<img src = '${x.picture.thumbnail}' alt = '' /> <div class = 'user_list_detail_contact'><div>${x.name.title} ${x.name.first} ${x.name.last}</div><div>${x.email}</div></div>`;
    user_list.appendChild(li);
    // li.addEventListener("click", setUser(x));
  });
};

const main = () => {
  generateList(data.results);
  if (data?.results) {
    generateList(data.results);
    let rawUser = data.results;
    let searchUser = document.getElementById("search-box-input");
    searchUser.addEventListener("input", (event) => {
      let search = event.target.value;
      let user_list = document.getElementById("user_list"); //ul
      user_list.innerHTML = "";
      let newData = rawUser.filter((item) => {
        let name = `${item.name.title}.${item.name.first} ${item.name.last} `;
        return name.toLowerCase().includes(search.toLowerCase());
      });
      generateList(newData);
    });
  } else {
    console.log("error");
  }
};

main();
