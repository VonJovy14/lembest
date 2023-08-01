import { FacebookProvider, CustomChat } from "react-facebook";

const Messenger = () => {
  return (
    <FacebookProvider appId="1379436195968016" chatSupport>
      <CustomChat pageId="477274995691824" minimized={true} />
    </FacebookProvider>
  );
};

export default Messenger;
