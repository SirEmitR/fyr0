import React, { useState } from 'react'
import { LangContext } from '../context/lang-context';
import { LANGUAGES } from '../constants/languages';
const LangProvider = ({children}) => {
    const [lang, setLang] = useState('es');
  return (
    <LangContext.Provider value={{lang, setLang, languages: LANGUAGES}}>
        {children}
    </LangContext.Provider>
  )
}

export default LangProvider