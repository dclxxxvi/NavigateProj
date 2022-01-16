import {makeAutoObservable} from "mobx";

export default class VideoStore {
    constructor() {
        this._videos = []
        makeAutoObservable(this)
    }

    setVideos(videos) {
        this._videos = videos
    }

    get videos() {
        return this._videos
    }
}