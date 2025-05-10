import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useUser } from "@/lib/hooks/useUser";
import { URLS } from "@/lib/consts";

import schoolBag from "@/assets/school_bag_blue.png";

const formSchema = z.object({
  userId: z
    .string()
    .min(4, "Please enter a username at least 4 characters long")
    .max(16, "username cannot be longer than 16 characters"),
});

export const Login = () => {
  const { setUserId, generateRandomUserId, user } = useUser();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userId: "",
    },
  });

  useEffect(() => {
    if (user) {
      navigate(URLS.HOME);
    }
  }, [user, navigate]);

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setUserId(data.userId);
  };

  return (
    <div className="page-container h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-lg">
        <Card className="border-none shadow-lg bg-amber-200">
          <CardHeader>
            <CardTitle className="text-3xl text-blue-500 text-center">
              Welcome to Magic Stories!
            </CardTitle>
            <CardDescription className="text-center text-lg">
              A reading adventure awaits you!
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="w-48 h-48 my-6">
              <img
                src={schoolBag}
                alt="Cute reading mascot"
                className="w-full h-full object-cover rounded-full border-4 border-yellow-500 shadow-lg animate-[bounce_2s_ease-in-out_infinite] hover:scale-105 transition-transform"
              />
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <div className="flex gap-4 mb-6">
                  <FormField
                    control={form.control}
                    name="userId"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Input
                            placeholder="Enter your reader name"
                            className="text-lg bg-white py-6 rounded-full"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="button"
                    onClick={() =>
                      form.setValue("userId", generateRandomUserId())
                    }
                    variant="outline"
                    className="whitespace-nowrap py-6 rounded-full"
                  >
                    Generate Name
                  </Button>
                </div>
                <Button
                  type="submit"
                  className="w-full py-6 text-lg rounded-full bg-blue-300 hover:bg-blue-400 cursor-pointer"
                >
                  Start Reading!
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-muted-foreground">
              Every adventure begins with a single page...
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
