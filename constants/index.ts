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
