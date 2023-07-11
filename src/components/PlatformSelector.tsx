import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../services/store";

const PlatformSelector = () => {
  const { data: platforms, error } = usePlatforms();
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);

  const selectedPlatform = platforms.results.find(
    (platform) => platform.id === platformId
  );

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((p) => (
          // onClick={onSelectPlatform(p)} : ERROR
          <MenuItem key={p.id} onClick={() => setPlatformId(p.id)}>
            {p.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
