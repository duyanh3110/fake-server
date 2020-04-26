const axios = require("axios")

const postUrl = "http://localhost:3000/posts"
const updateUrl = "http://localhost:3000/posts/1"

const getRequest = (url) => {
  return axios
    .get(url)
    .then((response) => console.log(response.data))
    .catch((err) => console.log(err))
}

const postRequest = (url) => {
  return axios
    .post(url, { id: 2, title: "Something" })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))
}

const putRequest = (url) => {
  return axios
    .put(url, { title: "Aha" })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))
}

const patchRequest = (url) => {
  return axios
    .patch(url, { title: "Joe" })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))
}

const deleteRequest = (url) => {
  return axios
    .delete(url)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))
}

getRequest(postUrl)
postRequest(postUrl)
putRequest(updateUrl)
patchRequest(updateUrl)
deleteRequest(updateUrl)
