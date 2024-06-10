document.addEventListener("DOMContentLoaded", function () {
  var translations = {
    cs: {
      // Hlavní stránka
      home: "Hlavní stránka",
      restaurant: "Restaurace",
      accommodation: "Ubytování",
      shop: "Krámek",
      news: "Aktuality",
      welcome: "Vítejte v Refugiu",
      welcome_text:
        "REFUGIO se nachází v překrásné přírodě Labských pískovců na samotné hranici národního parku České Švýcarsko. Leží přímo pod skalními masívy v obci Tisá.",
      opening_hours: "Otevírací doba",
      opening_hours_text:
        "Pondělí: 9:00 - 21:00<br>Úterý: Zavřeno<br>Středa: 9:00 - 21:00<br>Čtvrtek: 9:00 - 21:00<br>Pátek: 9:00 - 22:00<br>Sobota: 9:00 - 22:00<br>Neděle: 9:00 - 21:00",
      about_us: "O nás",
      about_us_text:
        "Nabízíme ubytování, kavárnu a outdoorový obchod pro horolezectví, turistiku a další outdoorové aktivity. Tisá je rájem pro horolezce, cyklisty, běžkaře a turisty. Máme pohodlné pokoje a apartmány, kde si můžete odpočinout po náročném dni v přírodě.<br><br>Naše kavárna nabízí výbornou kávu, čerstvé dezerty a příjemné posezení. Pro horolezce, turisty a cyklistymáme široký výběr vybavení. Můžete si u nás půjčit kolo a využít mnoho tras jak u nás, tak v nedalekém Německu.<br><br>Chcete-li si užít krásy okolní přírody, není problém sjednat průvodce pro sportovní aktivity či turistiku. Vzimě můžete navštívit lyžařský vlek v Tisé nebo SKI areál Zadní Telnice. Běžkaři mají k dispozici udržovanétrasy v Českém Švýcarsku i v Německu.<br><br>Naše obec je vzdálená 15–30 minut jízdy od Děčína, Teplic a Ústí nad Labem, a 4 km od sjezdu Petrovice zdálnice D8.<br></br>",
      service_restaurant: "Restaurace",
      service_hotel: "Hotel",
      service_shop: "Krámek",
      service_news: "Novinky",
      restaurantClick: "Images/index_restaurace.png",
      accommodationClick: "Images/index_hotel.png",
      shopClick: "Images/index_kramek.png",
      newsClick: "Images/index_news.png",
      how_to_reach_us: "Jak se k nám dostanete",
      contact_info:
        '<strong>Refugio s.r.o. </strong><br>GPS: 50° 47´ 8" N, 14° 1´ 47" E <br><br><strong>Adresa</strong><br>Refugio s.r.o., Tisá 473, 403 36, Tisá <br><br><strong>Odpovědný vedoucí</strong><br>Jindřich Beneš<br><br><strong>Telefon pro dotazy:</strong><br>+ 420 702 017 774 <br>+ 420 724 166 693 <br><br><strong>E-mail pro rezervace:</strong><br>refugio@seznam.cz',
      contact: "Kontakt",
      address: "Adresa",
      social_media: "Sociální sítě",

      // Restaurace
      cafe_restaurant: "Kavárna<br><span>A restaurace</span>",
      visit_us:
        "Navštivte naši restauraci s kavárnou v malebném prostředí Českosaského Švýcarska.<br>",
      coffee: "Výborná káva",
      coffee_text:
        "Čerstvě pražená káva ze směsi přímo pro nás z nedaleké děčínské pražírny Caffé08. Namleto na místě.",
      bio_wine: "Bio vína z Pfalzu",
      bio_wine_text:
        "Díky dlouholetému přátelství s majitelem vinařství Vám nabízíme výborné víno z Německa. <br />Děkujeme Klausovi za zásobování!",
      desserts: "Domácí zákusky",
      desserts_text:
        "Pečeme rádi a s láskou. Zkoušíme novinky a pravidelně napékáme staré a osvědčené.",
      menu: "Výběr jídel",
      menu_text:
        "Máme pro Vás stálé menu i týdenní nabídku, kterou pravidelně obměňujeme a vytváříme dle sezonních a místních nabídek. <br />Nezklameme, zákazníkům se speciálními dietetickými potřebami se snažíme vyjít vstříc.",
      czech_wine: "Česká vína",
      czech_wine_text:
        "Na vinném lístku také najdete vína z Moravy - Znovín Znojmo",
      beer: "Klášter a Falkenštejn",
      beer_text:
        'Kromě našeho již tradičního Kláštera nabízíme nově polotmavou "dvanáctku" a přes léto i "Svižného Emila" - devítistupňové letní pivo. Obě vymazlená piva pochází z malého pivovaru Falknštejn v Krásné Lípě.',
      menu_title: "Jídelní lístek",
      menu_description:
        "Kromě stálého menu pro vás pravidelně připravujeme navíc jídla dle sezonních a místních nabídek, polévky z čerstvých surovin a domácí koláče.",
      reserve_title: "Zarezervujte si stůl",
      reserve_text: "Pro rezervaci stolu volejte nebo pište!",
      // Ubytování
      accommodation_title: "Ubytování <br><span>v Refugiu</span>",
      accommodation_description:
        "Penzion REFUGIO se nachází v překrásné přírodě Labských pískovců na samotné hranici parku České Švýcarsko. Penzion leží přímo pod skalními masívy v obci Tisá. Nabízíme ubytování, kavárnu s nekuřáckou restaurací a outdoor shop, kde naleznete vše potřebné pro horolezectví, turistiku a veškeré aktivity v přírodě.<br>",
      reservation: "Rezervace",
      reservation_description:
        "Pro rezervaci piště na <br> e-mail: <br> refugio@seznam.cz ",
      price: "Cena",
      price_description: "Ceny pobytů uvedeny u jednotlivých pokojů.",
      deposit: "Záloha",
      deposit_description:
        "Nevratná záloha 50% z celkové ceny je splatná max. 30 dní před Vaším příjezdem.",
      apartment: "Apartmán",
      apartment_description:
        "V nově zrekonstruovaném apartmánu Vám nabízíme dvě samostatné ložnice a možnost přistýlky na rozkládací pohovce, televizi, vybavenou kuchyňku, jídelní kout, samostatnou koupelnu s vanou i sprchovým koutem, toaletu, pračku.",
      apartment_price:
        "1 - 2 noci: 3 400 Kč/155€ noc <br>3 - 6 nocí: 3 200,-/ noc 139€ <br>7 a více nocí: 3 300,-/ noc 130€",
      apartment_extra_bed:
        "1 - 2 noci: 350,-Kč <br>3 - 6 nocí: 320,-Kč <br>7 - více nocí: 290,-Kč",
      spa_fee: "Lázeňský poplatek z pobytu/dospělý: 38,-/noc 1,50€",
      room_1: "Pokoj č. 1",
      room_1_description:
        "V pokoji se nachází dvojpostel, masivní palanda (možnost 2 přistýlek) televize, malá lednice, koupelna se sprchovým koutem a toaletou.",
      room_1_price:
        "<strong>2 osoby/noc</strong><br>1 - 2 noci: 1 490,- Kč | 65€ <br>3 - 6 nocí: 1 400,- Kč | 61€ <br>7 - více nocí: 1 350,- Kč | 59€",
      room_1_extra_bed:
        "1 - 2 noci: 350,-Kč <br>3 - 6 nocí: 320,-Kč <br>7 - více nocí: 290,-Kč",
      room_2: "Pokoj č. 2",
      room_2_description:
        "V pokoji se nachází dvojpostel, rozkládací gauč (možnost 1 přistýlky), televize, stůl a 2 židle, malá lednice, koupelna se sprchovým koutem a toaletou.",
      room_2_price:
        "<strong>2 osoby/noc</strong> <br>1 - 2 noci: 1 490,- Kč | 65€ <br>3 - 6 nocí: 1 400,- Kč | 61€ <br>7 - více nocí: 1 350,- Kč | 59€",
      room_2_extra_bed:
        "1 - 2 noci: 350,-Kč <br>3 - 6 nocí: 320,-Kč <br>7 - více nocí: 290,-Kč",
      // Krámek
      shop_title: "Horolezecký<br><span>A outdoorový shop</span>",
      shop_description:
        "V našem k prasknutí narvaném obchodě najdete kompletní vybavení pro začínající i pokročilé horolezce. Výstroj i výzbroj na turistiku, kempování, běžky a mnoho a mnoho dalšího...<br>",
      what_we_offer_title: "CO U NÁS NAJDETE",
      what_we_offer_1:
        "Naše nabídka zahrnuje špičkové horolezecké vybavení od renomovaných značek, které jsou světově uznávané pro svou spolehlivost a inovativní design. Od lezeckých lana, karabin a cepínů až po kompletní sady ochranných pomůcek, u nás najdete vše, co potřebujete k bezpečnému a úspěšnému zdolání každého vrcholu.",
      what_we_offer_2:
        "Pro ty, kteří milují přírodu a outdoorové aktivity, máme připravené také široké spektrum funkčního oblečení a vybavení. Naše outdoorové oblečení kombinuje špičkové technologie s pohodlným střihem a odolnými materiály, abyste byli vždy připraveni na každé počasí a každou výzvu, kterou vám příroda přinese.",
      what_we_offer_3:
        "Nenechte se zaskočit žádnou výzvou přírody. S naším vybavením a oblečením se stanete neohroženými dobrodruhy, kteří jsou připraveni vzdorovat větru i dešti a objevovat krásy divočiny s maximálním komfortem a bezpečností. Navštivte nás ještě dnes a připravte se na svou další nezapomenutelnou dobrodružnou cestu!",
      brands_title: "Jaké značky u nás najdete?",
      // Aktuality
      aktuality_header: "Aktuality",
      aktuality_header2: "Co se děje v Refugiu?",
      sort: "Seřadit podle",
      by_date: "Datumu",
    },
    de: {
      // Hlavní stránka
      home: "Startseite",
      restaurant: "Restaurant",
      accommodation: "Unterkunft",
      shop: "Laden",
      news: "Aktuelles",
      welcome: "Willkommen im Refugio",
      welcome_text:
        "Das REFUGIO befindet sich in der wunderschönen Natur der Elbsandsteine am Rande des Nationalparks Böhmische Schweiz. Es liegt direkt unter den Felsenmassiven im Dorf Tisá.",
      opening_hours: "Öffnungszeiten",
      opening_hours_text:
        "Montag: 9:00 - 21:00<br>Dienstag: Geschlossen<br>Mittwoch: 9:00 - 21:00<br>Donnerstag: 9:00 - 21:00<br>Freitag: 9:00 - 22:00<br>Samstag: 9:00 - 22:00<br>Sonntag: 9:00 - 21:00",
      about_us: "Über uns",
      about_us_text:
        "Wir bieten Unterkunft, ein Café und einen Outdoor-Shop für Klettern, Wandern und andere Outdoor-Aktivitäten. Tisá ist ein Paradies für Kletterer, Radfahrer, Skilangläufer und Touristen. Wir haben komfortable Zimmer und Apartments, in denen Sie sich nach einem anstrengenden Tag in der Natur ausruhen können. <br><br> Unser Café bietet exzellenten Kaffee, frische Desserts und eine angenehme Atmosphäre. Für Kletterer, Touristen und Radfahrer haben wir eine große Auswahl an Ausrüstung. Sie können bei uns ein Fahrrad mieten und viele Strecken sowohl bei uns als auch im nahegelegenen Deutschland nutzen. <br><br> Wenn Sie die Schönheit der Umgebung genießen möchten, ist es kein Problem, einen Führer für sportliche Aktivitäten oder Wanderungen zu buchen. Im Winter können Sie den Skilift in Tisá oder das Skigebiet Zadní Telnice besuchen. Langläufer haben präparierte Loipen sowohl in der Böhmischen Schweiz als auch in Deutschland zur Verfügung. <br> <br> Unser Dorf liegt 15-30 Fahrminuten von Děčín, Teplice und Ústí nad Labem und 4 km vom Autobahnanschluss Petrovice der Autobahn D8 entfernt.",
      service_restaurant: "Restaurant",
      service_hotel: "Hotel",
      service_shop: "Laden",
      service_news: "Neuigkeiten",
      restaurantClick: "Images/index_restaurace_de.png",
      accommodationClick: "Images/index_hotel_de.png",
      shopClick: "Images/index_kramek_de.png",
      newsClick: "Images/index_news_de.png",
      how_to_reach_us: "Wie Sie uns erreichen",
      contact_info:
        '<strong>Refugio s.r.o. </strong><br>GPS: 50° 47´ 8" N, 14° 1´ 47" E <br><br><strong>Adresse</strong><br>Refugio s.r.o., Tisá 473, 403 36, Tisá <br><br><strong>Verantwortlicher Manager</strong><br>Jindřich Beneš<br><br><strong>Telefon für Anfragen:</strong><br>+ 420 702 017 774 <br>+ 420 724 166 693 <br><br><strong>E-Mail für Reservierungen:</strong><br>refugio@seznam.cz',
      contact: "Kontakt",
      address: "Adresse",
      social_media: "Soziale Netzwerke",

      // Restaurace
      cafe_restaurant: "Café<br><span>Und Restaurant</span>",
      visit_us:
        "Besuchen Sie unser Café und Restaurant in der malerischen Umgebung der Böhmisch-Sächsischen Schweiz.<br>",
      coffee: "Ausgezeichneter Kaffee",
      coffee_text:
        "Frisch gerösteter Kaffee aus einer Mischung, die speziell für uns aus der nahegelegenen Děčín-Kaffeerösterei Caffé08 stammt. Vor Ort gemahlen.",
      bio_wine: "Bio-Weine aus der Pfalz",
      bio_wine_text:
        "Dank einer langjährigen Freundschaft mit dem Inhaber des Weinguts bieten wir Ihnen hervorragende Weine aus Deutschland an. <br />Vielen Dank an Klaus für die Lieferung!",
      desserts: "Hausgemachte Desserts",
      desserts_text:
        "Wir backen gerne und mit Liebe. Wir probieren neue Sachen und backen regelmäßig altbewährte.",
      menu: "Auswahl an Gerichten",
      menu_text:
        "Wir haben ein festes Menü und ein wöchentliches Angebot, das wir regelmäßig ändern und je nach saisonalem und lokalem Angebot erstellen. <br />Wir enttäuschen nicht, wir versuchen, den Kunden mit speziellen diätetischen Bedürfnissen entgegenzukommen.",
      czech_wine: "Tschechische Weine",
      czech_wine_text:
        "Auf der Weinkarte finden Sie auch Weine aus Mähren - Znovín Znojmo",
      beer: "Klášter und Falkenštejn",
      beer_text:
        'Neben unserem traditionellen Klášter bieten wir jetzt auch ein halbdunkles "Zwölfer" und im Sommer auch den "Svižný Emil" - ein neunstufiges Sommerbier. Beide sorgfältig gebrauten Biere stammen aus der kleinen Brauerei Falknštejn in Krásná Lípa.',
      menu_title: "Speisekarte",
      menu_description:
        "Neben dem festen Menü bereiten wir regelmäßig zusätzliche Gerichte nach saisonalen und lokalen Angeboten zu, Suppen aus frischen Zutaten und hausgemachte Kuchen.",
      reserve_title: "Reservieren Sie einen Tisch",
      reserve_text:
        "Rufen Sie an oder schreiben Sie, um einen Tisch zu reservieren!",

      // Ubytování
      accommodation_title: "Unterkunft <br><span>im Refugio</span>",
      accommodation_description:
        "Das REFUGIO Gästehaus liegt in der wunderschönen Natur der Elbsandsteingebirge, direkt an der Grenze des Nationalparks Böhmische Schweiz. Das Gästehaus befindet sich direkt unter den Felsmassiven im Dorf Tisá. Wir bieten Unterkunft, ein Café mit Nichtraucherrestaurant und einen Outdoor-Shop, in dem Sie alles Notwendige für Klettern, Wandern und alle Aktivitäten in der Natur finden.<br>",
      reservation: "Reservierung",
      reservation_description:
        "Für Reservierungen schreiben Sie an <br> E-Mail: <br> refugio@seznam.cz ",
      price: "Preis",
      price_description:
        "Preise für Aufenthalte sind bei den einzelnen Zimmern angegeben.",
      deposit: "Anzahlung",
      deposit_description:
        "Eine nicht rückzahlbare Anzahlung von 50 % des Gesamtpreises ist bis 30 Tage vor Ihrer Ankunft zu leisten.",
      apartment: "Apartment",
      apartment_description:
        "In der neu renovierten Wohnung bieten wir Ihnen zwei separate Schlafzimmer und die Möglichkeit eines Zustellbetts auf einem Schlafsofa, einen Fernseher, eine ausgestattete Küchenzeile, einen Essbereich, ein separates Badezimmer mit Badewanne und Dusche, eine Toilette, eine Waschmaschine.",
      apartment_price:
        "1 - 2 Nächte: 3 400 CZK/155€ pro Nacht <br>3 - 6 Nächte: 3 200 CZK/ pro Nacht 139€ <br>7 und mehr Nächte: 3 300 CZK/ pro Nacht 130€",
      apartment_extra_bed:
        "1 - 2 Nächte: 350,- CZK <br>3 - 6 Nächte: 320,- CZK <br>7 und mehr Nächte: 290,- CZK",
      spa_fee: "Kurtaxe pro Aufenthalt/Erwachsener: 38,-/Nacht 1,50€",
      room_1: "Zimmer Nr. 1",
      room_1_description:
        "Im Zimmer befinden sich ein Doppelbett, ein massives Etagenbett (2 Zustellbetten möglich), ein Fernseher, ein kleiner Kühlschrank, ein Badezimmer mit Dusche und Toilette.",
      room_1_price:
        "<strong>2 Personen/Nacht</strong><br>1 - 2 Nächte: 1 490,- CZK | 65€ <br>3 - 6 Nächte: 1 400,- CZK | 61€ <br>7 und mehr Nächte: 1 350,- CZK | 59€",
      room_1_extra_bed:
        "1 - 2 Nächte: 350,- CZK <br>3 - 6 Nächte: 320,- CZK <br>7 und mehr Nächte: 290,- CZK",
      room_2: "Zimmer Nr. 2",
      room_2_description:
        "Im Zimmer befinden sich ein Doppelbett, ein ausziehbares Sofa (1 Zustellbett möglich), ein Fernseher, ein Tisch und 2 Stühle, ein kleiner Kühlschrank, ein Badezimmer mit Dusche und Toilette.",
      room_2_price:
        "<strong>2 Personen/Nacht</strong> <br>1 - 2 Nächte: 1 490,- CZK | 65€ <br>3 - 6 Nächte: 1 400,- CZK | 61€ <br>7 und mehr Nächte: 1 350,- CZK | 59€",
      room_2_extra_bed:
        "1 - 2 Nächte: 350,- CZK <br>3 - 6 Nächte: 320,- CZK <br>7 und mehr Nächte: 290,- CZK",
      // Krámek
      shop_title: "Kletter-<br><span>und Outdoor-Shop</span>",
      shop_description:
        "In unserem prall gefüllten Laden finden Sie die komplette Ausrüstung für Anfänger und fortgeschrittene Kletterer. Ausrüstung und Zubehör für Wandern, Camping, Langlauf und vieles mehr...<br>",
      what_we_offer_title: "WAS WIR BIETEN",
      what_we_offer_1:
        "Unser Angebot umfasst erstklassige Kletterausrüstung von renommierten Marken, die weltweit für ihre Zuverlässigkeit und ihr innovatives Design anerkannt sind. Von Kletterseilen, Karabinern und Eispickeln bis hin zu kompletten Sets an Schutzausrüstung finden Sie bei uns alles, was Sie für eine sichere und erfolgreiche Besteigung jedes Gipfels benötigen.",
      what_we_offer_2:
        "Für diejenigen, die die Natur und Outdoor-Aktivitäten lieben, haben wir auch eine breite Palette an funktioneller Kleidung und Ausrüstung vorbereitet. Unsere Outdoor-Kleidung kombiniert Spitzentechnologie mit komfortablen Schnitten und strapazierfähigen Materialien, damit Sie immer auf jedes Wetter und jede Herausforderung vorbereitet sind, die die Natur für Sie bereithält.",
      what_we_offer_3:
        "Lassen Sie sich von keiner Herausforderung der Natur überraschen. Mit unserer Ausrüstung und Kleidung werden Sie zu furchtlosen Abenteurern, die bereit sind, Wind und Regen zu trotzen und die Schönheit der Wildnis mit maximalem Komfort und Sicherheit zu entdecken. Besuchen Sie uns noch heute und bereiten Sie sich auf Ihre nächste unvergessliche Abenteuerreise vor!",
      brands_title: "Welche Marken finden Sie bei uns?",
      // Aktuality
      aktuality_header: "Nachrichten",
      aktuality_header2: "Was ist in Refugio los?",
      sort: "Sortieren nach",
      by_date: "Datum",
    },
  };

  function setLanguage(language) {
    $("[data-key]").each(function () {
      var key = $(this).data("key");
      var tag = $(this).prop("tagName").toLowerCase();
      if (tag === "div") {
        $(this).css(
          "background-image",
          "url(" + translations[language][key] + ")"
        );
      } else {
        $(this).html(translations[language][key]);
      }
    });
    localStorage.setItem("preferredLanguage", language);
  }

  var userLang = navigator.language || navigator.userLanguage;
  var savedLang = localStorage.getItem("preferredLanguage");
  var defaultLang = savedLang || (userLang.startsWith("de") ? "de" : "cs");
  setLanguage(defaultLang);

  var currentLang = defaultLang;

  $("#change-lang").click(function () {
    currentLang = currentLang === "cs" ? "de" : "cs";
    setLanguage(currentLang);
  });
});
