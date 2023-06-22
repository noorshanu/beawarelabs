import { useWeb3Modal } from "@web3modal/react";

import { mainnet, useAccount, useNetwork, useSwitchNetwork } from "wagmi";




function ConnectWalletBtn({
  onClick,
  setShowMediaIcons,
  normal = false,
  title = "Connect Walet",
  style,
}) {
  const { open } = useWeb3Modal();
  const { address } = useAccount();
  
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();



  return (
    <button
      style={style}
      className={`mr-8 whitespace-nowrap w-40 border bg-transparent  border-[#fdb913] text-[#fdb913] rounded-full py-2 font-bold justify-center items-center px-3 text-sm md:flex hidden`}
      onClick={() => {
        if (address && chain.id !== mainnet.id) {
          switchNetwork(mainnet.id);
          return;
        }

        open();

        if (onClick) {
          onClick();
        }
        if (setShowMediaIcons) {
          setShowMediaIcons(false);
        }
      }}
    >
      {address ? null : title}{" "}
      {address && chain.id === mainnet.id ? (
        <>
          {address.slice(0, 3)}...
          {address.slice(address.length - 3, address.length)}{" "}
        </>
      ) : null}
      {address && chain.id !== mainnet.id ? "Switch to ETH Mainnet" : null}
    </button>
  );
}

export default ConnectWalletBtn;