const products = [
    {
        product : 'jajko gotowane',
        calories1g : 1.55
    },
    {
        product : 'jajko w koszulkach',
        calories1g : 1.43
    },
    {
        product : 'bażant pieczony',
        calories1g : 2.15
    },
    {
        product : 'Gęś, mięso ze skórą, pieczona',
        calories1g : 3.05
    },
    {
        product : 'Gęś, samo mięso, pieczone',
        calories1g : 2.38
    },
    {
        product : 'gęś - tuszka',
        calories1g : 3.45
    },
    {
        product : 'głuszec',
        calories1g : 1.23
    },
    {
        product : 'głuszec pieczony',
        calories1g : 1.72
    },
    {
        product : 'gołąb',
        calories1g : 1.72
    },
    {
        product : 'gołąb pieczony',
        calories1g : 2.33
    },
    {
        product : 'kaczka, mięso ze skórą, pieczona',
        calories1g : 3.37
    },
    {
        product : 'kaczka, samo mięso, pieczona',
        calories1g : 2.01
    },
    {
        product : 'kiełbasa delikatesowa z kurczaka',
        calories1g : 1.11
    },
    {
        product : 'kiełbasa jałowcowa z kurczaka',
        calories1g : 2.39
    },
    {
        product : 'kiełbasa kanapkowa z kurczaka',
        calories1g : 1.83
    },
    {
        product : 'kiełbasa mazurska z indyka',
        calories1g : 1.33
    },
    {
        product : 'kiełbasa mortadela z indyka',
        calories1g : 2.12
    },
    {
        product : 'Kiełbasa Śląska',
        calories1g : 2.17
    },
    {
        product : 'Kiełbasa Śląska z Grilla',
        calories1g : 3.13
    },
    {
        product : 'Kiełbasa wieprzowa',
        calories1g : 3.26
    },
    {
        product : 'kurczak - pierś bez skóry, duszona',
        calories1g : 1.40
    },
    {
        product : 'kurczak - pierś bez skóry pieczona',
        calories1g : 1.52
    },
    {
        product : 'kurczak - pierś bez skóry, smażona',
        calories1g : 1.74	
    },
    {
        product : 'kurczak - porcja rosołowa',
        calories1g : 1.80
    },
    {
        product : 'kurczak - skóra duszona',
        calories1g : 4.00
    },
    {
        product : 'kurczak - skóra pieczona',
        calories1g : 4.99
    },
    {
        product : 'kurczak - skóra smażona',
        calories1g : 5.20
    },
    {
        product : 'kurczak - skóra surowa',
        calories1g : 2.90
    },
    {
        product : 'parówki z indyka',
        calories1g : 2.33
    },
    {
        product : 'parówki z kurczaka',
        calories1g : 2.51
    },
    {
        product : 'przepiórka pieczona',
        calories1g : 2.18
    },
    {
        product : 'szynka delikatesowa z kurczaka',
        calories1g : 0.94
    },
    {
        product : 'szynka z indyka',
        calories1g : 0.85
    },
    {
        product : 'szynka z piersi kurczaka',
        calories1g : 0.97
    },
    {
        product : 'szynka z udźca kurczaka',
        calories1g : 1.18
    },
    {
        product : 'wątróbka drobiowa',
        calories1g : 1.37
    },
    {
        product : 'wątróbka drobiowa duszona',
        calories1g : 1.85
    },
    {
        product : 'wątróbka drobiowa gotowana',
        calories1g : 1.90
    },
    {
        product : 'żołądki drobiowe',
        calories1g : 1.20
    },
    {
        product : 'żołądki drobiowe gotowane',
        calories1g : 1.57
    },
    {
        product : 'Gęś, mięso ze skórą, pieczona',
        calories1g : 3.05
    },
    {
        product : 'Gęś, samo mięso, pieczone',
        calories1g : 2.38
    },
    {
        product : 'Kaczka, mięso ze skórą, pieczona',
        calories1g : 3.37
    },
    {
        product : 'Kaczka, samo mięso, pieczone',
        calories1g : 2.01
    },
    {
        product : 'Kurczak, pierś ze skórą, gotowany',
        calories1g : 1.84
    },
    {
        product : 'Kurczak, pierś ze skórą, pieczone',
        calories1g : 1.97
    },
    {
        product : 'Kurczak, pierś ze skórą,smażony w mące',
        calories1g : 2.22
    },
    {
        product : 'Kurczak, pierś ze skórą,smażony w panierce',
        calories1g : 2.60
    },
    {
        product : 'Kurczak, pierś ze skórą, surowy',
        calories1g : 1.72
    },
    {
        product : 'Kurczak, pierś ze skórą, z rożna',
        calories1g : 1.84
    },
    {
        product : 'Kurczak, pierś, samo mięso, duszone',
        calories1g : 1.51
    },
    {
        product : 'Kurczak, pierś, samo mięso, pieczone',
        calories1g : 1.65
    },
    {
        product : 'Kurczak, pierś, samo mięso, smażone',
        calories1g : 1.87
    },
    {
        product : 'Kurczak, pierś, samo mięso, z rożna',
        calories1g : 1.37
    },
    {
        product : 'Kurczak, podudzie ze skórą, gotowany',
        calories1g : 2.04
    },
    {
        product : 'Kurczak, podudzie,ze skórą, pieczone',
        calories1g : 1.91
    },
    {
        product : 'Kurczak, podudzie ze skórą, smażone w mące',
        calories1g : 2.45
    },
    {
        product : 'Kurczak, podudzie ze skórą, smażone w panierce',
        calories1g : 2.68
    },
    {
        product : 'Kurczak, podudzie ze skórą, surowy',
        calories1g : 1.61
    },
    {
        product : 'Kurczak, podudzie ze skórą, z rożna',
        calories1g : 2.15
    },
    {
        product : 'Kurczak, podudzie, samo mięso, gotowany',
        calories1g : 1.69
    },
    {
        product : 'Kurczak, podudzie, samo mięso, smażone',
        calories1g : 1.95
    },
    {
        product : 'Kurczak, podudzie, samo mięso, z rożna',
        calories1g : 2.04
    },
    {
        product : 'ajerkoniak',
        calories1g : 2.77
    },
    {
        product : 'brandy',
        calories1g : 2.15
    },
    {
        product : 'coca-cola',
        calories1g : 0.42
    },
    {
        product : 'coca-cola light',
        calories1g : 0.01
    },
    {
        product : 'curaçao, likier',
        calories1g : 4.22
    },
    {
        product : 'gin',
        calories1g : 2.33
    },
    {
        product : 'jałowcówka',
        calories1g : 2.32
    },
    {
        product : 'kakao Nesquik, proszek',
        calories1g : 3.80
    },
    {
        product : 'kakao, proszek 16%',
        calories1g : 4.52
    },
    {
        product : 'kakao, proszek 20%',
        calories1g : 4.60
    },
    {
        product : 'kawa bez cukru, napar',
        calories1g : 0.03
    },
    {
        product : 'kawa cappuccino, proszek, Mokate',
        calories1g : 4.13
    },
    {
        product : 'kawa rozpuszczalna, proszek, Nescafé',
        calories1g : 2.40
    },
    {
        product : 'kawa zbożowa bez cukru, napar',
        calories1g : 0.03
    },
    {
        product : 'kawa zbożowa, proszek',
        calories1g : 3.66
    },
    {
        product : 'koniak',
        calories1g : 3.21
    },
    {
        product : 'likier kminkowy',
        calories1g : 1.66
    },
    {
        product : 'likier orzechowy',
        calories1g : 2.74
    },
    {
        product : 'likier ziołowy',
        calories1g : 2.03
    },
    {
        product : 'napój Fanta',
        calories1g : 0.48
    },
    {
        product : 'napój Red Bull',
        calories1g : 0.45
    },
    {
        product : 'napój Sprite',
        calories1g : 0.42
    },
    {
        product : 'napój z czarnej porzeczki Tymbark',
        calories1g : 0.57
    },
    {
        product : 'nektar jabłkowy antonówka, Tymbark',
        calories1g : 0.44
    },
    {
        product : 'pepsi cola',
        calories1g : 0.42
    },
    {
        product : 'pepsi cola light',
        calories1g : 0.01
    },
    {
        product : 'piwo bezalkoholowe',
        calories1g : 0.29
    },
    {
        product : 'piwo ciemne',
        calories1g : 0.50
    },
    {
        product : 'piwo ciemne pełne',
        calories1g : 0.77
    },
    {
        product : 'piwo imbirowe',
        calories1g : 0.32
    },
    {
        product : 'piwo jasne',
        calories1g : 0.42
    },
    {
        product : 'piwo jasne pełne',
        calories1g : 0.72
    },
    {
        product : 'piwo korzenne',
        calories1g : 0.42
    },
    {
        product : 'porter',
        calories1g : 0.90
    },
    {
        product : 'porto',
        calories1g : 1.70
    },
    {
        product : 'portwein',
        calories1g : 1.62
    },
    {
        product : 'rum',
        calories1g : 2.41
    },
    {
        product : 'sok ananasowy',
        calories1g : 0.50
    },
    {
        product : 'sok cytrynowy',
        calories1g : 0.27
    },
    {
        product : 'sok grejpfrutowy',
        calories1g : 0.40
    },
    {
        product : 'sok gruszkowy',
        calories1g : 0.46
    },
    {
        product : 'sok jabłkowy',
        calories1g : 0.44
    },
    {
        product : 'sok marchwiowy',
        calories1g : 0.44
    },
    {
        product : 'sok pomarańczowy',
        calories1g : 0.44
    },
    {
        product : 'sok pomidorowy',
        calories1g : 0.12
    },
    {
        product : 'sok z buraków',
        calories1g : 0.36
    },
    {
        product : 'sok z pomidorów',
        calories1g : 0.15
    },
    {
        product : 'sok z winogron',
        calories1g : 0.59
    },
    {
        product : 'szampan',
        calories1g : 0.76
    },
    {
        product : 'szampan półsłodki',
        calories1g : 0.99
    },
    {
        product : 'szampan półwytrawny',
        calories1g : 0.80
    },
    {
        product : 'szampan słodki',
        calories1g : 1.21
    },
    {
        product : 'tonik',
        calories1g : 0.35
    },
    {
        product : 'whisky',
        calories1g : 2.20
    },
    {
        product : 'wino białe musujące',
        calories1g : 0.77
    },
    {
        product : 'wino białe półwytrawne',
        calories1g : 0.83
    },
    {
        product : 'wino białe słodkie',
        calories1g : 0.90
    },
    {
        product : 'wino białe wytrawne',
        calories1g : 1.11
    },
    {
        product : 'wino czerwone',
        calories1g : 1.09
    },
    {
        product : 'wino czerwone półsłodkie',
        calories1g : 0.78
    },
    {
        product : 'wino czerwone słodkie',
        calories1g : 1.07
    },
    {
        product : 'wino czerwone wytrawne',
        calories1g : 0.68
    },
    {
        product : 'woda mineralna',
        calories1g : 0
    },
    {
        product : 'wódka czysta',
        calories1g : 2.24
    },
    {
        product : 'agrest',
        calories1g : 0.40
    },
    {
        product : 'ananas',
        calories1g : 0.55
    },
    {
        product : 'ananas, plastry w syropie',
        calories1g : 0.87
    },
    {
        product : 'arbuz',
        calories1g : 0.35
    },
    {
        product : 'awokado',
        calories1g : 1.64
    },
    {
        product : 'banan',
        calories1g : 0.97
    },
    {
        product : 'banan suszony',
        calories1g : 3.45
    },
    {
        product : 'borówki',
        calories1g : 0.48
    },
    {
        product : 'brzoskwinia',
        calories1g : 0.45
    },
    {
        product : 'brzoskwinia, mus',
        calories1g : 0.78
    },
    {
        product : 'brzoskwinia suszona',
        calories1g : 2.55
    },
    {
        product : 'brzoskwinia w syropie',
        calories1g : 0.77
    },
    {
        product : 'brzoskwinia w syropie, odsączona',
        calories1g : 0.88
    },
    {
        product : 'cytryna',
        calories1g : 0.35
    },
    {
        product : 'czarne jagody',
        calories1g : 0.46
    },
    {
        product : 'czereśnie',
        calories1g : 0.62
    },
    {
        product : 'czereśnie suszone',
        calories1g : 2.75
    },

    {
        product : 'daktyle',
        calories1g : 0.92
    },
    {
        product : 'daktyle suszone',
        calories1g : 2.79
    },
    {
        product : 'dynia',
        calories1g : 0.26
    },
    {
        product : 'dżem wiśniowy niskosłodzony',
        calories1g : 1.56
    },
    {
        product : 'dżem wiśniowy wysokosłodzony',
        calories1g : 2.59
    },
    {
        product : 'figi suszone',
        calories1g : 2.92
    },
    {
        product : 'figi świeże',
        calories1g : 0.77
    },
    {
        product : 'granat',
        calories1g : 0.70
    },

    {
        product : 'grejpfrut',
        calories1g : 0.34
    },
    {
        product : 'grejpfrut czerwony',
        calories1g : 0.33
    },
    {
        product : 'grejpfrut w puszcze słodzony',
        calories1g : 0.73
    },
    {
        product : 'gruszka',
        calories1g : 0.55
    },
    {
        product : 'gruszka suszona',
        calories1g : 2.66
    },
    {
        product : 'jabłko',
        calories1g : 0.52
    },
    {
        product : 'jabłko bez skórki',
        calories1g : 0.48
    },
    {
        product : 'jabłko gotowane',
        calories1g : 0.53
    },
    {
        product : 'jabłko, mus',
        calories1g : 1.22
    },
    {
        product : 'jabłko pieczone',
        calories1g : 1.05
    },
    {
        product : 'jabłko pieczone z cukrem',
        calories1g : 1.10
    },
    {
        product : 'jabłka suszone',
        calories1g : 2.43
    },
    {
        product : 'jeżyny',
        calories1g : 0.62
    },
    {
        product : 'kiwi',
        calories1g : 0.55
    },
    {
        product : 'limonka',
        calories1g : 0.28
    },
    {
        product : 'maliny',
        calories1g : 0.30
    },
    {
        product : 'mandarynka',
        calories1g : 0.43
    },
    {
        product : 'mango',
        calories1g : 0.66
    },
    {
        product : 'marakuja',
        calories1g : 0.35
    },
    {
        product : 'marmolada',
        calories1g : 2.71
    },
    {
        product : 'marmolada śliwkowa',
        calories1g : 2.44	
    },
    {
        product : 'melon',
        calories1g : 0.33
    },
    {
        product : 'morele',
        calories1g : 0.45
    },
    {
        product : 'morele suszone',
        calories1g : 2.90
    },
    {
        product : 'nektarynka',
        calories1g : 0.45
    },
    {
        product : 'papaja',
        calories1g : 0.45
    },
    {
        product : 'pigwa',
        calories1g : 0.55
    },
    {
        product : 'pomarańcze',
        calories1g : 0.45
    },
    {
        product : 'porzeczki czarne',
        calories1g : 0.36
    },
    {
        product : 'porzeczki czerwone',
        calories1g : 0.33
    },
    {
        product : 'poziomki',
        calories1g : 0.35
    },
    {
        product : 'śliwki',
        calories1g : 0.46
    },
    {
        product : 'truskawki',
        calories1g : 0.30
    },
    {
        product : 'winogrona',
        calories1g : 0.72
    },
    {
        product : 'wiśnie',
        calories1g : 0.49
    },
    {
        product : 'wiśnie suszone',
        calories1g : 2.73
    },
    {
        product : 'żurawina',
        calories1g : 0.50
    },
    {
        product : 'bakłażan',
        calories1g : 0.22
    },
    {
        product : 'bakłażan gotowany',
        calories1g : 0.24
    },
    {
        product : 'bób gotowany',
        calories1g : 0.87
    },
    {
        product : 'bób, ziarna suche',
        calories1g : 3.43
    },
    {
        product : 'bób, ziarna świeże',
        calories1g : 0.65
    },
    {
        product : 'brokuły',
        calories1g : 0.25
    },
    {
        product : 'brokuły gotowane',
        calories1g : 0.31
    },
    {
        product : 'brokuły mrożone',
        calories1g : 0.23
    },
    {
        product : 'brukselka',
        calories1g : 0.33
    },
    {
        product : 'brukselka gotowana',
        calories1g : 0.49
    },
    {
        product : 'brukselka mrożona',
        calories1g : 0.39
    },
    {
        product : 'burak',
        calories1g : 0.41
    },
    {
        product : 'cebula',
        calories1g : 0.31
    },
    {
        product : 'chrzan',
        calories1g : 0.66
    },
    {
        product : 'cukinia',
        calories1g : 0.13
    },
    {
        product : 'cykoria',
        calories1g : 0.23
    },
    {
        product : 'czosnek',
        calories1g : 1.44
    },
    {
        product : 'fasola biała gotowana',
        calories1g : 1.44
    },
    {
        product : 'fasola biała konserwowa',
        calories1g : 0.88
    },
    {
        product : 'fasola biała Jaś',
        calories1g : 3.43
    },
    {
        product : 'groch gotowany',
        calories1g : 1.15	
    },
    {
        product : 'groch, ziarno suche',
        calories1g : 3.01
    },
    {
        product : 'groszek zielony',
        calories1g : 0.76
    },
    {
        product : 'groszek zielony gotowany',
        calories1g : 0.97
    },
    {
        product : 'kalafior',
        calories1g : 0.20
    },
    {
        product : 'kalarepa',
        calories1g : 0.31
    },
    {
        product : 'kapusta biała',
        calories1g : 0.27
    },
    {
        product : 'kapusta chińska',
        calories1g : 0.33
    },
    {
        product : 'kapusta czerwona',
        calories1g : 0.26
    },
    {
        product : 'kapusta kwaszona',
        calories1g : 0.13
    },
    {
        product : 'kapusta pekińska',
        calories1g : 0.13
    },
    {
        product : 'kapusta włoska',
        calories1g : 0.39
    },
    {
        product : 'karczochy',
        calories1g : 0.48
    },
    {
        product : 'koncentrat pomidorowy 20%',
        calories1g : 0.81
    },
    {
        product : 'koncentrat pomidorowy 30%',
        calories1g : 0.94
    },
    {
        product : 'koper ogrodowy',
        calories1g : 0.25
    },
    {
        product : 'koperek zielony',
        calories1g : 0.20
    },
    {
        product : 'kukurydza, kolba',
        calories1g : 1.12
    },
    {
        product : 'kukurydza konserwowa',
        calories1g : 1.03
    },
    {
        product : 'kukurydza prażona',
        calories1g : 3.98
    },
    {
        product : 'marchew',
        calories1g : 0.28
    },
    {
        product : 'marchew gotowana',
        calories1g : 0.33
    },
    {
        product : 'marchew konserwowa',
        calories1g : 0.22
    },
    {
        product : 'marchew mrożona',
        calories1g : 0.25
    },
    {
        product : 'ogórek konserwowy',
        calories1g : 0.12
    },
    {
        product : 'ogórek kwaszony',
        calories1g : 0.12
    },
    {
        product : 'ogórek zielony',
        calories1g : 0.14
    },
    {
        product : 'papryka',
        calories1g : 0.32
    },
    {
        product : 'pasternak',
        calories1g : 0.57
    },
    {
        product : 'pietruszka, korzeń',
        calories1g : 0.40
    },
    {
        product : 'pietruszka natka',
        calories1g : 0.42
    },
    {
        product : 'pomidor',
        calories1g : 0.16
    },
    {
        product : 'por',
        calories1g : 0.25
    },
    {
        product : 'rabarbar',
        calories1g : 0.08
    },
    {
        product : 'rzepa',
        calories1g : 0.27
    },
    {
        product : 'rzeżucha ogrodowa',
        calories1g : 0.19
    },
    {
        product : 'rzodkiewka',
        calories1g : 0.15
    },
    {
        product : 'sałata',
        calories1g : 0.15
    },
    {
        product : 'sałata lodowa',
        calories1g : 0.15
    },
    {
        product : 'seler korzeniowy',
        calories1g : 0.18
    },
    {
        product : 'seler naciowy',
        calories1g : 0.12
    },
    {
        product : 'soja',
        calories1g : 3.90
    },
    {
        product : 'szczaw',
        calories1g : 0.22
    },
    {
        product : 'szczypiorek',
        calories1g : 0.31
    },
    {
        product : 'szparagi',
        calories1g : 0.20
    },
    {
        product : 'szpinak',
        calories1g : 0.15
    },
    {
        product : 'ziemniaki',
        calories1g : 0.75
    },
    {
        product : 'ziemniaki bez skóry opiekane',
        calories1g : 1.10
    },
    {
        product : 'ziemniaki gotowane',
        calories1g : 1.04
    },
    {
        product : 'ziemniaki purée',
        calories1g : 1.20
    },
    {
        product : 'ziemniaki późne',
        calories1g : 0.87
    },
    {
        product : 'ziemniaki późne gotowane',
        calories1g : 1.15
    },
    {
        product : 'ziemniaki wczesne',
        calories1g : 0.67
    },
    {
        product : 'ziemniaki wczesne gotowane',
        calories1g : 0.93
    },
    {
        product : 'babka biszkoptowa',
        calories1g : 3.32
    },
    {
        product : 'babka piaskowa',
        calories1g : 3.70
    },
    {
        product : 'baton 3 Bit',
        calories1g : 5.15
    },
    {
        product : 'baton Bounty Milk',
        calories1g : 4.48
    },
    {
        product : 'baton Knoopers',
        calories1g : 5.28
    },
    {
        product : 'baton Lion',
        calories1g : 4.91
    },
    {
        product : 'baton Mars',
        calories1g : 4.51
    },
    {
        product : 'baton Mars Delight',
        calories1g : 5.57
    },
    {
        product : 'baton Milky Way',
        calories1g : 4.48
    },
    {
        product : 'baton Pawełek z adwokatem',
        calories1g : 4.71
    },
    {
        product : 'baton Pawełek z amaretto w ciemnej czekoladzie',
        calories1g : 4.60
    },
    {
        product : 'baton Snickers',
        calories1g : 4.97
    },
    {
        product : 'baton Twix',
        calories1g : 4.83
    },
    {
        product : 'batonik Chocapic',
        calories1g : 4.15
    },
    {
        product : 'batonik Cini Minis',
        calories1g : 4.13
    },
    {
        product : 'batonik Fitness',
        calories1g : 3.82
    },
    {
        product : 'batonik Nesquik',
        calories1g : 4.18
    },
    {
        product : 'bezy',
        calories1g : 4.20
    },
    {
        product : 'bezy z kremem',
        calories1g : 6.13
    },
    {
        product : 'biszkopt z mąki gryczanej',
        calories1g : 2.30
    },
    {
        product : 'bita śmietana w aerozolu',
        calories1g : 2.25
    },
    {
        product : 'budyń czekoladowy, proszek',
        calories1g : 3.68
    },
    {
        product : 'budyń czekoladowy ugotowany na mleku 2%',
        calories1g : 0.98
    },
    {
        product : 'budyń śmietankowy bez cukru, proszek',
        calories1g : 3.10
    },
    {
        product : 'budyń śmietankowy ugotowany na mleku 2%',
        calories1g : 0.97
    },
    {
        product : 'chałwa',
        calories1g : 4.73
    },
    {
        product : 'chipsy',
        calories1g : 5.36
    },
    {
        product : 'ciasteczka biszkoptowe Petitki Lubisie',
        calories1g : 3.88
    },
    {
        product : 'ciasteczka, delicje szampańskie',
        calories1g : 3.28
    },
    {
        product : 'ciastka - jeżyki',
        calories1g : 4.57
    },
    {
        product : 'ciastka - karpatki',
        calories1g : 4.60
    },
    {
        product : 'ciastka - kokosanki',
        calories1g : 4.70
    },
    {
        product : 'ciastka - markizy',
        calories1g : 4.88
    },

     {
        product : 'ciastka - napoleonki',
        calories1g : 3.56
    }, {
        product : 'ciastka - ptysie z bitą śmietaną',
        calories1g : 3.44
    },
    {
        product : 'ciastka - ptysie z kremem budyniowym',
        calories1g : 3.21
    },
    {
        product : 'ciastka - różki z ciasta francuskiego z jabłkami',
        calories1g : 3.98
    },
    {
        product : 'ciastka - sezamki',
        calories1g : 4.00
    },
    {
        product : 'ciasto drożdżowe podstawowe',
        calories1g : 2.99
    },
    {
        product : 'ciasto francuskie podstawowe',
        calories1g : 5.11
    },
    {
        product : 'ciasto kruche podstawowe	',
        calories1g : 4.11
    },
    {
        product : 'cukier biały',
        calories1g : 4.02
    },
    {
        product : 'cukier brązowy',
        calories1g : 3.76
    },
    {
        product : 'cukier gronowy',
        calories1g : 3.88
    },
    {
        product : 'cukier puder',
        calories1g : 3.85
    },
    {
        product : 'cukier trzcinowy',
        calories1g : 3.98
    },

    {
        product : 'cukierki - draże mleczne',
        calories1g : 4.04
    },
    {
        product : 'cukierki - galaretki wielosmakowe z cukrem',
        calories1g : 3.31
    },
    {
        product : 'cukierki - irysy mleczne',
        calories1g : 3.33
    },
    {
        product : 'cukierki - krówki',
        calories1g : 4.14
    },
    {
        product : 'cukierki - landrynki',
        calories1g : 3.81
    },
    {
        product : 'cukierki - Nimm 2',
        calories1g : 3.68
    },
    {
        product : 'cukierki - ptasie mleczko',
        calories1g : 4.79
    },
    {
        product : 'cukierki - toffi',
        calories1g : 5.45
    },
    {
        product : 'cukierki - żelki',
        calories1g : 3.69
    },
    {
        product : 'czekolada biała',
        calories1g : 5.88
    },
    {
        product : 'czekolada deserowa',
        calories1g : 5.22
    },
    {
        product : 'czekolada do picia',
        calories1g : 3.67
    },
    {
        product : 'czekolada gorzka',
        calories1g : 5.77
    },
    {
        product : 'czekolada mleczna',
        calories1g : 5.50
    },
    {
        product : 'czekoladki Ferrero Rocher',
        calories1g : 5.62
    },
    {
        product : 'czekoladki Golden Nut',
        calories1g : 5.76
    },
    {
        product : 'czekoladki Mon Cheri',
        calories1g : 4.21
    },
    {
        product : 'czekoladki Rafaello',
        calories1g : 6.00
    },
    {
        product : 'czekoladki Toffifee',
        calories1g : 5.35
    },
    {
        product : 'drożdżówka',
        calories1g : 2.99
    },
    {
        product : 'faworki',
        calories1g : 5.79
    },
    {
        product : 'galaretka po przyrządzeniu',
        calories1g : 0.54
    },
{
        product : 'galaretka proszek',
        calories1g : 3.38
    },
    {
        product : 'guma do żucia Orbit',
        calories1g : 1.70
    },
    {
        product : 'guma do żucia dla dzieci bez cukru Orbit',
        calories1g : 1.46
    },
    {
        product : 'herbatniki',
        calories1g : 4.40
    },
    {
        product : 'karmel',
        calories1g : 4.04
    },
    {
        product : 'kisiel błyskawiczny gotowy',
        calories1g : 0.63
    },
    {
        product : 'kisiel bez cukru, proszek',
        calories1g : 3.39
    },
    {
        product : 'kisiel z cukrem gotowy',
        calories1g : 0.67
    },
    {
        product : 'krakersy',
        calories1g : 5.00
    },
    {
        product : 'lody bakaliowe',
        calories1g : 1.36
    },
    {
        product : 'lody czekoladowe',
        calories1g : 1.33
    },
    {
        product : 'lody owocowe',
        calories1g : 1.22
    },
    {
        product : 'lody śmietankowe',
        calories1g : 1.71
    },
    {
        product : 'lody śmietankowe light',
        calories1g : 1.19
    },
    {
        product : 'marcepan',
        calories1g : 4.33
    },
    {
        product : 'melasa',
        calories1g : 2.33
    },
    {
        product : 'miód pszczeli',
        calories1g : 3.31
    },
    {
        product : 'miód sztuczny',
        calories1g : 3.30
    },
    {
        product : 'pączek',
        calories1g : 3.81
    },
    {
        product : 'rurka z kremem',
        calories1g : 1.55
    },
    {
        product : 'sernik brzoskwiniowy',
        calories1g : 2.33
    },
    {
        product : 'sernik na zimno',
        calories1g : 2.00
    },
    {
        product : 'słone paluszki',
        calories1g : 3.96
    },
    {
        product : 'syrop klonowy',
        calories1g : 2.57
    },
    {
        product : 'wafel Prince Polo',
        calories1g : 5.34
    },
    {
        product : 'cukierki - landrynki',
        calories1g : 3.81
    },
    {
        product : 'anchois w oleju',
        calories1g : 2.16
    },
    {
        product : 'dorsz duszony',
        calories1g : 0.97
    },
    {
        product : 'dorsz gotowany',
        calories1g : 0.82
    },
    {
        product : 'dorsz pieczony',
        calories1g : 1.03
    },
    {
        product : 'dorsz smażony panierowany',
        calories1g : 1.72
    },
    {
        product : 'dorsz wędzony',
        calories1g : 0.95
    },
    {
        product : 'halibut duszony',
        calories1g : 1.71
    },
    {
        product : 'halibut gotowany',
        calories1g : 0.93
    },
    {
        product : 'halibut pieczony',
        calories1g : 1.33
    },
    {
        product : 'halibut smażony',
        calories1g : 1.72
    },
    {
        product : 'halibut świeży',
        calories1g : 0.99
    },
    {
        product : 'halibut wędzony',
        calories1g : 1.77
    },
    {
        product : 'homar gotowany',
        calories1g : 0.76
    },
    {
        product : 'homar świeży',
        calories1g : 0.87
    },
    {
        product : 'cukierki - landrynki',
        calories1g : 3.81
    },
    {
        product : 'homar w skorupie',
        calories1g : 0.33
    },
    {
        product : 'karp duszony',
        calories1g : 1.44
    },
    {
        product : 'karp gotowany',
        calories1g : 1.44
    },
    {
        product : 'karp pieczony',
        calories1g : 1.48
    },
    {
        product : 'karp smażony',
        calories1g : 1.78
    },
    {
        product : 'karp świeży',
        calories1g : 1.11
    },
    {
        product : 'kawior',
        calories1g : 2.67
    },
    {
        product : 'kraby gotowane',
        calories1g : 1.12
    },
    {
        product : 'kraby surowe',
        calories1g : 0.85
    },
    {
        product : 'kraby w puszce',
        calories1g : 1.04
    },
    {
        product : 'kraby w skorpupie',
        calories1g : 0.44
    },
    {
        product : 'krewetki gotowane',
        calories1g : 1.00
    },
    {
        product : 'łosoś gotowany',
        calories1g : 2.63
    },
    {
        product : 'łosoś pieczony',
        calories1g : 2.54
    },
    {
        product : 'łosoś smażony',
        calories1g : 3.01
    },
    {
        product : 'łosoś świeży',
        calories1g : 2.06
    },
    {
        product : 'łosoś w puszce',
        calories1g : 2.04
    },
    {
        product : 'łosoś wędzony',
        calories1g : 1.58
    },
    {
        product : 'morszczuk pieczony',
        calories1g : 1.22
    },
    {
        product : 'morszczuk smażony',
        calories1g : 1.60
    },
    {
        product : 'morszczuk świeży',
        calories1g : 0.90
    },
    {
        product : 'paluszki rybne mrożone',
        calories1g : 1.80
    },
    {
        product : 'paluszki rybne pieczone',
        calories1g : 2.15
    },
    {
        product : 'paluszki rybne smażone',
        calories1g : 2.34
    },
    {
        product : 'paluszki rybne świeże',
        calories1g : 2.00
    },
    {
        product : 'panga pieczona',
        calories1g : 1.12
    },
    {
        product : 'panga smażona',
        calories1g : 1.52
    },
    {
        product : 'panga świeża',
        calories1g : 0.93
    },
    {
        product : 'paprykarz szczeciński',
        calories1g : 1.80
    },
    {
        product : 'pasta rybna',
        calories1g : 1.00
    },
    {
        product : 'pasztet rybny',
        calories1g : 2.66
    },
    {
        product : 'sandacz pieczony',
        calories1g : 1.15
    },
    {
        product : 'sandacz smażony',
        calories1g : 1.39
    },
    {
        product : 'sandacz świeży',
        calories1g : 0.85
    },
    {
        product : 'sardynka świeża',
        calories1g : 1.72
    },
    {
        product : 'sardynka w oleju',
        calories1g : 2.23
    },
    {
        product : 'sardynka w pomidorach',
        calories1g : 1.65
    },
    {
        product : 'sardynka w puszce, bez oleju',
        calories1g : 2.20
    },
    {
        product : 'szczupak gotowany',
        calories1g : 0.18
    },
    {
        product : 'szczupak pieczony',
        calories1g : 1.00
    },
    {
        product : 'szczupak smażony',
        calories1g : 1.53
    },
    {
        product : 'szczupak świeży',
        calories1g : 0.79
    },
    {
        product : 'szprot w oleju',
        calories1g : 3.56
    },
    {
        product : 'śledź marynowany',
        calories1g : 1.95
    },
    {
        product : 'śledź pieczony',
        calories1g : 2.12
    },
    {
        product : 'śledź smażony',
        calories1g : 2.50
    },
    {
        product : 'śledź solony',
        calories1g : 2.20
    },
    {
        product : 'śledź świeży',
        calories1g : 1.65
    },
    {
        product : 'śledź w oleju',
        calories1g : 3.01
    },
    {
        product : 'śledź w pomidorach',
        calories1g : 1.80
    },
    {
        product : 'śledź w sosie pomidorowym',
        calories1g : 1.60
    },
    {
        product : 'śledź w śmietanie',
        calories1g : 1.00
    },
    {
        product : 'śledź wędzony',
        calories1g : 2.13
    },
    {
        product : 'tuńczyk pieczony',
        calories1g : 1.87
    },
    {
        product : 'tuńczyk świeży',
        calories1g : 1.45
    },
    {
        product : 'tuńczyk w oleju',
        calories1g : 1.91
    },
    {
        product : 'tuńczyk w oleju pomidorowym z warzywami',
        calories1g : 1.40
    },
    {
        product : 'tuńczyk w wsosie własnym',
        calories1g : 1.01
    },
    {
        product : 'tuńczyk w wodzie',
        calories1g : 0.95
    },
    {
        product : 'Actimel',
        calories1g : 0.71
    },
    {
        product : 'jajko kurze, białko',
        calories1g : 0.52
    },
    {
        product : 'jajko kurze całe, surowe, świeże',
        calories1g : 1.43
    },
    {
        product : 'jajko kurze całe, gotowane',
        calories1g : 1.55
    },
    {
        product : 'jajko kurze, żółtko',
        calories1g : 3.22
    },
    {
        product : 'jajko przepiórcze',
        calories1g : 1.58
    },
    {
        product : 'kefir 0% tłuszczu',
        calories1g : 0.26
    },
    {
        product : 'kefir 2% tłuszczu',
        calories1g : 0.55
    },
    {
        product : 'maślanka 0,5%',
        calories1g : 0.36
    },
    {
        product : 'maślanka 1,5%',
        calories1g : 0.45
    },
    {
        product : 'mleko kozie',
        calories1g : 0.70
    },
    {
        product : 'mleko krowie pasteryzowane 0,5% tłuszczu',
        calories1g : 0.40
    },
    {
        product : 'mleko krowie pasteryzowane 2,0% tłuszczu	',
        calories1g : 0.54
    },
    {
        product : 'mleko krowie pasteryzowane 3,2% tłuszczu',
        calories1g : 0.62
    },
    {
        product : 'mleko krowie pasteryzowane 3,5% tłuszczu',
        calories1g : 0.66
    },
    {
        product : 'mleko krowie UHT 0,5% tłuszczu',
        calories1g : 0.40
    },
    {
        product : 'mleko krowie UHT 1,5% tłuszczu',
        calories1g : 0.45
    },
    {
        product : 'mleko krowie UHT 2,0% tłuszczu',
        calories1g : 0.53
    },
    {
        product : 'mleko krowie 3,2% tłuszczu',
        calories1g : 0.63
    },
    {
        product : 'mleko krowie w proszku odtłuszczone',
        calories1g : 2.60
    },
    {
        product : 'mleko krowie w proszku pełne',
        calories1g : 4.75
    },
    {
        product : 'mleko krowie w proszku półtłuste',
        calories1g : 4.09
    },
    {
        product : 'mleko krowie zagęszczone niesłodzone',
        calories1g : 1.33
    },
    {
        product : 'mleko krowie zagęszczone słodzone',
        calories1g : 3.30
    },
    {
        product : 'mleko krowie zsiadłe',
        calories1g : 0.60
    },
    {
        product : 'mleko owcze',
        calories1g : 1.09
    },
    {
        product : 'ser edamski tłusty',
        calories1g : 3.16
    },
    {
        product : 'ser edamski topiony',
        calories1g : 2.99
    },
    {
        product : 'ser ementaler pełnotłusty',
        calories1g : 3.84
    },
    {
        product : 'ser ementaler tłusty',
        calories1g : 3.16
    },
    {
        product : 'ser feta',
        calories1g : 2.16
    },
    {
        product : 'ser mascarpone',
        calories1g : 4.55
    },
    {
        product : 'ser mozzarella',
        calories1g : 2.51
    },
    {
        product : 'ser oscypek',
        calories1g : 5.93
    },
    {
        product : 'ser parmezan',
        calories1g : 4.53
    },
    {
        product : 'ser pleśniowy',
        calories1g : 3.52
    },
    {
        product : 'ser tofu',
        calories1g : 0.72
    },
    {
        product : 'ser topiony edamski',
        calories1g : 2.94
    },
    {
        product : 'ser topiony ementaler',
        calories1g : 3.06
    },
    {
        product : 'ser topiony kremowy',
        calories1g : 3.11
    },
    {
        product : 'ser topiony tłusty',
        calories1g : 2.25
    },
    {
        product : 'ser twarogowy chudy',
        calories1g : 0.98
    },
    {
        product : 'ser twarogowy półtłusty',
        calories1g : 1.35
    },
    {
        product : 'ser twarogowy tłusty',
        calories1g : 1.77
    },
    {
        product : 'ser wiejski',
        calories1g : 1.29
    },
    {
        product : 'serek homogenizowany',
        calories1g : 1.43
    },
    {
        product : 'serwatka płynna',
        calories1g : 0.26
    },
    {
        product : 'śmietana 9% tłuszczu',
        calories1g : 1.11
    },
    {
        product : 'śmietana 12% tłuszczu',
        calories1g : 1.36
    },
    {
        product : 'śmietana 18% tłuszczu',
        calories1g : 1.85
    },
    {
        product : 'śmietana 20% tłuszczu',
        calories1g : 2.02
    },
    {
        product : 'śmietana 24% tłuszczu',
        calories1g : 2.40
    },
    {
        product : 'śmietana 30% tłuszczu',
        calories1g : 2.92
    },
    {
        product : 'śmietanka 12% tłuszczu',
        calories1g : 1.35
    },
    {
        product : 'śmietanka 18% tłuszczu',
        calories1g : 1.88
    },
    {
        product : 'śmietanka 20% tłuszczu',
        calories1g : 2.06
    },
    {
        product : 'śmietanka 30% tłuszczu',
        calories1g : 2.90
    },
    {
        product : 'zabielacz do kawy, proszek',
        calories1g : 1.05
    },
]

export default products;