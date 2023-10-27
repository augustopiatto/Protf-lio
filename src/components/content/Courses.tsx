import { courses } from "../../infos";
import Card from "../cards/Card";
import { Course } from "../../helpers/types/types.tsx";
import Tag from "./Tag.tsx";

function Courses() {
  return (
    <div className="flex flex-col gap-12">
      {courses.length &&
        courses.map((course: Course) => (
          <Card key={course.name}>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-6">
                <img src={course.institutionSVG} alt={course.institutionSVG} />
                <h1 className="font-bebas text-4xl capitalize">
                  {course.name} - {course.institution}
                </h1>
              </div>
              <div className="flex gap-5">
                {course.technologies.length &&
                  course.technologies.map((tech) => (
                    <Tag text={tech} key={tech} />
                  ))}
              </div>
            </div>
          </Card>
        ))}
    </div>
  );
}

export default Courses;
