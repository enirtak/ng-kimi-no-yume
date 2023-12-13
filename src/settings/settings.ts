const phProvinceList = [
  {
      "abbreviation": "ABR",
      "name": "Abra"
  },
  {
      "abbreviation": "AGN",
      "name": "Agusan del Norte"
  },
  {
      "abbreviation": "AGS",
      "name": "Agusan del Sur"
  },
  {
      "abbreviation": "AKL",
      "name": "Aklan"
  },
  {
      "abbreviation": "ALB",
      "name": "Albay"
  },
  {
      "abbreviation": "ANT",
      "name": "Antique"
  },
  {
      "abbreviation": "APA",
      "name": "Apayao"
  },
  {
      "abbreviation": "AUR",
      "name": "Aurora"
  },
  {
      "abbreviation": "BAN",
      "name": "Bataan"
  },
  {
      "abbreviation": "BAS",
      "name": "Basilan"
  },
  {
      "abbreviation": "BEN",
      "name": "Benguet"
  },
  {
      "abbreviation": "BIL",
      "name": "Biliran"
  },
  {
      "abbreviation": "BOH",
      "name": "Bohol"
  },
  {
      "abbreviation": "BTG",
      "name": "Batangas"
  },
  {
      "abbreviation": "BTN",
      "name": "Batanes"
  },
  {
      "abbreviation": "BUK",
      "name": "Bukidnon"
  },
  {
      "abbreviation": "BUL",
      "name": "Bulacan"
  },
  {
      "abbreviation": "CAG",
      "name": "Cagayan"
  },
  {
      "abbreviation": "CAM",
      "name": "Camiguin"
  },
  {
      "abbreviation": "CAN",
      "name": "Camarines Norte"
  },
  {
      "abbreviation": "CAP",
      "name": "Capiz"
  },
  {
      "abbreviation": "CAS",
      "name": "Camarines Sur"
  },
  {
      "abbreviation": "CAT",
      "name": "Catanduanes"
  },
  {
      "abbreviation": "CAV",
      "name": "Cavite"
  },
  {
      "abbreviation": "CEB",
      "name": "Cebu"
  },
  {
      "abbreviation": "COM",
      "name": "Compostela Valley"
  },
  {
      "abbreviation": "DAC",
      "name": "Davao Occidental"
  },
  {
      "abbreviation": "DAO",
      "name": "Davao Oriental"
  },
  {
      "abbreviation": "DAS",
      "name": "Davao del Sur"
  },
  {
      "abbreviation": "DAV",
      "name": "Davao del Norte"
  },
  {
      "abbreviation": "DIN",
      "name": "Dinagat Islands"
  },
  {
      "abbreviation": "EAS",
      "name": "Eastern Samar"
  },
  {
      "abbreviation": "GUI",
      "name": "Guimaras"
  },
  {
      "abbreviation": "IFU",
      "name": "Ifugao"
  },
  {
      "abbreviation": "ILI",
      "name": "Iloilo"
  },
  {
      "abbreviation": "ILN",
      "name": "Ilocos Norte"
  },
  {
      "abbreviation": "ILS",
      "name": "Ilocos Sur"
  },
  {
      "abbreviation": "ISA",
      "name": "Isabela"
  },
  {
      "abbreviation": "KAL",
      "name": "Kalinga"
  },
  {
      "abbreviation": "LAG",
      "name": "Laguna"
  },
  {
      "abbreviation": "LAN",
      "name": "Lanao del Norte"
  },
  {
      "abbreviation": "LAS",
      "name": "Lanao del Sur"
  },
  {
      "abbreviation": "LEY",
      "name": "Leyte"
  },
  {
      "abbreviation": "LUN",
      "name": "La Union"
  },
  {
      "abbreviation": "MAD",
      "name": "Marinduque"
  },
  {
      "abbreviation": "MAG",
      "name": "Maguindanao"
  },
  {
      "abbreviation": "MAS",
      "name": "Masbate"
  },
  {
      "abbreviation": "MDC",
      "name": "Occidental Mindoro"
  },
  {
      "abbreviation": "MDR",
      "name": "Oriental Mindoro"
  },
  {
      "abbreviation": "MM",
      "name": "Metro Manila"
  },
  {
      "abbreviation": "MOU",
      "name": "Mountain Province"
  },
  {
      "abbreviation": "MSC",
      "name": "Misamis Occidental"
  },
  {
      "abbreviation": "MSR",
      "name": "Misamis Oriental"
  },
  {
      "abbreviation": "NCO",
      "name": "Cotabato"
  },
  {
      "abbreviation": "NEC",
      "name": "Negros Occidental"
  },
  {
      "abbreviation": "NER",
      "name": "Negros Oriental"
  },
  {
      "abbreviation": "NSA",
      "name": "Northern Samar"
  },
  {
      "abbreviation": "NUE",
      "name": "Nueva Ecija"
  },
  {
      "abbreviation": "NUV",
      "name": "Nueva Vizcaya"
  },
  {
      "abbreviation": "PAM",
      "name": "Pampanga"
  },
  {
      "abbreviation": "PAN",
      "name": "Pangasinan"
  },
  {
      "abbreviation": "PLW",
      "name": "Palawan"
  },
  {
      "abbreviation": "QUE",
      "name": "Quezon"
  },
  {
      "abbreviation": "QUI",
      "name": "Quirino"
  },
  {
      "abbreviation": "RIZ",
      "name": "Rizal"
  },
  {
      "abbreviation": "ROM",
      "name": "Romblon"
  },
  {
      "abbreviation": "SAR",
      "name": "Sarangani"
  },
  {
      "abbreviation": "SCO",
      "name": "South Cotabato"
  },
  {
      "abbreviation": "SIG",
      "name": "Siquijor"
  },
  {
      "abbreviation": "SLE",
      "name": "Southern Leyte"
  },
  {
      "abbreviation": "SLU",
      "name": "Sulu"
  },
  {
      "abbreviation": "SOR",
      "name": "Sorsogon"
  },
  {
      "abbreviation": "SUK",
      "name": "Sultan Kudarat"
  },
  {
      "abbreviation": "SUN",
      "name": "Surigao del Norte"
  },
  {
      "abbreviation": "SUR",
      "name": "Surigao del Sur"
  },
  {
      "abbreviation": "TAR",
      "name": "Tarlac"
  },
  {
      "abbreviation": "TAW",
      "name": "Tawi-tawi"
  },
  {
      "abbreviation": "WSA",
      "name": "Samar"
  },
  {
      "abbreviation": "ZAN",
      "name": "Zamboanga del Norte"
  },
  {
      "abbreviation": "ZAS",
      "name": "Zamboanga del Sur"
  },
  {
      "abbreviation": "ZMB",
      "name": "Zambales"
  },
  {
      "abbreviation": "ZSI",
      "name": "Zamboanga Sibugay"
  }
];

const usStateList = [
  {
    "name": "Alabama",
    "abbreviation": "AL"
  },
  {
    "name": "Alaska",
    "abbreviation": "AK"
  },
  {
    "name": "Arizona",
    "abbreviation": "AZ"
  },
  {
    "name": "Arkansas",
    "abbreviation": "AR"
  },
  {
    "name": "California",
    "abbreviation": "CA"
  },
  {
    "name": "Colorado",
    "abbreviation": "CO"
  },
  {
    "name": "Connecticut",
    "abbreviation": "CT"
  },
  {
    "name": "Delaware",
    "abbreviation": "DE"
  },
  {
    "name": "Florida",
    "abbreviation": "FL"
  },
  {
    "name": "Georgia",
    "abbreviation": "GA"
  },
  {
    "name": "Hawaii",
    "abbreviation": "HI"
  },
  {
    "name": "Idaho",
    "abbreviation": "ID"
  },
  {
    "name": "Illinois",
    "abbreviation": "IL"
  },
  {
    "name": "Indiana",
    "abbreviation": "IN"
  },
  {
    "name": "Iowa",
    "abbreviation": "IA"
  },
  {
    "name": "Kansas",
    "abbreviation": "KS"
  },
  {
    "name": "Kentucky",
    "abbreviation": "KY"
  },
  {
    "name": "Louisiana",
    "abbreviation": "LA"
  },
  {
    "name": "Maine",
    "abbreviation": "ME"
  },
  {
    "name": "Maryland",
    "abbreviation": "MD"
  },
  {
    "name": "Massachusetts",
    "abbreviation": "MA"
  },
  {
    "name": "Michigan",
    "abbreviation": "MI"
  },
  {
    "name": "Minnesota",
    "abbreviation": "MN"
  },
  {
    "name": "Mississippi",
    "abbreviation": "MS"
  },
  {
    "name": "Missouri",
    "abbreviation": "MO"
  },
  {
    "name": "Montana",
    "abbreviation": "MT"
  },
  {
    "name": "Nebraska",
    "abbreviation": "NE"
  },
  {
    "name": "Nevada",
    "abbreviation": "NV"
  },
  {
    "name": "New Hampshire",
    "abbreviation": "NH"
  },
  {
    "name": "New Jersey",
    "abbreviation": "NJ"
  },
  {
    "name": "New Mexico",
    "abbreviation": "NM"
  },
  {
    "name": "New York",
    "abbreviation": "NY"
  },
  {
    "name": "North Carolina",
    "abbreviation": "NC"
  },
  {
    "name": "North Dakota",
    "abbreviation": "ND"
  },
  {
    "name": "Ohio",
    "abbreviation": "OH"
  },
  {
    "name": "Oklahoma",
    "abbreviation": "OK"
  },
  {
    "name": "Oregon",
    "abbreviation": "OR"
  },
  {
    "name": "Pennsylvania",
    "abbreviation": "PA"
  },
  {
    "name": "Rhode Island",
    "abbreviation": "RI"
  },
  {
    "name": "South Carolina",
    "abbreviation": "SC"
  },
  {
    "name": "South Dakota",
    "abbreviation": "SD"
  },
  {
    "name": "Tennessee",
    "abbreviation": "TN"
  },
  {
    "name": "Texas",
    "abbreviation": "TX"
  },
  {
    "name": "Utah",
    "abbreviation": "UT"
  },
  {
    "name": "Vermont",
    "abbreviation": "VT"
  },
  {
    "name": "Virginia",
    "abbreviation": "VA"
  },
  {
    "name": "Washington",
    "abbreviation": "WA"
  },
  {
    "name": "West Virginia",
    "abbreviation": "WV"
  },
  {
    "name": "Wisconsin",
    "abbreviation": "WI"
  },
  {
    "name": "Wyoming",
    "abbreviation": "WY"
  }
];

const alphabetList = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

export const Settings = {
    APIUrl: 'https://localhost:7255',
    CurrentPage: 1,
    ItemCount: 15,
    DreamListKey: "dreamList",
    DreamCategoryListKey: "dreamListCategory",
    PHProvinceList: phProvinceList,
    USStateList: usStateList,
    AlphabetList: alphabetList,
    CountryList: ["Philippines", "United States"],
    EditModalLabel: 'Edit a record',
    AddModalLabel: 'Add a new record'
}