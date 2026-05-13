const junoHTML = `<center>
  <br /><br />
  <div style="width: 740px; border: 4px solid #cb9698; padding: 5px">
    <div style="text-align: justify">
      <div
        style="
          font-family: Verdana;
          font-size: 11.8px;
          padding: 8px;
          background: #eceae9;
          color: #000000;
          border: 1px double #cb9698;
        "
      >
        <div
          style="
            background: #fbfbfb;
            width: 704px;
            font-size: 11.8px;
            line-height: 15px;
            padding: 8px;
          "
        >
          <div style="float: left">
            <center>
              <div
                style="
                  padding: 0px 2px 2px 0px;
                  border-width: 0pt 5pt 5pt 0pt;
                  border-style: solid;
                  border-color: #cb9698;
                  margin-right: 9px;
                "
              >
                <img
                  src="//i.ibb.co/7x89zMHx/JUNO01.gif"
                  style="
                    border-width: 1pt;
                    border-style: solid;
                    border-color: #cb9698;
                    padding: 2px;
                    width: 150px;
                  "
                  alt="JUNO"
                />
              </div>
            </center>
          </div>
          TEXTO
          <br />
        </div>
        <div
          style="
            color: #fff;
            font-family: verdana;
            font-size: 10px;
            background-color: #cb9698;
            padding: 6px;
            border-top: 3pt solid #eceaea;
            text-transform: uppercase;
            line-height: 14px;
          "
        >
          <span
            style="
              background-color: #fff;
              color: #cb9698;
              font-size: 10px;
              padding: 2px 10px;
              font-weight: bold;
            "
            ><strong>@LESBOTRON as JUNO AMSTUTZ</strong></span
          >
          &nbsp; AETHERIS ‧ Freshman (Nível 1) ‧ Feérica
          <div style="text-align: right; margin-top: 2px">
            [<strong>HP:</strong> 22/22] ‧ [<strong>FOR:</strong> 0] ‧ [<strong
              >DES:</strong
            >
            +2] ‧ [<strong>VIG:</strong> +1] ‧ [<strong>CAR:</strong> +2] ‧
            [<strong>INT:</strong> +1] ‧ [<strong>ARC:</strong> +1]
          </div>
        </div>
      </div>
    </div>
  </div>
  <br /><br />
</center>
`;

const odessaHTML = `<center>
  <br /><br />
  <div style="width: 740px; border: 4px solid #403449; padding: 5px">
    <div style="text-align: justify">
      <div
        style="
          font-family: Verdana;
          font-size: 11.8px;
          padding: 8px;
          background: #eceaea;
          color: #000000;
          border: 1px double #403449;
        "
      >
        <div
          style="
            background: #fbfbfb;
            width: 704px;
            font-size: 11.8px;
            line-height: 15px;
            padding: 8px;
          "
        >
          <div style="float: left">
            <center>
              <div
                style="
                  padding: 0px 2px 2px 0px;
                  border-width: 0pt 5pt 5pt 0pt;
                  border-style: solid;
                  border-color: #3d2557;
                  margin-right: 9px;
                "
              >
                <img
                  src="//i.ibb.co/rGMh0TVr/ODESSA.gif"
                  style="
                    border-width: 1pt;
                    border-style: solid;
                    border-color: #3d2557;
                    padding: 2px;
                    width: 150px;
                  "
                  alt="JUNO"
                />
              </div>
            </center>
          </div>
          TEXTO
        </div>
        <div
          style="
            color: #fff;
            font-family: verdana;
            font-size: 10px;
            background-color: #403449;
            padding: 6px;
            border-top: 3pt solid #eceaea;
            text-transform: uppercase;
            line-height: 14px;
          "
        >
          <span
            style="
              background-color: #eceaea;
              color: #3d2557;
              font-size: 10px;
              padding: 2px 10px;
              font-weight: bold;
            "
            ><strong>@LESBOTRON as Odessa Morgenstern</strong></span
          >
          &nbsp; UMBRAEL ‧ SOPHOMORE (Nível 2) ‧ Demoníaca de Linhagem Infernal
          <div style="text-align: right; margin-top: 2px">
            [<strong>HP:</strong> 41/41] ‧ [<strong>FOR:</strong> +3] ‧ [<strong
              >DES:</strong
            >
            +1] ‧ [<strong>VIG:</strong> +2] ‧ [<strong>CAR:</strong> +1] ‧
            [<strong>INT:</strong> +1] ‧ [<strong>ARC:</strong> +2]
          </div>
        </div>
      </div>
    </div>
  </div>
  <br /><br />
</center>
`;

const getCharHTML = (char) => {
  if (char == "juno") return { html: junoHTML, color: "#cb9698" };
  else if (char == "odessa") return { html: emmaHTML, color: "#703e8d" };
};

function getTextReady(char, color) {
  const text = document.getElementById("text").value;

  let isLineStart = true;
  const newText = [];

  for (let i = 0; i < text.length; i++) {
    if ((text[i] == "~" || text[i] == "—") && isLineStart) {
      newText.push(
        `<span style="color:${color};font-weight:bold;text-indent:40pt;">───`,
      );
      isLineStart = false;
    } else if ((text[i] == "~" || text[i] == "—") && isLineStart == false) {
      newText.push("───</span>");
      isLineStart = true;
    } else newText.push(text[i]);
  }

  return newText.join("");
}

const getHTMLReady = () => {
  const button = document.getElementById("get-html-button");
  const char = document.getElementById("selectChar").value;

  let { html, color } = { html: "", color: "" };

  if (char !== "none") {
    ({ html, color } = getCharHTML(char));
  }

  let [part1, part2] = html.split("TEXTO");

  const text = getTextReady(char, color);

  completeHtml = `${part1}${text}${part2}`;

  navigator.clipboard.writeText(completeHtml);

  // 👉 feedback visual no botão
  const originalText = button.innerText;
  button.innerText = "HTML COPIADO ✔";

  setTimeout(() => {
    button.innerText = originalText;
  }, 1000); // volta depois de 1s

  return completeHtml;
};
