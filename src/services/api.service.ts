import environment from "../environment";

export function fetchAbi(contractAddress: string, chain: string) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const apiEndpoint = environment.etherscanAPI[chain];
  const { etherscanAPIKey } = environment;
  return fetch(
    `${apiEndpoint}?module=contract&action=getabi&address=${contractAddress}`
  )
    .then((response) => response.json())
    .then((data) => data.result);
}
