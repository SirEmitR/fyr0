import { createContext, use } from "react"

export const LangContext = createContext({
    lang: 'es',
    languages: ['es', 'en'],
    setLang: () => {},
});

export const useLang = () => use(LangContext);
