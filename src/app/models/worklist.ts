export interface IWorkList {
    id: number;
    workName: string;
    shortDescription: string;
    about: string;
    pictures: Image[];
    platform: string;
    stack: string;
    githubRepository?: string;
}

interface Image {
    id: number;
    imageUrl: string;
    imageName?: string;
}

export interface IInventsList {
    id: number;
    inventName: string;
    shortDescription: string;
    about: string;
    platform: string;
    stack: string;
    githubRepository?: string;
    pictures: InventImage[];
}

interface InventImage {
    id: number;
    imageUrl: string;
    imageName?: string;
}