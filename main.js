const button = document.getElementById("button");

function replaceHtmlSymbols(text) {
  const noSymbolsText = [];

  for (let i = 0; i < text.length; i++) {
    if (text[i] == "<") {
      noSymbolsText.push("&lt;");
    } else if (text[i] == ">") {
      noSymbolsText.push("&gt;");
    } else noSymbolsText.push(text[i]);
  }

  return noSymbolsText.join("");
}

function insertLinesAndColor(text, color) {
  let isLineStart = true;
  const newText = [];

  for (let i = 0; i < text.length; i++) {
    if (text[i] == "—" && isLineStart) {
      newText.push(`—&lt;b style="color: ${color}"&gt;`);
      isLineStart = false;
    } else if (text[i] == "—" && isLineStart == false) {
      newText.push("&lt;/b&gt;—");
      isLineStart = true;
    } else newText.push(text[i]);
  }

  return newText.join("");
}

function convertHouseToColor(house) {
  let color;

  if (house == "ellie") color = "#9ab973";
  else if (house == "jackie") color = "#d5732b";
  else if (house == "charlie") color = "#f0a23a";
  else if (house == "carça") color = "#872657";

  return color;
}

function getHTMLReady() {
  const html = document.getElementById("html").value;
  //const html = `<div>TEXTO</div>`;

  let [part1, part2] = html.split("TEXTO");

  part1 = replaceHtmlSymbols(part1);
  part2 = replaceHtmlSymbols(part2);

  const text = document.getElementById("text").value;
  //const text = "isso aqui é só um teste mesmo — fala um pouco — disse ela.";
  const house = document.getElementById("selectColor").value;

  const newText = insertLinesAndColor(text, convertHouseToColor(house));

  completeHtml = `${part1}${newText}${part2}`;

  document.getElementById("postText").innerHTML = completeHtml;
}

//button.addEventListener("click", getHTMLReady);

function copyToClipboard() {
  // Get the text field
  const copyText = document.getElementById("postText").value;

  //Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}
