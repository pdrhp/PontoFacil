
import LoginForm from "@/components/LoginForm/LoginForm";
import Logo from "@/components/Logo/Logo";

const Page = () => {

    return (
        <main className="flex flex-row bg-primarycolor h-screen">
            <div className={"h-full w-[33.85%] bg-secondaryColor flex justify-center items-center"}>
                <Logo width={"75%"} height={"75%"}/>
            </div>
            <div className={"h-full w-[66.15%] flex justify-center items-center"}>
                <div className={"w-[78.74%] h-[55.55%] bg-secondaryColor rounded-xl flex justify-center items-center"}>
                    <div className={"w-[99%] h-[98.33%] border border-primarycolor rounded-xl flex flex-col items-center"}>
                        <p className={"text-white font-bold text-[3.75rem]"}>Bem-vindo</p>
                        <LoginForm/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Page;