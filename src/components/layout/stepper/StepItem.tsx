import {
  Box,
  Collapse,
  Flex,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const icons = {
  info: solid("circle-info"),
  check: solid("circle-check"),
  xmark: solid("circle-xmark"),
};

interface Props {
  title: string;
  isDone: boolean;
  step: number;
  disabled?: boolean;
  children: string | JSX.Element;
  collapseChildren?: JSX.Element;
}
function StepItem({
  title,
  isDone,
  step,
  disabled,
  children,
  collapseChildren,
}: Props) {
  const { isOpen, onToggle } = useDisclosure();

  const onClick = () => {
    if (collapseChildren) {
      onToggle();
    }
  };
  const renderChildItem = () => {
    if (typeof children === "string") {
      return (
        <Flex
          onClick={onClick}
          cursor={collapseChildren ? "pointer" : "inherit"}
          justify="space-between"
          align="center"
          w="full"
          color="blackAlpha.600"
        >
          <Text fontSize="md" fontWeight="bold">
            {children}
          </Text>
          {collapseChildren && <FontAwesomeIcon icon={solid("chevron-down")} />}
        </Flex>
      );
    }
    return children;
  };

  return (
    <Flex direction="column">
      <Text fontSize="md" fontWeight="bold" color="blackAlpha.900">
        {title}
      </Text>
      <Flex
        mt={2}
        py={2}
        flex={1}
        border="1px solid"
        borderColor="blackAlpha.300"
        borderRadius="md"
        align="center"
        direction="column"
        pr={4}
      >
        <Flex direction="row" w="full">
          <Flex justify="center" align="center" px={4}>
            <Box color={isDone ? "success.500" : "error.900"}>
              <FontAwesomeIcon icon={isDone ? icons.check : icons.info} />
            </Box>
          </Flex>
          {renderChildItem()}
        </Flex>
        {collapseChildren && (
          <Collapse in={isOpen} animateOpacity style={{ maxWidth: "100%" }}>
            <Box pl={12} mt={4}>
              {collapseChildren}
            </Box>
          </Collapse>
        )}
      </Flex>
    </Flex>
  );
}

export default StepItem;
