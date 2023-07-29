Klikačka -> TrophyClicker
---------

### Popis: 
Tento projekt obsahuje školní práci na zpracovaní "Klikací hry". Tím je myšleno herní prostředí pro uživatele stránky, který bude moci klikat na "předmět", který mu bude přidávat herní měnu.
Zadání bylo otevřené a každý si mohl zvolit svůj způsob.
Hra byla inspirována již existující, Coockiu clicker: https://orteil.dashnet.org/cookieclicker/ 

#### Vlastní hra - TrophyClicker
Tato hra se zaměřuje na sportovní tématiku. Uživatel zde kliká na trofej, která mu přidává pohárky. Za tuto měnu si může dokupovat různá sportovní hřiště, která opět přispívají k nárůstu kreditu.
Během hry na něj průběžně vyskakují tzv. Bingo, které obsahuje otázku s variacemi 4 možných odpovědí. Pokud uživatel v omezeném čase odpoví správně (možnost vyhledávání na externích zdrojích zamezena), je mu přidána náhodně kartička s známým sportovcem.

---------

### Spuštění:
Pro spuštění projektu je nutné mít nainstálováno "npm balíčky", za příkazu "npm install". Poté stačí pouze "npm run dev" a projekt je zobrazen v prohlížeči.

V případě vyskočení erroru "Preprocessor dependency "sass" not found. Did you install it?" je nutné zadat příkaz "npm install --save-dev sass", čímž nainstalujete zbylé balíčky.

---------

### Optimalizace:
Hra používá řadu externích obrázků a ikonek z internetu, které spomalují její chod a zároveň se déle inicializuje při zapínaní.
Místy byly problémy během hry, když nárusty měny byly vysoké - způsobeno častým ukládáním dat do LocalStorage.

### Jazyky:
Stránka je tvořena za pomoci frameworku Vue.js, který se zobrazuje do "App.vue".
Hlavní části je centralizované úložiště Pinia, ve kterém jsou uloženy všechny výpočty a nastavení pro hru.
Uživatel svůj postup má uložený v LocalStorage. 
