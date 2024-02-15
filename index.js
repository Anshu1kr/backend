require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

const githubData = {
  login: "Anshu1kr",
  id: 118821534,
  node_id: "U_kgDOBxUSng",
  avatar_url: "https://avatars.githubusercontent.com/u/118821534?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Anshu1kr",
  html_url: "https://github.com/Anshu1kr",
  followers_url: "https://api.github.com/users/Anshu1kr/followers",
  following_url: "https://api.github.com/users/Anshu1kr/following{/other_user}",
  gists_url: "https://api.github.com/users/Anshu1kr/gists{/gist_id}",
  starred_url: "https://api.github.com/users/Anshu1kr/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Anshu1kr/subscriptions",
  organizations_url: "https://api.github.com/users/Anshu1kr/orgs",
  repos_url: "https://api.github.com/users/Anshu1kr/repos",
  events_url: "https://api.github.com/users/Anshu1kr/events{/privacy}",
  received_events_url: "https://api.github.com/users/Anshu1kr/received_events",
  type: "User",
  site_admin: false,
  name: "Anshu Kumar Kushwaha",
  company: null,
  blog: "",
  location: "Ghaziabad UP",
  email: null,
  hireable: null,
  bio: null,
  twitter_username: "kr_anshu_7",
  public_repos: 11,
  public_gists: 0,
  followers: 0,
  following: 1,
  created_at: "2022-11-22T12:47:19Z",
  updated_at: "2024-02-15T20:29:10Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("anshudotcom");
});

app.get("/login", (req, res) => {
  res.send("<h1>please login at chai aur code</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Chai aur Code</h2>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
