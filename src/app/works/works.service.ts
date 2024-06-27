import { Injectable } from '@angular/core';
import { IInventsList, IWorkList } from '../models/worklist';

@Injectable({
  providedIn: 'root'
})
export class WorksService {

  protected workList: IWorkList[] = [
    {
      id: 1,
      workName: "CardioData",
      shortDescription: "CardioData is a comprehensive platform designed to improve patient management and monitoring.",
      about: "The CardioData application is a comprehensive platform designed to improve the management and monitoring of patients with cardiovascular diseases. It is intended for health professionals, such as cardiologists and other specialists, providing advanced tools for the efficient management of clinical information and treatments.",
      githubRepository: "https://github.com/anderj14",
      pictures: [
        { id: 1, imageUrl: "/assets/gamesPic/care/care.png", imageName: "Imagen 1" },
        { id: 2, imageUrl: "/assets/gamesPic/care/care.png", imageName: "Imagen 2" },
        { id: 3, imageUrl: "/assets/gamesPic/care/care.png", imageName: "Imagen 3" },
        { id: 4, imageUrl: "/assets/gamesPic/care/care.png", imageName: "Imagen 4" },
      ],
      platform: "Web",
      stack: ".NET/Sqlite/Postgress/React",
    },
    {
      id: 2,
      workName: "DentalClinic",
      shortDescription: "This dental application manages various aspects of a clinic, including costs and payments, data management.",
      about: "This dental application manages various aspects of a clinic, including costs and payments, data management in SQL Server, connection to MySQL, patient monitoring, and disease management, diagnostics, soft tissue testing and imaging, offering a comprehensive and efficient solution.",
      githubRepository: "https://github.com/anderj14/DentalClinicManagement",
      pictures: [
        { id: 1, imageUrl: "/assets/gamesPic/care/care.png", imageName: "Imagen 1" },
        { id: 2, imageUrl: "/assets/gamesPic/care/care.png", imageName: "Imagen 2" },
        { id: 3, imageUrl: "/assets/gamesPic/care/care.png", imageName: "Imagen 3" },
        { id: 4, imageUrl: "/assets/gamesPic/care/care.png", imageName: "Imagen 4" },
      ],
      platform: "Windows",
      stack: "C# - Windows Forms/SQLServer",
    },
    {
      id: 3,
      workName: "Elipson",
      shortDescription: "It is a web platform designed to simplify the car rental process.",
      about: "It is a web platform designed to simplify the car rental process for customers and fleet management for rental companies. Provides an easy-to-use interface for customers to search for available vehicles and make reservations. For administrators, it offers robust tools to manage car inventory, reservations and customer information.",
      githubRepository: "https://github.com/anderj14/rental-car",
      pictures: [
        { id: 5, imageUrl: "/assets/rentcar/rentcar-1.png", imageName: "Imagen 1" },
        { id: 6, imageUrl: "/assets/rentcar/rentcar-2.png", imageName: "Imagen 2" },
        { id: 7, imageUrl: "/assets/rentcar/rentcar-3.png", imageName: "Imagen 3" },
        { id: 8, imageUrl: "/assets/rentcar/rentcar-4.png", imageName: "Imagen 4" },
        { id: 9, imageUrl: "/assets/rentcar/rentcar-5.png", imageName: "Imagen 5" },
        { id: 10, imageUrl: "/assets/rentcar/rentcar-6.png", imageName: "Imagen 6" },
        { id: 11, imageUrl: "/assets/rentcar/rentcar-7.png", imageName: "Imagen 7" },
      ],
      platform: "Web",
      stack: ".NET/Sqlite/Angular",
    },
  ]

  protected inventList: IInventsList[] = [
    {
      id: 1,
      inventName: "N.T.",
      shortDescription: "Allows users to save their notes in a personalized way.",
      about: "An api developed in .net that allows users to save their notes in a personalized way, in addition to being able to modify, update and delete them.",
      platform: ".NET",
      stack: "C#/.NET",
      githubRepository: "https://github.com/anderj14/NoteService",
      pictures: [
        { id: 1, imageUrl: "/assets/invents/mrdoc_1.png", imageName: "Imagen 1" },
        { id: 2, imageUrl: "/assets/invents/mrdoc_1.png", imageName: "Imagen 2" },
      ],
    },
    {
      id: 2,
      inventName: "GameRoom",
      shortDescription: "Web application that offers a detailed catalog of video game consoles.",
      about: "Web application that offers a detailed catalog of video game consoles. Users can access complete technical information for each console. In addition, the application includes a catalog of games compatible with these consoles, also providing detailed technical information about each game.",
      githubRepository: "https://github.com/anderj14/gameroom",
      platform: "Web",
      stack: ".NET/Sqlite/Angular",
      pictures: [
        { id: 3, imageUrl: "/assets/invents/game/game-1.png", imageName: "Imagen 3" },
        { id: 4, imageUrl: "/assets/invents/game/game-2.png", imageName: "Imagen 4" },
        { id: 5, imageUrl: "/assets/invents/game/game-3.png", imageName: "Imagen 5" },
        { id: 6, imageUrl: "/assets/invents/game/game-4.png", imageName: "Imagen 6" },
      ],
    },
    {
      id: 3,
      inventName: "Encyclopedia",
      shortDescription: "A web application that works as an online encyclopedia.",
      about: "A web application that works as an online encyclopedia, using the Wikipedia API. Users can search terms and words to get detailed information directly from Wikipedia",
      platform: "Plataforma C",
      stack: "Angular",
      githubRepository: "https://github.com/anderj14/Encyclopedia",
      pictures: [
        { id: 5, imageUrl: "/assets/invents/wiki/wiki-1.png", imageName: "Imagen 1" },
        { id: 6, imageUrl: "/assets/invents/wiki/wiki-2.png", imageName: "Imagen 2" },
      ],
    },
  ]

  constructor() { }

  getAllWorks(): IWorkList[] {
    return this.workList;
  }

  getWorkById(id: number): IWorkList | undefined {
    return this.workList.find(work => work.id === id);
  }

  getAllInvents(): IInventsList[] {
    return this.inventList;
  }

  getInventById(id: number): IInventsList | undefined {
    return this.inventList.find(invent => invent.id === id);
  }
}
