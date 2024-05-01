'use client'

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useLoginMutate } from "@/hooks/UseLoginMutate";
import { zodResolver } from '@hookform/resolvers/zod';
import { Lock, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
    username: z.string({required_error: "Campo necessário"}),
    password: z.string({required_error: "Campo necessário"}).min(8),
})

type formType = z.infer<typeof formSchema>

const LoginForm = () => {

    const router = useRouter();

    const {mutate, isSuccess} = useLoginMutate();

    const form = useForm<formType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: ""
        }
    })

    if(isSuccess){
        router.push("/dashboard")
    }

    function onSubmit(data: formType) {
        mutate(data);
    }    

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={"flex flex-col gap-5 items-center w-[60%] h-[54.66%] mt-10"}>
                <FormField
                    control={form.control}
                    name={"username"}
                    render={({field}) => (
                        <FormItem className={"w-full h-[25%]"}>
                            <FormLabel htmlFor={"username"} className={"text-primarycolor text-[1.1rem] font-medium"}>Email</FormLabel>
                            <FormControl>
                                    <div className={"h-[63.29%] flex"}>
                                        <div className={"h-full w-[10%] border-r border-secondaryColor bg-white flex justify-center items-center rounded-l-md"}>
                                            <Mail size={"80%"} className={"text-secondaryColor"}/>
                                        </div>
                                        <Input id={"username"} className={"h-full rounded-l-none text-xl"} {...field}/>
                                    </div>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name={"password"}
                    render={({field}) => (
                        <FormItem className={"w-full h-[25%]"}>
                            <FormLabel htmlFor={"password"} className={"text-primarycolor text-[1.1rem] font-medium"}>Senha</FormLabel>
                            <FormControl>
                                    <div className={"h-[63.29%] flex"}>
                                        <div className={"h-full w-[10%] border-r border-secondaryColor bg-white flex justify-center items-center rounded-l-md"}>
                                            <Lock size={"80%"} className={"text-secondaryColor"}/>
                                        </div>
                                        <Input type={"password"} id={"password"} className={"h-full rounded-l-none text-xl"} {...field}/>
                                    </div>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <Button className={"w-[58.33%] bg-transparent border border-primarycolor text-primarycolor hover:bg-primarycolor hover:text-secondaryColor mt-10"} type={"submit"}>ENTRAR</Button>
            </form>
        </Form>
    );
};

export default LoginForm;