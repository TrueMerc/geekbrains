export const CHANGE_PROFILE = "PROFILE::CHANGE_PROFILE";

export const changeProfile = (newProfile) => {
    return {
        type: CHANGE_PROFILE,
        value: newProfile
    }
}