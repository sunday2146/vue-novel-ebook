import axios from 'axios'
import { setLocalForage } from '../utils/localForage'

export function flatList() {
    return axios({
        method: 'get',
        url: `${process.env.VUE_APP_BOOK_URL}/book/flat-list`
    })
}

export function download (book, onSuccess, onError, onProgress) {
    if (onProgress == null) {
        onProgress = onError
        onError = null
    }
    return axios.create({
        baseURL: process.env.VUE_APP_EPUB_URL,
        method: 'get',
        responseType: 'blob',
        timeout: 180 * 1000,
        onDownloadProgress: progressEvent => {
            if (onProgress) onProgress(progressEvent)
        }
    }).get(`${book.categoryText}/${book.fileName}.epub`).then(res => {
        // console.log(res)
        const blob = new Blob([res.data])
        setLocalForage(book.fileName, blob, () => {
            if (onSuccess) onSuccess(book)
        }, err => {
            if (onError) onError(err)
        })
    }).catch(err => {
        if (onError) onError(err)
    })
}

export function shelf () {
    return axios({
        method: 'get',
        url: `${process.env.VUE_APP_BASE_URL}/book/shelf`
    })
}

export function home (openid) {
    return axios({
        method: 'get',
        url: `${process.env.VUE_APP_BASE_URL}/book/home`,
        params: {
            buyerOpenid: openid
        }
    })
}

export function detail (book) {
    return axios({
        method: 'get',
        url: `${process.env.VUE_APP_BOOK_URL}/book/detail`,
        params: {
            fileName: book.fileName
        }
    })
}

export function list () {
    return axios({
        method: 'get',
        url: `${process.env.VUE_APP_BASE_URL}/book/list`
    })
}

export function userInfo (openid) {
    return axios({
        method: 'get',
        url: `${process.env.VUE_APP_BASE_URL}/user/info`,
        params: {
            openid: openid
        }
    })
}
