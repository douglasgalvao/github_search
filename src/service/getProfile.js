
export const getUserData = async (username) => {
    const data = await fetch(`https://api.github.com/users/${username}`);
    return await data.json();
};