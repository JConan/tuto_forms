export interface Article {
    id: number,
    name: string,
    price: number
}

const articles: Article[] = [
    {
        id: 1,
        name: "pain",
        price: 1.5
    },
    {
        id: 2,
        name: "éclair au chocolat",
        price: 2.5
    },
    {
        id: 3,
        name: "religieuse au café",
        price: 2.3
    },
    {
        id: 4,
        name: "chouquette",
        price: 0.5
    }
]

export function getArticles() {
    // récupère les données depuis une API ou une connection à une base de données

    console.log("data: login & mdp - sensible information !!!!")

    return articles
}