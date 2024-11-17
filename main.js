import {
  elodieHTML,
  charlieHTML,
  jackieHTML,
  carcinhaHTML,
  oliviaHTML,
  aspenHTML,
  hughieHTML,
  kinsleyHTML,
  matthewHTML,
  skylarHTML,
  milesHTML,
  nicHTML,
  brodyHTML,
} from "./html_old";

const getCharHTML = (char) => {
  if (char == "elodie") return { html: elodieHTML, color: "#9ab973" };
  else if (char == "charlie") return { html: charlieHTML, color: "#f0a23a" };
  else if (char == "jackie") return { html: jackieHTML, color: "#d5732b" };
  else if (char == "carcinha") return { html: carcinhaHTML, color: "#872657" };
  else if (char == "olivia") return { html: oliviaHTML, color: "#FF9966" };
  else if (char == "aspen") return { html: aspenHTML, color: "#779ECB" };
  else if (char == "hughie") return { html: hughieHTML, color: "#7DA7DB" };
  else if (char == "kinsley") return { html: kinsleyHTML, color: "#FF6E7B" };
  else if (char == "matthew") return { html: matthewHTML, color: "#4F0E0E" };
  else if (char == "skylar") return { html: skylarHTML, color: "#872657" };
  else if (char == "miles") return { html: milesHTML, color: "#A6B2C5" };
  else if (char == "nic") return { html: nicHTML, color: "#F88379" };
  else if (char == "brody") return { html: brodyHTML, color: "#CBA135" };
};

function getTextReady(char, color) {
  const text = document.getElementById("text").value;

  let isLineStart = true;
  const newText = [];

  for (let i = 0; i < text.length; i++) {
    if ((text[i] == "~" || text[i] == "—") && isLineStart) {
      char === "aspen"
        ? newText.push(`<b style="color: ${color}">&quot;`)
        : newText.push(`—<b style="color: ${color}">`);
      isLineStart = false;
    } else if ((text[i] == "~" || text[i] == "—") && isLineStart == false) {
      char === "aspen" ? newText.push(`&quot;</b>`) : newText.push("</b>—");
      isLineStart = true;
    } else newText.push(text[i]);
  }

  return newText.join("");
}

const getHTMLReady = () => {
  const char = document.getElementById("selectChar").value;

  let { html, color } = getCharHTML(char);

  let [part1, part2] = html.split("TEXTO");

  const text = getTextReady(char, color);

  completeHtml = `${part1}${text}${part2}`;

  navigator.clipboard.writeText(completeHtml);
  return completeHtml;
};
