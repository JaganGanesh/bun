import fetchUser from "./githubAPI";

(async () => {
  const userData = await fetchUser("jaganganesh");
  document.querySelector("pre").innerHTML = JSON.stringify(
    userData,
    null,
    "\t"
  );
})();
