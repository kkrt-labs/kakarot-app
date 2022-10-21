import { Box, Flex, Text } from "@chakra-ui/react";
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
  expandableChildren?: JSX.Element;
}
function StepItem({
  title,
  isDone,
  step,
  disabled,
  children,
  expandableChildren,
}: Props) {
  const renderChildItem = () => {
    if (typeof children === "string") {
      return (
        <Text fontSize="md" fontWeight="bold" color="blackAlpha.600">
          {children}
        </Text>
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
      >
        <Flex justify="center" align="center" px={4}>
          <Box color={isDone ? "success.500" : "error.900"}>
            <FontAwesomeIcon icon={isDone ? icons.check : icons.info} />
          </Box>
        </Flex>
        {renderChildItem()}
      </Flex>
    </Flex>
  );
}

export default StepItem;
