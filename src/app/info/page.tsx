import { Header } from "@shared/ui/Header";
import { HeaderNavigation } from "@shared/ui/HeaderNavigation";

export default function Info() {
  const navigationItems = [
    { href: "#bio", label: "Bio" },
    { href: "#contacts", label: "Contacts" },
  ];

  return (
    <>
      <Header>
        <HeaderNavigation items={navigationItems} />
      </Header>
    </>
  );
}
