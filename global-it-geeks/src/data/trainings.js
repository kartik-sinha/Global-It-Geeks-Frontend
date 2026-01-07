import javaimg from "../assets/Java (1).png"
import pythonimg from "../assets/python-logo-master-v3-TM.png"
import agent from "../assets/agentic ai.png"
import automation from "../assets/automation.png"
import aws from "../assets/152a15a6bf3756c63c9f5b2effa70bc6.png"
import hibernate from "../assets/hibernate.png"
import spring from "../assets/spring-boot-icon.png"
import wsi from "../assets/web service.png"
import devops from "../assets/pngwing.com.png"


export const trainings = [
    {
        title: "Java - OCA",
        stack: "Declarations and Access Control, Object Orientation, Assignments, Operators, Working with Strings, Arrays, and Arraylists, Flow Control and Exceptions",
        imageURL: javaimg
    },
    {
        title: "JAVA - OCP",
        stack: "Assertions, String Processing, Data Formatting, Resource, Design Patterns, Generics and Collections, Inner Classes, Threads, Concurrency and JDBC",
        imageURL: javaimg
    },
    {
        title: "Python",
        stack: "Python basics, Python Objects, Dictionaries, Sets, Errors and Exceptions, Functions, Modules, Decorators, Logger, File Handling and more",
        imageURL: pythonimg
    },

    {
        title: "Automation Testing",
        stack: "Selenium, Cucumber, TestNG, JUnit, Postman, SOAP UI, Rest-Assured",
        imageURL: automation
    },
    {
        title: "Hibernate",
        stack: "Hibernate ORM (or simply Hibernate) is an object-relational mapping tool for the Java programming language. It provides a framework for mapping an object-oriented domain model to a relational database",
        imageURL: hibernate
    },
    {
        title: "Web Services",
        stack: "Web services are software systems that enable different applications to communicate and exchange data over a network (like the internet) using standardized protocols and open standards (like HTTP, XML, SOAP, WSDL)",
        imageURL: wsi
    },{
        title: "Backend with Spring and Spring Boot",
        stack: "Spring Boot is an open source Java-based framework used to create a micro Service. It is developed by Pivotal Team and is used to build stand-alone and production ready spring applications",
        imageURL: spring
    },
    {
        title: "DevOps",
        stack: "DevOps (Development + Operations) is a culture, set of practices, and tools that automate and integrate the software development and IT operations processes, breaking down silos to deliver software faster, more reliably, and with higher quality through collaboration, automation, and continuous feedback loops. Contains tools like Git, GitHub, Jenkins, Docker etc.",
        imageURL: devops
    },
    {
        title: "Amazon Web Services (AWS)",
        stack: "Amazon Web Services (AWS) is Amazon's comprehensive, on-demand cloud computing platform offering over 200 services like compute power, storage, and databases, allowing individuals, companies, and governments to access scalable IT resources over the internet with a pay-as-you-go model, eliminating the need for physical data centers. It's the world's leading cloud provider, enabling businesses to build, deploy, and scale applications quickly and cost-effectively",
        imageURL: aws
    },
    {
        title: "Agentic AI",
        stack: "Agentic AI refers to autonomous artificial intelligence systems that can independently set goals, plan, reason, and take actions to achieve objectives with minimal human intervention, moving beyond simple command-response interactions to proactively solve complex, multi-step problems in dynamic environments",
        imageURL: agent
    }
];
