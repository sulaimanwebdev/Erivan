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
        aboutUs: "About Us",
        ex: "Experiences & Services",
        ca: "Careers",
        in: "Our Involvment",
        title: "FROM DESIGN ",
        titltwo: "TO DELIVERY.",
        titlethree: "",
        titlefour: "",
        descone:
          "Where connection meets technology.<br/>Join <span className='text-white font-[900]'>Erivan</span> in its adventure.",
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

        historysideText1: "FOUNDED BY PIERRE LAJEUNESSE",
        historysideText2: "TELECOMMUNICATIONS LAUNCH",
        historysideText3: "NEW ASSOCIATES",
        historysideText4:
          "<div className='text-gray-main'>ERIVAN GECOM GROUP</div>",
        historysideText5: "EXPANSION",
        historysideText6: "TODAY",

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
        aboutpersononedesgination: "President ??? Erivan Group",
        aboutpersontwoname: "MARTIN HINCE, ENG.",
        aboutpersontwodesgination: "VP Operations ??? Associate",
        aboutpersonthreename: "FRAN??OIS GAGN??, ENG.",
        aboutpersonthreedesgination: "CEO Ontario & Western branch",
        aboutpersonfourname: "MICHEL AUMAIS",
        aboutpersonfourdesgination: "Project Manager - Associate",
        aboutpersonfivename: "JONATHAN SAUVAGEAU, ENG.",
        aboutpersonfivedesgination: "Project Manager ??? Major accounts",
        aboutpersonsixname: "OLIVIER LAJEUNESSE, ENG.",
        aboutpersonsixdesgination: "Project Manager ??? Major accounts",
        aboutpersonsevenname: "JONATHAN BERTHIAUME",
        aboutpersonsevendesgination: "Project Manager ??? Major accounts",
        aboutpersoneightname: "BENJAMIN GRIMES, ENG.",
        aboutpersoneightdesgination: "Project Manager ??? Major accounts",
        aboutpersonninename: "MATTHEW FALKINER",
        aboutpersonninedesgination: "Director of Operations ??? Ontario",
        aboutpersontenname: "GERMAN LANDO",
        aboutpersontendesgination: "Director of Operations - Alberta",
        aboutpersonelvenname: "ANTOINE BRODEUR, JR. ENG.",
        aboutpersonelvendesgination: "Project Manager",
        aboutpersonetwelname: "SAMUEL PLANTE",
        aboutpersonetweldesgination: "Project Manager",
        aboutpersonethirtyname: "NIKOLA PETROVIC",
        aboutpersonethirtydesgination: "Health and Safety Coordinator",
        aboutpersonefourtheenname: "MARIE-ANDR??E S??VIGNY",
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
          "With its general contractor???s license, Erivan is equipped with a qualified, committed, and passionate team, always in continuous training, and which remains at the cutting edge of industry standards..",
        exdesctwo:
          "Under the federal jurisdiction, the company is accredited by the main operators in the Canadian market, and therefore authorized to carry out public and institutional contracts in the vast majority of Canadian provinces, and even some American states. Erivan thus aims to be a one-stop-shop for the design and implementation of all types of projects.",
        exalwaysone: "ALWAYS LOOKING",
        exalwaystwo: "FORWARD",
        exalwaysdesc:
          " Constantly expanding our skills and knowledge in the face of technology???s exponential growth!",
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
          "Discover a forward-thinking culture that doesn???t shy away from traditional qualities like respect, integrity and trust.",
        carrinsdesc2:
          "Erivan welcomes every perspective, strength, talent, belief or gender with open arms. Because when they come together, they produce extraordinary results.",
        carrpos: "POSTES OFFERTS",
        card1t: "Line and Antenna Worker",
        card1d:
          "Linemen install lines and antennas for major carriers??? cellular networks. They inspect security equipment and materials that ensure personal safety. They must be able to work at heights, on cell towers and on roofs of buildings. Linemen do physical, outdoor work.",
        card1btn: "SEE MORE",
        card2t: "Project Manager",
        card2d:
          "Project Managers carry out the planning and preparation of timelines (schedules) in collaboration with the worksite coordinator. They manage the entire coordination of projects that have been attributed to them and are their responsibility. They check plans and contracts in order to ensure that they are in good order and conform to norms.",
        card2btn: "SEE MORE",
        card3t: "Construction worker",
        card3d:
          "The construction worker physically executes the construction projects in collaboration with the work site coordinator, while respecting construction standards.",
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
          "Linemen install lines and antennas for major carriers??? cellular networks. They inspect security equipment and materials that ensure personal safety. They must be able to work at heights, on cell towers and roofs of buildings. Linemen do physical, outdoor work.",
        antenaRequ: "Requirements",
        antenaSkill: "Required Skills",
        antena1: "D??tenir un BAC ou un DEC en g??nie civil ou en architecture",
        antena2: "Avoir de 3 ?? 5 ans d???exp??rience en gestion de projet",
        antena3: "??tre apte ?? lire des plans et des devis",
        antena4: "Conna??tre le secteur de la construction",
        antena5: "Fiabilit??",
        antena6: "Autonomie",
        antena7: "Connaissance des logiciels MS Office",
        antena8: "Sens de l???organisation et des responsabilit??s",
        antena9: "Bonnes habilet??s relationnelles",
        antena10: "Capacit?? ?? travailler en ??quipe",
        antena11: "Motivation et attitude proactive",
        antena12: "Capacit?? ?? g??rer un grand volume d???informations",
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
        aboutUs: "?? Propos",
        ex: "Exp??riences Et Services",
        ca: "Carri??res",
        in: "Notre Engagement",
        title: "DE LA  ",
        titltwo: "CONCEPTION",
        titlethree: "?? LA ",
        titlefour: "LIVRAISON",
        descone:
          "C???est la passion pour l???innovation qui<br/> nous allume. Rejoignez <span className='text-white font-[900]'>Erivan</span> dans son<br/> aventure!",
        desctwo: " Rejoignez Erivan dans son aventure!.",
        descbold: "Erivan",
        btn: "REJOIGNEZ L'AVENTURE",
        longDesc:
          "L?? o?? les solutions n'existent pas, nous les rendons accessibles et les r??alisons. Avec toutes les nouvelles innovations, Erivan garde une longueur d'avance pour servir ses clients avec la meilleure exp??rience.Erivan est sp??cialis?? dans :",
        engineering: "G??nie",
        Telecommunications: "T??l??communications",
        testing: "Ing??nierie et tests",
        project: "Gestion de projet",
        join: "REJOIGNEZ ",
        jointwo: "L'AVENTURE",
        joindesone:
          "Donner du pouvoir ?? chacun en faisant une diff??rence positive.Nous ne sommes pas une ??quipe ordinaire.",
        joindestwo: "??tes-vous pr??t ?? rejoindre l'aventure ?",
        joinbtn: "POSTULER",
        history: "NOTRE HISTOIRE",
        historyone:
          "Fond??e en 1981 par Pierre Lajeunesse, l'entreprise a d'abord ??t?? connue sous le seul nom ???Erivan. A cette ??poque, l'entreprise travaillait dans le domaine du g??nie civil et de la construction de grands ouvrages en b??ton.",
        historytwo:
          "En 1995, <span className='text-white font-[900]'>Eric Lajeunesse</span>, l'un des fils de Lajeunesse, s'implique de plus en plus dans les activit??s d'Erivan. Ayant lui-m??me obtenu un dipl??me en g??nie civil, il a aid?? Erivan ?? prendre un virage judicieux dans le domaine des t??l??communications.Les comp??tences accrues de l???entreprise, d??j?? forte d???une solide exp??rience multidisciplinaire, cadraient d??sormais parfaitement avec les hauts standards d???exigence requis par le secteur des t??l??communications.",
        historythree:
          "Dans une perspective d???adaptation ?? une conjoncture extr??mement concurrentielle et en ??volution rapide et constante, les gestionnaires d???Erivan d??cidaient de s???entourer de nouveaux associ??s de grande valeur, <span className='text-white font-[900]'>Martin Hince & Michel Aumais.</span><br/><br/>Les connaissances sp??cifiques et les perceptions innovatrices de ces derniers on rapidement fait cro??tre le savoir-faire d??j?? reconnu de la compagnie, toujours dans le respect et la continuit?? de la philosophie de d??part, mais avec l???apport d???une ??nergie renouvel??e par des talents diversifi??s et compl??mentaires.",
        historyfour:
          "Ainsi, en <span className='text-white font-[900]'>2004</span>, le <span className='text-white font-[900]'>Groupe Erivan Gecom</span> est<br className='hidden lg:flex'/> officiellement n??.",
        historyfive:
          "S'adaptant ?? l'??volution constante de l'industrie, <span className='font-[900]'>Erivan a ouvert un bureau ?? Mississauga, ON</span> afin d'assurer une plus grande visibilit?? et de s'infiltrer dans le march?? ontarien.",
        historysix:
          "Aujourd'hui, l'entreprise a repris son nom d'origine, <span className='font-[900]'>Erivan</span>. Depuis plus de 30 ans maintenant, elle a acquis et maintenu une solide r??putation dans le secteur des t??l??communications et de la construction.<br/><br/> De plus, <span className='font-[900]'>Erivan a ouvert un bureau ?? Calgary, en Alberta<span/>, ce qui lui a permis de s'??tendre ?? l'??chelle nationale.",

        historysideText1: "FOND??E PAR PIERRE LAJEUNESSE",
        historysideText2: "T??L??COMMUNICATIONS ",
        historysideText3: "NOUVEAUX ASSOCI??S",
        historysideText4:
          "<div className='text-gray-main'>GROUPE ERIVAN GECOM</div>",
        historysideText5: "EXPANSION",
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
        about: "?? PROPOS",
        aboutdes:
          "Fond??e en 1981 par Pierre Lajeunesse, l'entreprise a d'abord ??t?? connue sous le seul nom ???Erivan. A cette ??poque, l'entreprise travaillait dans le domaine du g??nie civil et de la construction de grands ouvrages en b??ton.",
        aboutag: "Fond??e en 1981",
        aboutbtn: "REJOIGNEZ L'AVENTURE",
        aboutstoryleftheadingone: "PLUS SUR ",
        aboutstoryleftheadingtwo: " NOTRE HISTOIRE",
        aboutstorylefdesc:
          "La d??termination du fondateur ?? offrir aux clients d'Erivan une exp??rience qui d??passe leurs propres attentes est rapidement devenue la marque de commerce de l'entreprise. En se surpassant pour chaque travail, les valeurs de M. Lajeunesse ont ??t?? transmises avec succ??s ?? ses successeurs et sont devenues une exigence pour ses collaborateurs. ",
        aboutstorylefdescbrone:
          "De plus, en tant que leader visionnaire, M. Lajeunesse a su rester ouvert ?? l'apprentissage et ?? l'exploration de nouveaux champs d'action, permettant ainsi ?? l'entreprise d'??voluer constamment tout en conservant une r??putation sans faille, sans jamais compromettre ses valeurs intrins??ques.",
        aboutstorylefdescbrtwo:
          "D'ailleurs, lorsque <span className='font-bold'>Eric Lajeunesse</span>, l'un des fils de M. Lajeunesse, s'est impliqu?? de plus en plus dans les activit??s d'Erivan, il a amen?? l'entreprise ?? faire un virage judicieux dans le domaine des t??l??communications.",
        aboutstorylefdescbrthree:
          "Gr??ce ?? des comp??tences accrues, ainsi qu'?? une exp??rience solide et ??tablie, Erivan a pu r??pondre aux normes ??lev??es exig??es par l'industrie. ",
        aboutstoryrightdesc:
          "A l'aube de l'an 2000, les dirigeants d'Erivan cherchent ?? s'adapter ?? un environnement extr??mement comp??titif et en pleine mutation. C'est alors qu'ils ont d??cid?? de s'entourer de nouveaux partenaires de grande valeur : Martin Hince et Michael Aumais.",
        aboutstoryrightdescbrone:
          "Les connaissances sp??cifiques et les perceptions innovantes de ces derniers viendraient enrichir le savoir-faire d??j?? reconnu de l'entreprise. Ainsi, tout en restant fid??le ?? la philosophie originale d'Erivan, celle-ci ??tait d??sormais compl??t??e par une ??quipe plus forte.",
        aboutstoryrightdescbrtwo:
          "Aujourd'hui, l'entreprise est revenue ?? son nom d'origine, Erivan. Depuis plus de 30 ans maintenant, elle a acquis et conserv?? une solide r??putation dans le secteur des t??l??communications et de la construction.",
        ourOvers: "NOS VALEURS",
        ourvaluesone:
          "Notre excellente ??thique de travail et notre int??grit?? irr??prochable sont les fondements de notre succ??s et, depuis plus de 30 ans, elles ont r??sist?? ?? l'??preuve du temps. Erivan consid??re ses valeurs comme une priorit?? absolue.",
        ourvaluestwo:
          "En outre, il est primordial pour Erivan de maintenir une grande polyvalence, gr??ce ?? ses comp??tences multidisciplinaires. Dans le but de maintenir des relations fortes, fructueuses et durables, Erivan accorde le plus grand soin ?? tous ses clients et partenaires en traitant chaque t??che avec la m??me attention, quelle que soit la taille ou la complexit?? du projet",
        ourvaluesthree:
          "Enfin, de mani??re ?? toujours proposer ?? ses clients des solutions intelligentes et de meilleures alternatives, Erivan s'efforce constamment de faire preuve d'une approche innovante dans tous ses d??fis. ",
        missinone: "NOTRE",
        missintwo: " MISSION",
        ourmisiiondesc:
          "<span className='text-white font-[900]'>Erivan</span> veut se distinguer dans tous ses domaines d'activit??, par une ??thique de travail et une int??grit?? irr??prochables. Ainsi, elle acquiert la reconnaissance de l'industrie, en tant que partenaire commercial loyal et digne de confiance.",
        team: "NOTRE ??QUIPE",
        aboutpersononename: "ERIC LAJEUNESSE, ING.",
        aboutpersononedesgination: "Pr??sident ??? Groupe Erivan",
        aboutpersontwoname: "MARTIN HINCE, ING.",
        aboutpersontwodesgination: "VP Op??rations ??? Associ??",
        aboutpersonthreename: "FRAN??OIS GAGN??, ING.",
        aboutpersonthreedesgination: "PDG branches de l???Ontario et de l???Ouest",
        aboutpersonfourname: "MICHEL AUMAIS",
        aboutpersonfourdesgination: "Charg?? de projets ??? Associ??",
        aboutpersonfivename: "JONATHAN SAUVAGEAU, ING.",
        aboutpersonfivedesgination: "Charg?? de projets ??? Comptes majeurs",
        aboutpersonsixname: "OLIVIER LAJEUNESSE, ING.",
        aboutpersonsixdesgination: "Charg?? de projets ??? Comptes majeurs",
        aboutpersonsevenname: "JONATHAN BERTHIAUME",
        aboutpersonsevendesgination: "Charg?? de projets ??? Comptes majeurs",
        aboutpersoneightname: "BENJAMIN GRIMES, ING.",
        aboutpersoneightdesgination: "Charg?? de projets ??? Comptes majeurs",
        aboutpersonninename: "MATTHEW FALKINER",
        aboutpersonninedesgination: "Directeur des Op??rations ??? Ontario",
        aboutpersontenname: "GERMAN LANDO",
        aboutpersontendesgination: "Directeur des Op??rations ??? Alberta",
        aboutpersonelvenname: "Antoine Brodeur, JR. ENG.",
        aboutpersonelvendesgination: "Charg?? de projets",
        aboutpersonetwelname: "SAMUEL PLANTE",
        aboutpersonetweldesgination: "Charg?? de projets",
        aboutpersonethirtyname: "NIKOLA PETROVIC",
        aboutpersonethirtydesgination: "Coordonnateur Sant?? et S??curit??",
        aboutpersonefourtheenname: "MARIE-ANDR??E S??VIGNY",
        aboutpersonefourtheendesgination:
          "Directrice Administration et Finance",
        aboutpersonefithtennname: "PASCALE CALLENDER, CRIA",
        aboutpersonefithtenndesgination: "Directrice RH",
        experienceheadingone: "EXP??RIENCES ET ",
        experienceheadingtwo: "SERVICES ",
        exdesc:
          " Nous ??laborons des solutions d'ing??nierie cr??atives, compl??tes et durables.",
        exbtn: "REJOIGNEZ L'AVENTURE",
        exheadingleftone: "L'exp??rience",
        exheadinglefttwo: "qui fait la diff??rence",
        exheadingleftthree: "",
        exheadingrightone:
          "Bien implant??e dans le secteur des t??l??communications, Erivan poss??de une expertise ph??nom??nale en mati??re de g??nie civil et de conception de projets.   ",
        exheadingrighttwo:
          "Notre ??quipe sp??cialis??e, compos??e principalement d'ing??nieurs professionnels dipl??m??s soumis ?? un code d'??thique rigoureux, op??re selon des proc??dures reconnues par l'industrie.",
        exheadingrightthree:
          "Notre ??quipe sp??cialis??e, essentiellement compos??e d???ing??nieurs professionnels dipl??m??s et donc soumis ?? un code d?????thique rigoureux, op??re selon les proc??dures reconnues par l???industrie. Elle sait orienter ses efforts vers une efficacit?? optimale, afin d???assurer le respect int??gral des co??ts et de l?????ch??ancier pour chaque projet, en plus de pr??server la s??curit?? du public, de la client??le et des employ??s.",
        exdescone:
          "Poss??dant sa licence d???entrepreneur g??n??ral, Erivan dispose ??galement d???une ??quipe multidisciplinaire qualifi??e, engag??e et passionn??e, toujours en formation continue, et qui se maintient ?? la fine pointe des standards de l???industrie.",
        exdesctwo:
          "L???entreprise est accr??dit??e par les principaux op??rateurs du march?? canadien, et donc habilit??e ?? r??aliser des contrats publics et institutionnels dans la grande majorit?? des provinces canadiennes, et m??me certains ??tats am??ricains.",
        exalwaysone: "VERS ",
        exalwaystwo: "L???AVENIR",
        exalwaysdesc:
          " D??velopper en permanence nos comp??tences et nos connaissances face ?? la croissance exponentielle de la technologie !",
        exservices: "NOS SERVICES",
        excivl: "G??nie Civil",
        expointone: "Menuiserie g??n??rale",
        expointtwo: "Fondations / renforcement de tours",
        expointthree: "Infrastructure de t??l??communications",
        expointfour: "Assemblage de structures d???acier",
        expointfive: "Fourniture et assemblage pour l?????rection de tours",
        expointsix: "Renforcement des fondations de b??timents",
        expointseven: "Construction d???abris de t??l??communications",
        expointeight: "Am??nagement de locaux commerciaux",
        expointnine: "Construction de salles de t??l??communications",
        expointten: "Travaux de b??tonnage complets",
        expointeleven: "Travaux m??caniques complets",
        expointtwel: "Travaux de climatisation complets",
        expointthirty: "Travaux ??lectriques complets",
        expointfourthu: "Travaux de mise ?? la terre",
        expointfify: "Travaux de protection antifoudre",
        expointsixty: "Mise en place d???ancrages sp??cialis??s",
        extele: "T??l??communications",
        teleone:
          "Installation cellulaire antennes HSPA, LTE, LTE+, CDMA, UMTS , 3G ,WCDMA ,PCS, IDEN, GSM, etc.",
        teletwo: "Ponts-guides d???ondes et chemins de c??bles",
        telethree: "Infrastructure de t??l??communications",
        telefour: "Structures d???acier",
        telefive: "Fourniture et assemblage pour l?????rection de tours",
        telesix: "Renforcement des fondations",
        teleseven: "Construction d???abris de t??l??communications",
        teleeight: "Am??nagement de locaux commerciaux",
        telenine: "Construction de salles de t??l??communications",
        teleten: "Travaux de b??tonnage complets",
        teleeleven: "Travaux m??caniques complets",
        teletwel: "Travaux de climatisation complets",
        telethiry: "Travaux ??lectriques complets",
        teleforty: "Travaux de protection antifoudre",
        telefifty:
          "Installation d???une couverture cellulaire Int??rieure (In-Building)",
        telesixty: "Installation des ??quipements de t??l??communication",
        teleseventy: "Mise en place d?????quipements sp??cialis??s avec grue",
        teleighty:
          "D??ploiement de projet de mise ?? jour complet de fournisseur",
        teleninteen: "Travaux ??lectriques complets",
        enheading: "Ing??nierie + Tests",
        en1: "??tudes de faisabilit??",
        en2: "Analyse structurale",
        en3: "Conception de projets de t??l??communications",
        en4: "Conception de structures d???acier",
        en5: "Conception de supports d???antenne",
        en6: "Conception civile",
        en7: "Gestion de projets ??? cl?? en main ou personnalis??",
        en8: "Rapports d???inspections de conformit??",
        en9: "Dessin technique, mod??lisation 3D, photosimulation",
        en10: "Fusion de fibres optiques",
        en11: "Balayage ??lectronique des fr??quences",
        en12: "Tests de conformit?? - fibre optique et cuivre",
        en13: "Test OTDR",
        en14: "Tests de parafoudre",
        en15: "PIM tests",
        en16: "Tests de t??l??coms sp??cialis??s",
        en17: "Alignement d???antennes",
        en18: "Alignement de micro-ondes",
        en19: "Mise en place d???ancrages sp??cialis??s",
        en20: "Validation de la couverture du r??seau cellulaire",
        en21: "Conception de la couverture cellulaire int??rieur (In-Building)",
        en22: "Ajout de camouflage architectural pour int??gration des ??l??ments de t??l??communication",
        // carrer page
        c: "CARRI??RES",
        cdes: "Vous ??tes passionn?? par les solutions modernes et la technologie ? Nous sommes ?? la recherche de personnes travaillantes et motiv??es, anim??es par le sens de l'innovation !",
        cbtn: "REJOIGNEZ L'AVENTURE",
        ptrain: "FORMATION",
        ptraint: "R??MUN??R??ES",
        ptraindes:
          "Vous recherchez de bonnes conditions de travail, une stabilit?? d???emploi et une entreprise r??put??e ? Joignez une ??quipe en croissance et b??n??ficiez de progressions salariales. Vous avez de la chance car nous d??butons tout juste notre processus de recrutement pour agrandir l?????quipe, et vous avez le choix de diff??rents postes et de plusieurs horaires d??s maintenant!",
        pcarr1: "Professionnels",
        pcarr2: "en d??but de ",
        pcarr3: "carri??re",
        pcarr4: "",
        pcarrdesc:
          "Joignez une ??quipe d??di??e ?? des projets d???envergure aux r??percussions locales et internationales. D??couvrez une culture qui valorise le d??passement de soi en offrant le soutien et l???encouragement qu???il vous faut pour accomplir un travail qui a du sens et un impact r??el sur votre milieu.",
        carrins1: "Inspir??s par la diff??rence,",
        carrins2: "motiv??s par l???inclusion",
        carrinsdesc1:
          "D??couvrez une culture avant-gardiste qui ne recule pas devant les qualit??s traditionnelles comme le respect, l'int??grit?? et la confiance. ",
        carrinsdesc2:
          "Erivan accueille ?? bras ouverts toutes les perspectives, forces, talents, croyances, ethnicit??s ou sexes. Parce que lorsqu'ils s'unissent, ils produisent des r??sultats extraordinaires.",
        carrpos: "POSTES OFFERTS",
        card1t: "Monteur en t??l??communications",
        card1d:
          "Le monteur a pour r??le l???installation de lignes et d???antennes sur les r??seaux cellulaires des grands op??rateurs. Il assure l???inspection du mat??riel de s??curit?? et de l?????quipement de protection individuel. Il est appel?? ?? travailler en hauteur, dans les tours et les toitures de b??timents. Le monteur effectue un travail physique et travaille ?? l???ext??rieur.",
        card1btn: "POSTULER",
        card2t: "Charg??/charg??e de projets",
        card2d:
          "Le charg?? de projet a pour fonction la planification et la pr??paration des ??ch??anciers en collaboration avec le coordonnateur de chantiers. Il assure la coordination compl??te des projets qui lui sont attribu??s et sous sa responsabilit??. Il v??rifie les plans et les contrats afin de s???assurer que tout soit conforme",
        card2btn: "POSTULER",
        card3t: "Journalier/journali??re en construction",
        card3d:
          "L???ouvrier de construction r??alise physiquement les projets de construction en collaboration avec le coordonnateur du site de travail, tout en respectant les normes de construction.",
        card3btn: "POSTULER",
        card4t: "Menuisier/menuisi??re",
        card4d:
          "Le menuisier est appel?? ?? faire la construction d???abri d?????quipement de t??l??communication et de locaux. Il proc??de ?? tous travaux g??n??raux de construction, de r??novation et de menuiserie ainsi qu????? la mise en place de rev??tement de mur sp??cialis??. Il est parfois appel?? ?? peinturer. ",
        card4btn: "POSTULER",
        card5t: "Commis d???entrep??t",
        card5d:
          "Le commis d???entrep??t est responsable de l???ensemble des activit??s et fonctions reli??es au travail g??n??ral d???entrep??t. Il contribue ?? l???efficacit?? du d??partement en effectuant la pr??paration, manutention et v??rification des commandes ainsi que le chargement et d??chargement des camions.",
        card5btn: "POSTULER",
        intitel: "NOTRE IMPLICATION",
        intdesc:
          "Depuis plus de 25 ans, Erivan, inspir?? par son fondateur et guid?? par ses valeurs a jou?? un r??le important et g??n??r?? d???importantes retomb??es sociales dans sa communaut??.",
        intbtn: "REJOIGNEZ L'AVENTURE",
        achiveheading1: "Nous devons ",
        achiveheading2: "faire plus !",
        achivedesc1:
          "Depuis plus de 25 ans, le groupe Erivan-Gecom, inspir?? par son fondateur et guid?? par ses valeurs a jou?? un r??le important et g??n??r?? d???importantes retomb??es sociales dans sa communaut??.",
        achivedesc2:
          "Nous sommes bien plus qu???une entreprise en t??l??communications. En effet, notre travail, notre passion et notre savoir-faire nous ont permis de nous impliquer dans de nombreuses causes toutes aussi importantes les unes que les autres.",
        achivedesc3:
          "En ces temps incertains, nous allons redoubler d???ardeur et continuer ?? supporter les causes qui nous tiennent ?? c??ur. Voici quelques r??alisations de la grande famille Erivan-Gecom???",
        acause: "NOS CAUSES",
        //contact us
        contacth: "CONTACT",
        contacth2: "POUR NOUS JOINDRE",
        contactd1:
          "Nous vous sommes reconnaissants d???avoir pris le temps d???en apprendre un peu plus au sujet d???Erivan-Gecom.",
        contactd2:
          "Nous visons ?? devenir votre partenaire de choix pour la r??ussite de vos projets, car notre succ??s repose sur le v??tre.",
        contactleftd1:
          "Nous avons ?? c??ur de demeurer accessibles pour notre client??le : nous voulons ??tre en mesure de r??pondre ?? vos questions et dissiper vos inqui??tudes, en plus d?????tre ?? l?????coute de vos besoins et commentaires.",
        contactleftd2:
          "Aidez-nous ?? maintenir notre niveau d???excellence, et ?? nous surpasser encore !",
        sliderheading: "NOS CAUSES",
        // warehouse clerk
        warehouseheading: "COMMIS D'ENTREP??T",
        warehousedesc: "DESCRIPTION",
        warehousedescllong1:
          "Le menuisier est appel?? ?? faire la construction d???abri d?????quipement de t??l??communication et de locaux. Il proc??de ?? tous travaux g??n??raux de construction, de r??novation et de menuiserie ainsi qu????? la mise en place de rev??tement de mur sp??cialis??. Il est parfois appel?? ?? peinturer. Celui-ci doit lire et interpr??ter les plans, les bons de travail et les croquis.",
        warehousedescllong2:
          "Le menuisier respecte les exigences prescrites aux proc??dures d???ex??cution de son travail et signale ?? son contremaitre tout ce qui n???est pas conforme aux normes. Il effectue toutes autres t??ches connexes ?? la demande de son sup??rieur.",
        contactFirstName: "Nom",
        contactFirstNumber: "T??l??phone",
        contactFirstemail: "Courriel",
        contactFirstCoverletter: "Lettre de motivation",
        contactFirstCV: "R??sum?? | CV",
        crequirement: "Exigences",
        crequirementskill: "Comp??tences recherch??es",
        crequirement1: "D??tenir un dipl??me d?????tudes secondaires (DES)",
        crequirement2:
          "Avoir un minimum de 12 mois d???exp??rience en tant que commis d???entrep??t/journalier/manutentionnaire",
        crequirement3:
          "Avoir de l???exp??rience de conduite de chariot ??l??vateur (un atout)",
        crequirement4: "Avoir compl??t?? la formation SIMDUT (un atout)",
        crequirement5: "??tre d??tenteur d???un permis de classe 3",
        crequirement6: "Avoir de bonnes habilet??s physiques",
        crequirement7: "D??brouillardise",
        crequirement8: "Autonomie",
        crequirement9: "Assiduit??",
        crequirement10: "Sociabilit??",
        crequirement11: "Facult?? ?? prendre des initiatives",
        crequirement12: "Capacit?? ?? travailler en ??quipe",
        // antena worker
        antenatitle1: "Monteur en",
        antenatitle2: "t??l??communications",
        antenadesc: "Description",
        antenadesclong:
          "Il assure la coordination compl??te des projets qui lui sont attribu??s et sous sa responsabilit??. Il v??rifie les plans et les contrats afin de s???assurer que tout soit conforme. Il participe aux r??unions de d??marrage du contrat afin de conna??tre les exigences de celui-ci. Il a plusieurs responsabilit??s : ??tablir les demandes de modifications et faire les suivis; octroyer, au besoin, des contrats en sous-traitance dans son secteur d???activit??s et en faire le suivi; effectuer les diff??rents suivis afin de veiller au bon d??roulement des projets (respect des ??ch??anciers, du budget et des extras, etc.). Le charg?? de projet agit ?? titre de premier intervenant entre les clients, les experts-conseils et les diff??rentes ressources reli??es aux projets. Il effectue ??galement toutes autres t??ches connexes ou compl??mentaires ?? la demande de son sup??rieur. Celui-ci repr??sente la compagnie lors des r??unions de chantier. L???estimateur doit ??valuer les plans et devis, effectuer la visite des chantiers, s??lectionner les sous-traitants, calculer les mat??riaux et faire des demandes de prix ainsi que des soumissions d??taill??es.",
        antenaRequ: "Exigences",
        antenaSkill: "Comp??tences recherch??es",
        antena1: "D??tenir un BAC ou un DEC en g??nie civil ou en architecture",
        antena2: "Avoir de 3 ?? 5 ans d???exp??rience en gestion de projet",
        antena3: "??tre apte ?? lire des plans et des devis",
        antena4: "Conna??tre le secteur de la construction",
        antena5: "Fiabilit??",
        antena6: "Autonomie",
        antena7: "Connaissance des logiciels MS Office",
        antena8: "Sens de l???organisation et des responsabilit??s",
        antena9: "Bonnes habilet??s relationnelles",
        antena10: "Capacit?? ?? travailler en ??quipe",
        antena11: "Motivation et attitude proactive",
        antena12: "Capacit?? ?? g??rer un grand volume d???informations",
        // charge the project
        proh: "charg??e de projets",
        prodes1:
          "Il assure la coordination compl??te des projets qui lui sont attribu??s et sous sa responsabilit??. Il v??rifie les plans et les contrats afin de s???assurer que tout soit conforme. Il participe aux r??unions de d??marrage du contrat afin de conna??tre les exigences de celui-ci. Il a plusieurs responsabilit??s : ??tablir les demandes de modifications et faire les suivis; octroyer, au besoin, des contrats en sous-traitance dans son secteur d???activit??s et en faire le suivi; effectuer les diff??rents suivis afin de veiller au bon d??roulement des projets (respect des ??ch??anciers, du budget et des extras, etc.).",
        prodes2:
          "Le charg?? de projet agit ?? titre de premier intervenant entre les clients, les experts-conseils et les diff??rentes ressources reli??es aux projets. Il effectue ??galement toutes autres t??ches connexes ou compl??mentaires ?? la demande de son sup??rieur. Celui-ci repr??sente la compagnie lors des r??unions de chantier. L???estimateur doit ??valuer les plans et devis, effectuer la visite des chantiers, s??lectionner les sous-traitants, calculer les mat??riaux et faire des demandes de prix ainsi que des soumissions d??taill??es.",
        prorequierd: "Exigences",
        prorequierdSkill: "Comp??tences recherch??es",
        prorequierd1:
          "D??tenir un BAC ou un DEC en g??nie civil ou en architecture",
        prorequierd2:
          "D??tenir un BAC ou un DEC en g??nie civil ou en architecture",
        prorequierd3: "??tre apte ?? lire des plans et des devis",
        prorequierd4: "??tre apte ?? lire des plans et des devis",
        prorequierd5: "Fiabilit??",
        prorequierd6: "Autonomie",
        prorequierd7: "Connaissance des logiciels MS Office",
        prorequierd8: "Sens de l???organisation et des responsabilit??s",
        prorequierd9: "Bonnes habilet??s relationnelles",
        prorequierd10: "Capacit?? ?? travailler en ??quipe",
        prorequierd11: "Motivation et attitude proactive",
        prorequierd12: "Capacit?? ?? g??rer un grand volume d???informations",
        // constructor work
        constructorHea: "Commis d???entrep??t",
        // carpenter
        carpenterHeading: "Menuisier",
        cardesc1:
          "Le menuisier est appel?? ?? faire la construction d???abri d?????quipement de t??l??communication et de locaux. Il proc??de ?? tous travaux g??n??raux de construction, de r??novation et de menuiserie ainsi qu????? la mise en place de rev??tement de mur sp??cialis??. Il est parfois appel?? ?? peinturer. Celui-ci doit lire et interpr??ter les plans, les bons de travail et les croquis. ",

        cardesc2:
          "Le menuisier respecte les exigences prescrites aux proc??dures d???ex??cution de son travail et signale ?? son contremaitre tout ce qui n???est pas conforme aux normes. Il effectue toutes autres t??ches connexes ?? la demande de son sup??rieur.",
        carreq: "Exigences",
        carreqSkill: "Comp??tences recherch??es",
        carreq1: "D??tenir un dipl??me d?????tudes secondaires (DES)",
        carreq2:
          "D??tenir un certificat de qualification valide de charpentier-menuisier",
        carreq3: "Avoir de 3 ?? 5 ans d???exp??rience pertinente en menuiserie",
        carreq4: "??tre dispos?? ?? voyager",
        carreq5: "Fiabilit??",
        carreq6: "Ponctualit??",
        carreq7: "D??brouillardise",
        carreq8: "Polyvalence",
        carreq9: "Capacit?? ?? travailler en ??quipe",
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
