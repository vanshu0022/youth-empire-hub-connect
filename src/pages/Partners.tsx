
import {
  Card,
  CardContent
} from "@/components/ui/card";
import {
  Button
} from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Partners = () => {
  // Mock partner data
  const partners = [
    {
      id: 1,
      name: "Global Education Initiative",
      logo: "/placeholder.svg",
      description: "International education foundation supporting youth development programs across 20 countries.",
      website: "#"
    },
    {
      id: 2,
      name: "Tech Innovators Alliance",
      logo: "/placeholder.svg",
      description: "A consortium of technology companies providing mentorship and internship opportunities.",
      website: "#"
    },
    {
      id: 3,
      name: "Future Leaders Foundation",
      logo: "/placeholder.svg",
      description: "Dedicated to identifying and nurturing leadership potential in underserved communities.",
      website: "#"
    },
    {
      id: 4,
      name: "Creative Minds Institute",
      logo: "/placeholder.svg",
      description: "Supporting youth in creative industries through workshops, resources and mentorship.",
      website: "#"
    },
    {
      id: 5,
      name: "Entrepreneurship Network",
      logo: "/placeholder.svg",
      description: "Global network connecting young entrepreneurs with resources, mentors and funding opportunities.",
      website: "#"
    },
    {
      id: 6,
      name: "International Youth Council",
      logo: "/placeholder.svg",
      description: "Youth-led organization advocating for young people's participation in global decision-making.",
      website: "#"
    }
  ];

  const partnerCategories = [
    {
      title: "Academic Partners",
      description: "Leading educational institutions that provide mentorship and learning opportunities."
    },
    {
      title: "Corporate Partners",
      description: "Companies that offer internships, funding, and career development support."
    },
    {
      title: "NGO Partners",
      description: "Non-profit organizations that collaborate on youth development initiatives."
    },
    {
      title: "Become a Partner",
      description: "Join our global network of organizations empowering youth.",
      isCallToAction: true
    }
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("name is submitted");
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-youth-dark-bg text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-6">Our Global Partners</h1>
                    <p className="text-xl max-w-3xl mx-auto text-gray-300">
                        Youth Empire collaborates with leading organizations worldwide to create impactful opportunities for young leaders.
                    </p>
                </div>
            </div>

            {/* Partner Categories */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Partnership Network</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {partnerCategories.map((category, index) => (
                            <div key={index} className={`p-8 rounded-lg text-center ${category.isCallToAction ? 'bg-youth-purple text-white' : 'bg-gray-50'}`}>
                                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                                <p className={`mb-6 ${category.isCallToAction ? 'text-gray-100' : 'text-gray-600'}`}>
                                    {category.description}
                                </p>
                                {category.isCallToAction && (
                                    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                                        <DialogTrigger asChild>
                                            <Button className="bg-white text-youth-purple hover:bg-gray-100">
                                                Become a Partner
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[500px]">
                                            <DialogHeader>
                                                <DialogTitle className="font-bold text-xl">Become a Partner</DialogTitle>
                                                <div className="font-medium text-gray-700 mt-2">
                                                    Join hands with Youth Empire in our mission to empower the next generation of leaders. Fill out the form below, and let's build a brighter future together!</div>
                                               
                                            </DialogHeader>
                                            <div className="grid gap-4 py-4">
                                                <form onSubmit={handleSubmit}>
                                                    <div className="grid grid-cols-4 items-center gap-4">
                                                        <Label htmlFor="company" className="text-right">
                                                            Company/Organization Name
                                                        </Label>
                                                        <Input
                                                            value={company}
                                                            onChange={(e) => setCompany(e.target.value)}
                                                            id="company"
                                                            className="col-span-3"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-4 items-center gap-4">
                                                        <Label htmlFor="email" className="text-right">
                                                            Organization Email
                                                        </Label>
                                                        <Input value={email} onChange={(e) => setEmail(e.target.value)} id="email" className="col-span-3" type="email" required />
                                                    </div>
                                                    <div className="grid grid-cols-4 items-center gap-4">
                                                        <Label htmlFor="name" className="text-right">
                                                            Contact Person Name
                                                        </Label>
                                                        <Input
                                                            value={name}
                                                            onChange={(e) => setName(e.target.value)}
                                                            id="name"
                                                            className="col-span-3" required />
                                                    </div>
                                                    <div className="grid grid-cols-4 items-center gap-4">
                                                        <Label htmlFor="position" className="text-right">
                                                            Contact Person Position
                                                        </Label>
                                                        <Input
                                                            value={position}
                                                            onChange={(e) => setPosition(e.target.value)}
                                                            id="position"
                                                            className="col-span-3" required />
                                                    </div>
                                                    <DialogFooter>
                                                        <Button type="submit">Submit</Button>
                                                    </DialogFooter>
                                                </form>
                                            </div>

                                        </DialogContent>
                                    </Dialog>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Featured Partners */}
            <div className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-4">Featured Partners</h2>
                    <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                        These organizations work closely with Youth Empire to create lasting impact worldwide.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {partners.map(partner => (
                            <Card key={partner.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="h-40 bg-gray-200 flex items-center justify-center">
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="max-h-24 max-w-[80%]"
                                    />
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                                    <p className="text-gray-600 mb-4">{partner.description}</p>
                                    <a
                                        href={partner.website}
                                        className="text-youth-purple font-medium flex items-center hover:underline"
                                    >
                                        Visit Website <ArrowRight size={16} className="ml-1" />
                                    </a>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* Collaboration Section */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">Partner With Us</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Join our global network of organizations dedicated to empowering youth and creating positive change.
                            We welcome partnerships from educational institutions, corporations, non-profits, and government agencies.
                        </p>
                        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                            <DialogTrigger asChild>
                                <Button className="bg-youth-purple hover:bg-youth-dark-purple text-white px-8 py-6">
                                    Become a Partner
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[500px]">
                            </DialogContent>
                        </Dialog>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;
