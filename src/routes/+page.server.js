export async function load({ fetch }) {
    const response = await fetch('http://localhost:1337/menus');
    const data = await response.json();

    console.log("server: ", data);

    return {
        menu: data
        
    };
}