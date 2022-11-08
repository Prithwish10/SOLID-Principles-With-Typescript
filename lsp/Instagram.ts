import { SocialMedia } from "./SocialMedia";
import { PostMediaManager } from "./PostMediaManager";

class Instagram implements SocialMedia, PostMediaManager {
  chatWithFriends(): void {}

  sendPhotosAndVideos(): void {}

  publishPost(post: Object): void {}
}
