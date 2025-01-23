// data for testing purpose
const signupData = {
  templateTitle: "Please signup",
  fields: [
    {
      type: "email",
      label: "email",
      placeholder: "gf@example.com",
      imputMod: "email",
    },
    {
      type: "password",
      label: "password",
      placeholder: "******",
      imputMod: "text",
    },
  ],
  footer: "Sign up and start tracking your tips",
};
const loginData = {
  templateTitle: "Please login",
  fields: [
    {
      type: "email",
      label: "email",
      placeholder: "gf@example.com",
      imputMod: "email",
    },
    {
      type: "password",
      label: "password",
      placeholder: "******",
      imputMod: "text",
    },
  ],
  footer: "Welcome to Tips Tracker",
};
const dashboardData = {
  templateTitle: "View your tips",
  tips: [],
  footer: "All tips will be reset on January first of next year.",
};

const profileData = {
  templateTitle: "Profile",
  fields: [
    {
      type: "text",
      label: "displayName",
    },
    {
      label: "email: ",
      type: "email",
    },
    { label: "using Since: ", type: "text" },
  ],
};

const tipsFormData = {
  templateTitle: "Please enter your tips",
  fields: [
    {
      type: "number",
      label: "TipsGross",
      placeholder: "enter tips",
      inputMod: "numeric",
    },
    {
      type: "number",
      label: "TipsNet",
      placeholder: "enter tips",
      inputMod: "numeric",
    },
  ],
  footer: "Once your tips are added they will show in your dashboard",
};

const updateData = {
  templateTitle: "Update your profile",
  fields: [
    {
      type: "text",
      label: "displayName",
      placeholder: "displayName",
      inputMod: "text",
    },
  ],
  footer: ""
};
// Testing data
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
    titles: ["month", "week day", "date", "tips(gross)", "tips(net)"],
  },
];
export {
  dashboardData,
  profileData,
  tipsFormData,
  titlesData,
  signupData,
  loginData,
  updateData,
  tipsDataFeed,
};
