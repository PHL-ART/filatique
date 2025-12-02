import { Header } from "@shared/ui/Header";
import { ReleaseList } from "@entities/releases/ui/ReleaseList";
import { HeaderNavigation } from "@shared/ui/HeaderNavigation";

export default function Listen() {
  const navigationItems = [
    { href: "#releases", label: "Releases" },
    { href: "#mixes", label: "Mixes" },
  ];

  return (
    <>
      <Header>
        <HeaderNavigation items={navigationItems} />
      </Header>
      <ReleaseList />
    </>
  );
}
