import React from "react";
import { Flex, Box } from "grid-styled";
import Card from "../Card";
import Button from "../Button";
import Title from "../Title";
import Text from "../Text";

const Script = ({ data, onDeny, onApprove, dark }) => {
  const { id, fields } = data;
  return (
    <Card px={5} py={6} dark={dark} alignItems="center">
      <Title w={1} mt={3} mb={4} justifyContent="flex-end">
        No. {id}
      </Title>
      {fields.map(({ prompt, response }) => (
        <Box w={1} my={3}>
          <Text my={2}>{prompt}</Text>
          <Text serif fontSize={2} pl={3} my={2}>
            {response}
          </Text>
        </Box>
      ))}
      <Flex w={[1, 2 / 3]} mt={5} justifyContent="space-between">
        <Button onClick={onDeny} black={!dark} white={!!dark}>
          Deny
        </Button>
        <Button onClick={onApprove} black={!dark} white={!!dark}>
          Approve
        </Button>
      </Flex>
    </Card>
  );
};

Script.displayName = "Script";

Script.defaultProps = {};

export default Script;
