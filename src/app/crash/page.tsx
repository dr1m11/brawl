import Crash from "@/components/Pages/Crash/Crash";
import {WebSocketProvider} from "@/app/crash/CrashProvider";

const CrashPage = () => {
    return (
        <WebSocketProvider>
            <Crash/>
        </WebSocketProvider>
    );
};

export default CrashPage;