import { useNavigate, useParams } from "react-router-dom";

import { DatosEspan, languages, propsData } from "./Es";
import { EnglishData, languagesEn, propsDataEn } from "./En";
import { GermanData, languagesDe, propsDataDe } from "./de";
import { FrenchData, languagesFr, propsDataFr } from "./fr";
import { ChineseData, languagesZh, propsDataZh } from "./zh";

function LenguajeDevolvedor(
  position?: number,
  objeto: string = "nan"
): string | string[] | undefined {
  const navigate = useNavigate();
  const { lang } = useParams<{ lang: string }>();

  let dataLanguage: string[] = [];

  switch (lang) {
    case "es":
      dataLanguage = DatosEspan;
      break;
    case "en":
      dataLanguage = EnglishData;
      break;
    case "de":
        dataLanguage = GermanData;
      break;
    case "fr":
        dataLanguage = FrenchData;
      break;
    case "zh":
        dataLanguage = ChineseData;
      break;
    default:
      navigate("*");
      return undefined;
  }

 
  if (objeto === "languaje") {
    switch (lang) {
        case "es":
            return JSON.stringify(languages);
          break;
        case "en":
            return JSON.stringify(languagesEn);
          break;
        case "de":
            return JSON.stringify(languagesDe);
          break;
        case "fr":
            return JSON.stringify(languagesFr);
          break;
        case "zh":
            return JSON.stringify(languagesZh);
          break;
        default:
          navigate("*");
          return undefined;
      }
  }

  if (objeto === "table") {
    switch (lang) {
        case "es":
            return JSON.stringify(propsData);
          break;
        case "en":
            return JSON.stringify(propsDataEn);
          break;
        case "de":
            return JSON.stringify(propsDataDe);
          break;
        case "fr":
            return JSON.stringify(propsDataFr);
          break;
        case "zh":
            return JSON.stringify(propsDataZh);
          break;
        default:
          navigate("*");
          return undefined;
      }
  }



  if (typeof position === "number") {
    return dataLanguage[position];
  }

  return dataLanguage;
}

export default LenguajeDevolvedor;
