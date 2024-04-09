export const extractPokemonId = (url: string): number | null => {
    const match = url.match(/pokemon\/(\d+)\/$/);
    return match ? parseInt(match[1], 10) : null;
}
