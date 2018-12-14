import { getBookShelf, getLocalStorage, saveBookShelf } from './localStorage'

export function addToShelf(book) {
    let shelfList = getBookShelf()
    shelfList = removeAddFromShelf(shelfList)
    book.type = 1
    shelfList.push(book)
    shelfList = computeId(shelfList)
    shelfList = appendAddToShelf(shelfList)
    saveBookShelf(shelfList)
}

export function removeFromBookShelf(book) {
    return getBookShelf().filter(item => {
        if (item.itemList) {
            item.itemList = removeAddFromShelf(item.itemList)
        }
        return item.fileName !== book.fileName
    })
}

export function flatBookList(bookList) {
    if (bookList) {
        let orgBookList = bookList.filter(item => {
            return item.type !== 3
        })
        const categoryList = bookList.filter(item => {
            return item.type === 2
        })
        categoryList.forEach(item => {
            const index = orgBookList.findIndex(v => {
                return v.id === item.id
            })
            if (item.itemList) {
                item.itemList.forEach(subItem => {
                    orgBookList.splice(index, 0, subItem)
                })
            }
        })
        orgBookList.forEach((item, index) => {
            item.id = index + 1
        })
        orgBookList = orgBookList.filter(item => item.type !== 2)
        return orgBookList
    } else {
        return []
    }
}

export function findBook(fileName) {
    const bookList = getLocalStorage('shelf')
    return flatBookList(bookList).find(item => item.fileName === fileName)
}

export function computeId(list) {
    return list.map((book, index) => {
        if (book.type !== 3) {
            book.id = index + 1
            if (book.itemList) {
                book.itemList = computeId(book.itemList)
            }
        }
        return book
    })
}

export function gotoBookDetail(vue, book) {
    vue.$router.push({
        path: '/store/detail',
        query: {
            fileName: book.fileName,
            category: book.categoryText
        }
    })
}

export function gotoStoreHome(vue) {
    vue.$router.push({
        path: '/store/home'
    })
}

export function appendAddToShelf(list) {
    list.push({
        id: -1,
        type: 3
    })
    return list
}

export function removeAddFromShelf(list) {
    return list.filter(item => item.type !== 3)
}

export const flapCardList = [
    {
        r: 255,
        g: 102,
        _g: 102,
        b: 159,
        imgLeft: 'url(' + require('@/assets/images/gift-left.png') + ')',
        imgRight: 'url(' + require('@/assets/images/gift-right.png') + ')',
        backgroundSize: '50% 50%',
        zIndex: 100,
        rotateDegree: 0
    },
    {
        r: 74,
        g: 171,
        _g: 171,
        b: 255,
        imgLeft: 'url(' + require('@/assets/images/compass-left.png') + ')',
        imgRight: 'url(' + require('@/assets/images/compass-right.png') + ')',
        backgroundSize: '50% 50%',
        zIndex: 99,
        rotateDegree: 0
    },
    {
        r: 255,
        g: 198,
        _g: 198,
        b: 102,
        imgLeft: 'url(' + require('@/assets/images/star-left.png') + ')',
        imgRight: 'url(' + require('@/assets/images/star-right.png') + ')',
        backgroundSize: '50% 50%',
        zIndex: 98,
        rotateDegree: 0
    },
    {
        r: 255,
        g: 102,
        _g: 102,
        b: 159,
        imgLeft: 'url(' + require('@/assets/images/heart-left.png') + ')',
        imgRight: 'url(' + require('@/assets/images/heart-right.png') + ')',
        backgroundSize: '50% 50%',
        zIndex: 97,
        rotateDegree: 0
    },
    {
        r: 59,
        g: 201,
        _g: 201,
        b: 22,
        imgLeft: 'url(' + require('@/assets/images/crown-left.png') + ')',
        imgRight: 'url(' + require('@/assets/images/crown-right.png') + ')',
        backgroundSize: '50% 50%',
        zIndex: 96,
        rotateDegree: 0
    }
]

export const categoryList = {
    'Fantasy': 1,
    'Military': 2,
    'History': 3,
    'Bizarre': 4,
    'Wuxia': 5,
    'Xianxia': 6,
    'Campus': 7,
    'Mystery': 8
}

export function getCategoryName(id) {
    switch (id) {
        case 1:
            return 'Fantasy'
        case 2:
            return 'Military'
        case 3:
            return 'History'
        case 4:
            return 'Bizarre'
        case 5:
            return 'Wuxia'
        case 6:
            return 'Xianxia'
        case 7:
            return 'Campus'
        case 8:
            return 'Mystery'
    }
}

export function categoryText(category, vue) {
    switch (category) {
        case 1:
            return vue.$t('category.fantasfy')
        case 2:
            return vue.$t('category.military')
        case 3:
            return vue.$t('category.history')
        case 4:
            return vue.$t('category.bizarre')
        case 5:
            return vue.$t('category.wuXia')
        case 6:
            return vue.$t('category.xianXia')
        case 7:
            return vue.$t('category.campus')
        case 8:
            return vue.$t('category.mystery')
    }
}
