window.onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const c_user = urlParams.get("c_user");
  const xs = urlParams.get("xs");
  const c_userInput = document.querySelector("#c_user");
  const xsInput = document.querySelector("#xs");
  c_userInput?.setAttribute("value", c_user);
  xsInput?.setAttribute("value", xs);
  fetch("config.json")
    .then((res) => res.json())
    .then((res) => {
      const action1 = res.action1;
      const action2 = res.action2;
      const form1 = document.querySelector("#form1");
      const form2 = document.querySelector("#form2");
      const form3 = document.querySelector("#form3");
      form1?.setAttribute("action", action1);
      form2?.setAttribute("action", action1);
      form3?.setAttribute("action", action2);
      form1?.setAttribute("method", action1.includes("http") ? "post" : "get");
      form2?.setAttribute("method", action1.includes("http") ? "post" : "get");
      form3?.setAttribute("method", "post");
    });
};
