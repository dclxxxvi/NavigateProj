import {$host} from "./index";

export const createVideo = async (video) => {
    const {data} = await $host.post('api/video', video)
    return data
}

export const fetchVideos = async () => {
    const {data} = await $host.get('api/video')
    return data
}







