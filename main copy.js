const charlieHTML = `<center>
<div
  style="
    width: 650px;
    margin: 14px;
    background-color: #dc840e;
    color: #fff;
    font-family: 'century gothic';
    font-size: 10px;
  "
>
  <p>
    CHARLIE BARLOWE &nbsp;─&nbsp; FILHO DE APOLO &nbsp;─&nbsp; SEGUNDO VERÃO
    &nbsp;─&nbsp; 17 ANOS
  </p>
  <div
    style="
      background-color: #fff5e7;
      text-align: justify;
      border: #f0a23a 3pt solid;
      padding: 10px;
      line-height: 14px;
    "
  >
    <div style="float: left">
      <img
        src="https://64.media.tumblr.com/7a2f61cb6298a1dd71d54cbe03862035/67819a73e0192ed5-c9/s400x600/2151dd08f56c0e92e23ddf54356fc27e34f07050.gifv"
        style="
          width: 110px;
          margin-right: 5px;
          padding: 3px;
          border: #f0a23a 3pt solid;
        "
      />
    </div>
    <span style="font-family: tahoma; font-size: 10pt; color: black">
      TEXTO
    </span>
  </div>

  <p style="text-transform: uppercase">
    And love is tough, but loneliness is twice as hard
  </p>
</div>
</center>
`;

const elodieHTML = `<center>
<div
  style="
    width: 650px;
    margin: 14px;
    background-color: #789751;
    color: #fff;
    font-family: 'century gothic';
    font-size: 10px;
  "
>
  <p>
    GREGUSKA ELODIE REITH &nbsp;─&nbsp; FILHA DE ATENA &nbsp;─&nbsp; PRIMEIRO
    VERÃO &nbsp;─&nbsp; 14 ANOS
  </p>
  <div
    style="
      background-color: #f5f9f1;
      text-align: justify;
      border: #9ab973 3pt solid;
      padding: 10px;
      line-height: 14px;
    "
  >
    <div style="float: left">
      <img
        src="https://64.media.tumblr.com/c3c604401ca3f7e843b5ddfec12c6170/1b20922c5c763baf-bb/s400x600/9c50dd4e0d18147c1b2092ecb3b21cbe23c4fd31.gifv"
        style="
          width: 110px;
          margin-right: 5px;
          padding: 3px;
          border: #9ab973 3pt solid;
        "
      />
    </div>
    <span style="font-family: tahoma; font-size: 10pt; color: black">
      TEXTO
    </span>
  </div>

  <p>FEEL MY WAY THROUGH THE DARKNESS, GUIDED BY A BEATING HEART</p>
</div>
</center>
`;

const carcinhaHTML = `<center>
<div
  style="
    width: 650px;
    margin: 14px;
    background-color: #551133;
    color: #fff;
    font-family: 'century gothic';
    font-size: 10px;
  "
>
  <p>
    CARÇOELE ELLE CONSUELA SUZANA MITCHELL &nbsp;─&nbsp; FILHA DE DIONÍSIO
    &nbsp;─&nbsp; PRIMEIRO VERÃO &nbsp;─&nbsp; 15 ANOS
  </p>
  <div
    style="
      background-color: #f9e3ee;
      text-align: justify;
      border: #872657 3pt solid;
      padding: 10px;
      line-height: 14px;
    "
  >
    <div style="float: left">
      <img
        src="https://64.media.tumblr.com/aaf721f9d3e71985223aacd3a13b4b0a/1b20922c5c763baf-c5/s400x600/208700e72630491f2fc0a77bab8f879c869f2265.gifv"
        style="
          width: 110px;
          margin-right: 5px;
          padding: 3px;
          border: #872657 3pt solid;
        "
      />
    </div>
    <span style="font-family: tahoma; font-size: 10pt; color: black">
      TEXTO
    </span>
  </div>

  <p style="text-transform: uppercase">
    My tummys turnin' and I'm feelin' kinda homesick, Too much pressure and
    I'm nervous
  </p>
</div>
</center>
`;

const jackieHTML = `<center>
<div
  style="
    width: 650px;
    margin: 14px;
    background-color: #b55d1b;
    color: #fff;
    font-family: 'century gothic';
    font-size: 10px;
  "
>
  <p>
    JACKIE BURDIEK &nbsp;─&nbsp; FILHA DE HERMES &nbsp;─&nbsp; PRIMEIRO VERÃO
    &nbsp;─&nbsp; 16 ANOS
  </p>
  <div
    style="
      background-color: #f3e7de;
      text-align: justify;
      border: #d5732b 3pt solid;
      padding: 10px;
      line-height: 14px;
    "
  >
    <div style="float: left">
      <img
        src="https://64.media.tumblr.com/ee3b4700d8cd0d178d0b4e70b740a394/1b20922c5c763baf-c9/s250x400/455b9c1a34447a8d10a6f515830339e72b23987a.gifv"
        style="
          width: 110px;
          margin-right: 5px;
          padding: 3px;
          border: #d5732b 3pt solid;
        "
      />
    </div>

    <span style="font-family: tahoma; font-size: 10pt; color: black">
      TEXTO
    </span>
  </div>

  <p style="text-transform: uppercase">
    And if we hit on troubled water, I'll be the one to keep you warm and safe
  </p>
</div>
</center>
`;

const getCharHTML = () => {
  const char = document.getElementById("selectChar").value;

  if (char == "elodie") return { html: elodieHTML, color: "#9ab973" };
  else if (char == "charlie") return { html: charlieHTML, color: "#f0a23a" };
  else if (char == "jackie") return { html: jackieHTML, color: "#d5732b" };
  else if (char == "carcinha") return { html: carcinhaHTML, color: "#872657" };
};

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

const getHTMLReady = () => {
  let { html, color } = getCharHTML();

  html = replaceHtmlSymbols(html);
  let [part1, part2] = html.split("TEXTO");

  const text = document.getElementById("text").value;
  const newText = insertLinesAndColor(text, color);

  completeHtml = `${part1}${newText}${part2}`;

  document.getElementById("postText").innerHTML = completeHtml;
  return completeHtml;
};

function copyToClipboard() {
  // Get the text field
  const copyText = getHTMLReady();
  console.log("copyText :>> ", copyText);

  //Select the text field
  // copyText.select();
  // copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText);

  // Alert the copied text
  alert("Texto copiado");
}
