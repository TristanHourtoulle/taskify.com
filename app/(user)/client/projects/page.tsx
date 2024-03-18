import { requiredCurrentUser } from "@/auth/current-user";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TitlePage } from "@/features/layout/TitlePage";
import { prisma } from "@/prisma";
import { CreateCard } from "./CreateCard";

export default async function Page() {
  const user = await requiredCurrentUser();

  const projects = await prisma.project.findMany({
    where: {
      userId: user.id,
    },
  });
  return (
    <div className="">
      <TitlePage title="Projects" />

      {/* Main CTA */}
      <div className="flex items-center justify-between pt-[3%]">
        <Input
          type="text"
          placeholder="Search a project"
          className="w-[25%] text-white"
        />

        <CreateCard />
      </div>

      {/* Projects */}
      <div className="mt-[2%]">
        {projects.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => (
              <Card key={project.id} className="project-card">
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                  {/* Card Description */}
                </CardHeader>

                <CardContent>
                  <p className="break-word">We have to display.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <p>You have no project yet</p>
          </div>
        )}
      </div>
    </div>
  );
}
