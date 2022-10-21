import { validateAndParseAddress } from "starknet/index";

export const cropAddress = (address: string): string => {
  return `${address.substring(0, 6)}...${address.substring(
    address.length - 4,
    address.length
  )}`;
};

export const isAddress = (address: string): boolean => {
  try {
    return !!address && !!validateAndParseAddress(address);
  } catch (e) {
    return false;
  }
};
