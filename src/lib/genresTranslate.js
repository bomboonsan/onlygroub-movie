const generesData = [
    {
        "en": "Action",
        "th": "แอ็คชั่น"
    },
    {
        "en": "Adventure",
        "th": "ผจญภัย"
    },
    {
        "en": "Animation",
        "th": "แอนิเมชัน"
    },
    {
        "en": "Biography",
        "th": "ชีวประวัติ"
    },
    {
        "en": "Comedy",
        "th": "ตลก"
    },
    {
        "en": "Crime",
        "th": "อาชญากรรม"
    },
    {
        "en": "Documentary",
        "th": "สารคดี"
    },
    {
        "en": "Drama",
        "th": "ดราม่า"
    },
    {
        "en": "Family",
        "th": "ครอบครัว"
    },
    {
        "en": "Fantasy",
        "th": "แฟนตาซี"
    },
    {
        "en": "Film-Noir",
        "th": "ฟิล์มนัวร์"
    },
    {
        "en": "Game-Show",
        "th": "เกมโชว์"
    },
    {
        "en": "History",
        "th": "ประวัติศาสตร์"
    },
    {
        "en": "Horror",
        "th": "สยองขวัญ"
    },
    {
        "en": "Music",
        "th": "ดนตรี"
    },
    {
        "en": "Musical",
        "th": "มิวสิคัล"
    },
    {
        "en": "Mystery",
        "th": "ลึกลับ"
    },
    {
        "en": "News",
        "th": "ข่าว"
    },
    {
        "en": "Reality-TV",
        "th": "เรียลลิตี้ทีวี"
    },
    {
        "en": "Romance",
        "th": "โรแมนติก"
    },
    {
        "en": "Sci-Fi",
        "th": "ไซไฟ"
    },
    {
        "en": "Short",
        "th": "ภาพยนตร์สั้น"
    },
    {
        "en": "Sport",
        "th": "กีฬา"
    },
    {
        "en": "Talk-Show",
        "th": "ทอล์กโชว์"
    },
    {
        "en": "Thriller",
        "th": "ระทึกขวัญ"
    },
    {
        "en": "War",
        "th": "สงคราม"
    },
    {
        "en": "Western",
        "th": "คาวบอยตะวันตก"
    }
];

export function genresTranslate(genresArray) {
    const translatedGenres = genresArray.map((genre) => {
        const genreData = generesData.find((data) => data.en === genre);
        return genreData ? genreData.th : genre;
    });
    return translatedGenres;    
}