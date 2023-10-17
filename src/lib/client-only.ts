export async function doClientOnlyShenanigans(): Promise<string> {
    localStorage.setItem('client-only-shenanigans', 'Hello world!');
    return localStorage.getItem('client-only-shenanigans')!;
}