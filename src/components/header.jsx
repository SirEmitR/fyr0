import Dropdown from "./dropdown"
import { LANGUAGES } from "../constants/languages"
import { useLang } from "../context/lang-context"
const Header = () => {

    const {lang, setLang} = useLang();
  return (
    <header className="flex justify-between items-center p-4">
        <h1>Fyr0</h1>
        <Dropdown position="bottom-left" opener={
            <LangOpener flag={LANGUAGES[lang].flag}/>
        }>
            {Array.from(Object.entries(LANGUAGES)).map(([key, value]) => (
                <Dropdown.Button key={key} onClick={() => setLang(key)}>
                    <div className="flex w-full justify-between items-center">
                        <div>{value.name}</div>
                        <div>{value.flag}</div>
                    </div>
                </Dropdown.Button>
            ))}
        </Dropdown>
    </header>
  )
}

const LangOpener = ({flag}) => {
    return (
        <div>
            {flag}
        </div>
    )
}

export default Header