// data for testing purpose
const signupData = {
  templateTitle: "signupData",
  fields: [
    { type: "email", label: "email", placeholder: "gf@example.com" },
    { type: "password", label: "password", placeholder: "******" },
  ],
};
const loginData = {
  templateTitle: "loginData",
  fields: [
    { type: "email", label: "email", placeholder: "gf@example.com" },
    { type: "password", label: "password", placeholder: "******" },
  ],
};
const dashboardData = {
  templateTitle: "dashboard",
  fields: [
    {
      date: "02/23/2024",
      day: "Monday",
      brut: 0,
      net: 0,
    },
    {
      date: "02/23/2024",
      day: "Tuesday",
      brut: 0,
      net: 0,
    },
    {
      date: "02/23/2024",
      day: "Wednesday",
      brut: 330,
      net: 242,
    },
    {
      date: "02/23/2024",
      day: "Thursday",
      brut: 350,
      net: 220,
    },
    {
      date: "02/23/2024",
      day: "Friday",
      brut: 400,
      net: 350,
    },
    {
      date: "02/23/2024",
      day: "Saturday",
      brut: 334,
      net: 200,
      shift: "day",
    },
    {
      date: "02/23/2024",
      day: "Sunday",
      shift: "day",
      brut: 350,
      net: 230,
    },
  ],
};

const profile = {
  templateTitle: "profile",
  fields: [
    {
      type: "",
      displayName: "",
      email: "",
    },
  ],
};

const tipsForm = {
  templateTitle: "tipsForm",
  fields: [
    { type: "number", label: "TipsBrut", placeholder: "enter tips brut" },
    { type: "number", label: "TipsNet", placeholder: "enter tips net" },
  ],
};

const update = {
  templateTitle: "update",
  fields: [{ type: "text", label: "displayName", placeholder: "display name" }],
};

const tipsDataFeed = [
  {
    TipsBrut: 223,
    TipsNet: 1,
    date: "07/05/2024",
    dayName: "Saturday",
  },
  {
    TipsBrut: 223,
    TipsNet: 1,
    date: "07/06/2024",
    dayName: "Sunday",
  },
  {
    TipsBrut: 0,
    TipsNet: 0,
    date: "07/07/2024",
    dayName: "Monday",
  },
  {
    TipsBrut: 0,
    TipsNet: 0,
    date: "07/08/2024",
    dayName: "Tuesday",
  },
  {
    TipsBrut: 22443,
    TipsNet: 1,
    date: "07/09/2024",
    dayName: "Wednesday",
  },
  {
    TipsBrut: 2663,
    TipsNet: 1,
    date: "07/10/2024",
    dayName: "Thursday",
  },
  {
    TipsBrut: 2423,
    TipsNet: 1,
    date: "07/12/2024",
    dayName: "Friday",
  },
  {
    TipsBrut: 2823,
    TipsNet: 1,
    date: "07/13/2024",
    dayName: "Saturday",
  },
  {
    TipsBrut: 22643,
    TipsNet: 1,
    date: "07/14/2024",
    dayName: "Sunday",
  },
  {
    TipsBrut: 2823,
    TipsNet: 1,
    date: "07/15/2024",
    dayName: "Monday",
  },
  {
    TipsBrut: 2253,
    TipsNet: 1,
    date: "07/16/2024",
    dayName: "Tuesday",
  },
];

const titlesData = [
  {
    titles: ["week day", "date", "tips(brut)", "tips(net)"],
  },
];
export {
  dashboardData,
  profile,
  tipsForm,
  titlesData,
  signupData,
  loginData,
  update,
  tipsDataFeed
};
