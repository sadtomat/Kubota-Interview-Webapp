export async function getMessage() {
    return await (await fetch(`/api/message`)).json();
}