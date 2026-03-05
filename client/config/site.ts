export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Психотерапевт | Е. Ч.",
  description: "Клинический нейропсихолог, Екатерина Чулкова.",
  navItems: [
    {
      label: "Домашняя страница",
      href: "/",
    },
    {
      label: "Обо мне",
      href: "/about",
    },
    {
      label: "Специализации",
      href: "/specialties",
    },
    {
      label: "Контакты",
      href: "/contact",
    },
    {
      label: "Условия терапии",
      href: "/terms",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Specialties",
      href: "/specialties",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "Terms of Service",
      href: "/terms",
    },
  ],
  links: {},
};
