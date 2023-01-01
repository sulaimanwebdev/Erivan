import React from "react";
import { createRoot } from "react-dom/client";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        langEN: "<span className='font-[900]'>EN</span>",
        langFR: "<span>FR</span>",
        since: "Since",
        home: "Home",
        about: "About Us",
        ex: "Experiences & Services",
        ca: "Careers",
        in: "Our Involvment",
        title: "FROM DESIGN ",
        titltwo: "TO DELIVERY.",
        titlethree: "",
        titlefour: "",
        descone: "Where connection meets technology.<br/>Join <span className='text-white font-[900]'>Erivan</span> in its adventure.",
        descbold: "Erivan Gecom",
        btn: "JOIN THE ADVENTURE",
        longDesc:
          "Where solutions don't exist, we make them accessible and realize them. With all the new innovations, Erivan is staying ahead to serve its customers with the best experience. Erivan specializes in:",
        engineering: "Civil engineering",
        Telecommunications: "Telecommunications",
        testing: "Engineering and testing",
        project: "Project management",
        join: "JOIN THE ",
        jointwo: "ADVENTURE",
        joindesone:
          "Empowering everyone by making a positive difference. We are no ordinary team.",
        joindestwo: "Are you ready to join the adventure?",
        joinbtn: "APPLY NOW",
        history: "HISTORY",
        historyone:
          "Founded in 1981 by Pierre Lajeunesse, the company was first known under the sole name of Erivan. At that time, the company was working in civil engineering and construction of large-scale concrete jobs.",
        historytwo:
          "In 1995, <span className='text-white font-[900]'>Eric Lajeunesse</span>, one of Lajeunesse's sons, became increasingly involved in Erivan's activities. Having, himself, just gratuated in civil engineering, he helped Erivan make a judicious shift into the telecommunications field.<br/><br/>The increased skills, equiped with a solid and established experience, aligned perfectly with the high standards required by the industry",
        historythree:
          "Aiming to adapt to an extremely competitive and rapidly changing environment, the managers of Erivan decided to surround themselves with new, high-value partners: <span className='text-white font-[900]'>Martin Hince & Michel Aumais.</span><br/><br/>The specific knowledge and innovative perceptions of the latter would enhance the already recognized know-how of the company. Thus, while always staying true to the original philosophy of Erivan, now it was complemented by a stronger team.",
        historyfour:
          "Thus, in <span className='text-white font-[900]'>2004</span>, the <span className='text-white font-[900]'>Erivan Gecom Group</span><br className='hidden lg:flex'/> was officially born.",
        historyfive:
          "Adapting to the ever changing industry and to offer a competitive advantage, <span className='font-[900]'>Erivan opened an office in Mississauga, ON</span> to ensure a greater visibility and infiltrating the Ontario market.",
        historysix:
          "Today, the company has now reverted back to its original name, <span className='text-white font-[900]'>Erivan</span>. For more than 30 years now, it has acquired and maintained a strong reputation in the telecommunications and construction industry.<br/><br/>Furthermore, <span className='font-[900]'>Erivan opened an office in Calgary, AB</span> thus expanding the company nationally and infiltrating the Western market.",
        
          historysideText1: 'FOUNDED BY PIERRE LAJEUNESSE',
          historysideText2: 'TELECOMMUNICATIONS LAUNCH',
          historysideText3: 'NEW ASSOCIATES',
          historysideText4: "<div className='text-gray-main'>ERIVAN GECOM GROUP</div>",
          historysideText5: 'EXPANSION',
          historysideText6: 'TODAY',

        client: "OUR CUSTOMERS",
        homecontact: "CONTACT US",
        homeconactname: "Your name",
        homeconactemail: "Your email",
        homeconactcomment: "Your Message or comment",
        submit: "SUBMIT ",

        homeconactnamePlaceHolder: "Enter your name",
        homeconactemailPlaceHolder: "Enter your email",
        homeconactmessagePlaceHolder: "Enter your message or comment",
        // about us page
        aboutTitle: "ABOUT US",
        aboutdes:
          "Founded in 1981 by Pierre Lajeunesse, the company was first known under the sole name of Erivan. At that time, the company was working in civil engineering and construction of large-scale concrete jobs.",
        aboutag: "Founded in 1981",
        aboutbtn: "JOIN THE ADVENTURE",
        aboutstoryleftheadingone: "MORE ON",
        aboutstoryleftheadingtwo: " OUR STORY",
        aboutstorylefdesc:
          "The founder's determination to offer Erivan's client an experience that surpasses their own expectations quickly became a trademark of the company. Going above and beyond for each job, Mr. Lajeunesse's values were succesfully transmitted to his successors and became a requirement for his collaborators.",
        aboutstorylefdescbrone:
          "Furthermore, as a visionary leader, Mr. Lajeunsse's forward-thinking allowed him to remain open to learning and exploring new field of operation, thus allowing the company to constantly evolve while preserving an unblemished reputation, without ever compromising its intrinsic values.",
        aboutstorylefdescbrtwo:
          "In fact, when <span className='font-bold'>Eric Lajeunesse</span>, one of Mr. Lajeunesse's sons, became increasingly involved in Erivan's activities, he lead Erivan in making a judicious shift into the telecommunications field.",
        aboutstorylefdescbrthree:
          "Thanks to the increased skills, along with a solid and established experience, Erivan was able to match the high standards required by the industry.",
        aboutstoryrightdesc:
          "As the year 2000 was appraoching, the managers of Erivan were aiming to adapt to an extremely competitive and rapidly changing. It was then that they decided to surround themselves with new, high-value partners: Martin Hince & Michael Aumais.",
        aboutstoryrightdescbrone:
          "The specific knowledge and innovative perceptions of the latter would enhance the already recognized know-how of the company. Thus, while always staying true to the original philosophy of Erivan, now it was complemented by a stronger team.",
        aboutstoryrightdescbrtwo:
          "Today, the company has now reverted back to its original name, Erivan. For more than 30 years now, it has acquired and maintained a strong reputation in the telecommunications and construction industry.",
        ourOvers: "OUR VALUES",
        ourvaluesone:
          "Our great work ethic and irreproachable integrity are foundational to our success and for over 30 years, they have stood the test of time. Erivan sees these values as top priority.",
        ourvaluestwo:
          "In addition to that, it is primordial for Erivan to maintain a great versatility, through its multidisciplinary skills. With the aim to maintain strong, fruitful and long-lasting relationship, Erivan gives the utmost care to all clients and partners by treating each task with equal attention, regardless of the size or complexity of the project",
        ourvaluesthree:
          "<span className='text-white font-[900]'>Finally</span>, in order to always offer its customers smart solutions and better alternatives, Erivan constantly strives to demonstrate an innovative appraoch to all of its challenges.",
        missinone: "OUR",
        missintwo: "MISSION",
        ourmisiiondesc:
          "<span className='text-white font-[900]'>Erivan</span> wants to distinguish itself in all its fields of operations, through an irreproachable work ethic and integrity. Thus acquiring the recognition of the industry, as a loyal and trustworthy business partner.",
        team: "OUR TEAM",
        aboutpersononename: "ERIC LAJEUNESSE, ENG.",
        aboutpersononedesgination: "President – Erivan Group",
        aboutpersontwoname: "MARTIN HINCE, ENG.",
        aboutpersontwodesgination: "VP Operations – Associate",
        aboutpersonthreename: "FRANÇOIS GAGNÉ, ENG.",
        aboutpersonthreedesgination: "CEO Ontario & Western branch",
        aboutpersonfourname: "MICHEL AUMAIS",
        aboutpersonfourdesgination: "Project Manager - Associate",
        aboutpersonfivename: "JONATHAN SAUVAGEAU, ENG.",
        aboutpersonfivedesgination: "Project Manager – Major accounts",
        aboutpersonsixname: "OLIVIER LAJEUNESSE, ENG.",
        aboutpersonsixdesgination: "Project Manager – Major accounts",
        aboutpersonsevenname: "JONATHAN BERTHIAUME",
        aboutpersonsevendesgination: "Project Manager – Major accounts",
        aboutpersoneightname: "BENJAMIN GRIMES, ENG.",
        aboutpersoneightdesgination: "Project Manager – Major accounts",
        aboutpersonninename: "MATTHEW FALKINER",
        aboutpersonninedesgination: "Director of Operations – Ontario",
        aboutpersontenname: "GERMAN LANDO",
        aboutpersontendesgination: "Director of Operations - Alberta",
        aboutpersonelvenname: "ANTOINE BRODEUR, JR. ENG.",
        aboutpersonelvendesgination: "Project Manager",
        aboutpersonetwelname: "SAMUEL PLANTE",
        aboutpersonetweldesgination: "Project Manager",
        aboutpersonethirtyname: "NIKOLA PETROVIC",
        aboutpersonethirtydesgination: "Health and Safety Coordinator",
        aboutpersonefourtheenname: "MARIE-ANDRÉE SÉVIGNY",
        aboutpersonefourtheendesgination: "Administrative and Finance Manager",
        aboutpersonefithtennname: "PASCALE CALLENDER, CRIA",
        aboutpersonefithtenndesgination: "HR Manager",
        // EXPERIENCE section
        experienceheadingone: "EXPERIENCE &",
        experienceheadingtwo: "SERVICES",
        exdesc:
          " We develop creative, comprehensive and sustainable engineering solutions.",
        exbtn: "JOIN THE ADVENTURE",
        exheadingleftone: "THE EXPERIENCE",
        exheadinglefttwo: "THAT MAKES THE DIFFERENCE",
        exheadingleftthree: "",
        exheadingrightone:
          "Well established in the telecommunications industry, Erivan has cutting-edge expertise in civil engineering and project design.",
        exheadingrighttwo:
          "Our specialized team, mainly composed of professional engineers graduates who are subject to a rigorous code of ethics, operates according to procedures recognized by the industry.",
        exheadingrightthree:
          "Our experience to direct our efforts towards optimal efficiency, in order to ensure full compliance with costs and schedule for each project,while preserving the safety of the public, customers and employees, is why our customers and partners love us!",
        exdescone:
          "With its general contractor’s license, Erivan is equipped with a qualified, committed, and passionate team, always in continuous training, and which remains at the cutting edge of industry standards..",
        exdesctwo:
          "Under the federal jurisdiction, the company is accredited by the main operators in the Canadian market, and therefore authorized to carry out public and institutional contracts in the vast majority of Canadian provinces, and even some American states. Erivan thus aims to be a one-stop-shop for the design and implementation of all types of projects.",
        exalwaysone: "ALWAYS LOOKING",
        exalwaystwo: "FORWARD",
        exalwaysdesc:
          " Constantly expanding our skills and knowledge in the face of technology’s exponential growth!",
        exservices: "OUR SERVICES",
        excivl: "CIVIL ENGINEERING",
        expointone: "General carpentryexpointone:",
        expointtwo: "Foundations / tower reinforcementexpointone:",
        expointthree: "Telecommunications infrastructureexpointone:",
        expointfour: "Assembly of steel structuresexpointone:",
        expointfive:
          "Supply and assembly for the erection of towersexpointone:",
        expointsix: "Reinforcement of building foundationsexpointone:",
        expointseven: "Construction of telecommunications sheltersexpointone:",
        expointeight: "Furnishing of commercial premisesexpointone:",
        expointnine: "Construction of telecommunications server rooms",
        expointten: "Complete concrete work",
        expointeleven: "Complete mechanical work",
        expointtwel: "Complete air conditioning works",
        expointthirty: "Complete electrical work",
        expointfourthu: "Earthing work",
        expointfify: "Lightning protection work",
        expointsixty: "Installation of specialized anchors",
        extele: "TELECOMMUNICATIONS",
        teleone:
          "antennes HSPA, LTE, LTE+, CDMA, UMTS , 3G ,WCDMA ,PCS, IDEN, GSM, etc.",
        teletwo: "Waveguide bridges and cable trays",
        telethree: "Telecommunications infrastructure",
        telefour: "Steel structures",
        telefive: "Supply and assembly for the erection of towers",
        telesix: "Strengthening foundations",
        teleseven: "Construction of telecommunications shelters",
        teleeight: "Furnishing of commercial premises",
        telenine: "Construction of telecommunications rooms",
        teleten: "Complete concrete work",
        teleeleven: "Complete mechanical work",
        teletwel: "Complete air conditioning works",
        telethiry: "Complete electrical work",
        teleforty: "Earthing work",
        telefifty: "Lightning protection work",
        telesixty: "Installation of an In-Building cellular blanket",
        teleseventy: "Installation of telecommunication equipment",
        teleighty: "Installation of specialized equipment with a crane",
        teleninteen: "Deployment of full vendor upgrade project",

        enheading: "ENGINEERING + TESTS",
        en1: "Feasibility studies",
        en2: "Structural analysis",
        en3: "Design of telecommunications",
        en4: "Design of steel structures",
        en5: "Antenna support design",
        en6: "Civil design",
        en7: "Project management - turnkey or personalized",
        en8: "Compliance inspection reports",
        en9: "Technical drawing, 3D modeling, photostimulation",
        en10: "Fiber optic fusion",
        en11: "Electronic frequency sweep",
        en12: "Compliance testing - fiber optic and copper",
        en13: "OTDR test",
        en14: "Surge arrester tests",
        en15: "PIM tests",
        en16: "Specialized telecom tests",
        en17: "Antenna alignment",
        en18: "Microwave alignment",
        en19: "Installation of specialized anchors",
        en20: "Validation of cellular network coverage",
        en21: "Design of the interior cellular cover (In-Building)",
        en22: "Addition of architectural camouflage for integration ",
        // carrer page
        c: "CAREERS",
        cdes: "Are you passionated by modern solutions and evolution? We are looking for hardworking, motivated individuals driven by a sense of innovation! Are you ready for an adventure?",
        cbtn: "JOIN THE ADVENTURE",
        ptrain: "PAID ",
        ptraint: "TRAINING",
        ptraindes:
          "Are you looking for good working conditions, job stability and a reputable company to wrok for? Join an ever-growing team and benefit from salary increase. If you're versatile and like manual work, you are in luck. We are starting our recruitment process to scale the team. Come make a difference at Erivan!",
        pcarr1: "STARTING OFF",
        pcarr2: "YOUR",
        pcarr3: "PROFESSIONAL",
        pcarr4: "CAREER?",
        pcarrdesc:
          "Join a team dedicated to large-scale projects with local and international impact. Discover a culture that values going the extra mile by providing the support and encouragement you need to do meaningful work that has a real significance on your community.",
        carrins1: "INSPIRED BY DIFFERENCE,",
        carrins2: "MOTIVATED BY INCLUSION",
        carrinsdesc1:
          "Discover a forward-thinking culture that doesn’t shy away from traditional qualities like respect, integrity and trust.",
        carrinsdesc2:
          "Erivan welcomes every perspective, strength, talent, belief or gender with open arms. Because when they come together, they produce extraordinary results.",
        carrpos: "POSTES OFFERTS",
        card1t: "Line and Antenna Worker",
        card1d:
          "Linemen install lines and antennas for major carriers’ cellular networks. They inspect security equipment and materials that ensure personal safety. They must be able to work at heights, on cell towers and on roofs of buildings. Linemen do physical, outdoor work.",
        card1btn: "SEE MORE",
        card2t: "Project Manager",
        card2d:
          "Project Managers carry out the planning and preparation of timelines (schedules) in collaboration with the worksite coordinator. They manage the entire coordination of projects that have been attributed to them and are their responsibility. They check plans and contracts in order to ensure that they are in good order and conform to norms.",
        card2btn: "SEE MORE",
        card3t: "Construction worker",
        card3d: "The construction worker physically executes the construction projects in collaboration with the work site coordinator, while respecting construction standards.",
        card3btn: "SEE MORE",
        card4t: "Carpenter",
        card4d:
          "Carpenters build shelters for telecommunications equipment as well as office space. They carry out all general construction tasks, including renovation and carpentry, as well as installation of specialized wall covering.",
        card4btn: "SEE MORE",
        card5t: "Warehouse clerk",
        card5d:
          "Warehouse clerks are responsible for all activities and functions related to general warehouse work, contributing to the efficiency of the department by carrying out order preparation, handling, and verification, as well as seeing to the loading and unloading of trucks.",
        card5btn: "SEE MORE",
        // involment
        intitel: "OUR INVOLVEMENT",
        intdesc:
          "For more than 25 years, Erivan, inspired by our founder and guided by our values, has played an important role in generating a significant social impact in its community.",
        intbtn: "JOIN THE ADVENTURE",
        achiveheading1: "WE NEED TO",
        achiveheading1: "DO MORE!",
        achivedesc1:
          "For more than 25 years, Erivan, inspired by our founder and guided by our values, has played an important role in generating a significant social impact in its community.",
        achivedesc2:
          "We are more than a telecommunications company. In fact, our work, our passion and our know-how at work have enabled us to get involved in many equally important causes.",
        achivedesc3:
          "In these uncertain times, Erivan promises to double its efforts and continue to support the causes that are close to our heart.",
        acause: "OTHER CAUSES",

        //contact us
        contacth: "CONTACT US",
        contacth2: "CONTACT US",
        contactd1:
          "We appreciate your taking the time to learn more about Erivan-Gecom.",
        contactd2:
          "We aim to become your partner of choice for the success of your projects, because our success depends on yours.",
        contactleftd1:
          "We are committed to remaining accessible to our customers. We want to be able to answer your questions and allay your concerns, in addition to listening to your needs and comments.",
        contactleftd2:
          "Help us to maintain our level of excellence, and to surpass ourselves again!",
        sliderheading: "OTHER CAUSES",
        //warehouse clerk
        warehouseheading: "WAREHOUSE CLERK",
        warehousedesc: "DESCRIPTION",
        warehousedescllong1:
          "Warehouse clerks are responsible for all activities and functions related to general warehouse work, contributing to the efficiency of the department by carrying out order preparation, handling, and verification, as well as seeing to the loading and unloading of trucks. Clerks ensure that deliveries and shipping are completed within deadlines, in good condition, and according to client instructions.",
        warehousedescllong2:
          "They also participate in the general maintenance of the warehouse, and carries out duties reliably and in accordance with norms. Clerks also act as drivers and carry out deliveries, following existing requirements and time frames.",
        contactFirstName: "Your name",
        contactFirstNumber: "Phone Number",
        contactFirstemail: "Email",
        contactFirstCoverletter: "Cover Letter",
        contactFirstCV: "Resume | CV",
        contactFirstsubmit: "Soumettre",
        contactFirstsubmit: "Submit",
        crequirement: "Requirements",
        crequirementskill: "Required Skills",
        crequirement1: "Hold a high school diploma (DES)",
        crequirement2:
          "Have a minimum 12 months experience working as a warehouse clerk/day labourer or cargo handler",
        crequirement3: "Experience driving forklift (an asset)",
        crequirement4: "Have completed the WHMIS training programs (an asset)",
        crequirement5: "Hold a class 3 license",
        crequirement6: "Have good physical skills",
        crequirement7: "Resourcefulness",
        crequirement8: "Autonomy",
        crequirement9: "Reliability",
        crequirement10: "Sociability",
        crequirement11: "Ability to take initiative",
        crequirement12: "Teamwork skills",
        // antena worker
        antenatitle1: "LINE AND ANTENNA",
        antenatitle2: "WORKER",
        antenadesc: "Description",
        antenadesclong:
          "Linemen install lines and antennas for major carriers’ cellular networks. They inspect security equipment and materials that ensure personal safety. They must be able to work at heights, on cell towers and roofs of buildings. Linemen do physical, outdoor work.",
        antenaRequ: "Requirements",
        antenaSkill: "Required Skills",
        antena1: "Détenir un BAC ou un DEC en génie civil ou en architecture",
        antena2: "Avoir de 3 à 5 ans d’expérience en gestion de projet",
        antena3: "Être apte à lire des plans et des devis",
        antena4: "Connaître le secteur de la construction",
        antena5: "Fiabilité",
        antena6: "Autonomie",
        antena7: "Connaissance des logiciels MS Office",
        antena8: "Sens de l’organisation et des responsabilités",
        antena9: "Bonnes habiletés relationnelles",
        antena10: "Capacité à travailler en équipe",
        antena11: "Motivation et attitude proactive",
        antena12: "Capacité à gérer un grand volume d’informations",
        // charge the project
        proh: "PROJECT MANAGER",
        prodes1:
          "Project Managers carry out the planning and preparation of timelines (schedules) in collaboration with the worksite coordinator. They manage the entire coordination of projects that have been attributed to them and are their responsibility. They check plans and contracts in order to ensure that they are in good order and conform to norms.",
        prodes2:
          "They participate in contract start-up meetings in order to know what is required, and have several responsibilities: drawing up requests for modifications and doing follow-ups, awarding, where applicable, sub-contracts in their sector of activities, and doing follow-up, carrying out various follow-up activities in order to ensure the smooth progress of projects (meeting deadlines, respecting budgets and extras etc. Project managers are the primary contacts among clients, expert consultants, and other human resources involved in projects. They also carry out other connected or complementary tasks at the request of their superiors, and represent the company at worksite meetings. Estimators must evaluate plans and quotes, make worksite visits, select sub-contractors, calculate materials and make requests for costs and detailed bids.",
        prorequierd: "Requirements",
        prorequierdSkill: "Required Skills",
        prorequierd1:
          "Possess a Bachelors or DEC (College Degree) in civil engineering or architecture",
        prorequierd2: "Have 3 to 5 years of project management experience",
        prorequierd3: "Able to read plans and quotes",
        prorequierd4: "Be familiar with the construction industrys",
        prorequierd5: "Reliability",
        prorequierd6: "Independence",
        prorequierd7: "Knowledge of MS Office",
        prorequierd8: "Organizational skills and sense of responsibility",
        prorequierd9: "Good interpersonal skills",
        prorequierd10: "Teamwork skills",
        prorequierd11: "Motivated and proactive attitude",
        prorequierd12: "Ability to manage a large amount of information",
        // constructor worker
        constructorHea: "CONSTRUCTION WORKER",
        // carpenter

        carpenterHeading: "Carpenter",
        cardesc1:
          "Carpenters build shelters for telecommunications equipment as wellas office space. They carry out all general construction tasks,including renovation and carpentry, as well as installation of specialized wall covering.",

        cardesc2:
          "They may occasionally be required to paint. Carpenters must be ableto read and interpret plans, work orders and drawings. They respectestablished work procedure guidelines and let the foreman know aboutanything that does not conform to norms. They carry out otherconnected tasks at the request of the superior.",
        carreq: "Requirements",
        carreqSkill: "Required Skills",
        carreq1: "Possess a High School Diploma (DES in Quebec)",
        carreq2: "Possess a High School Diploma (DES in Quebec)",
        carreq3: "Have 3-5 years relevant experience in carpentry",
        carreq4: "Be willing to travel",
        carreq5: "Reliability",
        carreq6: "Punctuality",
        carreq7: "Resourcefulness",
        carreq8: "Versatility",
        carreq9: "Team Work Ability",
      },
    },
    fr: {
      translation: {
        langEN: "<span>EN</span>",
        langFR: "<span className='font-[900]'>FR</span>",
        since: "Depuis",
        home: "Accueil",
        about: "À Propos",
        ex: "Expériences Et Services",
        ca: "Carrières",
        in: "Notre Engagement",
        title: "DE LA  ",
        titltwo: "CONCEPTION",
        titlethree: "À LA ",
        titlefour: "LIVRAISON",
        descone: "C’est la passion pour l’innovation qui<br/> nous allume. Rejoignez <span className='text-white font-[900]'>Erivan</span> dans son<br/> aventure!",
        desctwo: " Rejoignez Erivan dans son aventure!.",
        descbold: "Erivan",
        btn: "REJOIGNEZ L'AVENTURE",
        longDesc:
          "Là où les solutions n'existent pas, nous les rendons accessibles et les réalisons. Avec toutes les nouvelles innovations, Erivan garde une longueur d'avance pour servir ses clients avec la meilleure expérience.Erivan est spécialisé dans :",
        engineering: "Génie",
        Telecommunications: "Télécommunications",
        testing: "Ingénierie et tests",
        project: "Gestion de projet",
        join: "REJOIGNEZ ",
        jointwo: "L'AVENTURE",
        joindesone:
          "Donner du pouvoir à chacun en faisant une différence positive.Nous ne sommes pas une équipe ordinaire.",
        joindestwo: "Êtes-vous prêt à rejoindre l'aventure ?",
        joinbtn: "POSTULER",
        history: "NOTRE HISTOIRE",
        historyone:
          "Fondée en 1981 par Pierre Lajeunesse, l'entreprise a d'abord été connue sous le seul nom “Erivan. A cette époque, l'entreprise travaillait dans le domaine du génie civil et de la construction de grands ouvrages en béton.",
        historytwo:
          "En 1995, <span className='text-white font-[900]'>Eric Lajeunesse</span>, l'un des fils de Lajeunesse, s'implique de plus en plus dans les activités d'Erivan. Ayant lui-même obtenu un diplôme en génie civil, il a aidé Erivan à prendre un virage judicieux dans le domaine des télécommunications.Les compétences accrues de l’entreprise, déjà forte d’une solide expérience multidisciplinaire, cadraient désormais parfaitement avec les hauts standards d’exigence requis par le secteur des télécommunications.",
        historythree:
          "Dans une perspective d’adaptation à une conjoncture extrêmement concurrentielle et en évolution rapide et constante, les gestionnaires d’Erivan décidaient de s’entourer de nouveaux associés de grande valeur, <span className='text-white font-[900]'>Martin Hince & Michel Aumais.</span><br/><br/>Les connaissances spécifiques et les perceptions innovatrices de ces derniers on rapidement fait croître le savoir-faire déjà reconnu de la compagnie, toujours dans le respect et la continuité de la philosophie de départ, mais avec l’apport d’une énergie renouvelée par des talents diversifiés et complémentaires.",
        historyfour:
          "Ainsi, en <span className='text-white font-[900]'>2004</span>, le <span className='text-white font-[900]'>Groupe Erivan Gecom</span> est<br className='hidden lg:flex'/> officiellement né.",
        historyfive:
          "S'adaptant à l'évolution constante de l'industrie, <span className='font-[900]'>Erivan a ouvert un bureau à Mississauga, ON</span> afin d'assurer une plus grande visibilité et de s'infiltrer dans le marché ontarien.",
        historysix:
          "Aujourd'hui, l'entreprise a repris son nom d'origine, <span className='font-[900]'>Erivan</span>. Depuis plus de 30 ans maintenant, elle a acquis et maintenu une solide réputation dans le secteur des télécommunications et de la construction.<br/><br/> De plus, <span className='font-[900]'>Erivan a ouvert un bureau à Calgary, en Alberta<span/>, ce qui lui a permis de s'étendre à l'échelle nationale.",
        
        historysideText1: 'FONDÉE PAR PIERRE LAJEUNESSE',
        historysideText2: 'TÉLÉCOMMUNICATIONS ',
        historysideText3: 'NOUVEAUX ASSOCIÉS',
        historysideText4: "<div className='text-gray-main'>GROUPE ERIVAN GECOM</div>",
        historysideText5: 'EXPANSION',
        historysideText6: "AUJOURD'HUI",

        client: "NOS CLIENTS",
        homecontact: "CONTACT",
        homeconactname: "Nom",
        homeconactemail: "Courriel",
        homeconactcomment: "Message ou commentaire",
        submit: "SOUMETTRE ",

        homeconactnamePlaceHolder: "Entrez votre nom",
        homeconactemailPlaceHolder: "Entrez votre courriel",
        homeconactmessagePlaceHolder: "Entrez un message ou un commentaire",
        // about us page
        about: "À PROPOS",
        aboutdes:
          "Fondée en 1981 par Pierre Lajeunesse, l'entreprise a d'abord été connue sous le seul nom “Erivan. A cette époque, l'entreprise travaillait dans le domaine du génie civil et de la construction de grands ouvrages en béton.",
        aboutag: "Fondée en 1981",
        aboutbtn: "REJOIGNEZ L'AVENTURE",
        aboutstoryleftheadingone: "PLUS SUR ",
        aboutstoryleftheadingtwo: " NOTRE HISTOIRE",
        aboutstorylefdesc:
          "La détermination du fondateur à offrir aux clients d'Erivan une expérience qui dépasse leurs propres attentes est rapidement devenue la marque de commerce de l'entreprise. En se surpassant pour chaque travail, les valeurs de M. Lajeunesse ont été transmises avec succès à ses successeurs et sont devenues une exigence pour ses collaborateurs. ",
        aboutstorylefdescbrone:
          "De plus, en tant que leader visionnaire, M. Lajeunesse a su rester ouvert à l'apprentissage et à l'exploration de nouveaux champs d'action, permettant ainsi à l'entreprise d'évoluer constamment tout en conservant une réputation sans faille, sans jamais compromettre ses valeurs intrinsèques.",
        aboutstorylefdescbrtwo:
          "D'ailleurs, lorsque <span className='font-bold'>Eric Lajeunesse</span>, l'un des fils de M. Lajeunesse, s'est impliqué de plus en plus dans les activités d'Erivan, il a amené l'entreprise à faire un virage judicieux dans le domaine des télécommunications.",
        aboutstorylefdescbrthree:
          "Grâce à des compétences accrues, ainsi qu'à une expérience solide et établie, Erivan a pu répondre aux normes élevées exigées par l'industrie. ",
        aboutstoryrightdesc:
          "A l'aube de l'an 2000, les dirigeants d'Erivan cherchent à s'adapter à un environnement extrêmement compétitif et en pleine mutation. C'est alors qu'ils ont décidé de s'entourer de nouveaux partenaires de grande valeur : Martin Hince et Michael Aumais.",
        aboutstoryrightdescbrone:
          "Les connaissances spécifiques et les perceptions innovantes de ces derniers viendraient enrichir le savoir-faire déjà reconnu de l'entreprise. Ainsi, tout en restant fidèle à la philosophie originale d'Erivan, celle-ci était désormais complétée par une équipe plus forte.",
        aboutstoryrightdescbrtwo:
          "Aujourd'hui, l'entreprise est revenue à son nom d'origine, Erivan. Depuis plus de 30 ans maintenant, elle a acquis et conservé une solide réputation dans le secteur des télécommunications et de la construction.",
        ourOvers: "NOS VALEURS",
        ourvaluesone:
          "Notre excellente éthique de travail et notre intégrité irréprochable sont les fondements de notre succès et, depuis plus de 30 ans, elles ont résisté à l'épreuve du temps. Erivan considère ses valeurs comme une priorité absolue.",
        ourvaluestwo:
          "En outre, il est primordial pour Erivan de maintenir une grande polyvalence, grâce à ses compétences multidisciplinaires. Dans le but de maintenir des relations fortes, fructueuses et durables, Erivan accorde le plus grand soin à tous ses clients et partenaires en traitant chaque tâche avec la même attention, quelle que soit la taille ou la complexité du projet",
        ourvaluesthree:
          "Enfin, de manière à toujours proposer à ses clients des solutions intelligentes et de meilleures alternatives, Erivan s'efforce constamment de faire preuve d'une approche innovante dans tous ses défis. ",
        missinone: "NOTRE",
        missintwo: " MISSION",
        ourmisiiondesc:
          "<span className='text-white font-[900]'>Erivan</span> veut se distinguer dans tous ses domaines d'activité, par une éthique de travail et une intégrité irréprochables. Ainsi, elle acquiert la reconnaissance de l'industrie, en tant que partenaire commercial loyal et digne de confiance.",
        team: "NOTRE ÉQUIPE",
        aboutpersononename: "ERIC LAJEUNESSE, ING.",
        aboutpersononedesgination: "Président – Groupe Erivan",
        aboutpersontwoname: "MARTIN HINCE, ING.",
        aboutpersontwodesgination: "VP Opérations – Associé",
        aboutpersonthreename: "FRANÇOIS GAGNÉ, ING.",
        aboutpersonthreedesgination:
          "PDG branches de l’Ontario et de l’Ouest",
        aboutpersonfourname: "MICHEL AUMAIS",
        aboutpersonfourdesgination: "Chargé de projets – Associé",
        aboutpersonfivename: "JONATHAN SAUVAGEAU, ING.",
        aboutpersonfivedesgination: "Chargé de projets – Comptes majeurs",
        aboutpersonsixname: "OLIVIER LAJEUNESSE, ING.",
        aboutpersonsixdesgination: "Chargé de projets – Comptes majeurs",
        aboutpersonsevenname: "JONATHAN BERTHIAUME",
        aboutpersonsevendesgination: "(Chargé de projets – Comptes majeurs",
        aboutpersoneightname: "BENJAMIN GRIMES, ING.",
        aboutpersoneightdesgination: "Chargé de projets – Comptes majeurs",
        aboutpersonninename: "MATTHEW FALKINER",
        aboutpersonninedesgination: "Directeur des Opérations – Ontario",
        aboutpersontenname: "GERMAN LANDO",
        aboutpersontendesgination: "Directeur des Opérations – Alberta",
        aboutpersonelvenname: "Antoine Brodeur, JR. ENG.",
        aboutpersonelvendesgination: "Chargé de projets",
        aboutpersonetwelname: "SAMUEL PLANTE",
        aboutpersonetweldesgination: "(Chargé de projets",
        aboutpersonethirtyname: "NIKOLA PETROVIC",
        aboutpersonethirtydesgination: "Coordonnateur Santé et Sécurité",
        aboutpersonefourtheenname: "MARIE-ANDRÉE SÉVIGNY",
        aboutpersonefourtheendesgination: "(Directrice Administration et Finance",
        aboutpersonefithtennname: "PASCALE CALLENDER, CRIA",
        aboutpersonefithtenndesgination: "Directrice RH",
        experienceheadingone: "EXPÉRIENCES ET ",
        experienceheadingtwo: "SERVICES ",
        exdesc:
          " Nous élaborons des solutions d'ingénierie créatives, complètes et durables.",
        exbtn: "REJOIGNEZ L'AVENTURE",
        exheadingleftone: "L'expérience",
        exheadinglefttwo: "qui fait la différence",
        exheadingleftthree: "",
        exheadingrightone:
          "Bien implantée dans le secteur des télécommunications, Erivan possède une expertise phénoménale en matière de génie civil et de conception de projets.   ",
        exheadingrighttwo:
          "Notre équipe spécialisée, composée principalement d'ingénieurs professionnels diplômés soumis à un code d'éthique rigoureux, opère selon des procédures reconnues par l'industrie.",
        exheadingrightthree:
          "Notre équipe spécialisée, essentiellement composée d’ingénieurs professionnels diplômés et donc soumis à un code d’éthique rigoureux, opère selon les procédures reconnues par l’industrie. Elle sait orienter ses efforts vers une efficacité optimale, afin d’assurer le respect intégral des coûts et de l’échéancier pour chaque projet, en plus de préserver la sécurité du public, de la clientèle et des employés.",
        exdescone:
          "Possédant sa licence d’entrepreneur général, Erivan dispose également d’une équipe multidisciplinaire qualifiée, engagée et passionnée, toujours en formation continue, et qui se maintient à la fine pointe des standards de l’industrie.",
        exdesctwo:
          "L’entreprise est accréditée par les principaux opérateurs du marché canadien, et donc habilitée à réaliser des contrats publics et institutionnels dans la grande majorité des provinces canadiennes, et même certains États américains.",
        exalwaysone: "VERS ",
        exalwaystwo: "L’AVENIR",
        exalwaysdesc:
          " Développer en permanence nos compétences et nos connaissances face à la croissance exponentielle de la technologie !",
        exservices: "NOS SERVICES",
        excivl: "Génie Civil",
        expointone: "Menuiserie générale",
        expointtwo: "Fondations / renforcement de tours",
        expointthree: "Infrastructure de télécommunications",
        expointfour: "Assemblage de structures d’acier",
        expointfive: "Fourniture et assemblage pour l’érection de tours",
        expointsix: "Renforcement des fondations de bâtiments",
        expointseven: "Construction d’abris de télécommunications",
        expointeight: "Aménagement de locaux commerciaux",
        expointnine: "Construction de salles de télécommunications",
        expointten: "Travaux de bétonnage complets",
        expointeleven: "Travaux mécaniques complets",
        expointtwel: "Travaux de climatisation complets",
        expointthirty: "Travaux électriques complets",
        expointfourthu: "Travaux de mise à la terre",
        expointfify: "Travaux de protection antifoudre",
        expointsixty: "Mise en place d’ancrages spécialisés",
        extele: "Télécommunications",
        teleone:
          "Installation cellulaire antennes HSPA, LTE, LTE+, CDMA, UMTS , 3G ,WCDMA ,PCS, IDEN, GSM, etc.",
        teletwo: "Ponts-guides d’ondes et chemins de câbles",
        telethree: "Infrastructure de télécommunications",
        telefour: "Structures d’acier",
        telefive: "Fourniture et assemblage pour l’érection de tours",
        telesix: "Renforcement des fondations",
        teleseven: "Construction d’abris de télécommunications",
        teleeight: "Aménagement de locaux commerciaux",
        telenine: "Construction de salles de télécommunications",
        teleten: "Travaux de bétonnage complets",
        teleeleven: "Travaux mécaniques complets",
        teletwel: "Travaux de climatisation complets",
        telethiry: "Travaux électriques complets",
        teleforty: "Travaux de protection antifoudre",
        telefifty:
          "Installation d’une couverture cellulaire Intérieure (In-Building)",
        telesixty: "Installation des équipements de télécommunication",
        teleseventy: "Mise en place d’équipements spécialisés avec grue",
        teleighty:
          "Déploiement de projet de mise à jour complet de fournisseur",
        teleninteen: "Travaux électriques complets",
        enheading: "Ingénierie + Tests",
        en1: "Études de faisabilité",
        en2: "Analyse structurale",
        en3: "Conception de projets de télécommunications",
        en4: "Conception de structures d’acier",
        en5: "Conception de supports d’antenne",
        en6: "Conception civile",
        en7: "Gestion de projets – clé en main ou personnalisé",
        en8: "Rapports d’inspections de conformité",
        en9: "Dessin technique, modélisation 3D, photosimulation",
        en10: "Fusion de fibres optiques",
        en11: "Balayage électronique des fréquences",
        en12: "Tests de conformité - fibre optique et cuivre",
        en13: "Test OTDR",
        en14: "Tests de parafoudre",
        en15: "PIM tests",
        en16: "Tests de télécoms spécialisés",
        en17: "Alignement d’antennes",
        en18: "Alignement de micro-ondes",
        en19: "Mise en place d’ancrages spécialisés",
        en20: "Validation de la couverture du réseau cellulaire",
        en21: "Conception de la couverture cellulaire intérieur (In-Building)",
        en22: "Ajout de camouflage architectural pour intégration des éléments de télécommunication",
        // carrer page
        c: "CARRIÈRES",
        cdes: "Vous êtes passionné par les solutions modernes et la technologie ? Nous sommes à la recherche de personnes travaillantes et motivées, animées par le sens de l'innovation !",
        cbtn: "REJOIGNEZ L'AVENTURE",
        ptrain: "FORMATION",
        ptraint: "RÉMUNÉRÉES",
        ptraindes:
          "Vous recherchez de bonnes conditions de travail, une stabilité d’emploi et une entreprise réputée ? Joignez une équipe en croissance et bénéficiez de progressions salariales. Vous avez de la chance car nous débutons tout juste notre processus de recrutement pour agrandir l’équipe, et vous avez le choix de différents postes et de plusieurs horaires dès maintenant!",
        pcarr1: "Professionnels",
        pcarr2: "en début de ",
        pcarr3: "carrière",
        pcarr4: "",
        pcarrdesc:
          "Joignez une équipe dédiée à des projets d’envergure aux répercussions locales et internationales. Découvrez une culture qui valorise le dépassement de soi en offrant le soutien et l’encouragement qu’il vous faut pour accomplir un travail qui a du sens et un impact réel sur votre milieu.",
        carrins1: "Inspirés par la différence,",
        carrins2: "motivés par l’inclusion",
        carrinsdesc1:
          "Découvrez une culture avant-gardiste qui ne recule pas devant les qualités traditionnelles comme le respect, l'intégrité et la confiance. ",
        carrinsdesc2:
          "Erivan accueille à bras ouverts toutes les perspectives, forces, talents, croyances, ethnicités ou sexes. Parce que lorsqu'ils s'unissent, ils produisent des résultats extraordinaires.",
        carrpos: "POSTES OFFERTS",
        card1t: "Monteur en télécommunications",
        card1d:
          "Le monteur a pour rôle l’installation de lignes et d’antennes sur les réseaux cellulaires des grands opérateurs. Il assure l’inspection du matériel de sécurité et de l’équipement de protection individuel. Il est appelé à travailler en hauteur, dans les tours et les toitures de bâtiments. Le monteur effectue un travail physique et travaille à l’extérieur.",
        card1btn: "POSTULER",
        card2t: "Chargé/chargée de projets",
        card2d:
          "Le chargé de projet a pour fonction la planification et la préparation des échéanciers en collaboration avec le coordonnateur de chantiers. Il assure la coordination complète des projets qui lui sont attribués et sous sa responsabilité. Il vérifie les plans et les contrats afin de s’assurer que tout soit conforme",
        card2btn: "POSTULER",
        card3t: "Journalier/journalière en construction",
        card3d: "L’ouvrier de construction réalise physiquement les projets de construction en collaboration avec le coordonnateur du site de travail, tout en respectant les normes de construction.",
        card3btn: "POSTULER",
        card4t: "Menuisier/menuisière",
        card4d:
          "Le menuisier est appelé à faire la construction d’abri d’équipement de télécommunication et de locaux. Il procède à tous travaux généraux de construction, de rénovation et de menuiserie ainsi qu’à la mise en place de revêtement de mur spécialisé. Il est parfois appelé à peinturer. ",
        card4btn: "POSTULER",
        card5t: "Commis d’entrepôt",
        card5d:
          "Le commis d’entrepôt est responsable de l’ensemble des activités et fonctions reliées au travail général d’entrepôt. Il contribue à l’efficacité du département en effectuant la préparation, manutention et vérification des commandes ainsi que le chargement et déchargement des camions.",
        card5btn: "POSTULER",
        intitel: "NOTRE IMPLICATION",
        intdesc:
          "Depuis plus de 25 ans, Erivan, inspiré par son fondateur et guidé par ses valeurs a joué un rôle important et généré d’importantes retombées sociales dans sa communauté.",
        intbtn: "REJOIGNEZ L'AVENTURE",
        achiveheading1: "Nous devons ",
        achiveheading2: "faire plus !",
        achivedesc1:
          "Depuis plus de 25 ans, le groupe Erivan-Gecom, inspiré par son fondateur et guidé par ses valeurs a joué un rôle important et généré d’importantes retombées sociales dans sa communauté.",
        achivedesc2:
          "Nous sommes bien plus qu’une entreprise en télécommunications. En effet, notre travail, notre passion et notre savoir-faire nous ont permis de nous impliquer dans de nombreuses causes toutes aussi importantes les unes que les autres.",
        achivedesc3:
          "En ces temps incertains, nous allons redoubler d’ardeur et continuer à supporter les causes qui nous tiennent à cœur. Voici quelques réalisations de la grande famille Erivan-Gecom…",
        acause: "NOS CAUSES",
        //contact us
        contacth: "CONTACT",
        contacth2: "POUR NOUS JOINDRE",
        contactd1:
          "Nous vous sommes reconnaissants d’avoir pris le temps d’en apprendre un peu plus au sujet d’Erivan-Gecom.",
        contactd2:
          "Nous visons à devenir votre partenaire de choix pour la réussite de vos projets, car notre succès repose sur le vôtre.",
        contactleftd1:
          "Nous avons à cœur de demeurer accessibles pour notre clientèle : nous voulons être en mesure de répondre à vos questions et dissiper vos inquiétudes, en plus d’être à l’écoute de vos besoins et commentaires.",
        contactleftd2:
          "Aidez-nous à maintenir notre niveau d’excellence, et à nous surpasser encore !",
        sliderheading: "NOS CAUSES",
        // warehouse clerk
        warehouseheading: "COMMIS D'ENTREPÔT",
        warehousedesc: "DESCRIPTION",
        warehousedescllong1:
          "Le menuisier est appelé à faire la construction d’abri d’équipement de télécommunication et de locaux. Il procède à tous travaux généraux de construction, de rénovation et de menuiserie ainsi qu’à la mise en place de revêtement de mur spécialisé. Il est parfois appelé à peinturer. Celui-ci doit lire et interpréter les plans, les bons de travail et les croquis.",
        warehousedescllong2:
          "Le menuisier respecte les exigences prescrites aux procédures d’exécution de son travail et signale à son contremaitre tout ce qui n’est pas conforme aux normes. Il effectue toutes autres tâches connexes à la demande de son supérieur.",
        contactFirstName: "Nom",
        contactFirstNumber: "Téléphone",
        contactFirstemail: "Courriel",
        contactFirstCoverletter: "Lettre de motivation",
        contactFirstCV: "Résumé | CV",
        crequirement: "Exigences",
        crequirementskill: "Compétences recherchées",
        crequirement1: "Détenir un diplôme d’études secondaires (DES)",
        crequirement2:
          "Avoir un minimum de 12 mois d’expérience en tant que commis d’entrepôt/journalier/manutentionnaire",
        crequirement3:
          "Avoir de l’expérience de conduite de chariot élévateur (un atout)",
        crequirement4: "Avoir complété la formation SIMDUT (un atout)",
        crequirement5: "Être détenteur d’un permis de classe 3",
        crequirement6: "Avoir de bonnes habiletés physiques",
        crequirement7: "Débrouillardise",
        crequirement8: "Autonomie",
        crequirement9: "Assiduité",
        crequirement10: "Sociabilité",
        crequirement11: "Faculté à prendre des initiatives",
        crequirement12: "Capacité à travailler en équipe",
        // antena worker
        antenatitle1: "Monteur en",
        antenatitle2: "télécommunications",
        antenadesc: "Description",
        antenadesclong:
          "Il assure la coordination complète des projets qui lui sont attribués et sous sa responsabilité. Il vérifie les plans et les contrats afin de s’assurer que tout soit conforme. Il participe aux réunions de démarrage du contrat afin de connaître les exigences de celui-ci. Il a plusieurs responsabilités : établir les demandes de modifications et faire les suivis; octroyer, au besoin, des contrats en sous-traitance dans son secteur d’activités et en faire le suivi; effectuer les différents suivis afin de veiller au bon déroulement des projets (respect des échéanciers, du budget et des extras, etc.). Le chargé de projet agit à titre de premier intervenant entre les clients, les experts-conseils et les différentes ressources reliées aux projets. Il effectue également toutes autres tâches connexes ou complémentaires à la demande de son supérieur. Celui-ci représente la compagnie lors des réunions de chantier. L’estimateur doit évaluer les plans et devis, effectuer la visite des chantiers, sélectionner les sous-traitants, calculer les matériaux et faire des demandes de prix ainsi que des soumissions détaillées.",
        antenaRequ: "Exigences",
        antenaSkill: "Compétences recherchées",
        antena1: "Détenir un BAC ou un DEC en génie civil ou en architecture",
        antena2: "Avoir de 3 à 5 ans d’expérience en gestion de projet",
        antena3: "Être apte à lire des plans et des devis",
        antena4: "Connaître le secteur de la construction",
        antena5: "Fiabilité",
        antena6: "Autonomie",
        antena7: "Connaissance des logiciels MS Office",
        antena8: "Sens de l’organisation et des responsabilités",
        antena9: "Bonnes habiletés relationnelles",
        antena10: "Capacité à travailler en équipe",
        antena11: "Motivation et attitude proactive",
        antena12: "Capacité à gérer un grand volume d’informations",
        // charge the project
        proh: "chargée de projets",
        prodes1:
          "Il assure la coordination complète des projets qui lui sont attribués et sous sa responsabilité. Il vérifie les plans et les contrats afin de s’assurer que tout soit conforme. Il participe aux réunions de démarrage du contrat afin de connaître les exigences de celui-ci. Il a plusieurs responsabilités : établir les demandes de modifications et faire les suivis; octroyer, au besoin, des contrats en sous-traitance dans son secteur d’activités et en faire le suivi; effectuer les différents suivis afin de veiller au bon déroulement des projets (respect des échéanciers, du budget et des extras, etc.).",
        prodes2:
          "Le chargé de projet agit à titre de premier intervenant entre les clients, les experts-conseils et les différentes ressources reliées aux projets. Il effectue également toutes autres tâches connexes ou complémentaires à la demande de son supérieur. Celui-ci représente la compagnie lors des réunions de chantier. L’estimateur doit évaluer les plans et devis, effectuer la visite des chantiers, sélectionner les sous-traitants, calculer les matériaux et faire des demandes de prix ainsi que des soumissions détaillées.",
        prorequierd: "Exigences",
        prorequierdSkill: "Compétences recherchées",
        prorequierd1:
          "Détenir un BAC ou un DEC en génie civil ou en architecture",
        prorequierd2:
          "Détenir un BAC ou un DEC en génie civil ou en architecture",
        prorequierd3: "Être apte à lire des plans et des devis",
        prorequierd4: "Être apte à lire des plans et des devis",
        prorequierd5: "Fiabilité",
        prorequierd6: "Autonomie",
        prorequierd7: "Connaissance des logiciels MS Office",
        prorequierd8: "Sens de l’organisation et des responsabilités",
        prorequierd9: "Bonnes habiletés relationnelles",
        prorequierd10: "Capacité à travailler en équipe",
        prorequierd11: "Motivation et attitude proactive",
        prorequierd12: "Capacité à gérer un grand volume d’informations",
        // constructor work
        constructorHea: "Commis d’entrepôt",
        // carpenter
        carpenterHeading: "Menuisier",
        cardesc1:
          "Le menuisier est appelé à faire la construction d’abri d’équipement de télécommunication et de locaux. Il procède à tous travaux généraux de construction, de rénovation et de menuiserie ainsi qu’à la mise en place de revêtement de mur spécialisé. Il est parfois appelé à peinturer. Celui-ci doit lire et interpréter les plans, les bons de travail et les croquis. ",

        cardesc2:
          "Le menuisier respecte les exigences prescrites aux procédures d’exécution de son travail et signale à son contremaitre tout ce qui n’est pas conforme aux normes. Il effectue toutes autres tâches connexes à la demande de son supérieur.",
        carreq: "Exigences",
        carreqSkill: "Compétences recherchées",
        carreq1: "Détenir un diplôme d’études secondaires (DES)",
        carreq2:
          "Détenir un certificat de qualification valide de charpentier-menuisier",
        carreq3: "Avoir de 3 à 5 ans d’expérience pertinente en menuiserie",
        carreq4: "Être disposé à voyager",
        carreq5: "Fiabilité",
        carreq6: "Ponctualité",
        carreq7: "Débrouillardise",
        carreq8: "Polyvalence",
        carreq9: "Capacité à travailler en équipe",
      },
    },
  },

  lng: "en", // if you're using a language detector, do not define the lng option
  fallbackLng: "en",

  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
});

export default i18n;
