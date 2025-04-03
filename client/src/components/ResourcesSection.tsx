import { FileText, Presentation, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Resource, AgeLevel } from "@/types";

interface ResourcesSectionProps {
  resources: Resource[];
  title?: string;
  subtitle?: string;
}

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "file-pdf":
      return <FileText className="text-primary-600 text-xl h-6 w-6" />;
    case "file-powerpoint":
      return <Presentation className="text-teal-600 text-xl h-6 w-6" />;
    case "video":
      return <Video className="text-amber-600 text-xl h-6 w-6" />;
    default:
      return <FileText className="text-primary-600 text-xl h-6 w-6" />;
  }
};

const getAgeLevelColor = (ageLevel: AgeLevel) => {
  switch (ageLevel) {
    case "Elementary":
      return "bg-amber-500 text-white";
    case "Middle School":
      return "bg-indigo-500 text-white";
    default:
      return "bg-gray-500 text-white";
  }
};

const getButtonColor = (type: string) => {
  switch (type) {
    case "Worksheet":
      return "bg-primary-600 hover:bg-primary-700";
    case "Presentation":
      return "bg-teal-500 hover:bg-teal-600";
    case "Virtual Field Trip":
      return "bg-amber-500 hover:bg-amber-600";
    default:
      return "bg-primary-600 hover:bg-primary-700";
  }
};

const ResourcesSection = ({ 
  resources, 
  title = "Educational Resources", 
  subtitle = "Enhance your learning with our downloadable materials and activities" 
}: ResourcesSectionProps) => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">{title}</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <div key={resource.id} className="bg-gray-50 overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-primary-100 rounded-md p-3">
                    {getIconComponent(resource.thumbnailIcon)}
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {resource.type}
                      </dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">
                          {resource.title}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {resource.ageLevel.map((level, index) => (
                    <span 
                      key={index}
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getAgeLevelColor(level)}`}
                    >
                      {level}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">
                    {resource.description}
                  </p>
                </div>
                <div className="mt-6">
                  <Button
                    className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${getButtonColor(resource.type)} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 w-full justify-center`}
                  >
                    {resource.type === "Virtual Field Trip" ? (
                      <>
                        <Video className="mr-2 h-4 w-4" />
                        Start Virtual Tour
                      </>
                    ) : (
                      <>
                        <FileText className="mr-2 h-4 w-4" />
                        Download {resource.type === "Worksheet" ? "PDF" : "Presentation"}
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesSection;
