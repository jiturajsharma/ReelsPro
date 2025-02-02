import mongoose, {Schema, model, models, mongo} from "mongoose";

export const VIDEO_DIMENTIONS = {
    width: 1080,
    height: 1920,
} as const

export interface IVdeo {
    _id?: mongoose.Types.ObjectId;
    title: string;
    description: string;
    videoUrl: string;
    thubmnailUrl: string;
    controls?: boolean
    transformation?: {
        height: number
        width: number;
        quality?: number
    }
}

const videoSchema = new Schema<IVdeo>({
    title: {type: String, required: true},
    description: {type: String, required: true},
    videoUrl: {type: String, required: true},
    thubmnailUrl: {type: String, required: true},
    controls: {type: Boolean, default: true},
    transformation: {
        height: {type: Number, default: VIDEO_DIMENTIONS.height},
        width: {type: Number, default: VIDEO_DIMENTIONS.width},
        quality: {type: Number, min: 1, max: 100}
    }
}, { timestamps: true})

const Video = models?.Video || model<IVdeo>("Video", videoSchema);
export default Video;