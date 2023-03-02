import { FaLanguage } from "react-icons/fa";

// Ajouter ces objets de langue à votre état local
const [languages, setLanguages] = useState([
  { id: 1, label: "English", value: "en" },
  { id: 2, label: "Français", value: "fr" },
  { id: 3, label: "عربى", value: "ar" },
]);

// Ajouter un state local pour stocker la langue sélectionnée
const [selectedLanguage, setSelectedLanguage] = useState(languages[0].value);

// Ajouter un gestionnaire d'événements pour changer la langue sélectionnée
const handleLanguageChange = (value) => {
  setSelectedLanguage(value);
};

// Ajouter un élément de menu déroulant pour les langues
{
  nav && (
    <ul className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 flex flex-col justify-center items-center">
      {links.map(({ id, link, label }) => (
        <li
          key={id}
          className="px-5 cursor-pointer capitalize py-6 text-4xl font-medium hover:scale-105 duration-200 text-gray-500"
        >
          {link === "CV" ? (
            <button onClick={() => setModalIsOpen(true)}>{label}</button>
          ) : (
            <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
              {label}
            </Link>
          )}
        </li>
      ))}

      <li>
        <FaLanguage className="mr-2" />
        <select
          value={selectedLanguage}
          onChange={(e) => handleLanguageChange(e.target.value)}
          className="border rounded-md py-2 px-3 text-white"
        >
          {languages.map((language) => (
            <option key={language.id} value={language.value}>
              {language.label}
            </option>
          ))}
        </select>
      </li>
    </ul>
  );
}
