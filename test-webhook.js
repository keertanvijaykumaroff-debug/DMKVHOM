const fs = require('fs');
const url = "https://formspree.io/f/mreaprrd";

async function test() {
    console.log("Testing URL:", url);
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: 'Test Mobile',
                email: 'test@test.com',
                mobile: '+91 99999 88888',
                message: 'Hello checking mobile field'
            })
        });

        const status = response.status;
        const text = await response.text();

        console.log("Status:", status);
        console.log("Text:", text);

        fs.writeFileSync('test-output.txt', `Status: ${status}\nBody: ${text}`);
    } catch (e) {
        console.error("Error:", e);
        fs.writeFileSync('test-output.txt', `Error: ${e.message}`);
    }
}

test();
