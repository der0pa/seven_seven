import { seven_seven } from "../../declarations/seven_seven";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with seven_seven actor, calling the greet method
  const greeting = await seven_seven.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
