import Crash from "@/components/Pages/Crash/Crash";
import {CrashProvider} from "@/components/Pages/Crash/components/Crash.provider";

const CrashPage = () => {
    return (
        <CrashProvider>
            <Crash />
        </CrashProvider>
    );
};

export default CrashPage;