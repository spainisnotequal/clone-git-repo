const nodegit = require("nodegit");
const path = require("path");

const repoUrl = "https://github.com/spainisnotequal/clone-git-repo";
const repoName = repoUrl.split("/").pop();
const localUrl = "./clonedRepos/" + repoName;
const cloneOpts = {};

nodegit
  .Clone(repoUrl, localUrl, cloneOpts)
  .then((repo) =>
    console.log("Cloned", path.basename(repoUrl), "to", repo.workdir())
  )
  .catch((err) => console.log("Error:", err));
