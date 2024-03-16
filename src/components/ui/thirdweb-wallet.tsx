import {
    ConnectWallet,
    ThirdwebProvider,
    embeddedWallet,
    localWallet,
    metamaskWallet,
    phantomWallet,
} from "@thirdweb-dev/react";

const clientId = process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID;

export function ThirdwebConnect() {
    return (
        <ThirdwebProvider
            activeChain="sepolia"
            clientId={clientId}
            // locale={en()}
            supportedWallets={[
                metamaskWallet({ recommended: true }),
                localWallet(),
                embeddedWallet({
                    auth: {
                        options: ["email", "google"],
                    },
                }),
                phantomWallet(),
            ]}
        >
            <ConnectWallet
                theme={"dark"}
                modalTitle={"Connect to Arcan"}
                modalSize={"compact"}
                modalTitleIconUrl={
                    "https://arcanai.tech/_next/image?url=%2Flogo_dark.png&w=640&q=75"
                }
                termsOfServiceUrl={""}
                privacyPolicyUrl={""}
            />
        </ThirdwebProvider>
    );
}