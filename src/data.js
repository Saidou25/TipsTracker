// data for testing purpose
const signupData = {
  templateTitle: "Signup",
  fields: [
    { type: "email", label: "email", placeholder: "gf@example.com" },
    { type: "password", label: "password", placeholder: "******" },
  ],
};
const loginData = {
  templateTitle: "Login",
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

const profileData = {
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

const tipsDataFeed = {
  templateTitle: "Dashboard",
  fields: [
    {
      TipsBrut: 223,
      TipsNet: 1,
      date: "08/06/2024",
      dayName: "Tuesday",
    },
    {
      TipsBrut: 223,
      TipsNet: 1,
      date: "08/07/2024",
      dayName: "Wednesday",
    },
    {
      TipsBrut: 0,
      TipsNet: 0,
      date: "08/08/2024",
      dayName: "Thursday",
    },
    {
      TipsBrut: 0,
      TipsNet: 0,
      date: "08/11/2024",
      dayName: "Sunday",
    },
    {
      TipsBrut: 22443,
      TipsNet: 1,
      date: "08/12/2024",
      dayName: "Monday",
    },
    {
      TipsBrut: 2663,
      TipsNet: 1,
      date: "09/10/2024",
      dayName: "Tuesdau",
    },
    {
      TipsBrut: 2423,
      TipsNet: 1,
      date: "09/12/2024",
      dayName: "Thursday",
    },
    {
      TipsBrut: 2823,
      TipsNet: 1,
      date: "09/14/2024",
      dayName: "Saturday",
    },
    {
      TipsBrut: 22643,
      TipsNet: 1,
      date: "09/15/2024",
      dayName: "Sunday",
    },
    {
      TipsBrut: 2823,
      TipsNet: 1,
      date: "09/16/2024",
      dayName: "Monday",
    },
    {
      TipsBrut: 2253,
      TipsNet: 1,
      date: "09/17/2024",
      dayName: "Tuesday",
    },
  ],
};

const titlesData = [
  {
    titles: ["month", "week day", "date", "tips(brut)", "tips(net)"],
  },
];
export {
  dashboardData,
  profileData,
  tipsForm,
  titlesData,
  signupData,
  loginData,
  update,
  tipsDataFeed,
};
