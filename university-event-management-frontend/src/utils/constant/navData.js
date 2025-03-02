const navData = [
  {
    linkText: "Home",
    linkUrl: "/",
    innerLinkTextAndUrl: [
      { linkText: "About Us", linkUrl: "/alumni#welcome-address" },
      { linkText: "Campus News", linkUrl: "/events#news" },
      { linkText: "Convocation", linkUrl: "/events#conv" },
      { linkText: "Downloads", linkUrl: "/ann_results#downloads" },
      { linkText: "Our Histroy", linkUrl: "/alumni#our-history" },
      { linkText: "KURECRUITS", linkUrl: "/alumni#kurecruits" },
    ],
    dropdown: true,
    newCategory: false,
  },
  {
    linkText: "Admissions",
    linkUrl: "/admissions",
    innerLinkTextAndUrl: [
      { linkText: "Admissions Program 2025", linkUrl: "/admissions#program-2025" },
      { linkText: "M.Phil./Ph.D. & M.S./M.D", linkUrl: "/admissions#pg" },
      { linkText: "Foregin Students' Policy", linkUrl: "/admissions#fsa" },
    ],
    dropdown: true,
    newCategory: false,
  },
  {
    linkText: "Faculties",
    linkUrl: "/faculties",
    innerLinkTextAndUrl: [
      { linkText: "Education", linkUrl: "/faculties#edu" },
      { linkText: "Engineering", linkUrl: "/faculties#engg" },
      { linkText: "Islamic Studies", linkUrl: "/faculties#isl" },
      { linkText: "Law", linkUrl: "/faculties#law" },
      { linkText: "Management Sciences", linkUrl: "/faculties#mas" },
      { linkText: "Medicine", linkUrl: "/faculties#med" },
      { linkText: "Pharmacy", linkUrl: "/faculties#phm" },
      { linkText: "Science", linkUrl: "/faculties#sc" },
      { linkText: "Arts & Social Sciences", linkUrl: "/faculties#arts" },
      { linkText: "Institutes / Centers", linkUrl: "faculties#research-institude" },
    ],
    dropdown: true,
    newCategory: false,
  },
  {
    linkText: "Library",
    linkUrl: "/library",
    innerLinkTextAndUrl: [
      { linkText: "Home", linkUrl: "/library" },
      { linkText: "Digital Library", linkUrl: "/library/#dlib" },
      { linkText: "Ebrary", linkUrl: "https://ebookcentral.proquest.com/lib/hec-ebooks/home.action" },
    ],
    dropdown: true,
    newCategory: false,
  },
  {
    linkText: "Administration",
    linkUrl: "/administration",
    innerLinkTextAndUrl: [
      { linkText: "Vice Chancellor", linkUrl: "/administration#vc" },
      { linkText: "Registrar", linkUrl: "/administration#registrar" },
      { linkText: "Syndicate Members", linkUrl: "/administration#syndicate" },
      { linkText: "Former Vice Chancellors", linkUrl: "/administration#pvcs" },
      { linkText: "Directorates & Offices", linkUrl: "/administration#off" },
    ],
    dropdown: true,
    newCategory: false,
  },
  {
    linkText: "Examination",
    linkUrl: "/ann_results",
    innerLinkTextAndUrl: [
      { linkText: "Annual System", linkUrl: "/ann_results#results" },
      { linkText: "Downladable Forms", linkUrl: "/ann_results#downloads" },
      { linkText: "Common Questions", linkUrl: "/ann_results#faqs" },
      { linkText: "Overseas Examination", linkUrl: "/ann_results#oe" },
      { linkText: "Semester System", linkUrl: "/ann_results#sem_results" },
      { linkText: "Semeter Role Book", linkUrl: "/ann_results#sem_results#rules" },
      { linkText: "Semeter Fee", linkUrl: "/ann_results#semester_fee" },
    ],
    dropdown: true,
    newCategory: false,
  },
  {
    linkText: "Events",
    linkUrl: "/events",
    dropdown: false,
    newCategory: true,
  },
  {
    linkText: "Alumni",
    linkUrl: "/alumni",
    dropdown: false,
    newCategory: false,
  },
  {
    linkText: "Journals",
    linkUrl: "/journals",
    dropdown: false,
    newCategory: false,
  },
];

export default navData;
