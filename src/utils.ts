import { NAVIGATION } from "./constants";

export const getAge = () => {
    const today = new Date();
    const birthDate = new Date(1996, 7, 30);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
};

export const splitString = (str: string) => str.split(',');

export const getLinksArray = () => Object.entries(NAVIGATION).filter(([key]) => key !== 'home');