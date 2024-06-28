export const navLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Explore",
    route: "/events/explore",
  },
  {
    label: "Create",
    route: "/events/create",
  },
  {
    label: "About",
    route: "/about",
  },
  {
    label: "Contact",
    route: "/contact",
  },
];

export const eventDefaultValues = {
  title: "",
  description: "",
  location: "",
  imageUrl: "",
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: "",
  price: "",
  isFree: false,
  url: "",
};

export const eventCategories = [
    {_id: "1", name: "Music"},
    {_id: "2", name: "Food"},
    {_id: "3", name: "Art"},
    {_id: "4", name: "Business"},
    {_id: "5", name: "Networking"},
]