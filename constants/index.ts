export const navLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "My Events",
    route: "/events/my-events",
  },
  {
    label: "Create",
    route: "/events/create",
  },
  {
    label: "Profile",
    route: "/profile",
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