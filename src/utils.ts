import { Slug } from "./types";

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

export const getEnterpriseIcon = (slug: Slug) => {
    const ICONS = {
        'servicepad': '/assets/enterprises/servicepad.svg',
        'matic': '/assets/enterprises/matic.svg',
        'brocsoft': '/assets/enterprises/brocsoft.png',
        'wadara': '/assets/enterprises/wadara.png',
        'servisenior': '/assets/enterprises/servisenior.jpeg',
        'reign': '/assets/enterprises/reign.jpeg'
    };
    return ICONS[slug];
};